webpackJsonp([16],{"/Cx6":function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});e("Au9i");var o={data:function(){return{}},methods:{goMzpy:function(){this.$router.push("/appraisals")},goGrzj:function(){var t=this;this.$axios.get("findGrzj").then(function(s){200==s.code?t.$router.push("/one"):("false"==s.data.check&&t.$router.push("/grzjs"),"true"==s.data.check&&Toast({messages:s.msg,position:"bottom",duration:5e3}))})}}},i={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"box"},[s("div",{staticClass:"item"},[s("router-link",{attrs:{to:"/one"}},[s("mt-button",{on:{click:this.goGrzj}},[this._v("个人总结")])],1),this._v(" "),s("router-link",{attrs:{to:"/appraisals"}},[s("mt-button",{on:{click:this.goMzpy}},[this._v("民主评议")])],1)],1)])},staticRenderFns:[]};var n=e("VU/8")(o,i,!1,function(t){e("00Qp")},"data-v-7cce2d13",null);s.default=n.exports},"00Qp":function(t,s){}});
//# sourceMappingURL=16.279c01ddfd7961646804.js.map