(function(t){function e(e){for(var n,i,a=e[0],c=e[1],l=e[2],d=0,h=[];d<a.length;d++)i=a[d],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&h.push(s[i][0]),s[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(h.length)h.shift()();return r.push.apply(r,l||[]),o()}function o(){for(var t,e=0;e<r.length;e++){for(var o=r[e],n=!0,a=1;a<o.length;a++){var c=o[a];0!==s[c]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=o[0]))}return t}var n={},s={app:0},r=[];function i(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=n,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(o,n,function(e){return t[e]}.bind(null,n));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var u=c;r.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var n=o("85ec"),s=o.n(n);s.a},"358b":function(t,e,o){"use strict";var n=o("beee"),s=o.n(n);s.a},"3a7c":function(t,e,o){"use strict";var n=o("8d1b"),s=o.n(n);s.a},5126:function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("router-view")],1)},r=[],i={},a=i,c=(o("034f"),o("2877")),l=Object(c["a"])(a,s,r,!1,null,null,null),u=l.exports,d=o("e41f"),h=o("2241"),m=o("a3e2"),p=o("c36e"),f=o("b650"),v=(o("157a"),o("8c4f")),g=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("div",{staticClass:"content",style:{backgroundColor:t.headcolor}},[o("div",{attrs:{id:"header"}},[t._v("TO DO IT")]),o("div",{staticClass:"app-menu",on:{click:t.showmenu}},[o("div",{staticClass:"mstrip"}),o("div",{staticClass:"mstrip"}),o("div",{staticClass:"mstrip"})])]),o("div",{class:["menu",{menushow:this.menu}]},t._l(this.items,(function(e,n){return o("div",{key:n,class:{active:n==t.current},on:{click:function(e){return t.todo(n)}}},[o("p",[t._v(t._s(e.message))])])})),0),o("router-view"),o("div",{class:["cover",{showcover:this.menu}],on:{click:t.showmenu}}),o("van-popup",{style:{height:"30%"},attrs:{position:"bottom"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[o("ul",t._l(t.colors,(function(e,n){return o("li",{key:n,on:{click:function(o){return t.changecolor(e.color)}}},[t._v(t._s(e.name)),o("span",{style:{backgroundColor:e.color}})])})),0)]),o("Ciclebutton")],1)},b=[],w=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{class:["newtask",{addnew:this.determine}]},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.todolist,expression:"todolist"}],attrs:{placeholder:"添加新的任务 ...",type:"text"},domProps:{value:t.todolist},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.sure(e)},input:function(e){e.target.composing||(t.todolist=e.target.value)}}})]),o("div",{class:["cicle",{trans:this.determine}],style:{backgroundColor:t.headcolor},on:{click:function(e){return t.rotate()}}},[t._v("+")]),o("div",{class:["cicle determine",{show:this.determine}],on:{click:t.sure}},[t._v("确定")])])},y=[],_={data:function(){return{todolist:"",headcolor:this.$store.getters.headcolor,determine:this.$store.getters.determine}},methods:{rotate:function(){this.$store.commit("change",this.determine),this.determine=this.$store.getters.determine,this.$store.commit("showmenu",!0)},sure:function(){""!=this.todolist?(this.$store.commit("change",this.determine),this.$store.commit("addList",this.todolist),this.todolist=""):this.$dialog({message:"请输入内容"})}},watch:{"$store.state.determine":function(t){this.determine=t},"$store.state.headcolor":function(t){this.headcolor=t}}},k=_,$=(o("7900"),Object(c["a"])(k,w,y,!1,null,"3a3adcdc",null)),x=$.exports,C={data:function(){return{headcolor:this.$store.getters.headcolor,current:0,menu:this.$store.getters.menu,show:!1,items:[{message:"待做事项"},{message:"完成事项"},{message:"皮肤"}],colors:[{name:"幽暗黑",color:"rgb(45,45,45)"},{name:"少女粉",color:"rgb(250,114,152)"},{name:"姨妈红",color:"rgb(244,66,54)"},{name:"咸蛋黄",color:"rgb(254,192,8)"}]}},mounted:function(){},components:{Ciclebutton:x},methods:{showmenu:function(){this.$store.commit("showmenu",this.menu),this.$store.commit("change",!0)},todo:function(t){this.current=t,0==t?this.$router.push({name:"todo"}):1==t?this.$router.push({name:"complete"}):2==t&&(this.show=!this.show)},changecolor:function(t){this.$store.commit("headcolor",t)}},watch:{"$store.state.menu":function(t){this.menu=t},"$store.state.headcolor":function(t){this.headcolor=t}}},O=C,j=(o("3a7c"),Object(c["a"])(O,g,b,!1,null,"387ba87c",null)),S=j.exports,P=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"task"},t._l(t.todolist,(function(e,n){return o("van-swipe-cell",{key:n,staticClass:"task-item",scopedSlots:t._u([{key:"right",fn:function(){return[o("van-button",{staticStyle:{"white-space":"nowrap","margin-top":"-19%"},attrs:{square:"",type:"danger",text:"删除"},on:{click:function(e){return t.del(n)}}})]},proxy:!0}],null,!0)},[o("p",[o("span",{staticClass:"todoitem",class:{fcolor:1==e.status}},[t._v(t._s(e.name))]),o("span",{staticClass:"todoitem"},[e.status?t._e():o("a",{attrs:{href:"#"},on:{click:function(e){return t.complete(n)}}},[t._v("完成")])])])])})),1)},E=[],T=(o("a434"),{data:function(){return{todolist:this.$store.getters.todolist}},methods:{del:function(t){this.$store.getters.todolist.splice(t,1)},complete:function(t){this.$store.commit("completelist",{data:this.todolist[t],status:t})}}}),M=T,q=(o("358b"),Object(c["a"])(M,P,E,!1,null,"658875ae",null)),J=q.exports,L=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"task"},t._l(t.completelist,(function(e,n){return o("van-swipe-cell",{key:n,staticClass:"task-item",scopedSlots:t._u([{key:"right",fn:function(){return[o("van-button",{staticStyle:{"white-space":"nowrap","margin-top":"-19%"},attrs:{square:"",type:"danger",text:"删除"},on:{click:function(e){return t.del(n)}}})]},proxy:!0}],null,!0)},[o("p",[o("span",{staticClass:"completeitem",staticStyle:{"white-space":"nowrap"}},[t._v(t._s(e.name))]),o("van-tag",{staticStyle:{width:"36px",transition:"all .4s ease"},attrs:{plain:"",color:t.headcolor}},[t._v("已完成")])],1)])})),1)},D=[],I={data:function(){return{headcolor:this.$store.getters.headcolor,completelist:this.$store.getters.completelist}},methods:{del:function(t){this.$store.getters.completelist.splice(t,1)}},watch:{"$store.state.headcolor":function(t){this.headcolor=t}}},N=I,z=(o("e2e3"),Object(c["a"])(N,L,D,!1,null,"0eefea7e",null)),A=z.exports;n["a"].use(v["a"]);var B=v["a"].prototype.push;v["a"].prototype.push=function(t){return B.call(this,t).catch((function(t){return t}))};var F=new v["a"]({routes:[{path:"/",redirect:"/todo"},{name:"home",path:"/home",component:S,children:[{name:"todo",path:"/todo",component:J},{name:"complete",path:"/complete",component:A}]}]}),G=o("2f62");n["a"].use(G["a"]);var H=new G["a"].Store({state:{todolist:[],completelist:[],determine:!1,menu:!1,headcolor:"rgb(250,114,152)"},getters:{todolist:function(t){return t.todolist},determine:function(t){return t.determine},menu:function(t){return t.menu},completelist:function(t){return t.completelist},headcolor:function(t){return t.headcolor}},mutations:{addList:function(t,e){t.todolist.unshift({name:e,status:!1})},change:function(t,e){t.determine=!e},showmenu:function(t,e){t.menu=!e},completelist:function(t,e){t.todolist[e.status].status=!0,t.completelist.unshift(e.data)},headcolor:function(t,e){t.headcolor=e}}});n["a"].config.productionTip=!1,n["a"].use(d["a"]),n["a"].use(h["a"]),n["a"].use(m["a"]),n["a"].use(p["a"]),n["a"].use(f["a"]),new n["a"]({render:function(t){return t(u)},router:F,store:H}).$mount("#app")},7900:function(t,e,o){"use strict";var n=o("5126"),s=o.n(n);s.a},"85ec":function(t,e,o){},"8d1b":function(t,e,o){},beee:function(t,e,o){},e2e3:function(t,e,o){"use strict";var n=o("ef43"),s=o.n(n);s.a},ef43:function(t,e,o){}});
//# sourceMappingURL=app.8c480e55.js.map