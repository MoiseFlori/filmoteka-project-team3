!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequiree8fd;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequiree8fd=o),o.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return r.default(e)};var n,r=(n=o("8NIkP"))&&n.__esModule?n:{default:n}})),o.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}})),o.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),o.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return r.default(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r.default(e,t)};var n,r=(n=o("8NIkP"))&&n.__esModule?n:{default:n}})),o.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}}));var a={};function i(e,t,n,r,o,a,i){try{var c=e[a](i),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,o)}Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function c(e){i(a,r,o,c,u,"next",e)}function u(e){i(a,r,o,c,u,"throw",e)}c(void 0)}))}};var c={};Object.defineProperty(c,"__esModule",{value:!0}),c.default=function(e){return u.default(e)||s.default(e)||d.default(e)||l.default()};var u=f(o("kMC0W")),s=f(o("7AJDX")),l=f(o("8CtQK")),d=f(o("auk6i"));function f(e){return e&&e.__esModule?e:{default:e}}var p={},v=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,n){return e[t]=n}}function s(e,t,n,r){var o=t&&t.prototype instanceof m?t:m,a=Object.create(o.prototype),i=new O(r||[]);return a._invoke=function(e,t,n){var r=d;return function(o,a){if(r===p)throw new Error("Generator is already running");if(r===v){if("throw"===o)throw a;return M()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=k(i,n);if(c){if(c===h)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var u=l(e,t,n);if("normal"===u.type){if(r=n.done?v:f,u.arg===h)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=v,n.method="throw",n.arg=u.arg)}}}(e,n,i),a}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=s;var d="suspendedStart",f="suspendedYield",p="executing",v="completed",h={};function m(){}function g(){}function y(){}var x={};u(x,a,(function(){return this}));var b=Object.getPrototypeOf,w=b&&b(b(N([])));w&&w!==n&&r.call(w,a)&&(x=w);var _=y.prototype=m.prototype=Object.create(x);function E(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function L(e,t){function n(o,a,i,c){var u=l(e[o],e,a);if("throw"!==u.type){var s=u.arg,d=s.value;return d&&"object"==typeof d&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):t.resolve(d).then((function(e){s.value=e,i(s)}),(function(e){return n("throw",e,i,c)}))}c(u.arg)}var o;this._invoke=function(e,r){function a(){return new t((function(t,o){n(e,r,t,o)}))}return o=o?o.then(a,a):a()}}function k(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,k(e,n),"throw"===n.method))return h;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var o=l(r,e.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,h;var a=o.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,h):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,h)}function C(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(C,this),this.reset(!0)}function N(e){if(e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}return{next:M}}function M(){return{value:t,done:!0}}return g.prototype=y,u(_,"constructor",y),u(y,"constructor",g),g.displayName=u(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,u(e,c,"GeneratorFunction")),e.prototype=Object.create(_),e},e.awrap=function(e){return{__await:e}},E(L.prototype),u(L.prototype,i,(function(){return this})),e.AsyncIterator=L,e.async=function(t,n,r,o,a){void 0===a&&(a=Promise);var i=new L(s(t,n,r,o),a);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},E(_),u(_,c,"Generator"),u(_,a,(function(){return this})),u(_,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=N,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(S),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return c.type="throw",c.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=r.call(i,"catchLoc"),s=r.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),S(n),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;S(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:N(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),h}},e}(p);try{regeneratorRuntime=v}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=v:Function("r","regeneratorRuntime = r")(v)}var h={};Object.defineProperty(h,"__esModule",{value:!0}),h.default=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){g.default(e,t,n[t])}))}return e};var m,g=(m=o("hKHmD"))&&m.__esModule?m:{default:m};var y="https://api.themoviedb.org/3",x="21161239b69d8dd6ebeec5ac6086d760";function b(){return w.apply(this,arguments)}function w(){return(w=e(a)(e(p).mark((function t(){var n,r,o;return e(p).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(y,"/genre/movie/list?api_key=").concat(x,"&language=en-US"),e.prev=1,e.next=4,fetch(n);case 4:return r=e.sent,e.next=7,r.json();case 7:if((o=e.sent).genres&&0!==o.genres.length){e.next=10;break}return e.abrupt("return",[]);case 10:return e.abrupt("return",o.genres);case 13:return e.prev=13,e.t0=e.catch(1),e.abrupt("return",[]);case 16:case"end":return e.stop()}}),t,null,[[1,13]])})))).apply(this,arguments)}document.getElementById("search-form"),document.querySelector(".search__input");var _=document.querySelector(".movies"),E=(document.querySelector(".header"),document.querySelector(".menu__link-home"),document.querySelector(".menu__link-library"),document.querySelector(".modal__backdrop"),document.getElementById("modal"),document.querySelector(".warning-notification"),document.querySelector(".pagination-container"),document.querySelector('[data-index="1"]')),L=document.querySelector('[data-index="2"]'),k=document.querySelector('[data-index="3"]'),C=document.querySelector('[data-index="4"]'),S=document.querySelector('[data-index="5"]'),O=document.querySelector(".first-button"),N=document.querySelector(".last-button"),M=document.querySelector(".pagination-container"),j=document.querySelector(".arrow-right"),q=document.querySelector(".arrow-left"),T=document.querySelector("#previous"),I=document.querySelector("#after");M.addEventListener("click",(function(e){"BUTTON"===e.target.tagName&&(Number(e.target.textContent)&&(A=Number(e.target.textContent)),T.hidden=!0,I.hidden=!0,e.target.classList.contains("pagination-button")&&(P.forEach((function(e){return e.classList.remove("pagination--current")})),e.target.classList.add("pagination--current")),e.target.classList.contains("arrow-right")&&A<20&&(P.forEach((function(e){return e.classList.remove("pagination--current")})),E.classList.add("pagination--current"),E.textContent=Number(E.textContent)+5,L.textContent=Number(L.textContent)+5,k.textContent=Number(k.textContent)+5,C.textContent=Number(C.textContent)+5,S.textContent=Number(S.textContent)+5,A=E.textContent),e.target.classList.contains("arrow-left")&&A>=5&&(P.forEach((function(e){return e.classList.remove("pagination--current")})),E.textContent=Number(E.textContent)-5,L.textContent=Number(L.textContent)-5,k.textContent=Number(k.textContent)-5,C.textContent=Number(C.textContent)-5,S.textContent=Number(S.textContent)-5,S.classList.add("pagination--current"),A=S.textContent),e.target.classList.contains("first-button")&&(P.forEach((function(e){return e.classList.remove("pagination--current")})),E.textContent=1,L.textContent=2,k.textContent=3,C.textContent=4,S.textContent=5,E.classList.add("pagination--current"),A=E.textContent,q.hidden=!0,T.hidden=!0,O.hidden=!0),e.target.classList.contains("last-button")&&(P.forEach((function(e){return e.classList.remove("pagination--current")})),E.textContent=Number(N.textContent)-4,L.textContent=Number(N.textContent)-3,k.textContent=Number(N.textContent)-2,C.textContent=Number(N.textContent)-1,S.textContent=N.textContent,S.classList.add("pagination--current"),A=S.textContent,j.hidden=!0,I.hidden=!0,N.hidden=!0),Number(A)>5?(q.hidden=!1,T.hidden=!1,O.hidden=!1):(q.hidden=!0,T.hidden=!0,O.hidden=!0),Number(A)<16&&(j.hidden=!1,I.hidden=!1,N.hidden=!1),_.innerHTML="",window.scrollTo({top:0,behavior:"smooth"}),$())}));var A=1,P=document.querySelectorAll(".pagination-button");T.hidden=!0,q.hidden=!0,O.hidden=!0;var D=9;function U(){return window.innerWidth>=1024?D=9:window.innerWidth>=768&&window.innerWidth<1024?D=8:window.innerWidth<768&&(D=4),D}var H=[];function B(){return F.apply(this,arguments)}function F(){return(F=e(a)(e(p).mark((function t(){return e(p).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==H.length){e.next=4;break}return e.next=3,b();case 3:H=e.sent;case 4:return e.abrupt("return",H);case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function R(){return W.apply(this,arguments)}function W(){return(W=e(a)(e(p).mark((function t(){var n,r,o,a,i;return e(p).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(y,"/movie/popular?api_key=").concat(x,"&language=en-US&page=").concat(A),t.prev=1,t.next=4,fetch(n);case 4:return r=t.sent,t.next=7,r.json();case 7:if((o=t.sent).results&&0!==o.results.length){t.next=11;break}return console.error("No popular movies found:",o),t.abrupt("return",[]);case 11:return t.next=13,B();case 13:return a=t.sent,i=o.results.map((function(t){return e(h)({},t,{genre_names:t.genre_ids.map((function(e){var t;return(null===(t=a.find((function(t){return t.id===e})))||void 0===t?void 0:t.name)||"Unknown"}))})})),t.abrupt("return",i);case 18:return t.prev=18,t.t0=t.catch(1),console.error("Error fetching popular movies:",t.t0),t.abrupt("return",[]);case 22:case"end":return t.stop()}}),t,null,[[1,18]])})))).apply(this,arguments)}function G(e){return Q.apply(this,arguments)}function Q(){return(Q=e(a)(e(p).mark((function t(n){var r,o,a;return e(p).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(y,"/movie/").concat(n,"?api_key=").concat(x,"&language=en-US"),e.prev=1,console.log("Fetching details for movie ID: ".concat(n)),e.next=5,fetch(r);case 5:if((o=e.sent).ok){e.next=8;break}throw new Error("Failed to fetch movie details");case 8:return e.next=10,o.json();case 10:return a=e.sent,console.log("Movie details fetched:",a),e.abrupt("return",a);case 15:throw e.prev=15,e.t0=e.catch(1),console.error("Error fetching movie details:",e.t0),e.t0;case 19:case"end":return e.stop()}}),t,null,[[1,15]])})))).apply(this,arguments)}function J(e,t){return K.apply(this,arguments)}function K(){return(K=e(a)(e(p).mark((function t(n,r){var o,a,i,c;return e(p).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=new URLSearchParams({api_key:x,query:n,page:r,language:"en-US",include_adult:!1}),a="".concat(y,"/search/movie?").concat(o),e.prev=2,console.log("searchMovies(".concat(n,",").concat(r,") with URL: ").concat(a)),e.next=6,fetch(a);case 6:return i=e.sent,e.next=9,i.json();case 9:if(c=e.sent,console.log(c),!1!==c.success){e.next=14;break}return console.error("The resource you requested could not be found."),e.abrupt("return",!1);case 14:return e.abrupt("return",c);case 17:return e.prev=17,e.t0=e.catch(2),console.error("Error fetching movie by Id:",e.t0),e.abrupt("return",[]);case 21:case"end":return e.stop()}}),t,null,[[2,17]])})))).apply(this,arguments)}function V(e){return Y.apply(this,arguments)}function Y(){return(Y=e(a)(e(p).mark((function t(n){var r,o,a;return e(p).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(n,"/videos?api_key=").concat(x));case 3:return r=e.sent,e.next=6,r.json();case 6:return o=e.sent,a=o.results.find((function(e){return"Trailer"===e.type&&"YouTube"===e.site})),e.abrupt("return",a?"https://www.youtube.com/embed/".concat(a.key):null);case 11:return e.prev=11,e.t0=e.catch(0),console.error("Error fetching trailer URL:",e.t0),e.abrupt("return",null);case 15:case"end":return e.stop()}}),t,null,[[0,11]])})))).apply(this,arguments)}function X(e){var t="movie__average--red";e.vote_average>=7?t="movie__average--green":e.vote_average>=5&&(t="movie__average--orange");var n=e.poster_path?"https://image.tmdb.org/t/p/w500".concat(e.poster_path):"./images/no-image-available.jpg",r=e.poster_path?"".concat(e.title," movie poster"):"No poster available for ".concat(e.title);void 0===e.genre_names&&(e.genre_names=[]);var o=e.genre_names.slice(0,2);e.genre_names.length>2&&o.push("Other");var a=o.join(", ");return'\n    <li class="movie_list_item" data-movie-id="'.concat(e.id,'">\n      <div class="movie__cover-inner">\n        <img \n          class="movie__cover" \n          src="').concat(n,'" \n          alt="').concat(r,'" \n        />\n      </div>\n      <div class="movie__cover--darkened"></div>\n        <div class="movie-info">\n          <h3 class="movie-title">').concat(e.title,'</h3>\n          <p class="movie-date">').concat(a," | ").concat(new Date(e.release_date).getFullYear(),'</p>\n                  <div class="movie__average ').concat(t,'">\n                    ').concat(e.vote_average.toFixed(1),"\n          </div>\n      </div>\n    </li>\n  ")}function $(){return z.apply(this,arguments)}function z(){return(z=e(a)(e(p).mark((function t(){var n,r,o,a;return e(p).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R();case 3:if(n=e.sent,r=document.querySelector(".movies"),n&&0!==n.length){e.next=9;break}return console.error("Niciun film pentru afișare."),r.innerHTML="<p>No movies found.</p>",e.abrupt("return");case 9:o=U(),a=n.slice(0,o).map(X).join(""),r.innerHTML=a,e.next=18;break;case 14:e.prev=14,e.t0=e.catch(0),console.error("Eroare la afișarea filmelor:",e.t0),document.querySelector(".movies").innerHTML="<p>Error loading movies.</p>";case 18:case"end":return e.stop()}}),t,null,[[0,14]])})))).apply(this,arguments)}function Z(e,t){return ee.apply(this,arguments)}function ee(){return(ee=e(a)(e(p).mark((function t(n,r){var o,a,i,c;return e(p).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("Apelare la funcția renderSearchedMovies..."),e.next=4,J(n,r);case 4:if(o=e.sent,a=document.querySelector(".movies"),i=o.results,o.page,o.total_pages,console.log(o),i&&0!==i.length){e.next=14;break}return console.error("Niciun film pentru afișare."),a.innerHTML="<p>No movies found.</p>",e.abrupt("return");case 14:c=i.map(X).join(""),console.log("HTML-ul generat pentru filme:",c),a.innerHTML=c,e.next=23;break;case 19:e.prev=19,e.t0=e.catch(0),console.error("Eroare la afișarea filmelor:",e.t0),document.querySelector(".movies").innerHTML="<p>Error loading movies.</p>";case 23:case"end":return e.stop()}}),t,null,[[0,19]])})))).apply(this,arguments)}console.log("*** Loaded searchbar.js");var te=document.querySelector(".search-field"),ne=document.querySelector(".search-button"),re=document.querySelector(".pagination");function oe(){var e=document.getElementById("trailer-modal-container"),t=document.getElementById("trailer-backdrop"),n=document.getElementById("trailer-content");function r(){n.innerHTML="",e.classList.remove("open")}return t.addEventListener("click",r),document.addEventListener("keydown",(function(t){"Escape"===t.key&&e.classList.contains("open")&&r()})),function(t){n.innerHTML='\n      <iframe \n        src="'.concat(t,'" \n        frameborder="0" \n        allow="autoplay; encrypted-media" \n        allowfullscreen>\n      </iframe>'),e.classList.add("open")}}function ae(e){return JSON.parse(localStorage.getItem(e))||[]}function ie(e,t){return ae(e).some((function(e){return e.id===t}))}function ce(e,t){var n=ae(e);ie(e,t.id)?n=n.filter((function(e){return e.id!==t.id})):n.push(t),localStorage.setItem(e,JSON.stringify(n))}function ue(e){var t=document.getElementById("watched-button"),n=document.getElementById("queue-button");t.textContent=ie("watched",e.id)?"REMOVE FROM WATCHED":"ADD TO WATCHED",n.textContent=ie("queue",e.id)?"REMOVE FROM QUEUE":"ADD TO QUEUE",t.onclick=function(){ce("watched",e),t.textContent=ie("watched",e.id)?"REMOVE FROM WATCHED":"ADD TO WATCHED"},n.onclick=function(){ce("queue",e),n.textContent=ie("queue",e.id)?"REMOVE FROM QUEUE":"ADD TO QUEUE"}}function se(){return le.apply(this,arguments)}function le(){return le=e(a)(e(p).mark((function t(){var n,r,o,i,c,u,s,l,d,f,v,h,m,g,y,x,b,w,_,E,L,k;return e(p).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return h=function(e){n.innerHTML="";var t=e.map((function(e){return X(e)})).join("");n.innerHTML=t},m=function(e){return g.apply(this,arguments)},g=function(){return(g=e(a)(e(p).mark((function t(n){var r;return e(p).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,G(n);case 3:r=e.sent,y(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error fetching movie details:",e.t0);case 10:case"end":return e.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)},y=function(e){var t,n,r;i.style.backgroundImage="url('https://image.tmdb.org/t/p/w500/".concat(e.poster_path||"","')"),c.textContent=e.title||"No Title";var o="movie__average--red";e.vote_average>=7?o="movie__average--green":e.vote_average>=5&&(o="movie__average--orange");var a=document.querySelector("#modal-movie-votes");a&&(a.innerHTML='\n    <span class="vote-average '.concat(o,'">\n      ').concat((null===(t=e.vote_average)||void 0===t?void 0:t.toFixed(1))||"N/A",'\n    </span>\n    <span class="vote-separator">/</span>\n    <span class="vote-count">\n      ').concat(e.vote_count||0,"\n    </span>\n  ")),u.textContent=(null===(n=e.popularity)||void 0===n?void 0:n.toFixed(1))||"N/A",s.textContent=e.original_title||"N/A",l.textContent=(null===(r=e.genres)||void 0===r?void 0:r.map((function(e){return e.name})).join(", "))||"Unknown",d.textContent=e.overview||"No description available.",f.onclick=function(){return x(e.id)},ue(e),w()},x=function(e){return b.apply(this,arguments)},b=function(){return(b=e(a)(e(p).mark((function t(n){var r;return e(p).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,V(n);case 3:(r=e.sent)?v(r):alert("Trailer not available."),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error fetching trailer:",e.t0);case 10:case"end":return e.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)},w=function(){document.body.classList.add("modal-open"),r.classList.add("open"),o.addEventListener("click",_),document.addEventListener("keydown",E),r.addEventListener("click",L)},_=function(){document.body.classList.remove("modal-open"),r.classList.remove("open"),o.removeEventListener("click",_),document.removeEventListener("keydown",E),r.removeEventListener("click",L)},E=function(e){"Escape"===e.key&&r.classList.contains("open")&&_()},L=function(e){document.getElementById("movie-details").contains(e.target)||_()},n=document.querySelector(".movies"),r=document.querySelector(".modal-wrapper"),o=document.querySelector(".backdrop"),i=document.getElementById("poster-section"),c=document.getElementById("movie-title"),document.getElementById("movie-votes"),u=document.getElementById("movie-popularity"),s=document.getElementById("original-title"),l=document.getElementById("movie-genre"),d=document.getElementById("movie-about"),f=document.getElementById("trailer-button"),v=oe(),n.addEventListener("click",(function(e){var t=e.target.closest(".movie_list_item");if(t){var n=t.getAttribute("data-movie-id");m(n)}})),t.next=35,R();case 35:k=t.sent,h(k);case 37:case"end":return t.stop()}}),t)}))),le.apply(this,arguments)}console.log(re),te.addEventListener("click",(function(e){e.preventDefault();Z(te.value,1)})),ne.addEventListener("click",(function(e){e.preventDefault();Z(te.value,1)})),document.addEventListener("DOMContentLoaded",(function(){$(),se()}))}();
//# sourceMappingURL=index.c9bdbc1b.js.map
