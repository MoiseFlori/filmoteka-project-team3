!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},a=n.parcelRequiree8fd;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},n.parcelRequiree8fd=a),a.register("iE7OH",(function(t,n){var r,o;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var a={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)a[t[n]]=e[t[n]]},o=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),a.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}})),a.register("aNJCr",(function(t,n){var r;e(t.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var o={};function a(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var t=o[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return a(e[2])}return"/"}(),o[e]=t),t}})),a("iE7OH").register(JSON.parse('{"EVgbq":"index.19e95908.js","5hgNe":"nothing-just.ba058259.jpg","afjCc":"error-loading.ea87ebd9.gif","5UbS1":"index.43518253.css"}'));var i={};function c(e,t,n,r,o,a,i){try{var c=e[a](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,o)}Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){c(a,r,o,i,s,"next",e)}function s(e){c(a,r,o,i,s,"throw",e)}i(void 0)}))}};var s={},u=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var o=t&&t.prototype instanceof h?t:h,a=Object.create(o.prototype),i=new T(r||[]);return a._invoke=function(e,t,n){var r=d;return function(o,a){if(r===p)throw new Error("Generator is already running");if(r===v){if("throw"===o)throw a;return q()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=k(i,n);if(c){if(c===m)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var s=l(e,t,n);if("normal"===s.type){if(r=n.done?v:f,s.arg===m)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=v,n.method="throw",n.arg=s.arg)}}}(e,n,i),a}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var d="suspendedStart",f="suspendedYield",p="executing",v="completed",m={};function h(){}function g(){}function y(){}var b={};s(b,a,(function(){return this}));var w=Object.getPrototypeOf,E=w&&w(w(O([])));E&&E!==n&&r.call(E,a)&&(b=E);var L=y.prototype=h.prototype=Object.create(b);function x(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function _(e,t){function n(o,a,i,c){var s=l(e[o],e,a);if("throw"!==s.type){var u=s.arg,d=u.value;return d&&"object"==typeof d&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):t.resolve(d).then((function(e){u.value=e,i(u)}),(function(e){return n("throw",e,i,c)}))}c(s.arg)}var o;this._invoke=function(e,r){function a(){return new t((function(t,o){n(e,r,t,o)}))}return o=o?o.then(a,a):a()}}function k(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,k(e,n),"throw"===n.method))return m;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=l(r,e.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,m;var a=o.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,m):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function P(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(P,this),this.reset(!0)}function O(e){if(e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}return{next:q}}function q(){return{value:t,done:!0}}return g.prototype=y,s(L,"constructor",y),s(y,"constructor",g),g.displayName=s(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,s(e,c,"GeneratorFunction")),e.prototype=Object.create(L),e},e.awrap=function(e){return{__await:e}},x(_.prototype),s(_.prototype,i,(function(){return this})),e.AsyncIterator=_,e.async=function(t,n,r,o,a){void 0===a&&(a=Promise);var i=new _(u(t,n,r,o),a);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},x(L),s(L,c,"Generator"),s(L,a,(function(){return this})),s(L,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=O,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(S),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return c.type="throw",c.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),S(n),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;S(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:O(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),m}},e}(s);try{regeneratorRuntime=u}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=u:Function("r","regeneratorRuntime = r")(u)}var l={};Object.defineProperty(l,"__esModule",{value:!0}),l.default=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){f.default(e,t,n[t])}))}return e};var d,f=(d=a("hKHmD"))&&d.__esModule?d:{default:d};var p="https://api.themoviedb.org/3",v="21161239b69d8dd6ebeec5ac6086d760",m=[];function h(){return g.apply(this,arguments)}function g(){return(g=t(i)(t(s).mark((function e(){var n,r,o;return t(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(p,"/genre/movie/list?api_key=").concat(v,"&language=en-US"),e.prev=1,e.next=4,fetch(n);case 4:return r=e.sent,e.next=7,r.json();case 7:return(o=e.sent).genres&&(m=o.genres),e.abrupt("return",m);case 12:return e.prev=12,e.t0=e.catch(1),console.error("Eroare la încărcarea genurilor:",e.t0),e.abrupt("return",[]);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})))).apply(this,arguments)}function y(){return b.apply(this,arguments)}function b(){return(b=t(i)(t(s).mark((function e(){return t(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==m.length){e.next=3;break}return e.next=3,h();case 3:return e.abrupt("return",m);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var w=document.querySelector(".loader");function E(){w.classList.add("show"),setTimeout((function(){w.classList.remove("show")}),1e3)}document.getElementById("search-form").addEventListener("submit",(function(){E()}));var L=document.querySelector('[data-index="1"]'),x=document.querySelector('[data-index="2"]'),_=document.querySelector('[data-index="3"]'),k=document.querySelector('[data-index="4"]'),P=document.querySelector('[data-index="5"]'),S=document.querySelector(".first-button"),T=document.querySelector(".last-button"),O=document.querySelector(".pagination-container"),q=document.querySelector(".arrow-right"),I=document.querySelector(".arrow-left"),M=document.querySelector("#previous"),j=document.querySelector("#after"),N=1,H=20;function C(e){H=Math.max(e||1,1),O.style.display="flex";var t=[L,x,_,k,P];t.forEach((function(e){return e.hidden=!0}));for(var n=Math.min(H,5),r=0;r<n;r++)t[r].hidden=!1,t[r].textContent=r+1,t[r].classList.toggle("pagination--current",r+1===N);if(T.textContent=H,S.hidden=N<=3||H<=5,M.hidden=N<=3||H<=5,T.hidden=N>=H-2||H<=5,j.hidden=N>=H-2||H<=5,I.hidden=N<=1,q.hidden=N>=H,N>3&&H>5){var o=N-2;o+4>H&&(o=Math.max(1,H-4)),t.forEach((function(e,t){e.hidden||(e.textContent=o+t,e.classList.toggle("pagination--current",o+t===N))}))}}function B(){return(B=t(i)(t(s).mark((function e(n){var r,o;return t(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("BUTTON"!==(r=n.target).tagName){e.next=14;break}if(r.blur(),o=N,r.classList.contains("pagination-button")&&r.dataset.index?N=Number(r.textContent):r.classList.contains("arrow-right")&&N<H?N+=1:r.classList.contains("arrow-left")&&N>1?N-=1:r.classList.contains("first-button")?N=1:r.classList.contains("last-button")&&(N=H),o===N){e.next=14;break}if(window.scrollTo({top:0,behavior:"smooth"}),!qe){e.next=12;break}return e.next=10,xe(qe,N);case 10:e.next=14;break;case 12:return e.next=14,ke(N);case 14:E();case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function U(){N=1,C(H)}function D(){return R.apply(this,arguments)}function R(){return R=t(i)(t(s).mark((function e(){var n,r,o,a,i,c,u,d=arguments;return t(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=d.length>0&&void 0!==d[0]?d[0]:N,r=Math.min(Math.max(1,n),500),o="".concat(p,"/movie/popular?api_key=").concat(v,"&language=en-US&page=").concat(r),e.prev=3,e.next=6,fetch(o);case 6:return a=e.sent,e.next=9,a.json();case 9:if((i=e.sent).results&&0!==i.results.length){e.next=12;break}return e.abrupt("return",{results:[],total_pages:0});case 12:return e.next=14,y();case 14:return c=e.sent,u=i.results.map((function(e){return t(l)({},e,{genre_names:e.genre_ids.map((function(e){var t;return(null===(t=c.find((function(t){return t.id===e})))||void 0===t?void 0:t.name)||"Unknown"}))})})),e.abrupt("return",{results:u,total_pages:Math.min(i.total_pages,500)});case 19:return e.prev=19,e.t0=e.catch(3),e.abrupt("return",{results:[],total_pages:0});case 22:case"end":return e.stop()}}),e,null,[[3,19]])}))),R.apply(this,arguments)}function F(e){return A.apply(this,arguments)}function A(){return A=t(i)(t(s).mark((function e(n){var r,o,a,i,c,u,d,f,m=arguments;return t(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=m.length>1&&void 0!==m[1]?m[1]:1,o=Math.min(Math.max(1,r),500),a=new URLSearchParams({api_key:v,query:n,page:o,language:"en-US",include_adult:!1}),i="".concat(p,"/search/movie?").concat(a),e.prev=4,e.next=7,fetch(i);case 7:return c=e.sent,e.next=10,c.json();case 10:if((u=e.sent)&&u.results){e.next=13;break}return e.abrupt("return",{results:[],total_pages:0});case 13:return e.next=15,y();case 15:return d=e.sent,f=u.results.map((function(e){var n;return t(l)({},e,{genre_names:(null===(n=e.genre_ids)||void 0===n?void 0:n.map((function(e){var t;return(null===(t=d.find((function(t){return t.id===e})))||void 0===t?void 0:t.name)||"Unknown"})))||[]})})),e.abrupt("return",{results:f,total_pages:u.total_pages});case 20:return e.prev=20,e.t0=e.catch(4),e.abrupt("return",{results:[],total_pages:0});case 23:case"end":return e.stop()}}),e,null,[[4,20]])}))),A.apply(this,arguments)}function W(e){return G.apply(this,arguments)}function G(){return(G=t(i)(t(s).mark((function e(n){var r,o;return t(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(p,"/movie/").concat(n,"?api_key=").concat(v,"&language=en-US"),e.prev=1,e.next=4,fetch(r);case 4:if((o=e.sent).ok){e.next=7;break}throw new Error("Failed to fetch movie details");case 7:return e.next=9,o.json();case 9:return e.abrupt("return",e.sent);case 12:throw e.prev=12,e.t0=e.catch(1),e.t0;case 15:case"end":return e.stop()}}),e,null,[[1,12]])})))).apply(this,arguments)}function Q(e){return V.apply(this,arguments)}function V(){return(V=t(i)(t(s).mark((function e(n){var r,o,a,i;return t(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(p,"/movie/").concat(n,"/videos?api_key=").concat(v),e.prev=1,e.next=4,fetch(r);case 4:return o=e.sent,e.next=7,o.json();case 7:return a=e.sent,i=a.results.find((function(e){return"Trailer"===e.type&&"YouTube"===e.site})),e.abrupt("return",i?"https://www.youtube.com/embed/".concat(i.key):null);case 12:return e.prev=12,e.t0=e.catch(1),e.abrupt("return",null);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})))).apply(this,arguments)}O.addEventListener("click",(function(e){return B.apply(this,arguments)}));document.getElementById("search-form"),document.querySelector(".form-input");var J=document.querySelector(".movies");document.querySelector(".header"),document.querySelector(".menu__link-home"),document.querySelector(".menu__link-library"),document.querySelector(".modal__backdrop"),document.getElementById("modal"),document.querySelector(".warning-notification"),document.querySelector(".pagination-container");function z(){var e=document.getElementById("trailer-modal-container"),t=document.getElementById("trailer-backdrop"),n=document.getElementById("trailer-content");function r(){n.innerHTML="",e.classList.remove("open")}return t.addEventListener("click",r),document.addEventListener("keydown",(function(t){"Escape"===t.key&&e.classList.contains("open")&&r()})),function(t){n.innerHTML='\n      <iframe \n        src="'.concat(t,'" \n        frameborder="0" \n        allow="autoplay; encrypted-media" \n        allowfullscreen>\n      </iframe>'),e.classList.add("open"),E()}}function Y(e){return JSON.parse(localStorage.getItem(e))||[]}function K(e,t){return Y(e).some((function(e){return e.id===t}))}function $(e,t){var n=Y(e);K(e,t.id)?n=n.filter((function(e){return e.id!==t.id})):n.push(t),localStorage.setItem(e,JSON.stringify(n))}var X={currentPage:1,totalPages:1,itemsPerPage:9,currentItemsPerPage:9,whatPaginated:"local",whatchedOrQueue:"WATCHED"},Z=[];function ee(){var e=window.innerWidth;return e>=1024?9:e>=768?8:4}function te(e){Z=e||[];var t=document.querySelector(".library-list"),n=document.querySelector(".pagination");if(t.innerHTML="",n.innerHTML="",Z.length){var r=function(e,t){if(!e)return[];var n=(t-1)*(X.currentItemsPerPage=ee());return C(X.totalPages=Math.ceil(e.length/X.currentItemsPerPage)),e.slice(n,n+X.currentItemsPerPage)}(Z,X.currentPage),o="";r.forEach((function(e){o+=Ee(e)})),t.innerHTML=o,function(e){if(X.totalPages<=1)return;var t="";t+='\n    <button class="pagination-button arrow-left" '.concat(X.currentPage<=1?"hidden":"",'></button>\n    <button class="pagination-button first-button" ').concat(X.currentPage<=3?"hidden":"",'>1</button>\n    <button class="dots-btn" ').concat(X.currentPage<=3?"hidden":"",'><span class="dots" id="previous">...</span></button>\n  ');for(var n=Math.max(1,X.currentPage-2);n<=Math.min(X.totalPages,X.currentPage+2);n++)t+='\n      <button class="pagination-button '.concat(n===X.currentPage?"pagination--current":"",'" data-index="').concat(n,'">').concat(n,"</button>\n    ");t+='\n    <button class="dots-btn" '.concat(X.currentPage>=X.totalPages-2?"hidden":"",'><span class="dots" id="after">...</span></button>\n    <button class="pagination-button last-button" ').concat(X.currentPage>=X.totalPages-2?"hidden":"",">").concat(X.totalPages,'</button>\n    <button class="pagination-button arrow-right" ').concat(X.currentPage>=X.totalPages?"hidden":"","></button>\n  "),e.innerHTML=t,function(e){e.addEventListener("click",(function(e){var t=e.target;if("BUTTON"===t.tagName){var n=X.currentPage;t.classList.contains("arrow-right")&&X.currentPage<X.totalPages?n=X.currentPage+1:t.classList.contains("arrow-left")&&X.currentPage>1?n=X.currentPage-1:t.classList.contains("first-button")?n=1:t.classList.contains("last-button")?n=X.totalPages:t.dataset.index&&(n=Number(t.textContent)),n!==X.currentPage&&(X.currentPage=n,te(Z),window.scrollTo({top:0,behavior:"smooth"}))}}))}(e)}(n),t.addEventListener("click",(function(e){var t=e.target.closest(".movie_list_item");t&&ge(t.dataset.movieId)}))}else t.innerHTML='\n      <li class="watched-img">\n        <p class="watched-warning">No movies have been added yet. Let\'s go pick something to your liking</p>\n      </li>'}function ne(){var e,t,n,r,o;document.querySelector("#library-buttons").style.display="block",U(),te(Y("watched")),t=(e={onWatchedTabClick:function(){U(),te(Y("watched"))},onQueueTabClick:function(){U(),te(Y("queue"))}}).onWatchedTabClick,n=e.onQueueTabClick,r=document.querySelector("#watched-btn"),o=document.querySelector("#queue-btn"),r.addEventListener("click",(function(){U(),r.classList.add("library-btn-active"),o.classList.remove("library-btn-active"),t(),E()})),o.addEventListener("click",(function(){U(),o.classList.add("library-btn-active"),r.classList.remove("library-btn-active"),n(),E()}))}window.addEventListener("resize",(function(){var e=X.currentItemsPerPage,t=ee();e!==t&&Z.length>0&&(X.currentItemsPerPage=t,te(Z))}));var re=document.getElementById("library-btn"),oe=document.getElementById("home-btn"),ae=document.getElementById("search-form"),ie=document.getElementById("library-buttons"),ce=document.getElementById("watched-button"),se=document.getElementById("queue-button"),ue=document.querySelector(".gallery"),le=document.querySelector("#library-gallery"),de=document.querySelector(".theme-switcher"),fe="home";function pe(){return"library"===fe}function ve(){function e(){oe.classList.remove("active"),re.classList.remove("active")}function t(){fe="home",ae.style.display="block",ie.style.display="none",ue.style.display="block",le.style.display="none",e(),oe.classList.add("active"),de&&(de.style.display="block"),e(),oe.classList.add("active"),E()}oe.addEventListener("click",t),re.addEventListener("click",(function(){fe="library",ae.style.display="none",ie.style.display="flex",ue.style.display="none",le.style.display="block",e(),re.classList.add("active"),ce.classList.add("library-btn-active"),se.classList.remove("library-btn-active"),ne(),de&&(de.style.display="none"),E()})),t()}function me(e){ce.textContent=K("watched",e.id)?"REMOVE FROM WATCHED":"ADD TO WATCHED",se.textContent=K("queue",e.id)?"REMOVE FROM QUEUE":"ADD TO QUEUE",ce.onclick=function(){$("watched",e),ce.textContent=K("watched",e.id)?"REMOVE FROM WATCHED":"ADD TO WATCHED",pe()&&(ne(),he())},se.onclick=function(){$("queue",e),se.textContent=K("queue",e.id)?"REMOVE FROM QUEUE":"ADD TO QUEUE",pe()&&(ne(),he())}}function he(){var e=document.createElement("p");e.textContent="Library updated!",e.className="update-message",document.querySelector("#library-gallery").prepend(e),setTimeout((function(){e.remove()}),2e3)}function ge(e){return ye.apply(this,arguments)}function ye(){return ye=t(i)(t(s).mark((function e(n){var r,o,a,c,u,l,d,f,p,v,m,h,g,y,b,w,E,L;return t(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(h=function(e){var t,n,r;a.style.backgroundImage="url('https://image.tmdb.org/t/p/w500/".concat(e.poster_path||"","')"),c.textContent=e.title||"No Title";var o="movie__average--red";e.vote_average>=7?o="movie__average--green":e.vote_average>=5&&(o="movie__average--orange");var i=document.querySelector("#modal-movie-votes");i&&(i.innerHTML='\n        <span class="vote-average '.concat(o,'">\n          ').concat((null===(t=e.vote_average)||void 0===t?void 0:t.toFixed(1))||"N/A",'\n        </span>\n        <span class="vote-separator">/</span>\n        <span class="vote-count">\n          ').concat(e.vote_count||0,"\n        </span>\n      ")),u.textContent=(null===(n=e.popularity)||void 0===n?void 0:n.toFixed(1))||"N/A",l.textContent=e.original_title||"N/A",d.textContent=(null===(r=e.genres)||void 0===r?void 0:r.map((function(e){return e.name})).join(", "))||"Unknown",f.textContent=e.overview||"No description available.",p.onclick=function(){return g(e.id)},me(e)},g=function(e){return y.apply(this,arguments)},y=function(){return(y=t(i)(t(s).mark((function e(n){var r;return t(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Q(n);case 3:(r=e.sent)?v(r):alert("Trailer not available."),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error fetching trailer:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)},b=function(){document.body.classList.add("modal-open"),r.classList.add("open"),o.addEventListener("click",w),document.addEventListener("keydown",E),r.addEventListener("click",L)},w=function(){document.body.classList.remove("modal-open"),r.classList.remove("open"),o.removeEventListener("click",w),document.removeEventListener("keydown",E),r.removeEventListener("click",L)},E=function(e){"Escape"===e.key&&r.classList.contains("open")&&w()},L=function(e){document.getElementById("movie-details").contains(e.target)||w()},r=document.querySelector(".modal-wrapper"),o=document.querySelector(".backdrop"),a=document.getElementById("poster-section"),c=document.getElementById("movie-title"),document.getElementById("movie-votes"),u=document.getElementById("movie-popularity"),l=document.getElementById("original-title"),d=document.getElementById("movie-genre"),f=document.getElementById("movie-about"),p=document.getElementById("trailer-button"),v=z(),n){e.next=21;break}return console.error("No movie ID provided!"),e.abrupt("return");case 21:return e.prev=21,e.next=24,W(n);case 24:m=e.sent,h(m),b(),e.next=32;break;case 29:e.prev=29,e.t0=e.catch(21),console.error("Error fetching movie details:",e.t0);case 32:case 39:case"end":return e.stop()}}),e,null,[[21,29]])}))),ye.apply(this,arguments)}var be;be=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("5hgNe");var we;function Ee(e){var t="movie__average--red";e.vote_average>=7?t="movie__average--green":e.vote_average>=5&&(t="movie__average--orange");var n=e.poster_path?"https://image.tmdb.org/t/p/w500".concat(e.poster_path):"./images/no-image-available.jpg",r=e.poster_path?"".concat(e.title||""," movie poster"):"No poster available",o=e.genre_names||[],a=o.slice(0,2);o.length>2&&a.push("Other");var i=o.length>0?a.join(", "):"",c=void 0!==e.vote_average?e.vote_average.toFixed(1):"",s=e.release_date?new Date(e.release_date).getFullYear():"";return'\n    <li class="movie_list_item" data-movie-id="'.concat(e.id||"",'">\n      <div class="movie__cover-inner">\n        <img \n          class="movie__cover" \n          src="').concat(n,'" \n          alt="').concat(r,'" \n        />\n      </div>\n      <div class="movie__cover--darkened"></div>\n      <div class="movie-info">\n        ').concat(e.title?'<h3 class="movie-title">'.concat(e.title,"</h3>"):"","\n        ").concat(i||s?'<p class="movie-date">'.concat([i,s].filter(Boolean).join(" | "),"</p>"):"","\n        ").concat(c?'<div class="movie__average '.concat(t,'">').concat(c,"</div>"):"","\n      </div>\n    </li>\n  ")}function Le(){var e=window.innerWidth;return e>=1024?18:e>=768?16:20}function xe(e,t){return _e.apply(this,arguments)}function _e(){return(_e=t(i)(t(s).mark((function e(n,r){var o,a,i,c,u,l;return t(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F(n,r);case 3:if(o=e.sent,a=o.results,i=o.total_pages,a&&0!==a.length){e.next=11;break}return J.classList.add("error-state"),J.innerHTML='<div class="error-message">\n          <p>No movies found. Please try again later.</p>\n          <img src="'.concat(t(be),'" alt="Nothing" class="error-image" />\n        </div>'),C(0),e.abrupt("return");case 11:c=Le(),u=a.slice(0,c),l=u.map(Ee).join(""),J.innerHTML=l,C(i),e.next=23;break;case 18:e.prev=18,e.t0=e.catch(0),J.classList.add("error-state"),J.innerHTML='\n     <div class="error-message">\n       <p>Error loading movies. Please try again later.</p>\n       <img src="'.concat(t(we),'" alt="Error Loading" class="error-image" />\n     </div>\n   '),C(0);case 23:case"end":return e.stop()}}),e,null,[[0,18]])})))).apply(this,arguments)}function ke(){return Pe.apply(this,arguments)}function Pe(){return Pe=t(i)(t(s).mark((function e(){var n,r,o,a,i,c,u,l=arguments;return t(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=l.length>0&&void 0!==l[0]?l[0]:1,e.prev=1,e.next=4,D(n);case 4:if(r=e.sent,o=r.results,a=r.total_pages,o&&0!==o.length){e.next=12;break}return J.classList.add("error-state"),J.innerHTML='<div class="error-message">\n          <p>No movies found. Please try again later.</p>\n          <img src="'.concat(t(be),'" alt="Nothing" class="error-image" />\n        </div>'),C(0),e.abrupt("return");case 12:i=Le(),c=o.slice(0,i),u=c.map(Ee).join(""),J&&(J.innerHTML=u,C(a),J.addEventListener("click",(function(e){var t=e.target.closest(".movie_list_item");if(t){var n=t.dataset.movieId;n&&(ge(n),E())}}))),e.next=22;break;case 18:e.prev=18,e.t0=e.catch(1),J&&(J.classList.add("error-state"),J.innerHTML='\n        <div class="error-message">\n          <p>Error loading movies. Please try again later.</p>\n          <img src="'.concat(t(we),'" alt="Error Loading" class="error-image" />\n        </div>\n      ')),C(0);case 22:case"end":return e.stop()}}),e,null,[[1,18]])}))),Pe.apply(this,arguments)}we=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("afjCc"),window.addEventListener("resize",(function(){J.children.length>0&&(qe?xe(qe,N):ke(N))}));var Se=document.querySelector(".search"),Te=document.querySelector(".search-button"),Oe=document.querySelector(".loader"),qe="";Te.addEventListener("click",(function(e){e.preventDefault();var t=Se.value.trim();""!==t&&(qe=t,E(),xe(t,1).finally((function(){Oe.classList.remove("show")})),Se.value="",E())})),Se.addEventListener("keydown",(function(e){if("Enter"===e.key){e.preventDefault();var t=Se.value.trim();if(""===t)return;qe=t,E(),xe(t,1).finally((function(){Oe.classList.remove("show")})),Se.value=""}})),document.addEventListener("DOMContentLoaded",(function(){var e,t,n,r;e=document.getElementById("themeSwitcherCheckbox"),(t=localStorage.getItem("theme"))||(t="light",localStorage.setItem("theme",t)),document.body.classList.add("".concat(t,"-theme")),e.checked="dark"===t,e.addEventListener("change",(function(){var t=e.checked;document.body.classList.toggle("light-theme",!t),document.body.classList.toggle("dark-theme",t),localStorage.setItem("theme",t?"dark":"light")})),E(),ke(),ve(),window.onscroll=function(){var e=(document.body.scrollTop||document.documentElement.scrollTop)/(document.documentElement.scrollHeight-document.documentElement.clientHeight)*100;document.getElementById("progressBar").style.width=e+"%"},n=1.2*window.outerHeight,r=document.getElementById("backToTopButton"),window.addEventListener("scroll",(function(){document.documentElement.scrollTop>n?r.classList.add("active"):r.classList.remove("active")})),r.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})}))}))}();
//# sourceMappingURL=index.19e95908.js.map
