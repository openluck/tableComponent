webpackJsonp([1],{"2LN5":function(t,e){},NHnr:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=r("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var i=r("VU/8")({name:"App"},n,!1,function(t){r("ruil")},null,null).exports,o=r("/ocq"),a={name:"HelloWorld",data:function(){return{searchText:"",orderType:0,books:[{name:"Vue.js",price:50},{name:"Javascript",price:30},{name:"Css",price:40},{name:"Html",price:60}]}},computed:{filterBooks:function(){var t=this.searchText,e=this.books,r=this.orderType,s=new Array;return s=e.filter(function(e){return console.log(e.name),-1!==e.name.indexOf(t)}),r&&s.sort(function(t,e){return 1===r?e.price-t.price:t.price-e.price}),s}},methods:{setOrderType:function(t){this.orderType=t}}},u={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.searchText,expression:"searchText"}],staticClass:"searchText",attrs:{type:"text"},domProps:{value:t.searchText},on:{input:function(e){e.target.composing||(t.searchText=e.target.value)}}}),t._v(" "),r("ul",t._l(t.filterBooks,function(e,s){return r("li",{key:s},[t._v("\n        序号 : "+t._s(s)+", 书名 ; "+t._s(e.name)+", 价格 : "+t._s(e.price)+"  \n    ")])}),0),t._v(" "),r("div",[r("button",{on:{click:function(e){return t.setOrderType(2)}}},[t._v("价格升序")]),t._v(" "),r("button",{on:{click:function(e){return t.setOrderType(1)}}},[t._v("\n      价格降序\n    ")]),t._v(" "),r("button",{on:{click:function(e){return t.setOrderType(0)}}},[t._v("原始顺序")])])])},staticRenderFns:[]};var c=r("VU/8")(a,u,!1,function(t){r("VC75")},null,null).exports,l={name:"Table",data:function(){return{items:[{group:"foo1",user:"User 1",age:44},{group:"bar1",user:"User 2",age:21},{group:"foo2",user:"User 3",age:33},{group:"foo2",user:"User 4",age:37},{group:"bar3",user:"User 5",age:55},{group:"foo3",user:"User 6",age:18},{group:"bar4",user:"User 7",age:25},{group:"bar4",user:"User 8",age:61},{group:"bar5",user:"User 9",age:44},{group:"bar5",user:"User 10",age:21}],isSort:!0,list:[],isNone:!1,searchText:"",isShow:!0,orderType:0}},mounted:function(){this.initData()},computed:{},methods:{initData:function(){return this.list=this.items.slice(0,5),this.list},sort:function(t){if(0===t)return alert("1"),this.list;this.list.sort(function(e,r){return 1===t?r.age-e.age:e.age-r.age})},prefilter:function(){var t=this;return this.list=this.list.filter(function(e){return-1!==e.group.indexOf(t.searchText)}),this.searchText="",0===this.list.length&&(this.isShow=!1),this.list},nextButton:function(){return this.list=this.items.slice(5,10),this.isNone=!0,this.list},preButton:function(){return this.list=this.items.slice(0,5),this.isNone=!1,this.list}}},p={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[t.isShow?r("table",{staticClass:"ui-table"},[t._m(0),t._v(" "),r("tbody",t._l(t.list,function(e,s){return r("tr",{key:s},[r("td",[t._v(t._s(e.group))]),t._v(" "),r("td",[t._v(t._s(e.user))]),t._v(" "),r("td",[t._v(t._s(e.age))])])}),0)]):r("div",{staticClass:"no-message"},[t._v("亲，没有查询到相关信息")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.searchText,expression:"searchText"}],staticClass:"searchText",attrs:{type:"text",placeholder:"(此过滤仅能通过group名来过滤)"},domProps:{value:t.searchText},on:{change:t.prefilter,input:function(e){e.target.composing||(t.searchText=e.target.value)}}}),t._v(" "),r("span",{staticClass:"sort",on:{click:function(e){return t.sort(2)}}},[t._v("年龄升序排序")]),t._v(" "),r("span",{staticClass:"sort",on:{click:function(e){return t.sort(1)}}},[t._v("年龄降序排序")]),t._v(" "),r("span",{staticClass:"sort",on:{click:function(e){return t.sort(0)}}},[t._v("年龄原始排序")]),t._v(" "),r("div",{staticClass:"page-btn"},[r("button",{staticClass:"button",class:{isNone:!t.isNone}},[r("span",{on:{click:t.preButton}},[t._v("上一页")])]),t._v(" "),r("button",{staticClass:"button",class:{isNone:t.isNone}},[r("span",{on:{click:t.nextButton}},[t._v("下一页")])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[e("span",[this._v("group")])]),this._v(" "),e("th",[e("span",[this._v("user")])]),this._v(" "),e("th",[e("span",[this._v("age")])])])])}]};var h=r("VU/8")(l,p,!1,function(t){r("2LN5")},"data-v-d938f0b0",null).exports;s.a.use(o.a);var v=new o.a({routes:[{path:"/",name:"Table",component:h},{path:"/home",name:"HelloWorld",component:c}]});s.a.config.productionTip=!1,new s.a({el:"#app",router:v,components:{App:i},template:"<App/>"})},VC75:function(t,e){},ruil:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.878ef1439a97b1c5129e.js.map