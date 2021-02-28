<template>
   
  <div>
     <input type="text" class="searchText" v-model="searchText" />     
    <ul>
       
      <li v-for="(book, index) in filterBooks" :key="index">
          序号 : {{ index }}, 书名 ; {{ book.name }}, 价格 : {{ book.price }}  
      </li>
       
    </ul>
        
    <div>
       <button @click="setOrderType(2)">价格升序</button>  <button
        @click="setOrderType(1)"
      >
        价格降序
      </button>
       <button @click="setOrderType(0)">原始顺序</button>  
    </div>
     
  </div>
</template>
  
<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      searchText: "",
      orderType: 0, // 0:默认顺序, 1:价格降序, 2:价格升序
      books: [
        { name: "Vue.js", price: 50 },
        { name: "Javascript", price: 30 },
        { name: "Css", price: 40 },
        { name: "Html", price: 60 },
      ],
    };
  },
  computed: {
    filterBooks() {
      const { searchText, books, orderType } = this;
      let filterArr = new Array(); // 过滤数组 过滤name键
      filterArr = books.filter((p) => {
        console.log(p.name);
        return p.name.indexOf(searchText) !== -1;
      }); // 排序
      if (orderType) {
        filterArr.sort(function (p1, p2) {
          if (orderType === 1) {
            // 降序
            return p2.price - p1.price;
          } else {
            // 升序
            return p1.price - p2.price;
          }
        });
      }
      return filterArr;
    },
  },
  methods: {
    setOrderType(orderType) {
      this.orderType = orderType;
    },
  },
};
</script>
  
<style>
.searchText {
  border: 1px solid #000;
}
</style>