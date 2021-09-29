(function(e){function t(t){for(var o,r,u=t[0],s=t[1],c=t[2],l=0,d=[];l<u.length;l++)r=u[l],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,r=1;r<n.length;r++){var u=n[r];0!==a[u]&&(o=!1)}o&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},r={app:0},a={app:0},i=[];function u(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"b918b1e6"}[e]+".js"}function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={about:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({about:"about"}[e]||e)+"."+{about:"b499390b"}[e]+".css",a=s.p+o,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var c=i[u],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===o||l===a))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){c=d[u],l=c.getAttribute("data-href");if(l===o||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var o=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete r[e],f.parentNode.removeChild(f),n(i)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){r[e]=0})));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var i=new Promise((function(t,n){o=a[e]=[t,n]}));t.push(o[2]=i);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=u(e);var d=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",d.name="ChunkLoadError",d.type=o,d.request=r,n[1](d)}a[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/dad_jokes/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"21bb":function(e,t,n){"use strict";n("2dad")},"2dad":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-app-bar",{attrs:{app:"",dark:""}},[n("v-toolbar-title",[e._v("Dad Jokes")]),n("v-spacer"),n("v-btn",{staticClass:"mr-5",attrs:{to:{name:"Home"},exact:""}},[e._v(" Home ")]),n("v-btn",{attrs:{to:{name:"Favourite"}}},[e._v(" Favourite Jokes ")])],1),n("v-main",[n("router-view")],1)],1)},a=[],i=n("5530"),u=n("2f62"),s={name:"App",data:function(){return{}},mounted:function(){this.get_jokes()},methods:Object(i["a"])({},Object(u["b"])(["get_jokes"]))},c=s,l=(n("5c0b"),n("2877")),d=n("6544"),f=n.n(d),p=n("7496"),v=n("40dc"),b=n("8336"),m=n("f6c4"),h=n("2fa4"),j=n("2a7f"),_=Object(l["a"])(c,r,a,!1,null,null,null),k=_.exports;f()(_,{VApp:p["a"],VAppBar:v["a"],VBtn:b["a"],VMain:m["a"],VSpacer:h["a"],VToolbarTitle:j["a"]});n("d3b7"),n("3ca3"),n("ddb0");var g=n("8c4f"),y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home d-flex justify-center align-center"},[n("div",{staticClass:"home__box my-10"},[e._l(e.jokes,(function(t){return n("v-card",{key:t.id,staticClass:"mx-auto mb-5",attrs:{color:"rgba(255, 255, 255, .1)",dark:"","max-width":"400",elevation:"3"}},[n("v-card-title",{staticClass:"justify-end text-subtitle-2 grey--text text--lighten-1"},[e._v(" "+e._s(t.id)+" ")]),n("v-card-text",{staticClass:"text-body-1 white--text"},[e._v(' "'+e._s(t.joke)+'" ')]),n("v-card-actions",[n("v-btn",{attrs:{icon:""},on:{click:function(n){return e.addFavouriteJoke(t)}}},[n("v-icon",{class:{"red--text":t.isFavourite}},[e._v("mdi-heart")])],1)],1)],1)})),n("div",{staticClass:"d-flex justify-center"},[n("v-btn",{attrs:{dark:"",color:"teal",large:""},on:{click:function(t){return e.getJokes()}}},[e._v(" Загрузить ещё ")])],1)],2)])},x=[],O={name:"Home",data:function(){return{}},mounted:function(){},components:{},methods:Object(i["a"])(Object(i["a"])({},Object(u["b"])(["get_jokes","add_favourite_jokes"])),{},{getJokes:function(){this.get_jokes()},addFavouriteJoke:function(e){this.add_favourite_jokes(e),this.$forceUpdate()}}),computed:Object(i["a"])({},Object(u["c"])(["jokes"]))},w=O,C=(n("21bb"),n("b0af")),S=n("99d9"),T=n("132d"),V=Object(l["a"])(w,y,x,!1,null,null,null),E=V.exports;f()(V,{VBtn:b["a"],VCard:C["a"],VCardActions:S["a"],VCardText:S["b"],VCardTitle:S["c"],VIcon:T["a"]}),o["a"].use(g["a"]);var A=[{path:"/",name:"Home",component:E},{path:"/favourite",name:"Favourite",component:function(){return n.e("about").then(n.bind(null,"c9bd"))}}],P=new g["a"]({mode:"history",base:"/dad_jokes/",routes:A}),F=P,J=(n("caad"),n("2532"),n("a434"),n("bc3a")),B=n.n(J);o["a"].use(u["a"]);var N=new u["a"].Store({state:{jokes:[],favourite_jokes:[]},mutations:{set_jokes:function(e,t){e.jokes.push(t)},set_favourite_jokes:function(e,t){if(e.favourite_jokes.includes(t)){var n=e.favourite_jokes.indexOf(t);e.favourite_jokes.splice(n,1),t.isFavourite=!1}else t.isFavourite=!0,e.favourite_jokes.push(t)}},actions:{get_jokes:function(e){var t=e.commit;B.a.get("https://icanhazdadjoke.com/",{headers:{"content-type":"application/JSON",accept:"application/json"}}).then((function(e){t("set_jokes",e.data)})).catch((function(e){return console.log(e.message)}))},add_favourite_jokes:function(e,t){var n=e.commit;n("set_favourite_jokes",t)}},getters:{jokes:function(e){return e.jokes},favourite_jokes:function(e){return e.favourite_jokes}},modules:{}}),H=n("f309");o["a"].use(H["a"]);var L=new H["a"]({});o["a"].config.productionTip=!1,new o["a"]({router:F,store:N,vuetify:L,render:function(e){return e(k)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.ef719d23.js.map