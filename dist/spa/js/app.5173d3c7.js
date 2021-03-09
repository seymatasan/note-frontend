(function(e){function t(t){for(var o,a,c=t[0],i=t[1],u=t[2],l=0,d=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&d.push(r[a][0]),r[a]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);p&&p(t);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],o=!0,a=1;a<n.length;a++){var c=n[a];0!==r[c]&&(o=!1)}o&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},a={1:0},r={1:0},s=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{2:"91cd837c",3:"45503218",4:"f4a75f21",5:"ca5b0351",6:"86e52f52",7:"3dc7d20c",8:"45593ba5",9:"34b57cdd",10:"748e24e8"}[e]+".js"}function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={2:1,3:1,4:1,5:1,6:1,7:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var o="css/"+({}[e]||e)+"."+{2:"53b8d012",3:"53b8d012",4:"a1848ac5",5:"c6612673",6:"c6612673",7:"e7e3568d",8:"31d6cfe0",9:"31d6cfe0",10:"31d6cfe0"}[e]+".css",r=i.p+o,s=document.getElementsByTagName("link"),c=0;c<s.length;c++){var u=s[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===o||l===r))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===o||l===r)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var o=t&&t.target&&t.target.src||r,s=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=o,delete a[e],p.parentNode.removeChild(p),n(s)},p.href=r;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){a[e]=0})));var o=r[e];if(0!==o)if(o)t.push(o[2]);else{var s=new Promise((function(t,n){o=r[e]=[t,n]}));t.push(o[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",d.name="ChunkLoadError",d.type=o,d.request=a,n[1](d)}r[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var p=l;s.push([0,0]),n()})({0:function(e,t,n){e.exports=n("2f39")},"2f39":function(e,t,n){"use strict";n.r(t);n("e6cf"),n("5319"),n("7d6e"),n("e54f"),n("62f2"),n("7e6d");var o=n("2b0e"),a=n("1f91"),r=n("42d2"),s=n("b178");o["a"].use(s["a"],{config:{},lang:a["a"],iconSet:r["a"]});var c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},i=[],u={name:"App"},l=u,d=n("2877"),p=Object(d["a"])(l,c,i,!1,null,null,null),m=p.exports,f=n("2f62"),h=n("bc3a"),g=n.n(h);g.a.defaults.baseURL="https://note-backend-seyma.herokuapp.com/";const E={userList:[],user_id:null},S={SET_USERS:(e,t)=>{e.userList=t}},T={async fetchUsers({commit:e}){const t=await g.a.get("/users");e("SET_USERS",t.data)}},A={userList:e=>e.userList,user:e=>e.user};var b={namespaced:!0,state:E,getters:A,mutations:S,actions:T};n("a434");g.a.defaults.baseURL="https://note-backend-seyma.herokuapp.com/";const v={noteList:[]},N={SET_NOTE:(e,t)=>{e.noteList=t},SET_USER_NOTE:(e,t)=>{e.noteList=t},ADD_NOTE:(e,t)=>{e.noteList.unshift(t)},DELETE_NOTE:(e,t)=>{e.noteList=e.noteList.filter((e=>e._id!==t))},UPDATE_NOTE:(e,t)=>{const n=e.noteList.findIndex((e=>e._id===t._id));-1!==n&&e.noteList.splice(n,1,t)}},y={async fetchNotes({commit:e}){const t=await g.a.get("/notes");e("SET_NOTE",t.data)},async fetchUserNotes({commit:e},t){const n=await g.a.get("/users/"+t);e("SET_USER_NOTE",n.data[0].myNotes)},async pushNote({commit:e},t){const n=await g.a.post("/notes",t);e("ADD_NOTE",n.data)},async deleteNote({commit:e},t){await g.a.delete("/notes/"+t);e("DELETE_NOTE",t)},async updateNote({commit:e},t){await g.a.put("notes/"+t._id,t);e("UPDATE_NOTE",t)}},w={noteList:e=>e.noteList};var L={namespaced:!0,state:v,getters:w,mutations:N,actions:y};g.a.defaults.baseURL="https://note-backend-seyma.herokuapp.com/";const O={status:"",token:localStorage.getItem("user-token")||"",user:null},_={isAuthenticated:e=>!!e.token,authStatus:e=>e.status},U={login({commit:e},t){g()({url:"/index/login",data:t,method:"POST"}).then((t=>{const n=t.data.token,o=t.data.username,a=t.data._id;localStorage.setItem("user-token",n),localStorage.setItem("user-name",o),localStorage.setItem("user-id",a),g.a.defaults.headers.common["Authorization"]=n,e("AUTH_SUCCESS",t.data),this.$router.push("/account")})).catch((t=>{resp.json(t),e("AUTH_ERROR"),localStorage.removeItem("token")}))},register({commit:e},t){g()({url:"index/register",data:t,method:"POST"}).then((t=>{e("AUTH_SUCCESS_REGISTER"),this.$router.push("/login")})).catch((t=>{e("AUTH_ERROR",t)}))},logout({commit:e}){e("AUTH_LOGOUT"),localStorage.removeItem("user-token"),localStorage.removeItem("user-name"),localStorage.removeItem("user-id"),delete g.a.defaults.headers.common["Authorization"]}},R={AUTH_SUCCESS(e,t){e.status="success",e.token=t.token,e.user={username:t.username,id:t._id}},AUTH_SUCCESS_REGISTER(e){e.status="success"},AUTH_LOGOUT(e){e.status="",e.token="",e.user=""},AUTH_ERROR(e){e.status="error"}};var k={namespaced:!0,state:O,getters:_,actions:U,mutations:R};o["a"].use(f["a"]);var P=function(){const e=new f["a"].Store({modules:{users:b,notes:L,auth:k},strict:!1});return e},I=n("8c4f");const C=[{path:"/",component:()=>n.e(7).then(n.bind(null,"a9c3")),children:[{path:"/notes",component:()=>Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"b3fd"))},{path:"/users",component:()=>n.e(10).then(n.bind(null,"5e94"))},{path:"/user",component:()=>n.e(9).then(n.bind(null,"a839"))},{path:"/account",component:()=>Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"fea5"))}]},{path:"/login",component:()=>n.e(4).then(n.bind(null,"2710")),children:[{path:"/login",component:()=>n.e(5).then(n.bind(null,"a468"))},{path:"/register",component:()=>n.e(6).then(n.bind(null,"4236"))}]},{path:"*",component:()=>n.e(8).then(n.bind(null,"e51e"))}];var D=C;o["a"].use(I["a"]);var j=function(){const e=new I["a"]({scrollBehavior:()=>({x:0,y:0}),routes:D,mode:"history",base:"/"});return e.beforeEach(((e,t,n)=>{const o=["/login","/register"],a=!o.includes(e.path),r=localStorage.getItem("user-token");if(a&&!r)return n("/login");n()})),e},x=async function(){const e="function"===typeof P?await P({Vue:o["a"]}):P,t="function"===typeof j?await j({Vue:o["a"],store:e}):j;e.$router=t;const n={router:t,store:e,render:e=>e(m),el:"#q-app"};return{app:n,store:e,router:t}};const H=g.a.create({baseURL:"https://note-backend-seyma.herokuapp.com/"});var M=({Vue:e})=>{e.prototype.$axios=H},K=n("a925"),G={TITLE:"TITLE",DESCRIPTION:"DESCRIPTION",Description:"Description",Note:"Note",User:"User",Account:"Account",CREATE:"CREATE",USERNAME:"USERNAME",EMAIL:"EMAIL",Username:"Username",Password:"Password",Register:"Register",notRegistered:"Not registered? ",createAccount:"Created an account",toggledPassword:"Password with toggle",Login:"Login",emailAddress:"Email Adress",haveAccount:"Have an acoount? ",signIn:"Sign in",Register:"Register",loginPage:"Login Form",registerPage:"Register Form",AddNote:"Add Note",AddNewNote:"Add New Note",cancel:"Cancel",title:"Title",search:"Search",changeNote:"Change Note"},z={TITLE:"KONU",DESCRIPTION:"AÇIKLAMA",Description:"Açıklama",NOTE:"NOT",USERNAME:"KULLANICI",Users:"Kulllanıcılar",Notes:"Notlar",Account:"Hesap",Notes:"Notlar",CREATE:"OLUŞTUR",EMAIL:"EPOSTA",Username:"Kullanıcı Adı",Password:"Şifre",Login:"Giriş Yap",Register:"Kayıt Ol",notRegistered:"Hesabınız yok mu? ",createAccount:"Kayıt olun",toggledPassword:"Geçişli Şifre",Login:"Oturum Aç",emailAddress:"Eposta Adresi",haveAccount:"Hesabınız var mı? ",signIn:"Oturum aç",Register:"Kayıt ol",AddNote:"Not Ekle",AddNewNote:"Yeni Not Ekle",cancel:"Vazgeç",title:"Konu",search:"Ara",changeNote:"Not Güncelle"},V={"en-us":G,tr:z};o["a"].use(K["a"]);let $=localStorage.selectedLanguage?localStorage.selectedLanguage:"en-us";const q=new K["a"]({locale:$,fallbackLocale:$,messages:V});var B=({app:e})=>{e.i18n=q};const F="/";async function J(){const{app:e,store:t,router:n}=await x();let a=!1;const r=e=>{a=!0;const t=Object(e)===e?n.resolve(e).route.fullPath:e;window.location.href=t},s=window.location.href.replace(window.location.origin,""),c=[M,B];for(let u=0;!1===a&&u<c.length;u++)if("function"===typeof c[u])try{await c[u]({app:e,router:n,store:t,Vue:o["a"],ssrContext:null,redirect:r,urlPath:s,publicPath:F})}catch(i){return i&&i.url?void(window.location.href=i.url):void console.error("[Quasar] boot error:",i)}!0!==a&&new o["a"](e)}J()},"7e6d":function(e,t,n){}});