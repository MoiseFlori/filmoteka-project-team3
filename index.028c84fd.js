!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequiree8fd;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequiree8fd=o),o.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}}));var a={};function i(e,t,n,r,o,a,i){try{var c=e[a](i),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,o)}Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function c(e){i(a,r,o,c,u,"next",e)}function u(e){i(a,r,o,c,u,"throw",e)}c(void 0)}))}};var c={},u=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,n){return e[t]=n}}function s(e,t,n,r){var o=t&&t.prototype instanceof m?t:m,a=Object.create(o.prototype),i=new T(r||[]);return a._invoke=function(e,t,n){var r=d;return function(o,a){if(r===f)throw new Error("Generator is already running");if(r===v){if("throw"===o)throw a;return j()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=L(i,n);if(c){if(c===h)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var u=l(e,t,n);if("normal"===u.type){if(r=n.done?v:p,u.arg===h)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=v,n.method="throw",n.arg=u.arg)}}}(e,n,i),a}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=s;var d="suspendedStart",p="suspendedYield",f="executing",v="completed",h={};function m(){}function y(){}function g(){}var w={};u(w,a,(function(){return this}));var b=Object.getPrototypeOf,x=b&&b(b(q([])));x&&x!==n&&r.call(x,a)&&(w=x);var E=g.prototype=m.prototype=Object.create(w);function _(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function k(e,t){function n(o,a,i,c){var u=l(e[o],e,a);if("throw"!==u.type){var s=u.arg,d=s.value;return d&&"object"==typeof d&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):t.resolve(d).then((function(e){s.value=e,i(s)}),(function(e){return n("throw",e,i,c)}))}c(u.arg)}var o;this._invoke=function(e,r){function a(){return new t((function(t,o){n(e,r,t,o)}))}return o=o?o.then(a,a):a()}}function L(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,L(e,n),"throw"===n.method))return h;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var o=l(r,e.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,h;var a=o.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,h):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,h)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function q(e){if(e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}return{next:j}}function j(){return{value:t,done:!0}}return y.prototype=g,u(E,"constructor",g),u(g,"constructor",y),y.displayName=u(g,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,u(e,c,"GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},_(k.prototype),u(k.prototype,i,(function(){return this})),e.AsyncIterator=k,e.async=function(t,n,r,o,a){void 0===a&&(a=Promise);var i=new k(s(t,n,r,o),a);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},_(E),u(E,c,"Generator"),u(E,a,(function(){return this})),u(E,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=q,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(S),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return c.type="throw",c.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=r.call(i,"catchLoc"),s=r.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),S(n),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;S(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:q(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),h}},e}(c);try{regeneratorRuntime=u}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=u:Function("r","regeneratorRuntime = r")(u)}var s={};Object.defineProperty(s,"__esModule",{value:!0}),s.default=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){d.default(e,t,n[t])}))}return e};var l,d=(l=o("hKHmD"))&&l.__esModule?l:{default:l};var p="https://api.themoviedb.org/3",f="21161239b69d8dd6ebeec5ac6086d760",v=[];function h(){return m.apply(this,arguments)}function m(){return(m=e(a)(e(c).mark((function t(){var n,r,o;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(p,"/genre/movie/list?api_key=").concat(f,"&language=en-US"),e.prev=1,e.next=4,fetch(n);case 4:return r=e.sent,e.next=7,r.json();case 7:return(o=e.sent).genres&&(v=o.genres),e.abrupt("return",v);case 12:return e.prev=12,e.t0=e.catch(1),console.error("Eroare la încărcarea genurilor:",e.t0),e.abrupt("return",[]);case 16:case"end":return e.stop()}}),t,null,[[1,12]])})))).apply(this,arguments)}function y(){return g.apply(this,arguments)}function g(){return(g=e(a)(e(c).mark((function t(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==v.length){e.next=3;break}return e.next=3,h();case 3:return e.abrupt("return",v);case 4:case"end":return e.stop()}}),t)})))).apply(this,arguments)}var w=document.querySelector('[data-index="1"]'),b=document.querySelector('[data-index="2"]'),x=document.querySelector('[data-index="3"]'),E=document.querySelector('[data-index="4"]'),_=document.querySelector('[data-index="5"]'),k=document.querySelector(".first-button"),L=document.querySelector(".last-button"),O=document.querySelector(".pagination-container"),S=document.querySelector(".arrow-right"),T=document.querySelector(".arrow-left"),q=document.querySelector("#previous"),j=document.querySelector("#after"),M=1,I=20;function N(e){I=Math.min(e||20,20),O.style.display="flex";var t=[w,b,x,E,_];t.forEach((function(e){return e.hidden=!0}));for(var n=0;n<Math.min(I,5);n++)t[n].hidden=!1,t[n].textContent=n+1,t[n].classList.toggle("pagination--current",n+1===M);if(L.textContent=I,k.hidden=M<=3||I<=5,q.hidden=M<=3||I<=5,L.hidden=M>=I-2||I<=5,j.hidden=M>=I-2||I<=5,T.hidden=M<=1,S.hidden=M>=I,M>3&&I>5){var r=M-2;r+4>I&&(r=I-4),t.forEach((function(e,t){e.hidden||(e.textContent=r+t,e.classList.toggle("pagination--current",r+t===M))}))}}function B(){return(B=e(a)(e(c).mark((function t(n){var r,o;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("BUTTON"!==(r=n.target).tagName){e.next=14;break}if(r.blur(),o=M,r.classList.contains("pagination-button")&&r.dataset.index?M=Number(r.textContent):r.classList.contains("arrow-right")&&M<I?M+=1:r.classList.contains("arrow-left")&&M>1?M-=1:r.classList.contains("first-button")?M=1:r.classList.contains("last-button")&&(M=I),o===M){e.next=14;break}if(window.scrollTo({top:0,behavior:"smooth"}),!$){e.next=12;break}return e.next=10,V($,M);case 10:e.next=14;break;case 12:return e.next=14,z(M);case 14:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function D(){return U.apply(this,arguments)}function U(){return U=e(a)(e(c).mark((function t(){var n,r,o,a,i,u,l,d=arguments;return e(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=d.length>0&&void 0!==d[0]?d[0]:M,console.log("Fetching popular movies for page:",n),r="".concat(p,"/movie/popular?api_key=").concat(f,"&language=en-US&page=").concat(n),t.prev=3,t.next=6,fetch(r);case 6:return o=t.sent,t.next=9,o.json();case 9:if((a=t.sent).results&&0!==a.results.length){t.next=13;break}return console.error("No popular movies found:",a),t.abrupt("return",{results:[],total_pages:0});case 13:return t.next=15,y();case 15:return i=t.sent,u=a.results.map((function(t){return e(s)({},t,{genre_names:t.genre_ids.map((function(e){var t;return(null===(t=i.find((function(t){return t.id===e})))||void 0===t?void 0:t.name)||"Unknown"}))})})),l=Math.min(a.total_pages,20),t.abrupt("return",{results:u,total_pages:l});case 21:return t.prev=21,t.t0=t.catch(3),console.error("Error fetching popular movies:",t.t0),t.abrupt("return",{results:[],total_pages:0});case 25:case"end":return t.stop()}}),t,null,[[3,21]])}))),U.apply(this,arguments)}function C(e){return F.apply(this,arguments)}function F(){return F=e(a)(e(c).mark((function t(n){var r,o,a,i,u,l,d,v,h=arguments;return e(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=h.length>1&&void 0!==h[1]?h[1]:1,o=new URLSearchParams({api_key:f,query:n,page:r,language:"en-US",include_adult:!1}),a="".concat(p,"/search/movie?").concat(o),t.prev=3,t.next=6,fetch(a);case 6:return i=t.sent,t.next=9,i.json();case 9:if((u=t.sent)&&u.results){t.next=12;break}return t.abrupt("return",{results:[],total_pages:0});case 12:return t.next=14,y();case 14:return l=t.sent,d=u.results.map((function(t){var n;return e(s)({},t,{genre_names:(null===(n=t.genre_ids)||void 0===n?void 0:n.map((function(e){var t;return(null===(t=l.find((function(t){return t.id===e})))||void 0===t?void 0:t.name)||"Unknown"})))||[]})})),v=Math.min(u.total_pages,20),t.abrupt("return",{results:d,total_pages:v});case 20:return t.prev=20,t.t0=t.catch(3),console.error("Error fetching movies:",t.t0),t.abrupt("return",{results:[],total_pages:0});case 24:case"end":return t.stop()}}),t,null,[[3,20]])}))),F.apply(this,arguments)}function H(e){return A.apply(this,arguments)}function A(){return(A=e(a)(e(c).mark((function t(n){var r,o,a;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(p,"/movie/").concat(n,"?api_key=").concat(f,"&language=en-US"),e.prev=1,e.next=4,fetch(r);case 4:if((o=e.sent).ok){e.next=7;break}throw new Error("Failed to fetch movie details");case 7:return e.next=9,o.json();case 9:return a=e.sent,e.abrupt("return",a);case 13:throw e.prev=13,e.t0=e.catch(1),console.error("Error fetching movie details:",e.t0),e.t0;case 17:case"end":return e.stop()}}),t,null,[[1,13]])})))).apply(this,arguments)}function P(e){return R.apply(this,arguments)}function R(){return(R=e(a)(e(c).mark((function t(n){var r,o,a;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(p,"/movie/").concat(n,"/videos?api_key=").concat(f));case 3:return r=e.sent,e.next=6,r.json();case 6:return o=e.sent,a=o.results.find((function(e){return"Trailer"===e.type&&"YouTube"===e.site})),e.abrupt("return",a?"https://www.youtube.com/embed/".concat(a.key):null);case 11:return e.prev=11,e.t0=e.catch(0),console.error("Error fetching trailer URL:",e.t0),e.abrupt("return",null);case 15:case"end":return e.stop()}}),t,null,[[0,11]])})))).apply(this,arguments)}O.addEventListener("click",(function(e){return B.apply(this,arguments)})),window.addEventListener("resize",(function(){var e=9;return window.innerWidth>=1024?e=9:window.innerWidth>=768&&window.innerWidth<1024?e=8:window.innerWidth<768&&(e=4),e}));document.getElementById("search-form"),document.querySelector(".form-input");var G=document.querySelector(".movies");document.querySelector(".header"),document.querySelector(".menu__link-home"),document.querySelector(".menu__link-library"),document.querySelector(".modal__backdrop"),document.getElementById("modal"),document.querySelector(".warning-notification"),document.querySelector(".pagination-container");function W(e){var t="movie__average--red";e.vote_average>=7?t="movie__average--green":e.vote_average>=5&&(t="movie__average--orange");var n=e.poster_path?"https://image.tmdb.org/t/p/w500".concat(e.poster_path):"./images/no-image-available.jpg",r=e.poster_path?"".concat(e.title||""," movie poster"):"No poster available",o=e.genre_names||[],a=o.slice(0,2);o.length>2&&a.push("Other");var i=o.length>0?a.join(", "):"",c=void 0!==e.vote_average?e.vote_average.toFixed(1):"",u=e.release_date?new Date(e.release_date).getFullYear():"";return'\n    <li class="movie_list_item" data-movie-id="'.concat(e.id||"",'">\n      <div class="movie__cover-inner">\n        <img \n          class="movie__cover" \n          src="').concat(n,'" \n          alt="').concat(r,'" \n        />\n      </div>\n      <div class="movie__cover--darkened"></div>\n      <div class="movie-info">\n        ').concat(e.title?'<h3 class="movie-title">'.concat(e.title,"</h3>"):"","\n        ").concat(i||u?'<p class="movie-date">'.concat([i,u].filter(Boolean).join(" | "),"</p>"):"","\n        ").concat(c?'<div class="movie__average '.concat(t,'">').concat(c,"</div>"):"","\n      </div>\n    </li>\n  ")}function Q(){var e=window.innerWidth;return e>=1024?9:e>=768?8:4}function V(e,t){return Y.apply(this,arguments)}function Y(){return(Y=e(a)(e(c).mark((function t(n,r){var o,a,i,u,s,l;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C(n,r);case 3:if(o=e.sent,a=o.results,i=o.total_pages,a&&0!==a.length){e.next=10;break}return G.innerHTML="<p>No movies found.</p>",N(0),e.abrupt("return");case 10:u=Q(),s=a.slice(0,u),l=s.map(W).join(""),G.innerHTML=l,N(i),e.next=22;break;case 17:e.prev=17,e.t0=e.catch(0),console.error("Error displaying searched movies:",e.t0),G.innerHTML="<p>Error loading movies.</p>",N(0);case 22:case"end":return e.stop()}}),t,null,[[0,17]])})))).apply(this,arguments)}function z(){return J.apply(this,arguments)}function J(){return J=e(a)(e(c).mark((function t(){var n,r,o,a,i,u,s,l=arguments;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=l.length>0&&void 0!==l[0]?l[0]:1,console.log("Rendering movies for page:",n),e.prev=2,e.next=5,D(n);case 5:if(r=e.sent,o=r.results,a=r.total_pages,o&&0!==o.length){e.next=13;break}return console.warn("No movies found"),G.innerHTML="<p>No movies found.</p>",N(0),e.abrupt("return");case 13:console.log("Movies fetched:",o.length),i=Q(),u=o.slice(0,i),s=u.map(W).join(""),G?(G.innerHTML=s,N(a)):console.error("Gallery element not found"),e.next=25;break;case 20:e.prev=20,e.t0=e.catch(2),console.error("Error displaying movies:",e.t0),G&&(G.innerHTML="<p>Error loading movies.</p>"),N(0);case 25:case"end":return e.stop()}}),t,null,[[2,20]])}))),J.apply(this,arguments)}window.addEventListener("resize",(function(){G.children.length>0&&($?V($,M):z(M))}));var K,X=document.querySelector(".search"),Z=document.querySelector(".search-button"),$="";function ee(){var e=document.getElementById("trailer-modal-container"),t=document.getElementById("trailer-backdrop"),n=document.getElementById("trailer-content");function r(){n.innerHTML="",e.classList.remove("open")}return t.addEventListener("click",r),document.addEventListener("keydown",(function(t){"Escape"===t.key&&e.classList.contains("open")&&r()})),function(t){n.innerHTML='\n      <iframe \n        src="'.concat(t,'" \n        frameborder="0" \n        allow="autoplay; encrypted-media" \n        allowfullscreen>\n      </iframe>'),e.classList.add("open")}}function te(e){return JSON.parse(localStorage.getItem(e))||[]}function ne(e,t){return te(e).some((function(e){return e.id===t}))}function re(e,t){var n=te(e);ne(e,t.id)?n=n.filter((function(e){return e.id!==t.id})):n.push(t),localStorage.setItem(e,JSON.stringify(n))}Z.addEventListener("click",(K=e(a)(e(c).mark((function t(n){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),""!==X.value.trim()){e.next=3;break}return e.abrupt("return");case 3:return $=X.value.trim(),e.next=6,V($,1);case 6:X.value="";case 7:case"end":return e.stop()}}),t)}))),function(e){return K.apply(this,arguments)})),X.addEventListener("keydown",function(){var t=e(a)(e(c).mark((function t(n){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("Enter"!==n.key){e.next=8;break}if(n.preventDefault(),""!==X.value.trim()){e.next=4;break}return e.abrupt("return");case 4:return $=X.value.trim(),e.next=7,V($,1);case 7:X.value="";case 8:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());var oe=document.getElementById("library-btn"),ae=document.getElementById("home-btn"),ie=document.getElementById("search-form"),ce=document.getElementById("library-buttons"),ue=document.getElementById("watched-button"),se=document.getElementById("queue-button");function le(e){ue.textContent=ne("watched",e.id)?"REMOVE FROM WATCHED":"ADD TO WATCHED",se.textContent=ne("queue",e.id)?"REMOVE FROM QUEUE":"ADD TO QUEUE",ue.onclick=function(){re("watched",e),ue.textContent=ne("watched",e.id)?"REMOVE FROM WATCHED":"ADD TO WATCHED"},se.onclick=function(){re("queue",e),se.textContent=ne("queue",e.id)?"REMOVE FROM QUEUE":"ADD TO QUEUE"}}function de(){function e(){ie.style.display="block",ce.style.display="none",ae.classList.add("active"),oe.classList.remove("active")}ae.addEventListener("click",e),oe.addEventListener("click",(function(){ie.style.display="none",ce.style.display="flex",oe.classList.add("active"),ae.classList.remove("active")})),e()}function pe(){return fe.apply(this,arguments)}function fe(){return fe=e(a)(e(c).mark((function t(){var n,r,o,i,u,s,l,d,p,f,v,h,m,y,g,w,b,x,E,_,k,L,O;return e(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return h=function(e){n.innerHTML="";var t=e.map((function(e){return W(e)})).join("");n.innerHTML=t},m=function(e){return y.apply(this,arguments)},y=function(){return(y=e(a)(e(c).mark((function t(n){var r;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,H(n);case 3:r=e.sent,g(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error fetching movie details:",e.t0);case 10:case"end":return e.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)},g=function(e){var t,n,r;i.style.backgroundImage="url('https://image.tmdb.org/t/p/w500/".concat(e.poster_path||"","')"),u.textContent=e.title||"No Title";var o="movie__average--red";e.vote_average>=7?o="movie__average--green":e.vote_average>=5&&(o="movie__average--orange");var a=document.querySelector("#modal-movie-votes");a&&(a.innerHTML='\n    <span class="vote-average '.concat(o,'">\n      ').concat((null===(t=e.vote_average)||void 0===t?void 0:t.toFixed(1))||"N/A",'\n    </span>\n    <span class="vote-separator">/</span>\n    <span class="vote-count">\n      ').concat(e.vote_count||0,"\n    </span>\n  ")),s.textContent=(null===(n=e.popularity)||void 0===n?void 0:n.toFixed(1))||"N/A",l.textContent=e.original_title||"N/A",d.textContent=(null===(r=e.genres)||void 0===r?void 0:r.map((function(e){return e.name})).join(", "))||"Unknown",p.textContent=e.overview||"No description available.",f.onclick=function(){return w(e.id)},le(e),x()},w=function(e){return b.apply(this,arguments)},b=function(){return(b=e(a)(e(c).mark((function t(n){var r;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P(n);case 3:(r=e.sent)?v(r):alert("Trailer not available."),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error fetching trailer:",e.t0);case 10:case"end":return e.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)},x=function(){document.body.classList.add("modal-open"),r.classList.add("open"),o.addEventListener("click",E),document.addEventListener("keydown",_),r.addEventListener("click",k)},E=function(){document.body.classList.remove("modal-open"),r.classList.remove("open"),o.removeEventListener("click",E),document.removeEventListener("keydown",_),r.removeEventListener("click",k)},_=function(e){"Escape"===e.key&&r.classList.contains("open")&&E()},k=function(e){document.getElementById("movie-details").contains(e.target)||E()},n=document.querySelector(".movies"),r=document.querySelector(".modal-wrapper"),o=document.querySelector(".backdrop"),i=document.getElementById("poster-section"),u=document.getElementById("movie-title"),document.getElementById("movie-votes"),s=document.getElementById("movie-popularity"),l=document.getElementById("original-title"),d=document.getElementById("movie-genre"),p=document.getElementById("movie-about"),f=document.getElementById("trailer-button"),v=ee(),n.addEventListener("click",(function(e){var t=e.target.closest(".movie_list_item");if(t){var n=t.getAttribute("data-movie-id");m(n)}})),t.prev=33,t.next=36,D();case 36:L=t.sent,O=Array.isArray(L)?L:L.results||[],h(O),t.next=44;break;case 41:t.prev=41,t.t0=t.catch(33),console.error("Error fetching popular movies:",t.t0);case 44:case"end":return t.stop()}}),t,null,[[33,41]])}))),fe.apply(this,arguments)}document.addEventListener("DOMContentLoaded",(function(){z(),pe(),de()}))}();
//# sourceMappingURL=index.028c84fd.js.map
