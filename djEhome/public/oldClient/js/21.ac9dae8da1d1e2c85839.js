webpackJsonp([21],{"+XCV":function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=e("Au9i"),l=e("mtWM"),o=e.n(l),i={data:function(){return{formData:{userName:"",headPic:"",homePlace:"",minZu:"",workPlace:"",wx:"",qq:"",edu:"",zhicheng:"",gongZi:"",ruDangTime:"",lastTime:"",shenFen:"",dzb:""},token:""}},methods:{upload:function(a){var t=this,e=a.target.files[0],s=new FormData;s.append("file",e),s.append("token",this.token),o.a.post("https://upload-z1.qiniup.com",s,{headers:{"Content-Type":"multipart/form-daya"}}).then(function(a){t.formData.headPic="http://image.yaojunrong.com/"+a.data.key})},userGet:function(){var a=this;this.$axios.get("getUser").then(function(t){a.formData=t.data})},baocun:function(){var a=this;this.$axios.post("users",this.formData).then(function(t){500!=t.code&&400!=t.code||Object(s.Toast)({message:t.msg,position:"bottom",duration:5e3}),200==t.code&&(Object(s.Toast)({message:t.msg,position:"bottom",duration:5e3}),setTimeout(function(){a.$router.push("/gerenxinxi")},1e3))})},getToken:function(){var a=this;this.$axios.qiniuGet().then(function(t){a.token=t.data})}},created:function(){this.userGet(),this.getToken()}},n={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"box"},[e("div",{staticClass:"abc",on:{click:a.baocun}},[e("button",[a._v("保存")])]),a._v(" "),e("div",{staticClass:"list"},[e("div",{staticClass:"list_item"},[e("span",[a._v("头像")]),a._v(" "),e("label",[e("input",{staticClass:"file",attrs:{type:"file",name:"file",id:"file"},on:{change:a.upload}}),a._v(" "),e("img",{attrs:{src:a.formData.headPic}})])]),a._v(" "),e("div",{staticClass:"a"},[e("mt-field",{attrs:{label:"姓名",placeholder:""},model:{value:a.formData.userName,callback:function(t){a.$set(a.formData,"userName",t)},expression:"formData.userName"}})],1),a._v(" "),e("div",{staticClass:"a"},[e("mt-field",{attrs:{label:"身份证",placeholder:""},model:{value:a.formData.shenFen,callback:function(t){a.$set(a.formData,"shenFen",t)},expression:"formData.shenFen"}})],1),a._v(" "),e("div",{staticClass:"a"},[e("mt-field",{attrs:{label:"家庭住址",placeholder:""},model:{value:a.formData.homePlace,callback:function(t){a.$set(a.formData,"homePlace",t)},expression:"formData.homePlace"}})],1),a._v(" "),e("div",{staticClass:"a"},[e("mt-field",{attrs:{label:"工作地址",placeholder:""},model:{value:a.formData.workPlace,callback:function(t){a.$set(a.formData,"workPlace",t)},expression:"formData.workPlace"}})],1),a._v(" "),e("div",{staticClass:"a"},[e("mt-field",{attrs:{label:"民族",placeholder:""},model:{value:a.formData.minZu,callback:function(t){a.$set(a.formData,"minZu",t)},expression:"formData.minZu"}})],1),a._v(" "),e("div",{staticClass:"a"},[e("mt-field",{attrs:{label:"微信号",placeholder:""},model:{value:a.formData.wx,callback:function(t){a.$set(a.formData,"wx",t)},expression:"formData.wx"}})],1),a._v(" "),e("div",{staticClass:"a"},[e("mt-field",{attrs:{label:"qq号",placeholder:""},model:{value:a.formData.qq,callback:function(t){a.$set(a.formData,"qq",t)},expression:"formData.qq"}})],1),a._v(" "),e("div",{staticClass:"a"},[e("mt-field",{attrs:{label:"性别",placeholder:""},model:{value:a.formData.sex,callback:function(t){a.$set(a.formData,"sex",t)},expression:"formData.sex"}})],1),a._v(" "),e("div",{staticClass:"a"},[e("mt-field",{attrs:{label:"最高学历",placeholder:""},model:{value:a.formData.edu,callback:function(t){a.$set(a.formData,"edu",t)},expression:"formData.edu"}})],1),a._v(" "),e("div",{staticClass:"a"},[e("mt-field",{attrs:{label:"职称",placeholder:""},model:{value:a.formData.zhicheng,callback:function(t){a.$set(a.formData,"zhicheng",t)},expression:"formData.zhicheng"}})],1),a._v(" "),e("div",{staticClass:"a"},[e("mt-field",{attrs:{label:"薪资水平",placeholder:""},model:{value:a.formData.gongZi,callback:function(t){a.$set(a.formData,"gongZi",t)},expression:"formData.gongZi"}})],1),a._v(" "),e("div",{staticClass:"a"},[e("mt-field",{attrs:{label:"入党时间",placeholder:"Input birthday",type:"date"},model:{value:a.formData.ruDangTime,callback:function(t){a.$set(a.formData,"ruDangTime",t)},expression:"formData.ruDangTime"}})],1),a._v(" "),e("div",{staticClass:"a"},[e("mt-field",{attrs:{label:"最后缴纳党费时间",placeholder:"Input birthday",type:"date"},model:{value:a.formData.lastTime,callback:function(t){a.$set(a.formData,"lastTime",t)},expression:"formData.lastTime"}})],1),a._v(" "),e("div",{staticClass:"a"},[e("mt-field",{attrs:{label:"所属党支部",placeholder:""},model:{value:a.formData.dzb,callback:function(t){a.$set(a.formData,"dzb",t)},expression:"formData.dzb"}})],1)])])},staticRenderFns:[]};var r=e("VU/8")(i,n,!1,function(a){e("mRjk")},"data-v-5a186812",null);t.default=r.exports},mRjk:function(a,t){}});
//# sourceMappingURL=21.ac9dae8da1d1e2c85839.js.map