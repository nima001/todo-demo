(function(t){function e(e){for(var n,i,c=e[0],a=e[1],u=e[2],d=0,h=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&h.push(r[i][0]),r[i]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n]);l&&l(e);while(h.length)h.shift()();return s.push.apply(s,u||[]),o()}function o(){for(var t,e=0;e<s.length;e++){for(var o=s[e],n=!0,c=1;c<o.length;c++){var a=o[c];0!==r[a]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=o[0]))}return t}var n={},r={app:0},s=[];function i(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=n,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(o,n,function(e){return t[e]}.bind(null,n));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],a=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=a;s.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var n=o("85ec"),r=o.n(n);r.a},"0b16":function(t,e,o){},"3bd2":function(t,e,o){"use strict";var n=o("7853"),r=o.n(n);r.a},5126:function(t,e,o){},5204:function(t,e,o){"use strict";var n=o("0b16"),r=o.n(n);r.a},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("router-view")],1)},s=[],i={},c=i,a=(o("034f"),o("2877")),u=Object(a["a"])(c,r,s,!1,null,null,null),l=u.exports,d=o("e41f"),h=o("2241"),m=(o("160b"),o("d738"),o("8c4f")),f=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("div",{staticClass:"content",style:{backgroundColor:t.headcolor}},[o("div",{attrs:{id:"header"}},[t._v("TO DO IT")]),o("div",{staticClass:"app-menu",on:{click:t.showmenu}},[o("div",{staticClass:"mstrip"}),o("div",{staticClass:"mstrip"}),o("div",{staticClass:"mstrip"})])]),o("Ciclebutton"),o("div",{class:["menu",{menushow:this.menu}]},t._l(this.items,(function(e,n){return o("div",{key:n,class:{active:n==t.current},on:{click:function(e){return t.todo(n)}}},[o("p",[t._v(t._s(e.message))])])})),0),o("router-view"),o("div",{class:["cover",{showcover:this.menu}],on:{click:t.showmenu}}),o("van-popup",{style:{height:"30%"},attrs:{position:"bottom"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[o("ul",t._l(t.colors,(function(e,n){return o("li",{key:n,on:{click:function(o){return t.changecolor(e.color)}}},[t._v(t._s(e.name)),o("span",{style:{backgroundColor:e.color}})])})),0)])],1)},p=[],v=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{class:["newtask",{addnew:this.determine}]},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.todolist,expression:"todolist"}],attrs:{placeholder:"添加新的任务 ...",type:"text"},domProps:{value:t.todolist},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.sure(e)},input:function(e){e.target.composing||(t.todolist=e.target.value)}}})]),o("div",{class:["cicle",{trans:this.determine}],style:{backgroundColor:t.headcolor},on:{click:function(e){return t.rotate()}}},[t._v("+")]),o("div",{class:["cicle determine",{show:this.determine}],on:{click:t.sure}},[t._v("确定")])])},b=[],g={data:function(){return{todolist:"",headcolor:this.$store.getters.headcolor,determine:this.$store.getters.determine}},methods:{rotate:function(){this.$store.commit("change",this.determine),this.determine=this.$store.getters.determine,this.$store.commit("showmenu",!0)},sure:function(){""!=this.todolist?(this.$store.commit("change",this.determine),this.$store.commit("addList",this.todolist),this.todolist=""):this.$dialog({message:"请输入内容"})}},watch:{"$store.state.determine":function(t){this.determine=t},"$store.state.headcolor":function(t){this.headcolor=t}}},w=g,_=(o("7900"),Object(a["a"])(w,v,b,!1,null,"3a3adcdc",null)),y=_.exports,k={data:function(){return{headcolor:this.$store.getters.headcolor,current:0,menu:this.$store.getters.menu,show:!1,items:[{message:"待做事项"},{message:"完成事项"},{message:"皮肤"}],colors:[{name:"夜间模式",color:"rgb(45,45,45)"},{name:"少女粉",color:"rgb(250,114,152)"},{name:"姨妈红",color:"rgb(244,66,54)"},{name:"咸蛋黄",color:"rgb(254,192,8)"}]}},components:{Ciclebutton:y},methods:{showmenu:function(){this.$store.commit("showmenu",this.menu),this.$store.commit("change",!0)},todo:function(t){this.current=t,0==t?this.$router.push({name:"todo"}):1==t?this.$router.push({name:"complete"}):2==t&&(this.show=!this.show)},changecolor:function(t){this.$store.commit("headcolor",t)}},watch:{"$store.state.menu":function(t){this.menu=t},"$store.state.headcolor":function(t){this.headcolor=t}}},$=k,O=(o("b70d"),Object(a["a"])($,f,p,!1,null,"3fd3bc22",null)),C=O.exports,x=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"task"},t._l(t.todolist,(function(e,n){return o("div",{key:n,staticClass:"task-item"},[o("p",[o("span",{class:{fcolor:1==e.status}},[t._v(t._s(e.name))]),o("span",[o("a",{attrs:{href:"#"},on:{click:function(e){return t.del(n)}}},[t._v("删除")]),o("a",{attrs:{href:"#"},on:{click:function(e){return t.complete(n)}}},[t._v("完成")])])])])})),0)},j=[],P=(o("a434"),{data:function(){return{todolist:this.$store.getters.todolist}},methods:{del:function(t){this.$store.getters.todolist.splice(t,1)},complete:function(t){this.$store.commit("completelist",{data:this.todolist[t],status:t})}}}),E=P,S=(o("3bd2"),Object(a["a"])(E,x,j,!1,null,"04bf2fc5",null)),T=S.exports,M=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"task"},t._l(t.completelist,(function(e,n){return o("div",{key:n,staticClass:"task-item"},[o("p",[o("span",[t._v(t._s(e.name))]),o("span",{on:{click:function(e){return t.del(n)}}},[o("a",{attrs:{href:"#"}},[t._v("删除")])])])])})),0)},J=[],L={data:function(){return{completelist:this.$store.getters.completelist}},methods:{del:function(t){this.$store.getters.completelist.splice(t,1)}}},D=L,I=(o("5204"),Object(a["a"])(D,M,J,!1,null,"6ff20b82",null)),N=I.exports;n["a"].use(m["a"]);var q=m["a"].prototype.push;m["a"].prototype.push=function(t){return q.call(this,t).catch((function(t){return t}))};var z=new m["a"]({routes:[{path:"/",redirect:"/home"},{name:"home",path:"/home",component:C,children:[{name:"todo",path:"/todo",component:T},{name:"complete",path:"/complete",component:N}]}]}),A=o("2f62");n["a"].use(A["a"]);var B=new A["a"].Store({state:{todolist:[],completelist:[],determine:!1,menu:!1,headcolor:"rgb(250,114,152)"},getters:{todolist:function(t){return t.todolist},determine:function(t){return t.determine},menu:function(t){return t.menu},completelist:function(t){return t.completelist},headcolor:function(t){return t.headcolor}},mutations:{addList:function(t,e){t.todolist.unshift({name:e,status:!1})},change:function(t,e){t.determine=!e},showmenu:function(t,e){t.menu=!e},completelist:function(t,e){t.todolist[e.status].status=!0,t.completelist.unshift(e.data)},headcolor:function(t,e){t.headcolor=e}}});n["a"].config.productionTip=!1,n["a"].use(d["a"]),n["a"].use(h["a"]),new n["a"]({render:function(t){return t(l)},router:z,store:B}).$mount("#app")},7853:function(t,e,o){},7900:function(t,e,o){"use strict";var n=o("5126"),r=o.n(n);r.a},"85ec":function(t,e,o){},b70d:function(t,e,o){"use strict";var n=o("e67f"),r=o.n(n);r.a},e67f:function(t,e,o){}});
//# sourceMappingURL=app.da8d2c1d.js.map