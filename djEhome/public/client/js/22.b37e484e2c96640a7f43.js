webpackJsonp([22],{"1mZU":function(t,e){},Tlqu:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("9v1A"),i=a.n(s),n={name:"sdp",data:function(){return{formData:[]}},methods:{getNews:function(){var t=this;this.$axios.get("getNews",{type:5}).then(function(e){for(var a=0;a<e.data.length;a++)e.data[a].createTime=i()(e.data[a].createTime);t.formData=e.data})}},created:function(){this.getNews()}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._l(t.formData,function(e){return a("div",{key:e.index,staticClass:"box"},[a("router-link",{attrs:{to:"/sdp/detail?_id="+e._id}},[a("div",{staticClass:"pic"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.pic,expression:"item.pic"}]})]),t._v(" "),a("div",{staticClass:"news"},[a("div",{staticClass:"title"},[t._v(t._s(e.title))]),t._v(" "),a("div",{staticClass:"foo",staticStyle:{"font-size":"12px",color:"#666","font-family":"normal"}},[a("span",{staticClass:"time"},[t._v(t._s(e.createTime))]),t._v(" "),a("span",{staticClass:"star"},[t._v(t._s(e.count))])])])])],1)}),t._v(" "),a("div",{staticClass:"box-footer"},[t._v("\n    没有数据了\n  ")])],2)},staticRenderFns:[]};var c=a("VU/8")(n,r,!1,function(t){a("1mZU")},"data-v-6d0e0e31",null);e.default=c.exports}});
//# sourceMappingURL=22.b37e484e2c96640a7f43.js.map