(function(t){function e(e){for(var s,r,c=e[0],a=e[1],u=e[2],d=0,m=[];d<c.length;d++)r=c[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&m.push(o[r][0]),o[r]=0;for(s in a)Object.prototype.hasOwnProperty.call(a,s)&&(t[s]=a[s]);l&&l(e);while(m.length)m.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],s=!0,c=1;c<n.length;c++){var a=n[c];0!==o[a]&&(s=!1)}s&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var s={},o={app:0},i=[];function r(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=s,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(n,s,function(e){return t[e]}.bind(null,s));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],a=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=a;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var s=n("85ec"),o=n.n(s);o.a},"0b16":function(t,e,n){},"26d6":function(t,e,n){"use strict";var s=n("41d8"),o=n.n(s);o.a},"3ae7":function(t,e,n){},"3bd2":function(t,e,n){"use strict";var s=n("7853"),o=n.n(s);o.a},"41d8":function(t,e,n){},5204:function(t,e,n){"use strict";var s=n("0b16"),o=n.n(s);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("home"),n("Ciclebutton")],1)},i=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"content"},[n("div",{attrs:{id:"header"}},[t._v("TO DO IT")]),n("div",{staticClass:"app-menu",on:{click:t.showmenu}},[n("div",{staticClass:"mstrip"}),n("div",{staticClass:"mstrip"}),n("div",{staticClass:"mstrip"})])]),n("div",{class:["menu",{menushow:this.menu}]},t._l(this.items,(function(e,s){return n("div",{key:s,class:{active:s==t.current},on:{click:function(e){return t.todo(s)}}},[n("p",[t._v(t._s(e.message))])])})),0),n("router-view"),n("div",{class:["cover",{showcover:this.menu}],on:{click:t.showmenu}})],1)},c=[],a={data:function(){return{current:0,menu:this.$store.getters.menu,items:[{message:"待做事项"},{message:"完成事项"},{message:"皮肤"},{message:"关于"}]}},methods:{showmenu:function(){this.$store.commit("showmenu",this.menu),this.$store.commit("change",!0)},todo:function(t){this.current=t,0==t?this.$router.push({name:"todo"}):1==t?this.$router.push({name:"complete"}):(2==t||3==t)&&console.log("sd")}},watch:{"$store.state.menu":function(t){this.menu=t}}},u=a,l=(n("a915"),n("2877")),d=Object(l["a"])(u,r,c,!1,null,"cb3d4310",null),m=d.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{class:["newtask",{addnew:this.determine}]},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.todolist,expression:"todolist"}],attrs:{placeholder:"添加新的任务 ...",type:"text"},domProps:{value:t.todolist},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.sure(e)},input:function(e){e.target.composing||(t.todolist=e.target.value)}}})]),n("div",{class:["cicle",{trans:this.determine}],on:{click:function(e){return t.rotate()}}},[t._v("+")]),n("div",{class:["cicle determine",{show:this.determine}],on:{click:t.sure}},[t._v("确定")])])},p=[],h=n("2241"),v={data:function(){return{todolist:"",determine:this.$store.getters.determine}},methods:{rotate:function(){this.$store.commit("change",this.determine),this.determine=this.$store.getters.determine,this.$store.commit("showmenu",!0)},sure:function(){""!=this.todolist?(this.$store.commit("change",this.determine),this.$store.commit("addList",this.todolist),this.todolist=""):Object(h["a"])({message:"请输入内容"})}},watch:{"$store.state.determine":function(t){this.determine=t}}},b=v,g=(n("26d6"),Object(l["a"])(b,f,p,!1,null,"3f6b7d8e",null)),_=g.exports,w={name:"App",components:{home:m,Ciclebutton:_}},y=w,k=(n("034f"),Object(l["a"])(y,o,i,!1,null,null,null)),$=k.exports,O=n("b970"),j=(n("157a"),n("8c4f")),x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"task"},t._l(t.todolist,(function(e,s){return n("div",{key:s,staticClass:"task-item"},[n("p",[n("span",{class:{fcolor:1==e.status}},[t._v(t._s(e.name))]),n("span",[n("a",{attrs:{href:"#"},on:{click:function(e){return t.del(s)}}},[t._v("删除")]),n("a",{attrs:{href:"#"},on:{click:function(e){return t.complete(s)}}},[t._v("完成")])])])])})),0)},C=[],P=(n("a434"),{data:function(){return{todolist:this.$store.getters.todolist}},methods:{del:function(t){this.$store.getters.todolist.splice(t,1)},complete:function(t){this.$store.commit("completelist",{data:this.todolist[t],status:t})}}}),E=P,S=(n("3bd2"),Object(l["a"])(E,x,C,!1,null,"04bf2fc5",null)),T=S.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"task"},t._l(t.completelist,(function(e,s){return n("div",{key:s,staticClass:"task-item"},[n("p",[n("span",[t._v(t._s(e.name))]),n("span",{on:{click:function(e){return t.del(s)}}},[n("a",{attrs:{href:"#"}},[t._v("删除")])])])])})),0)},J=[],L={data:function(){return{completelist:this.$store.getters.completelist}},methods:{del:function(t){this.$store.getters.completelist.splice(t,1)}}},A=L,D=(n("5204"),Object(l["a"])(A,M,J,!1,null,"6ff20b82",null)),I=D.exports;s["a"].use(j["a"]);var N=j["a"].prototype.push;j["a"].prototype.push=function(t){return N.call(this,t).catch((function(t){return t}))};var V=new j["a"]({routes:[{path:"/",redirect:m},{name:"todo",path:"/todo",component:T},{name:"complete",path:"/complete",component:I}]}),q=n("2f62");s["a"].use(q["a"]);var z=new q["a"].Store({state:{todolist:[],completelist:[],determine:!1,menu:!1},getters:{todolist:function(t){return t.todolist},determine:function(t){return t.determine},menu:function(t){return t.menu},completelist:function(t){return t.completelist}},mutations:{addList:function(t,e){t.todolist.unshift({name:e,status:!1})},change:function(t,e){t.determine=!e},showmenu:function(t,e){t.menu=!e},completelist:function(t,e){t.todolist[e.status].status=!0,t.completelist.unshift(e.data)}}});s["a"].use(O["a"]),s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t($)},router:V,store:z,Vant:O["a"]}).$mount("#app")},7853:function(t,e,n){},"85ec":function(t,e,n){},a915:function(t,e,n){"use strict";var s=n("3ae7"),o=n.n(s);o.a}});
//# sourceMappingURL=app.100dfee7.js.map