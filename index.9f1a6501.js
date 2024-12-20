let e=[];async function t(){return 0===e.length&&await async function(){try{const t=await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=21161239b69d8dd6ebeec5ac6086d760&language=en-US"),n=await t.json();return n.genres&&(e=n.genres),e}catch(e){return console.error("Eroare la încărcarea genurilor:",e),[]}}(),e}const n=document.querySelector(".loader");function o(){n.classList.add("show"),setTimeout((()=>{n.classList.remove("show")}),1e3)}document.getElementById("search-form").addEventListener("submit",(()=>{o()}));const r=document.querySelector('[data-index="1"]'),a=document.querySelector('[data-index="2"]'),i=document.querySelector('[data-index="3"]'),c=document.querySelector('[data-index="4"]'),s=document.querySelector('[data-index="5"]'),l=document.querySelector(".first-button"),d=document.querySelector(".last-button"),u=document.querySelector(".pagination-container"),m=document.querySelector(".arrow-right"),y=document.querySelector(".arrow-left"),g=document.querySelector("#previous"),v=document.querySelector("#after");let p=1,h=20;function f(e){h=Math.min(e||20,20),u.style.display="flex";const t=[r,a,i,c,s];t.forEach((e=>e.hidden=!0));for(let e=0;e<Math.min(h,5);e++)t[e].hidden=!1,t[e].textContent=e+1,t[e].classList.toggle("pagination--current",e+1===p);if(d.textContent=h,l.hidden=p<=3||h<=5,g.hidden=p<=3||h<=5,d.hidden=p>=h-2||h<=5,v.hidden=p>=h-2||h<=5,y.hidden=p<=1,m.hidden=p>=h,p>3&&h>5){let e=p-2;e+4>h&&(e=h-4),t.forEach(((t,n)=>{t.hidden||(t.textContent=e+n,t.classList.toggle("pagination--current",e+n===p))}))}}async function E(e=p){console.log("Fetching popular movies for page:",e);const n=`https://api.themoviedb.org/3/movie/popular?api_key=21161239b69d8dd6ebeec5ac6086d760&language=en-US&page=${e}`;try{const e=await fetch(n),o=await e.json();if(!o.results||0===o.results.length)return console.error("No popular movies found:",o),{results:[],total_pages:0};const r=await t(),a=o.results.map((e=>({...e,genre_names:e.genre_ids.map((e=>r.find((t=>t.id===e))?.name||"Unknown"))})));return{results:a,total_pages:Math.min(o.total_pages,20)}}catch(e){return console.error("Error fetching popular movies:",e),{results:[],total_pages:0}}}async function b(e,n=1){const o=`https://api.themoviedb.org/3/search/movie?${new URLSearchParams({api_key:"21161239b69d8dd6ebeec5ac6086d760",query:e,page:n,language:"en-US",include_adult:!1})}`;try{const e=await fetch(o),n=await e.json();if(!n||!n.results)return{results:[],total_pages:0};const r=await t(),a=n.results.map((e=>({...e,genre_names:e.genre_ids?.map((e=>r.find((t=>t.id===e))?.name||"Unknown"))||[]})));return{results:a,total_pages:Math.min(n.total_pages,20)}}catch(e){return console.error("Error fetching movies:",e),{results:[],total_pages:0}}}async function w(e){const t=`https://api.themoviedb.org/3/movie/${e}?api_key=21161239b69d8dd6ebeec5ac6086d760&language=en-US`;try{const e=await fetch(t);if(!e.ok)throw new Error("Failed to fetch movie details");return await e.json()}catch(e){throw console.error("Error fetching movie details:",e),e}}async function L(e){try{const t=await fetch(`https://api.themoviedb.org/3/movie/${e}/videos?api_key=21161239b69d8dd6ebeec5ac6086d760`),n=(await t.json()).results.find((e=>"Trailer"===e.type&&"YouTube"===e.site));return n?`https://www.youtube.com/embed/${n.key}`:null}catch(e){return console.error("Error fetching trailer URL:",e),null}}u.addEventListener("click",(async function(e){const t=e.target;if("BUTTON"===t.tagName){t.blur();const e=p;t.classList.contains("pagination-button")&&t.dataset.index?p=Number(t.textContent):t.classList.contains("arrow-right")&&p<h?p+=1:t.classList.contains("arrow-left")&&p>1?p-=1:t.classList.contains("first-button")?p=1:t.classList.contains("last-button")&&(p=h),e!==p&&(window.scrollTo({top:0,behavior:"smooth"}),ee?await V(ee,p):await J(p))}o()})),window.addEventListener("resize",(function(){let e=20;return(window.innerWidth>=1024||window.innerWidth>=768&&window.innerWidth<1024||window.innerWidth<768)&&(e=20),e}));document.getElementById("search-form"),document.querySelector(".form-input");const _=document.querySelector(".movies");document.querySelector(".header"),document.querySelector(".menu__link-home"),document.querySelector(".menu__link-library"),document.querySelector(".modal__backdrop"),document.getElementById("modal"),document.querySelector(".warning-notification"),document.querySelector(".pagination-container");function k(){const e=document.getElementById("trailer-modal-container"),t=document.getElementById("trailer-backdrop"),n=document.getElementById("trailer-content");function r(){n.innerHTML="",e.classList.remove("open")}return t.addEventListener("click",r),document.addEventListener("keydown",(t=>{"Escape"===t.key&&e.classList.contains("open")&&r()})),function(t){n.innerHTML=`\n      <iframe \n        src="${t}" \n        frameborder="0" \n        allow="autoplay; encrypted-media" \n        allowfullscreen>\n      </iframe>`,e.classList.add("open"),o()}}function S(e){return JSON.parse(localStorage.getItem(e))||[]}function q(e,t){return S(e).some((e=>e.id===t))}async function T(e,n){let o=S(e);if(q(e,n.id))o=o.filter((e=>e.id!==n.id));else{const e=await t(),r={...n,genre_names:n.genre_ids?.map((t=>e.find((e=>e.id===t))?.name||"Unknown Genre"))||[]};o.push(r)}localStorage.setItem(e,JSON.stringify(o))}async function I(e){const n=document.querySelector(".library-list");if(n.innerHTML="",e&&0!==e.length)try{const o=await t(),r=e.map((e=>({...e,genre_names:Array.isArray(e.genre_ids)?e.genre_ids.map((e=>o.find((t=>t.id===e))?.name||"Unknown Genre")):[]})));let a="";r.forEach((e=>{a+=G(e)})),n.innerHTML=`<ul class="movies">${a}</ul>`,n.addEventListener("click",(e=>{const t=e.target.closest(".movie_list_item");if(!t)return;z(t.dataset.movieId)}))}catch(e){console.error("Error loading genres for library movies:",e),n.innerHTML="<p>Error loading movies. Please try again later.</p>"}else n.innerHTML="<p>No movies found.</p>"}function M({onWatchedTabClick:e,onQueueTabClick:t}){const n=document.querySelector("#watched-btn"),r=document.querySelector("#queue-btn");n.addEventListener("click",(()=>{n.classList.add("library-btn-active"),r.classList.remove("library-btn-active"),e(),o()})),r.addEventListener("click",(()=>{r.classList.add("library-btn-active"),n.classList.remove("library-btn-active"),t(),o()}))}function x(){document.querySelector("#library-buttons").style.display="block",I(S("watched")),M({onWatchedTabClick:()=>{I(S("watched"))},onQueueTabClick:()=>{I(S("queue"))}})}const B=document.getElementById("library-btn"),C=document.getElementById("home-btn"),$=document.getElementById("search-form"),H=document.getElementById("library-buttons"),U=document.getElementById("watched-button"),N=document.getElementById("queue-button"),D=document.querySelector(".gallery"),A=document.querySelector("#library-gallery"),O=document.querySelector(".theme-switcher");let j="home";function R(){return"library"===j}function W(){function e(){C.classList.remove("active"),B.classList.remove("active")}function t(){j="home",$.style.display="block",H.style.display="none",D.style.display="block",A.style.display="none",e(),C.classList.add("active"),O&&(O.style.display="block"),e(),C.classList.add("active"),o()}C.addEventListener("click",t),B.addEventListener("click",(function(){j="library",$.style.display="none",H.style.display="flex",D.style.display="none",A.style.display="block",e(),B.classList.add("active"),U.classList.add("library-btn-active"),N.classList.remove("library-btn-active"),x(),O&&(O.style.display="none"),o()})),t()}function F(e){U.textContent=q("watched",e.id)?"REMOVE FROM WATCHED":"ADD TO WATCHED",N.textContent=q("queue",e.id)?"REMOVE FROM QUEUE":"ADD TO QUEUE",U.onclick=()=>{T("watched",e),U.textContent=q("watched",e.id)?"REMOVE FROM WATCHED":"ADD TO WATCHED",R()&&(x(),Q())},N.onclick=()=>{T("queue",e),N.textContent=q("queue",e.id)?"REMOVE FROM QUEUE":"ADD TO QUEUE",R()&&(x(),Q())}}function Q(){const e=document.createElement("p");e.textContent="Library updated!",e.className="update-message",document.querySelector("#library-gallery").prepend(e),setTimeout((()=>{e.remove()}),2e3)}async function z(e){const t=document.querySelector(".modal-wrapper"),n=document.querySelector(".backdrop"),o=document.getElementById("poster-section"),r=document.getElementById("movie-title"),a=(document.getElementById("movie-votes"),document.getElementById("movie-popularity")),i=document.getElementById("original-title"),c=document.getElementById("movie-genre"),s=document.getElementById("movie-about"),l=document.getElementById("trailer-button"),d=k();if(e)try{!function(e){o.style.backgroundImage=`url('https://image.tmdb.org/t/p/w500/${e.poster_path||""}')`,r.textContent=e.title||"No Title";let t="movie__average--red";e.vote_average>=7?t="movie__average--green":e.vote_average>=5&&(t="movie__average--orange");const n=document.querySelector("#modal-movie-votes");n&&(n.innerHTML=`\n        <span class="vote-average ${t}">\n          ${e.vote_average?.toFixed(1)||"N/A"}\n        </span>\n        <span class="vote-separator">/</span>\n        <span class="vote-count">\n          ${e.vote_count||0}\n        </span>\n      `);a.textContent=e.popularity?.toFixed(1)||"N/A",i.textContent=e.original_title||"N/A",c.textContent=e.genres?.map((e=>e.name)).join(", ")||"Unknown",s.textContent=e.overview||"No description available.",l.onclick=()=>async function(e){try{const t=await L(e);t?d(t):alert("Trailer not available.")}catch(e){console.error("Error fetching trailer:",e)}}(e.id),F(e)}(await w(e)),document.body.classList.add("modal-open"),t.classList.add("open"),n.addEventListener("click",u),document.addEventListener("keydown",m),t.addEventListener("click",y)}catch(e){console.error("Error fetching movie details:",e)}else console.error("No movie ID provided!");function u(){document.body.classList.remove("modal-open"),t.classList.remove("open"),n.removeEventListener("click",u),document.removeEventListener("keydown",m),t.removeEventListener("click",y)}function m(e){"Escape"===e.key&&t.classList.contains("open")&&u()}function y(e){document.getElementById("movie-details").contains(e.target)||u()}}function G(e){let t="movie__average--red";e.vote_average>=7?t="movie__average--green":e.vote_average>=5&&(t="movie__average--orange");const n=e.poster_path?`https://image.tmdb.org/t/p/w500${e.poster_path}`:"./images/no-image-available.jpg",o=e.poster_path?`${e.title||""} movie poster`:"No poster available",r=e.genre_names||[];let a=r.slice(0,2);r.length>2&&a.push("Other");const i=r.length>0?a.join(", "):"",c=void 0!==e.vote_average?e.vote_average.toFixed(1):"",s=e.release_date?new Date(e.release_date).getFullYear():"";return`\n    <li class="movie_list_item" data-movie-id="${e.id||""}">\n      <div class="movie__cover-inner">\n        <img \n          class="movie__cover" \n          src="${n}" \n          alt="${o}" \n        />\n      </div>\n      <div class="movie__cover--darkened"></div>\n      <div class="movie-info">\n        ${e.title?`<h3 class="movie-title">${e.title}</h3>`:""}\n        ${i||s?`<p class="movie-date">${[i,s].filter(Boolean).join(" | ")}</p>`:""}\n        ${c?`<div class="movie__average ${t}">${c}</div>`:""}\n      </div>\n    </li>\n  `}function P(){const e=window.innerWidth;return e>=1024?18:e>=768?16:20}async function V(e,t){try{const{results:n,total_pages:o}=await b(e,t);if(!n||0===n.length)return _.innerHTML="<p>No movies found.</p>",void f(0);const r=P(),a=n.slice(0,r).map(G).join("");_.innerHTML=a,f(o)}catch(e){console.error("Error displaying searched movies:",e),_.innerHTML="<p>Error loading movies.</p>",f(0)}}async function J(e=1){console.log("Rendering movies for page:",e);try{const{results:t,total_pages:n}=await E(e);if(!t||0===t.length)return console.warn("No movies found"),_.innerHTML="<p>No movies found.</p>",void f(0);console.log("Movies fetched:",t.length);const r=P(),a=t.slice(0,r).map(G).join("");_?(_.innerHTML=a,f(n),_.addEventListener("click",(e=>{const t=e.target.closest(".movie_list_item");if(!t)return;const n=t.dataset.movieId;n?(console.log("Clicked movie ID:",n),z(n),o()):console.error("Movie ID not found in clicked item")}))):console.error("Gallery element not found")}catch(e){console.error("Error displaying movies:",e),_&&(_.innerHTML="<p>Error loading movies.</p>"),f(0)}}async function Y(e,n){const o=document.querySelector(".movies"),r=document.querySelector("#search-error");try{console.log("Apelare la funcția renderSearchedMovies...");const a=(await b(e,n))?.results||[];if(!Array.isArray(a)||0===a.length)return console.warn("No movies found."),r.style.display="block",void(o.innerHTML='\n        <p class="error-message" style="text-align: center; font-size: 18px; color: red;">\n          No movies found. Please try a different search term.\n        </p>\n      ');const i=await t(),c=a.map((e=>({...e,genre_names:Array.isArray(e.genre_ids)?e.genre_ids.map((e=>i.find((t=>t.id===e))?.name||"Unknown Genre")):[]})));r.style.display="none";const s=c.map(G).join("");o.innerHTML=s}catch(e){console.error("Eroare la afișarea filmelor:",e),r.style.display="block",o.innerHTML='\n      <p class="error-message" style="text-align: center; font-size: 18px; color: red;">\n        Error loading movies. Please try again later.\n      </p>\n    '}}window.addEventListener("resize",(()=>{_.children.length>0&&(ee?V(ee,p):J(p))}));const K=document.querySelector(".search"),X=document.querySelector(".search-button"),Z=document.querySelector(".loader");let ee="";function te(){const e=1.2*window.outerHeight,t=document.getElementById("backToTopButton");window.addEventListener("scroll",(()=>{document.documentElement.scrollTop>e?t.classList.add("active"):t.classList.remove("active")})),t.addEventListener("click",(()=>{window.scrollTo({top:0,behavior:"smooth"})}))}function ne(){const e=document.getElementById("themeSwitcherCheckbox");let t=localStorage.getItem("theme");t||(t="light",localStorage.setItem("theme",t)),document.body.classList.add(`${t}-theme`),e.checked="dark"===t,e.addEventListener("change",(()=>{const t=e.checked;document.body.classList.toggle("light-theme",!t),document.body.classList.toggle("dark-theme",t),localStorage.setItem("theme",t?"dark":"light")}))}X.addEventListener("click",(function(e){e.preventDefault();const t=K.value.trim();""!==t&&(ee=t,o(),Y(t,1).finally((()=>{Z.classList.remove("show")})),K.value="",o())})),K.addEventListener("keydown",(function(e){if("Enter"===e.key){e.preventDefault();const t=1,n=K.value.trim();if(""===n)return;ee=n,o(),Y(n,t).finally((()=>{Z.classList.remove("show")})),K.value=""}})),document.addEventListener("DOMContentLoaded",(()=>{ne(),o(),J(),W(),window.onscroll=function(){const e=(document.body.scrollTop||document.documentElement.scrollTop)/(document.documentElement.scrollHeight-document.documentElement.clientHeight)*100;document.getElementById("progressBar").style.width=e+"%"},te()}));
//# sourceMappingURL=index.9f1a6501.js.map
