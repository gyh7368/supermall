(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0fdc66b5"],{"064a":function(t,e,n){"use strict";var r=n("2a9f"),o=n.n(r);o.a},"0fc9":function(t,e,n){var r=n("3a38"),o=Math.max,i=Math.min;t.exports=function(t,e){return t=r(t),t<0?o(t+e,0):i(t,e)}},1654:function(t,e,n){"use strict";var r=n("71c1")(!0);n("30f1")(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},1691:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},"1af6":function(t,e,n){var r=n("63b6");r(r.S,"Array",{isArray:n("9003")})},"1fc6":function(t,e,n){},"20fd":function(t,e,n){"use strict";var r=n("d9f6"),o=n("aebd");t.exports=function(t,e,n){e in t?r.f(t,e,o(0,n)):t[e]=n}},"241e":function(t,e,n){var r=n("25eb");t.exports=function(t){return Object(r(t))}},"25eb":function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},2994:function(t,e,n){"use strict";var r=n("3a4c"),o=n("5cc2"),i=(n("064a"),n("2877")),a=Object(i["a"])(o["default"],r["a"],r["b"],!1,null,null,null);e["default"]=a.exports},"2a9f":function(t,e,n){},"30f1":function(t,e,n){"use strict";var r=n("b8e3"),o=n("63b6"),i=n("9138"),a=n("35e8"),c=n("481b"),s=n("8f60"),u=n("45f2"),f=n("53e2"),l=n("5168")("iterator"),p=!([].keys&&"next"in[].keys()),d="@@iterator",h="keys",b="values",v=function(){return this};t.exports=function(t,e,n,m,y,g,x){s(n,e,m);var w,S,T,k=function(t){if(!p&&t in C)return C[t];switch(t){case h:return function(){return new n(this,t)};case b:return function(){return new n(this,t)}}return function(){return new n(this,t)}},L=e+" Iterator",_=y==b,O=!1,C=t.prototype,A=C[l]||C[d]||y&&C[y],j=A||k(y),I=y?_?k("entries"):j:void 0,M="Array"==e&&C.entries||A;if(M&&(T=f(M.call(new t)),T!==Object.prototype&&T.next&&(u(T,L,!0),r||"function"==typeof T[l]||a(T,l,v))),_&&A&&A.name!==b&&(O=!0,j=function(){return A.call(this)}),r&&!x||!p&&!O&&C[l]||a(C,l,j),c[e]=j,c[L]=v,y)if(w={values:_?j:k(b),keys:g?j:k(h),entries:I},x)for(S in w)S in C||i(C,S,w[S]);else o(o.P+o.F*(p||O),e,w);return w}},"32fc":function(t,e,n){var r=n("e53d").document;t.exports=r&&r.documentElement},"335c":function(t,e,n){var r=n("6b4c");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},"36c3":function(t,e,n){var r=n("335c"),o=n("25eb");t.exports=function(t){return r(o(t))}},3702:function(t,e,n){var r=n("481b"),o=n("5168")("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},"3a38":function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},"3a4c":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"feature"},[r("a",{attrs:{href:"https://act.mogujie.com/zzlx67"}},[r("img",{attrs:{src:n("5cbe")}})])])}];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o})},"40c3":function(t,e,n){var r=n("6b4c"),o=n("5168")("toStringTag"),i="Arguments"==r(function(){return arguments}()),a=function(t,e){try{return t[e]}catch(n){}};t.exports=function(t){var e,n,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=a(e=Object(t),o))?n:i?r(e):"Object"==(c=r(e))&&"function"==typeof e.callee?"Arguments":c}},"45f2":function(t,e,n){var r=n("d9f6").f,o=n("07e3"),i=n("5168")("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},"481b":function(t,e){t.exports={}},"4e7c":function(t,e,n){"use strict";var r=n("7ab6"),o=n.n(r);o.a},"4ee1":function(t,e,n){var r=n("5168")("iterator"),o=!1;try{var i=[7][r]();i["return"]=function(){o=!0},Array.from(i,function(){throw 2})}catch(a){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var i=[7],c=i[r]();c.next=function(){return{done:n=!0}},i[r]=function(){return c},t(i)}catch(a){}return n}},"50ed":function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},5168:function(t,e,n){var r=n("dbdb")("wks"),o=n("62a0"),i=n("e53d").Symbol,a="function"==typeof i,c=t.exports=function(t){return r[t]||(r[t]=a&&i[t]||(a?i:o)("Symbol."+t))};c.store=r},"53e2":function(t,e,n){var r=n("07e3"),o=n("241e"),i=n("5559")("IE_PROTO"),a=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},"549b":function(t,e,n){"use strict";var r=n("d864"),o=n("63b6"),i=n("241e"),a=n("b0dc"),c=n("3702"),s=n("b447"),u=n("20fd"),f=n("7cd6");o(o.S+o.F*!n("4ee1")(function(t){Array.from(t)}),"Array",{from:function(t){var e,n,o,l,p=i(t),d="function"==typeof this?this:Array,h=arguments.length,b=h>1?arguments[1]:void 0,v=void 0!==b,m=0,y=f(p);if(v&&(b=r(b,h>2?arguments[2]:void 0,2)),void 0==y||d==Array&&c(y))for(e=s(p.length),n=new d(e);e>m;m++)u(n,m,v?b(p[m],m):p[m]);else for(l=y.call(p),n=new d;!(o=l.next()).done;m++)u(n,m,v?a(l,b,[o.value,m],!0):o.value);return n.length=m,n}})},"54a1":function(t,e,n){n("6c1c"),n("1654"),t.exports=n("95d5")},5559:function(t,e,n){var r=n("dbdb")("keys"),o=n("62a0");t.exports=function(t){return r[t]||(r[t]=o(t))}},"5b4e":function(t,e,n){var r=n("36c3"),o=n("b447"),i=n("0fc9");t.exports=function(t){return function(e,n,a){var c,s=r(e),u=o(s.length),f=i(a,u);if(t&&n!=n){while(u>f)if(c=s[f++],c!=c)return!0}else for(;u>f;f++)if((t||f in s)&&s[f]===n)return t||f||0;return!t&&-1}}},"5cbe":function(t,e,n){t.exports=n.p+"img/recommend_bg.794b6628.jpg"},"5cc2":function(t,e,n){"use strict";var r=n("63b8"),o=n.n(r);e["default"]=o.a},"62a0":function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},"63b8":function(t,e){},6879:function(t,e,n){"use strict";var r=n("c4ae"),o=n.n(r);o.a},"6b4c":function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},"6c1c":function(t,e,n){n("c367");for(var r=n("e53d"),o=n("35e8"),i=n("481b"),a=n("5168")("toStringTag"),c="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),s=0;s<c.length;s++){var u=c[s],f=r[u],l=f&&f.prototype;l&&!l[a]&&o(l,a,u),i[u]=i.Array}},"71c1":function(t,e,n){var r=n("3a38"),o=n("25eb");t.exports=function(t){return function(e,n){var i,a,c=String(o(e)),s=r(n),u=c.length;return s<0||s>=u?t?"":void 0:(i=c.charCodeAt(s),i<55296||i>56319||s+1===u||(a=c.charCodeAt(s+1))<56320||a>57343?t?c.charAt(s):i:t?c.slice(s,s+2):a-56320+(i-55296<<10)+65536)}}},7423:function(t,e,n){"use strict";var r=n("1fc6"),o=n.n(r);o.a},"774e":function(t,e,n){t.exports=n("d2d5")},"7ab6":function(t,e,n){},"7cd6":function(t,e,n){var r=n("40c3"),o=n("5168")("iterator"),i=n("481b");t.exports=n("584a").getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},"7e90":function(t,e,n){var r=n("d9f6"),o=n("e4ae"),i=n("c3a1");t.exports=n("8e60")?Object.defineProperties:function(t,e){o(t);var n,a=i(e),c=a.length,s=0;while(c>s)r.f(t,n=a[s++],e[n]);return t}},8436:function(t,e){t.exports=function(){}},"8f60":function(t,e,n){"use strict";var r=n("a159"),o=n("aebd"),i=n("45f2"),a={};n("35e8")(a,n("5168")("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(a,{next:o(1,n)}),i(t,e+" Iterator")}},9003:function(t,e,n){var r=n("6b4c");t.exports=Array.isArray||function(t){return"Array"==r(t)}},9138:function(t,e,n){t.exports=n("35e8")},"95d5":function(t,e,n){var r=n("40c3"),o=n("5168")("iterator"),i=n("481b");t.exports=n("584a").isIterable=function(t){var e=Object(t);return void 0!==e[o]||"@@iterator"in e||i.hasOwnProperty(r(e))}},a159:function(t,e,n){var r=n("e4ae"),o=n("7e90"),i=n("1691"),a=n("5559")("IE_PROTO"),c=function(){},s="prototype",u=function(){var t,e=n("1ec9")("iframe"),r=i.length,o="<",a=">";e.style.display="none",n("32fc").appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write(o+"script"+a+"document.F=Object"+o+"/script"+a),t.close(),u=t.F;while(r--)delete u[s][i[r]];return u()};t.exports=Object.create||function(t,e){var n;return null!==t?(c[s]=r(t),n=new c,c[s]=null,n[a]=t):n=u(),void 0===e?n:o(n,e)}},a745:function(t,e,n){t.exports=n("f410")},b0dc:function(t,e,n){var r=n("e4ae");t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(a){var i=t["return"];throw void 0!==i&&r(i.call(t)),a}}},b3d7:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[n("NavBar",{staticClass:"home-nav"},[n("div",{attrs:{slot:"center"},slot:"center"},[t._v("购物街")])]),n("TabControl",{directives:[{name:"show",rawName:"v-show",value:t.isTabFixed,expression:"isTabFixed"}],ref:"tabControl1",staticClass:"tabControl",attrs:{titles:["流行","新款","精选"]},on:{tabClick:t.tabClick}}),n("Scroll",{ref:"scroll",staticClass:"content",attrs:{probeType:3,pullUpLoad:!0},on:{scroll:t.contentScroll,pullingUp:t.loadMore}},[n("HomeSwper",{attrs:{banners:t.banners},on:{swiperImageLoad:t.swiperImageLoad}}),n("HomeRecommendView",{attrs:{recommends:t.recommends}}),n("FeatureView"),n("TabControl",{ref:"tabControl2",attrs:{titles:["流行","新款","精选"]},on:{tabClick:t.tabClick}}),n("GoodsList",{attrs:{goods:t.goods[t.currentType].list}})],1),n("BackTop",{directives:[{name:"show",rawName:"v-show",value:t.isShowBackTop,expression:"isShowBackTop"}],nativeOn:{click:function(e){return t.backClick(e)}}})],1)},o=[],i=n("a745"),a=n.n(i);function c(t){if(a()(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}var s=n("774e"),u=n.n(s),f=n("c8bb"),l=n.n(f);function p(t){if(l()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return u()(t)}function d(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function h(t){return c(t)||p(t)||d()}var b=n("a7ac"),v=n("5d17"),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab-control"},t._l(t.titles,function(e,r){return n("div",{key:r,staticClass:"tab-control-item",class:{active:r===t.currentIndex},on:{click:function(e){return t.itemClick(r)}}},[n("span",[t._v(t._s(e))])])}),0)},y=[],g={props:{titles:{type:Array,default:function(){return[]}}},data:function(){return{currentIndex:0}},methods:{itemClick:function(t){this.currentIndex=t,this.$emit("tabClick",t)}}},x=g,w=(n("4e7c"),n("2877")),S=Object(w["a"])(x,m,y,!1,null,null,null),T=S.exports,k=n("74bd"),L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Swiper",t._l(t.banners,function(e,r){return n("SwiperItem",{key:r},[n("a",{attrs:{href:e.link}},[n("img",{attrs:{src:e.image},on:{load:t.imageLoad}})])])}),1)},_=[],O=n("dc2c"),C={props:{banners:{type:Array,default:function(){return[]}}},data:function(){return{isLoad:!1}},components:{Swiper:O["a"],SwiperItem:O["b"]},methods:{imageLoad:function(){this.isLoad||(this.$emit("swiperImageLoad"),this.isLoad=!0)}}},A=C,j=Object(w["a"])(A,L,_,!1,null,"3f52bf00",null),I=j.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"recommend"},t._l(t.recommends,function(e,r){return n("div",{key:r,staticClass:"recommend-item"},[n("a",{attrs:{href:e.link}},[n("img",{attrs:{src:e.image}}),n("div",[t._v("\n\t\t\t\t"+t._s(e.title)+"\n\t\t\t")])])])}),0)},$=[],E={props:{recommends:{type:Array,default:function(){return[]}}}},H=E,P=(n("6879"),Object(w["a"])(H,M,$,!1,null,null,null)),G=P.exports,F=n("2994"),N=n("1bab");function V(){return Object(N["a"])({url:"/home/multidata"})}function R(t,e){return Object(N["a"])({url:"/home/data",params:{type:t,page:e}})}var B=n("eecb"),D={name:"Home",components:{NavBar:b["a"],Scroll:v["a"],TabControl:T,GoodsList:k["a"],HomeSwper:I,HomeRecommendView:G,FeatureView:F["default"]},data:function(){return{banners:[],recommends:[],goods:{pop:{page:0,list:[]},new:{page:0,list:[]},sell:{page:0,list:[]}},currentType:"pop",isShowBackTop:!1,taboffsetTop:0,isTabFixed:!1,saveY:0}},mixins:[B["b"],B["a"]],created:function(){this.getHomeMultidata(),this.getHomeGoods("pop"),this.getHomeGoods("new"),this.getHomeGoods("sell")},mounted:function(){},activated:function(){this.$refs.scroll.refresh(),this.$refs.scroll.scrollTo(0,this.saveY,0)},deactivated:function(){this.saveY=this.$refs.scroll.getScrollY(),this.$bus.$off("itemImageLoad",this.homeItemListener)},destroyed:function(){},methods:{tabClick:function(t){switch(t){case 0:this.currentType="pop";break;case 1:this.currentType="new";break;case 2:this.currentType="sell";break}this.$refs.tabControl1.currentIndex=t,this.$refs.tabControl2.currentIndex=t},contentScroll:function(t){this.ShowBackTop(t),this.isTabFixed=t.y<-this.taboffsetTop},loadMore:function(){this.getHomeGoods(this.currentType)},scrollLoad:function(){this.$refs.scroll.scroll.refresh()},swiperImageLoad:function(){this.taboffsetTop=this.$refs.tabControl2.$el.offsetTop},getHomeMultidata:function(){var t=this;V().then(function(e){t.banners=e.data.banner.list,t.recommends=e.data.recommend.list})},getHomeGoods:function(t){var e=this,n=this.goods[t].page+1;R(t,n).then(function(n){var r;(r=e.goods[t].list).push.apply(r,h(n.data.list)),e.goods[t].page+=1,e.$refs.scroll.finishPullUp()})}}},z=D,U=(n("7423"),Object(w["a"])(z,r,o,!1,null,"295d9684",null));e["default"]=U.exports},b447:function(t,e,n){var r=n("3a38"),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},b8e3:function(t,e){t.exports=!0},c367:function(t,e,n){"use strict";var r=n("8436"),o=n("50ed"),i=n("481b"),a=n("36c3");t.exports=n("30f1")(Array,"Array",function(t,e){this._t=a(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):o(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},c3a1:function(t,e,n){var r=n("e6f3"),o=n("1691");t.exports=Object.keys||function(t){return r(t,o)}},c4ae:function(t,e,n){},c8bb:function(t,e,n){t.exports=n("54a1")},d2d5:function(t,e,n){n("1654"),n("549b"),t.exports=n("584a").Array.from},dbdb:function(t,e,n){var r=n("584a"),o=n("e53d"),i="__core-js_shared__",a=o[i]||(o[i]={});(t.exports=function(t,e){return a[t]||(a[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n("b8e3")?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},e6f3:function(t,e,n){var r=n("07e3"),o=n("36c3"),i=n("5b4e")(!1),a=n("5559")("IE_PROTO");t.exports=function(t,e){var n,c=o(t),s=0,u=[];for(n in c)n!=a&&r(c,n)&&u.push(n);while(e.length>s)r(c,n=e[s++])&&(~i(u,n)||u.push(n));return u}},f410:function(t,e,n){n("1af6"),t.exports=n("584a").Array.isArray}}]);
//# sourceMappingURL=chunk-0fdc66b5.77300632.js.map