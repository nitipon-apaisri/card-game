(function(t){function e(e){for(var n,i,a=e[0],c=e[1],u=e[2],d=0,m=[];d<a.length;d++)i=a[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&m.push(o[i][0]),o[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(m.length)m.shift()();return r.push.apply(r,u||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],n=!0,a=1;a<s.length;a++){var c=s[a];0!==o[c]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=s[0]))}return t}var n={},o={app:0},r=[];function i(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=n,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(s,n,function(e){return t[e]}.bind(null,n));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/card-game/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var l=c;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"2fd9":function(t,e,s){t.exports=s.p+"img/diamonds.c425ba06.svg"},"31e8":function(t,e,s){var n={"./clubs.svg":"bf20","./diamonds.svg":"2fd9","./dots.svg":"4a85","./hearts.svg":"6e1a","./replay.svg":"4729","./spades.svg":"a3b0"};function o(t){var e=r(t);return s(e)}function r(t){if(!s.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}o.keys=function(){return Object.keys(n)},o.resolve=r,t.exports=o,o.id="31e8"},"3cf1":function(t,e,s){"use strict";s("e758")},4729:function(t,e,s){t.exports=s.p+"img/replay.bc0ec2b5.svg"},"4a85":function(t,e,s){t.exports=s.p+"img/dots.da19a425.svg"},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("Alert",{staticClass:"alert"}),s("div",{staticClass:"container"},[s("div",{staticClass:"content"},[s("div",{staticClass:"score-board"},[s("Points")],1),s("div",{staticClass:"main-actions"},[s("Card",{on:{showActions:t.activedActions}}),s("Actions",{staticClass:"action-btns"})],1)])])],1)},r=[],i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal",on:{click:t.closeModal}},[s("section",{staticClass:"msg-box"},[s("h1",[t._v(t._s(t.Msg))]),s("button",{staticClass:"ok-btn",on:{click:t.ok}},[t._v("Ok")])])])},a=[],c={methods:{ok:function(){this.$root.okButt()},closeModal:function(){document.querySelector(".alert").style.display="none"}},computed:{Msg:function(){return this.$root.msg},Attempts:function(){return this.$root.maxAttempts}}},u=c,l=(s("3cf1"),s("2877")),d=Object(l["a"])(u,i,a,!1,null,"42d70108",null),m=d.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-display"},[n("div",{staticClass:"font-card"},[n("div",{staticClass:"card-inner"},[n("div",{staticClass:"top"},[n("img",{attrs:{src:s("31e8")("./"+t.Icon+".svg"),alt:"symbol"}}),n("h5",[t._v(t._s(t.CardValue))])]),n("div",{staticClass:"middle"},[n("img",{attrs:{src:s("31e8")("./"+t.Icon+".svg"),alt:"symbol"}})]),n("div",{staticClass:"bottom"},[n("img",{attrs:{src:s("31e8")("./"+t.Icon+".svg"),alt:"symbol"}}),n("h5",[t._v(t._s(t.CardValue))])])])]),n("div",{staticClass:"back-card",on:{click:function(e){return t.$emit("showActions")}}},[n("div",{staticClass:"card-inner"})])])},f=[],p={computed:{Icon:function(){return this.$root.symbol},CardValue:function(){return this.$root.cardNumber}}},b=p,v=(s("a1a3"),Object(l["a"])(b,h,f,!1,null,"10151132",null)),y=v.exports,g=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"actions"},[s("button",{staticClass:"lower",on:{click:t.lower}},[t._v("lower")]),s("button",{staticClass:"equal",on:{click:t.equal}},[t._v("equal")]),s("button",{staticClass:"higher",on:{click:t.higher}},[t._v("higher")])])},_=[],C={methods:{lower:function(){this.$root.lower()},higher:function(){this.$root.higher()},equal:function(){this.$root.equal()}}},w=C,x=(s("aa61"),Object(l["a"])(w,g,_,!1,null,"49317e19",null)),N=x.exports,k=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"score"},[s("div",{staticClass:"max-attempts"},[s("h5",[t._v("Attempts: "+t._s(t.Attempt))])]),s("div",{staticClass:"points"},[s("h5",[t._v("Points: "+t._s(t.Points))])])])},O=[],A={computed:{Attempt:function(){return this.$root.maxAttempts},Points:function(){return this.$root.points}}},$=A,S=Object(l["a"])($,k,O,!1,null,"372dcd35",null),j=S.exports,M={name:"App",components:{Card:y,Actions:N,Alert:m,Points:j},methods:{activedActions:function(){this.$root.start();var t=document.querySelector(".card-display");t.style.justifyContent="space-between";var e=document.querySelector(".font-card");e.style.display="block",document.querySelector(".action-btns").style.display="block"}}},q=M,P=(s("5c0b"),Object(l["a"])(q,o,r,!1,null,null,null)),E=P.exports;n["a"].config.productionTip=!1,new n["a"]({data:function(){return{cardNumber:5,symbol:"clubs",maxNumber:13,allSymbol:["clubs","diamonds","hearts","spades"],number:0,newNumber:0,previousNumber:0,msg:"",maxAttempts:5,points:0}},methods:{randomNumber:function(){return Math.floor(Math.random()*Math.floor(this.maxNumber)+1)},randomSymbol:function(){var t=Math.floor(Math.random()*this.allSymbol.length),e=this.allSymbol[t];return e},okButt:function(){document.querySelector(".alert").style.display="none",this.previousNumber=this.number,0==this.maxAttempts&&location.reload()},start:function(){this.msg="Welcome to Totoro",document.querySelector(".alert").style.display="block",document.querySelector(".score-board").style.display="block",this.cardNumber=this.randomNumber(),this.number=this.cardNumber,this.newNumber=this.randomNumber(),11==this.cardNumber?this.cardNumber="J":12==this.cardNumber?this.cardNumber="Q":13==this.cardNumber?this.cardNumber="K":1==this.cardNumber&&(this.cardNumber="A"),this.symbol=this.randomSymbol()},win:function(){this.points+=10,this.msg="You win"},lost:function(){this.msg="You lost",this.maxAttempts-=1,0==this.maxAttempts&&(this.msg="No more attempts, Goodbye 👋")},lower:function(){this.start(),this.previousNumber>this.number?this.win():this.lost()},higher:function(){this.start(),this.previousNumber<this.number?this.win():this.lost()},equal:function(){this.start(),this.previousNumber==this.number?this.win():this.lost()}},render:function(t){return t(E)}}).$mount("#app")},"57a5":function(t,e,s){},"5c0b":function(t,e,s){"use strict";s("9c0c")},"6e1a":function(t,e,s){t.exports=s.p+"img/hearts.b1eafaff.svg"},"9c0c":function(t,e,s){},a1a3:function(t,e,s){"use strict";s("cb5e")},a3b0:function(t,e,s){t.exports=s.p+"img/spades.18cf924a.svg"},aa61:function(t,e,s){"use strict";s("57a5")},bf20:function(t,e,s){t.exports=s.p+"img/clubs.7dc4b4c7.svg"},cb5e:function(t,e,s){},e758:function(t,e,s){}});
//# sourceMappingURL=app.c3e59ed8.js.map