webpackJsonp([15],{Hdba:function(t,e){},dfM2:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={data:function(){return{newslist:[]}},methods:{getNews:function(){var t=this;this.$axios.get("getNews",{type:8}).then(function(e){t.newslist=e.data})}},created:function(){this.getNews()},components:{Tab:n("4H9l").default}},s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[t._l(t.newslist,function(e){return n("div",{staticClass:"notice"},[n("router-link",{attrs:{to:"/tongzhi?_id="+e._id}},[n("div",{staticClass:"left-img"},[n("i",{staticClass:"iconfont icon-iconxx2"})]),t._v(" "),n("div",{staticClass:"notice-title"},[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.createTime))])])],1)}),t._v(" "),n("span",[t._v("没有数据了")]),t._v(" "),n("router-view"),t._v(" "),n("Tab")],2)},staticRenderFns:[]};var a=n("VU/8")(i,s,!1,function(t){n("Hdba")},"data-v-85a9f21a",null);e.default=a.exports}});
//# sourceMappingURL=15.dd8209003d407da1a233.js.map