(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{a839:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("q-page",{attrs:{padding:""}},[r("div",[r("q-table",{staticClass:"my-sticky-header-column-table",attrs:{grid:"","card-class":"bg-accent",data:e.noteList,columns:e.getColumns,"row-key":"_id",filter:e.filter,bordered:""},scopedSlots:e._u([{key:"top-right",fn:function(){return[r("q-input",{attrs:{border:"",debounce:"400",placeholder:e.searchLabel},scopedSlots:e._u([{key:"append",fn:function(){return[r("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}})]},proxy:!0}])})],1)])],1)},a=[],s=r("ded3"),l=r.n(s),i=r("2f62"),o={data(){return{filter:""}},methods:l()({},Object(i["b"])("notes",["fetchUserNotes"])),computed:l()(l()({},Object(i["c"])("notes",["noteList"])),{},{getColumns(){return[{name:"title",required:!0,label:this.$t("TITLE"),align:"left",field:"title",sortable:!0},{name:"description",align:"center",label:this.$t("DESCRIPTION"),field:"description",sortable:!0}]},searchLabel(){return this.$t("search")}}),created(){this.fetchUserNotes(localStorage.getItem("user-current"))}},c=o,d=r("2877"),u=Object(d["a"])(c,n,a,!1,null,null,null);t["default"]=u.exports}}]);