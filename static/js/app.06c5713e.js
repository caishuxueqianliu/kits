(function(t){function e(e){for(var a,r,i=e[0],c=e[1],l=e[2],u=0,f=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&f.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(f.length)f.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,r=1;r<n.length;r++){var i=n[r];0!==o[i]&&(a=!1)}a&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},r={app:0},o={app:0},s=[];function i(t){return c.p+"static/js/"+({about:"about"}[t]||t)+"."+{about:"fec1e38f"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={about:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="static/css/"+({about:"about"}[t]||t)+"."+{about:"31ee843d"}[t]+".css",o=c.p+a,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var l=s[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===o))return e()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){l=f[i],u=l.getAttribute("data-href");if(u===a||u===o)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var a=e&&e.target&&e.target.src||o,s=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete r[t],d.parentNode.removeChild(d),n(s)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){r[t]=0})));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise((function(e,n){a=o[t]=[e,n]}));e.push(a[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(t);var f=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(d);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",f.name="ChunkLoadError",f.type=a,f.request=r,n[1](f)}o[t]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="./",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var f=0;f<l.length;f++)e(l[f]);var d=u;s.push([1,"chunk-vendors"]),n()})({0:function(t,e){},"034f":function(t,e,n){"use strict";var a=n("85ec"),r=n.n(a);r.a},"04fd":function(t,e,n){"use strict";var a=n("d552"),r=n.n(a);r.a},1:function(t,e,n){t.exports=n("56d7")},10:function(t,e){},11:function(t,e){},12:function(t,e){},13:function(t,e){},14:function(t,e){},15:function(t,e){},16:function(t,e){},17:function(t,e){},18:function(t,e){},2:function(t,e){},3:function(t,e){},4:function(t,e){},5:function(t,e){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("nav",{staticClass:"navbar navbar-expand-md navbar-dark fixed-top bg-dark"},[n("a",{staticClass:"navbar-brand"},[t._v(t._s(t.time))]),n("div",{staticClass:"navdiv"},[n("router-link",{staticClass:"navbar-brand",attrs:{to:"/home"}},[t._v("Home")]),n("router-link",{directives:[{name:"show",rawName:"v-show",value:t.isConf,expression:"isConf"}],staticClass:"navbar-brand",attrs:{to:"/Config"}},[t._v("Config")]),n("router-link",{staticClass:"navbar-brand",attrs:{to:"/kits"}},[t._v("Tools")]),n("router-link",{staticClass:"navbar-brand",attrs:{to:"/xgCrypt"}},[t._v("XgCrypt")])],1)])]),n("router-view")],1)},o=[],s={data:function(){return{time:parseInt(Date.now()/1e3),isConf:this.$store.state.isConf}},created:function(){},mounted:function(){this.getTime()},methods:{getTime:function(){var t=this;setInterval((function(){t.time=parseInt(Date.now()/1e3)}),1e3)}},components:{},watch:{},computed:{}},i=s,c=(n("034f"),n("2877")),l=Object(c["a"])(i,r,o,!1,null,null,null),u=l.exports,f=(n("d3b7"),n("8c4f")),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("main",{attrs:{role:"main"}},[n("div",{staticClass:"jumbotron"},[n("div",{staticClass:"container"},[n("div",{staticClass:"input-group mb-3"},[n("div",{staticClass:"input-group-prepend"},[n("span",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"input-group-text",attrs:{id:"inputGroupFileAddon01"},on:{click:function(e){return t.start()}}},[t._v("Start")])]),n("div",{staticClass:"custom-file"},[n("input",{ref:"file",staticClass:"custom-file-input",attrs:{type:"file",name:"file",id:"inputGroupFile01","aria-describedby":"inputGroupFileAddon01"},on:{change:function(e){return t.file()}}}),n("label",{staticClass:"custom-file-label",attrs:{for:"inputGroupFile01"}},[t._v(t._s(t.confn))])])])])]),t._m(0),t._l(t.conf,(function(e,a,r){return n("div",{key:r,staticClass:"conf"},[n("div",{staticClass:"alert alert-success",attrs:{role:"alert"}},[t._v(" "+t._s(a)+"="+t._s(e)+" ")])])}))],2)])},p=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("hr")])}],v=(n("b0c0"),n("b64b"),n("ac1f"),n("1276"),n("1146")),h=n.n(v),m={name:"Home",data:function(){return{confn:"Choose config.xlsx",conf:{},confk:[],confv:[],isShow:!1}},components:{},created:function(){},mounted:function(){},methods:{file:function(){var t=this;this.$refs.file.files[0]&&(this.isShow=!0),this.confn=this.$refs.file.files[0].name;var e=[1],n=[2],a={},r=this.$refs.file.files[0],o=new FileReader;o.readAsBinaryString(r),o.onload=function(t){var r=t.target.result,o=h.a.read(r,{type:"binary"}),s=o.SheetNames[0],i={},c=o.Sheets[s],l=c["!ref"];l=l.split(":");for(var u=l[0].charCodeAt(0),f=parseInt(l[0].charAt(1)),d=l[1].charCodeAt(0),p=parseInt(l[1].substr(1)),v=f;v<p;v++)for(var m=null,b=u,g=u;g<d;g++){var C=String.fromCharCode(g)+v,_=c[C];if(_&&_.w&&_.w.length>0){if(m&&g==b+1){i[m]=_.w;break}m=_.w,b=g}}var y=[];for(var w in i)y.push(i[w]);e=Object.keys(i),n=y,a=i},setTimeout((function(){t.confk=e,t.confv=n,t.conf=a}),100)},start:function(){this.confv.length&&(this.$store.commit("setConf",this.conf),this.$store.commit("setIsConf",!0),console.log(this.$store.state),this.$router.push("/config"))}},watch:{},computed:{}},b=m,g=(n("de16"),Object(c["a"])(b,d,p,!1,null,null,null)),C=g.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"jumbotron jumbotron1"},[n("p",{staticClass:"lead"},[t._v(t._s(this.$store.state.conf.ChannelCode))]),n("hr",{staticClass:"my-4"}),n("nav",[n("div",{staticClass:"nav nav-tabs",attrs:{id:"nav-tab",role:"tablist"}},[n("a",{staticClass:"nav-item nav-link active",attrs:{id:"nav-home-tab","data-toggle":"tab",href:"#nav-home",role:"tab","aria-controls":"nav-home","aria-selected":"true"},on:{click:function(e){return t.reqInfo()}}},[t._v("访问配置中心")]),n("a",{staticClass:"nav-item nav-link",attrs:{id:"nav-profile-tab","data-toggle":"tab",href:"#nav-profile",role:"tab","aria-controls":"nav-profile","aria-selected":"false"},on:{click:function(e){return t.reqGetServer()}}},[t._v("获取服务器")]),n("a",{staticClass:"nav-item nav-link",attrs:{id:"nav-contact-tab","data-toggle":"tab",href:"#nav-contact",role:"tab","aria-controls":"nav-contact","aria-selected":"false"},on:{click:function(e){return t.reqRegister()}}},[t._v("注册及登陆")]),n("a",{staticClass:"nav-item nav-link",attrs:{id:"nav-contact-tab","data-toggle":"tab",href:"#nav-login",role:"tab","aria-controls":"nav-login","aria-selected":"false"},on:{click:function(e){return t.ceshi()}}},[t._v("其他")])])]),n("div",{staticClass:"tab-content",attrs:{id:"nav-tabContent"}},[n("div",{staticClass:"tab-pane fade show active",attrs:{id:"nav-home",role:"tabpanel","aria-labelledby":"nav-home-tab"}},[n("p",[t._v("url:"+t._s(this.conf.LaunchAdd))]),n("p",[t._v("methods:post")]),n("p",[t._v("params:"+t._s(this.info))]),n("p",[t._v("params(明文):"+t._s(this.infom))]),n("p",[t._v("服务器返回:"+t._s(this.infod))]),n("p",[t._v("服务器返回(明文):"+t._s(this.infodm))])]),n("div",{staticClass:"tab-pane fade",attrs:{id:"nav-profile",role:"tabpanel","aria-labelledby":"nav-profile-tab"}},[n("p",[t._v("url:"+t._s(t.serverUrl))]),n("p",[t._v("methods:GET")]),n("p",[t._v("params:"+t._s(this.servercrypt))]),n("p",[t._v("params(明文):"+t._s(this.servermm))]),n("p",[t._v("服务器返回:"+t._s(this.servedm))]),n("p",[t._v("服务器返回(明文):"+t._s(this.served))])]),n("div",{staticClass:"tab-pane fade",attrs:{id:"nav-contact",role:"tabpanel","aria-labelledby":"nav-contact-tab"}},[n("p",[t._v("url:"+t._s(t.registerUrl))]),n("p",[t._v("methods:Post")]),n("p",[t._v("params:"+t._s(this.registerreq))]),n("p",[t._v("服务器返回:"+t._s(this.registerres))]),n("p",[t._v("url:"+t._s(t.loginUrl))]),n("p",[t._v("methods:Post")]),n("p",[t._v("params:"+t._s(this.loginreq))]),n("p",[t._v("服务器返回:"+t._s(this.loginres))])]),n("div",{staticClass:"tab-pane fade",attrs:{id:"nav-login",role:"tabpanel","aria-labelledby":"nav-login-tab"}}),n("div",{staticClass:"tab-pane fade",attrs:{id:"nav-extend",role:"tabpanel","aria-labelledby":"nav-extend-tab"}})])])])},y=[],w=n("8206"),k=n.n(w),x=function(t,e){return k.a.post(t,null,{params:e})},$=function(t,e){return k.a.get(t+"?x="+e.x+"&m="+e.m)},S=function(t,e){return k.a.post(t,null,{params:e})},O=function(t,e){return k.a.post(t,null,{params:e})},E=n("7523"),j={data:function(){return{conf:this.$store.state.conf,info:{},infom:{v:this.$store.state.conf.GameVersion,id:this.$store.state.conf.Identifier},infod:{},infodm:{},serverm:this.$store.state.conf.Channel,servermm:{x:this.$store.state.conf.Channel,m:this.$store.state.conf.Channel},servercrypt:{},servedm:{},served:{},registerreq:{},registerres:{},loginreq:{},loginres:{}}},create:function(){},mounted:function(){this.reqInfo()},methods:{reqInfo:function(){var t=this,e=E["a"].encrypt(JSON.stringify(this.infom)),n=e,a=this.$md5(JSON.stringify(this.infom));this.info={x:n,m:a},x(this.conf.LaunchAdd,this.info).then((function(e){t.infod=JSON.stringify(e.data.x);var n=E["a"].decrypt(e.data.x);t.infodm=n;var a=JSON.parse(n);t.$store.commit("setInfo",a)}))},reqGetServer:function(){var t=this,e={x:encodeURIComponent(E["a"].encrypt(this.serverm)),m:this.$md5(this.serverm)};this.servercrypt=e,console.log(this.$md5(this.serverm)),$(this.serverUrl,e).then((function(e){t.servedm=e.data,t.served=E["a"].decrypt(e.data.x)}))},reqRegister:function(){for(var t=this,e="",n="",a=0;a<8;a++)e+=String.fromCharCode(Math.floor(26*Math.random()+65)),n+=String.fromCharCode(Math.floor(26*Math.random()+65));this.loginreq={u:e,p:n,channelCode:this.$store.state.conf.ChannelCode},this.registerreq={u:e,p:n,channelCode:this.$store.state.conf.ChannelCode},S(this.registerUrl,{u:e,p:n,channelCode:this.$store.state.conf.ChannelCode}).then((function(e){t.registerres=e.data})),setTimeout((function(){O(t.loginUrl,{u:e,p:n,channelCode:t.$store.state.conf.ChannelCode}).then((function(e){t.loginres=e.data}))}),100)},ceshi:function(){var t=document.createElement("script");t.src="http://iosaudit.xuegaogame.com/public/index.php?list=",document.body.appendChild(t),console.log(t)}},computed:{serverUrl:function(){var t=this.$store.state.info;return"http://"+t.s+"/master/serverlist"},registerUrl:function(){var t=this.$store.state.info;return"http://"+t.l+"/user/register"},loginUrl:function(){var t=this.$store.state.info;return"http://"+t.l+"/user/login"}}},A=j,q=(n("04fd"),Object(c["a"])(A,_,y,!1,null,null,null)),I=q.exports;a["default"].use(f["a"]);var U=[{path:"/",redirect:"/xgCrypt"},{path:"/home",name:"Home",component:C},{path:"/kits",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/config",name:"Config",component:I},{path:"/xgCrypt",name:"XgCrypt",component:function(){return n.e("about").then(n.bind(null,"7956"))}}],P=new f["a"]({mode:"history",base:"./",routes:U}),T=P,N=n("2f62");a["default"].use(N["a"]);var G=new N["a"].Store({state:{conf:{},info:{},isConf:!1},mutations:{setConf:function(t,e){t.conf=e},setInfo:function(t,e){t.info=e},setIsConf:function(t,e){t.isConf=e}},actions:{},modules:{}}),M=n("8237"),L=n.n(M),B=(n("ab8b"),n("3e48"),n("ec7e")),F=n.n(B),J=n("5c96"),D=n.n(J);n("0fae");a["default"].prototype.$md5=L.a,a["default"].config.productionTip=!1,a["default"].use(F.a),a["default"].use(D.a),new a["default"]({router:T,store:G,render:function(t){return t(u)}}).$mount("#app")},6:function(t,e){},7:function(t,e){},7523:function(t,e,n){"use strict";n("d3b7"),n("25f0");var a=n("3452"),r=n.n(a);e["a"]={encrypt:function(t){var e="874e6cf592bea3ff",n=r.a.enc.Utf8.parse(e),a=r.a.enc.Utf8.parse(t),o=r.a.AES.encrypt(a,n,{mode:r.a.mode.ECB,padding:r.a.pad.Pkcs7});return o.toString()},decrypt:function(t){var e="874e6cf592bea3ff",n=r.a.enc.Utf8.parse(e),a=r.a.AES.decrypt(t,n,{mode:r.a.mode.ECB,padding:r.a.pad.Pkcs7});return r.a.enc.Utf8.stringify(a).toString()}}},8:function(t,e){},"85ec":function(t,e,n){},"8d91":function(t,e,n){},9:function(t,e){},d552:function(t,e,n){},de16:function(t,e,n){"use strict";var a=n("8d91"),r=n.n(a);r.a}});