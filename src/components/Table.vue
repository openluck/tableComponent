<template>
  <div class="container">
    <table class="ui-table" v-if="isShow">
      <thead>
        <tr>
          <th>
            <span>group</span>
          </th>
          <th><span>user</span></th>
          <th>
            <span>age</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in list" :key="index">
          <td>{{ item.group }}</td>
          <td>{{ item.user }}</td>
          <td>{{ item.age }}</td>
        </tr>
      </tbody>
    </table>
    <div v-else class="no-message">亲，没有查询到相关信息</div>
    <input
      class="searchText"
      @change="prefilter"
      type="text"
      v-model="searchText"
      placeholder="(此过滤仅能通过group名来过滤)"
    />
    <span class="sort" @click="sort(2)">年龄升序排序</span>
    <span class="sort" @click="sort(1)">年龄降序排序</span>
    <span class="sort" @click="sort(0)">年龄原始排序</span>
    <!-- <span class="sort" @click="prefilter">过滤</span> -->
    <div class="page-btn">
      <button class="button" :class="{ isNone: !isNone }">
        <span @click="preButton">上一页</span>
      </button>
      <button class="button" :class="{ isNone: isNone }">
        <span @click="nextButton">下一页</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Table",

  data() {
    return {
      items: [
        { group: "foo1", user: "User 1", age: 44 },
        { group: "bar1", user: "User 2", age: 21 },
        { group: "foo2", user: "User 3", age: 33 },
        { group: "foo2", user: "User 4", age: 37 },
        { group: "bar3", user: "User 5", age: 55 },
        { group: "foo3", user: "User 6", age: 18 },
        { group: "bar4", user: "User 7", age: 25 },
        { group: "bar4", user: "User 8", age: 61 },
        { group: "bar5", user: "User 9", age: 44 },
        { group: "bar5", user: "User 10", age: 21 },
      ],
      isSort: true,
      list: [],
      isNone: false,
      searchText: "",
      isShow: true,
      orderType: 0, // 0:默认顺序, 1:价格降序, 2:价格升序
    };
  },
  mounted() {
    this.initData();
  },
  computed: {},

  methods: {
    initData() {
      this.list = this.items.slice(0, 5);
      return this.list;
    },
    // 排序
    sort(orderType) {
      // if (this.isSort) {
      //   this.items.sort(function (a, b) {
      //     return a.age - b.age;
      //   });
      //   this.isSort = false;
      // } else {
      //   alert("还原");
      //   const newItems = [...this.items];
      //   this.items = newItems;
      //   this.isSort = true;
      // }
      // this.list.sort(function (a, b) {
      //   return a.age - b.age;
      // });
      // console.log(typeof orderType);

      if (orderType === 0) {
        alert("1");
        return this.list;
      } else {
        this.list.sort(function (age1, age2) {
          if (orderType === 1) {
            // 降序
            return age2.age - age1.age;
          } else {
            // 升序
            return age1.age - age2.age;
          }
        });
      }
    },
    // 过滤
    prefilter() {
      this.list = this.list.filter((item) => {
        // console.log(item);
        return item.group.indexOf(this.searchText) !== -1;
      });
      this.searchText = "";
      if (this.list.length === 0) {
        this.isShow = false;
      }
      return this.list;
    },
    // 下一页
    nextButton() {
      this.list = this.items.slice(5, 10);
      this.isNone = true;
      return this.list;
    },
    // 上一页
    preButton() {
      this.list = this.items.slice(0, 5);
      this.isNone = false;
      return this.list;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.container {
  width: 80%;
  margin: 5% auto 0;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%),
    0 0 0 1px rgb(10 10 10 / 2%);
  color: #4a4a4a;
  display: block;
  padding: 10px;
  position: relative;

  .ui-table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;

    thead {
      border-bottom: 2px solid #ddd;

      tr {
        height: 56px;

        th {
          vertical-align: middle;
          padding: 8px;
          line-height: 1.5;
          color: #363636;
        }
      }
    }

    tbody {
      font-weight: 400;
      line-height: 1.5;
      tr {
        border-bottom: 1px solid #ddd;
        td {
          text-align: center;
          padding: 4px;
        }

        &:nth-child(2n) {
          background-color: #fafafa;
        }
      }
    }
  }

  .sort {
    position: absolute;
    right: 0;
    top: 0;
    &:nth-of-type(1) {
      right: 10%;
    }
    &:nth-of-type(2) {
      right: 30%;
    }
  }
  .page-btn {
    width: 40%;
    display: flex;
    justify-content: space-between;
    margin: 10px auto 0;

    .button {
      background-color: #fff;
      border-color: #dbdbdb;
      border-width: 1px;
      color: #363636;
      cursor: pointer;
      justify-content: center;
      padding-bottom: calc(0.5em - 1px);
      padding-left: 1em;
      padding-right: 1em;
      padding-top: calc(0.5em - 1px);
      text-align: center;
      white-space: nowrap;
      border: 1px solid #363636;

      &.isNone {
        color: #ddd;
        border: 1px solid #ddd;
        // cursor: none;
      }
    }
  }
  .searchText {
    width: 200px;
    border: 1px solid #000;
    font-size: 10px;
  }
  .no-message {
    text-align: center;
  }
}
</style>
