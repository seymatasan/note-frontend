(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{"5e94":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("q-page",{attrs:{padding:""}},[r("div",[r("q-table",{attrs:{grid:"","card-class":"bg-accent",data:e.userList,columns:e.getColumns,"row-key":"_id",filter:e.filter,bordered:""},on:{"row-click":e.rowclick},scopedSlots:e._u([{key:"top-right",fn:function(){return[r("q-input",{attrs:{border:"",debounce:"400",placeholder:e.searchLabel},scopedSlots:e._u([{key:"append",fn:function(){return[r("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}})]},proxy:!0}])})],1)])},a=[],l=r("ded3"),n=r.n(l),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("q-list",{attrs:{bordered:""}},[r("q-item",{attrs:{to:"/account",clickable:""}},[r("q-item-section",[r("q-avatar",{attrs:{color:"primary","text-color":"white"}},[e._v("\n          "+e._s(e.username.charAt(0).toUpperCase())+"\n        ")])],1),r("q-item-section",[r("q-item-label",[e._v(e._s(e.username))])],1),r("q-item-section",[r("q-item-label",[e._v(" "+e._s(e.email)+" ")])],1)],1)],1)],1)},c=[],o={name:"User",props:{id:{type:Number},username:{type:String,default:""},email:{type:String,default:""}}},u=o,d=r("2877"),m=Object(d["a"])(u,i,c,!1,null,null,null),p=m.exports,f=r("2f62"),b={data(){return{filter:""}},components:{User:p},methods:n()(n()({},Object(f["b"])("users",["fetchUsers"])),{},{rowclick(e,t){this.$router.push("/user"),localStorage.setItem("user-current",t._id)}}),computed:n()(n()({},Object(f["c"])("users",["userList"])),{},{getColumns(){return[{name:"USERNAME",required:!0,label:this.$t("USERNAME"),align:"left",field:"username",format:e=>`${e}`,sortable:!0},{name:"EMAIL",align:"center",label:this.$t("EMAIL"),field:"email",sortable:!0}]},searchLabel(){return this.$t("search")}}),created(){this.fetchUsers()}},h=b,_=Object(d["a"])(h,s,a,!1,null,null,null);t["default"]=_.exports}}]);