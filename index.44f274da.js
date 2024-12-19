let e=[];async function t(){return 0===e.length&&await async function(){try{const t=await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=21161239b69d8dd6ebeec5ac6086d760&language=en-US"),n=await t.json();return n.genres&&(e=n.genres),e}catch(e){return console.error("Eroare la încărcarea genurilor:",e),[]}}(),e}const n=document.querySelector('[data-index="1"]'),o=document.querySelector('[data-index="2"]'),r=document.querySelector('[data-index="3"]'),a=document.querySelector('[data-index="4"]'),i=document.querySelector('[data-index="5"]'),c=document.querySelector(".first-button"),s=document.querySelector(".last-button"),l=document.querySelector(".pagination-container"),d=document.querySelector(".arrow-right"),u=document.querySelector(".arrow-left"),m=document.querySelector("#previous"),v=document.querySelector("#after");let y=1,g=20;function p(e){g=Math.min(e||20,20),l.style.display="flex";const t=[n,o,r,a,i];t.forEach((e=>e.hidden=!0));for(let e=0;e<Math.min(g,5);e++)t[e].hidden=!1,t[e].textContent=e+1,t[e].classList.toggle("pagination--current",e+1===y);if(s.textContent=g,c.hidden=y<=3||g<=5,m.hidden=y<=3||g<=5,s.hidden=y>=g-2||g<=5,v.hidden=y>=g-2||g<=5,u.hidden=y<=1,d.hidden=y>=g,y>3&&g>5){let e=y-2;e+4>g&&(e=g-4),t.forEach(((t,n)=>{t.hidden||(t.textContent=e+n,t.classList.toggle("pagination--current",e+n===y))}))}}async function h(e=y){console.log("Fetching popular movies for page:",e);const n=`https://api.themoviedb.org/3/movie/popular?api_key=21161239b69d8dd6ebeec5ac6086d760&language=en-US&page=${e}`;try{const e=await fetch(n),o=await e.json();if(!o.results||0===o.results.length)return console.error("No popular movies found:",o),{results:[],total_pages:0};const r=await t(),a=o.results.map((e=>({...e,genre_names:e.genre_ids.map((e=>r.find((t=>t.id===e))?.name||"Unknown"))})));return{results:a,total_pages:Math.min(o.total_pages,20)}}catch(e){return console.error("Error fetching popular movies:",e),{results:[],total_pages:0}}}async function f(e,n=1){const o=`https://api.themoviedb.org/3/search/movie?${new URLSearchParams({api_key:"21161239b69d8dd6ebeec5ac6086d760",query:e,page:n,language:"en-US",include_adult:!1})}`;try{const e=await fetch(o),n=await e.json();if(!n||!n.results)return{results:[],total_pages:0};const r=await t(),a=n.results.map((e=>({...e,genre_names:e.genre_ids?.map((e=>r.find((t=>t.id===e))?.name||"Unknown"))||[]})));return{results:a,total_pages:Math.min(n.total_pages,20)}}catch(e){return console.error("Error fetching movies:",e),{results:[],total_pages:0}}}async function E(e){const t=`https://api.themoviedb.org/3/movie/${e}?api_key=21161239b69d8dd6ebeec5ac6086d760&language=en-US`;try{const e=await fetch(t);if(!e.ok)throw new Error("Failed to fetch movie details");return await e.json()}catch(e){throw console.error("Error fetching movie details:",e),e}}async function b(e){try{const t=await fetch(`https://api.themoviedb.org/3/movie/${e}/videos?api_key=21161239b69d8dd6ebeec5ac6086d760`),n=(await t.json()).results.find((e=>"Trailer"===e.type&&"YouTube"===e.site));return n?`https://www.youtube.com/embed/${n.key}`:null}catch(e){return console.error("Error fetching trailer URL:",e),null}}l.addEventListener("click",(async function(e){const t=e.target;if("BUTTON"===t.tagName){t.blur();const e=y;t.classList.contains("pagination-button")&&t.dataset.index?y=Number(t.textContent):t.classList.contains("arrow-right")&&y<g?y+=1:t.classList.contains("arrow-left")&&y>1?y-=1:t.classList.contains("first-button")?y=1:t.classList.contains("last-button")&&(y=g),e!==y&&(window.scrollTo({top:0,behavior:"smooth"}),J?await F(J,y):await Q(y))}})),window.addEventListener("resize",(function(){let e=9;return window.innerWidth>=1024?e=9:window.innerWidth>=768&&window.innerWidth<1024?e=8:window.innerWidth<768&&(e=4),e}));document.getElementById("search-form"),document.querySelector(".form-input");const w=document.querySelector(".movies");document.querySelector(".header"),document.querySelector(".menu__link-home"),document.querySelector(".menu__link-library"),document.querySelector(".modal__backdrop"),document.getElementById("modal"),document.querySelector(".warning-notification"),document.querySelector(".pagination-container");function _(){const e=document.getElementById("trailer-modal-container"),t=document.getElementById("trailer-backdrop"),n=document.getElementById("trailer-content");function o(){n.innerHTML="",e.classList.remove("open")}return t.addEventListener("click",o),document.addEventListener("keydown",(t=>{"Escape"===t.key&&e.classList.contains("open")&&o()})),function(t){n.innerHTML=`\n      <iframe \n        src="${t}" \n        frameborder="0" \n        allow="autoplay; encrypted-media" \n        allowfullscreen>\n      </iframe>`,e.classList.add("open")}}function L(e){return JSON.parse(localStorage.getItem(e))||[]}function k(e,t){return L(e).some((e=>e.id===t))}function S(e,t){let n=L(e);k(e,t.id)?n=n.filter((e=>e.id!==t.id)):n.push(t),localStorage.setItem(e,JSON.stringify(n))}function q(e){const t=document.querySelector(".library-list");if(t.innerHTML="",!e||0===e.length)return void(t.innerHTML="<p>No movies found.</p>");let n="";e.forEach((e=>{n+=R(e)})),t.innerHTML=`<ul class="movies">${n}</ul>`,t.addEventListener("click",(e=>{const t=e.target.closest(".movie_list_item");if(!t)return;A(t.dataset.movieId)}))}function T({onWatchedTabClick:e,onQueueTabClick:t}){const n=document.querySelector("#watched-btn"),o=document.querySelector("#queue-btn");n.addEventListener("click",(()=>{n.classList.add("library-btn-active"),o.classList.remove("library-btn-active"),e()})),o.addEventListener("click",(()=>{o.classList.add("library-btn-active"),n.classList.remove("library-btn-active"),t()}))}function I(){document.querySelector("#library-buttons").style.display="block",q(L("watched")),T({onWatchedTabClick:()=>{q(L("watched"))},onQueueTabClick:()=>{q(L("queue"))}})}const M=document.getElementById("library-btn"),x=document.getElementById("home-btn"),C=document.getElementById("search-form"),$=document.getElementById("library-buttons"),B=document.getElementById("watched-button"),D=document.getElementById("queue-button"),N=document.querySelector(".gallery"),U=document.querySelector("#library-gallery");function O(e){B.textContent=k("watched",e.id)?"REMOVE FROM WATCHED":"ADD TO WATCHED",D.textContent=k("queue",e.id)?"REMOVE FROM QUEUE":"ADD TO QUEUE",B.onclick=()=>{S("watched",e),B.textContent=k("watched",e.id)?"REMOVE FROM WATCHED":"ADD TO WATCHED","block"===document.querySelector("#library-gallery").style.display&&(I(),j())},D.onclick=()=>{S("queue",e),D.textContent=k("queue",e.id)?"REMOVE FROM QUEUE":"ADD TO QUEUE","block"===document.querySelector("#library-gallery").style.display&&(I(),j())}}function H(){function e(){C.style.display="block",$.style.display="none",N.style.display="block",U.style.display="none",x.classList.add("active"),M.classList.remove("active")}x.addEventListener("click",e),M.addEventListener("click",(function(){C.style.display="none",$.style.display="flex",N.style.display="none",U.style.display="block",M.classList.add("active"),x.classList.remove("active"),I()})),e()}function j(){const e=document.createElement("p");e.textContent="Library updated!",e.className="update-message",document.querySelector("#library-gallery").prepend(e),setTimeout((()=>{e.remove()}),2e3)}async function A(e){const t=document.querySelector(".modal-wrapper"),n=document.querySelector(".backdrop"),o=document.getElementById("poster-section"),r=document.getElementById("movie-title"),a=(document.getElementById("movie-votes"),document.getElementById("movie-popularity")),i=document.getElementById("original-title"),c=document.getElementById("movie-genre"),s=document.getElementById("movie-about"),l=document.getElementById("trailer-button"),d=_();if(e)try{!function(e){o.style.backgroundImage=`url('https://image.tmdb.org/t/p/w500/${e.poster_path||""}')`,r.textContent=e.title||"No Title";let t="movie__average--red";e.vote_average>=7?t="movie__average--green":e.vote_average>=5&&(t="movie__average--orange");const n=document.querySelector("#modal-movie-votes");n&&(n.innerHTML=`\n        <span class="vote-average ${t}">\n          ${e.vote_average?.toFixed(1)||"N/A"}\n        </span>\n        <span class="vote-separator">/</span>\n        <span class="vote-count">\n          ${e.vote_count||0}\n        </span>\n      `);a.textContent=e.popularity?.toFixed(1)||"N/A",i.textContent=e.original_title||"N/A",c.textContent=e.genres?.map((e=>e.name)).join(", ")||"Unknown",s.textContent=e.overview||"No description available.",l.onclick=()=>async function(e){try{const t=await b(e);t?d(t):alert("Trailer not available.")}catch(e){console.error("Error fetching trailer:",e)}}(e.id),O(e)}(await E(e)),document.body.classList.add("modal-open"),t.classList.add("open"),n.addEventListener("click",u),document.addEventListener("keydown",m),t.addEventListener("click",v)}catch(e){console.error("Error fetching movie details:",e)}else console.error("No movie ID provided!");function u(){document.body.classList.remove("modal-open"),t.classList.remove("open"),n.removeEventListener("click",u),document.removeEventListener("keydown",m),t.removeEventListener("click",v)}function m(e){"Escape"===e.key&&t.classList.contains("open")&&u()}function v(e){document.getElementById("movie-details").contains(e.target)||u()}}function R(e){let t="movie__average--red";e.vote_average>=7?t="movie__average--green":e.vote_average>=5&&(t="movie__average--orange");const n=e.poster_path?`https://image.tmdb.org/t/p/w500${e.poster_path}`:"./images/no-image-available.jpg",o=e.poster_path?`${e.title||""} movie poster`:"No poster available",r=e.genre_names||[];let a=r.slice(0,2);r.length>2&&a.push("Other");const i=r.length>0?a.join(", "):"",c=void 0!==e.vote_average?e.vote_average.toFixed(1):"",s=e.release_date?new Date(e.release_date).getFullYear():"";return`\n    <li class="movie_list_item" data-movie-id="${e.id||""}">\n      <div class="movie__cover-inner">\n        <img \n          class="movie__cover" \n          src="${n}" \n          alt="${o}" \n        />\n      </div>\n      <div class="movie__cover--darkened"></div>\n      <div class="movie-info">\n        ${e.title?`<h3 class="movie-title">${e.title}</h3>`:""}\n        ${i||s?`<p class="movie-date">${[i,s].filter(Boolean).join(" | ")}</p>`:""}\n        ${c?`<div class="movie__average ${t}">${c}</div>`:""}\n      </div>\n    </li>\n  `}function W(){const e=window.innerWidth;return e>=1024?9:e>=768?8:4}async function F(e,t){try{const{results:n,total_pages:o}=await f(e,t);if(!n||0===n.length)return w.innerHTML="<p>No movies found.</p>",void p(0);const r=W(),a=n.slice(0,r).map(R).join("");w.innerHTML=a,p(o)}catch(e){console.error("Error displaying searched movies:",e),w.innerHTML="<p>Error loading movies.</p>",p(0)}}async function Q(e=1){console.log("Rendering movies for page:",e);try{const{results:t,total_pages:n}=await h(e);if(!t||0===t.length)return console.warn("No movies found"),w.innerHTML="<p>No movies found.</p>",void p(0);console.log("Movies fetched:",t.length);const o=W(),r=t.slice(0,o).map(R).join("");w?(w.innerHTML=r,p(n),w.addEventListener("click",(e=>{const t=e.target.closest(".movie_list_item");if(!t)return;const n=t.dataset.movieId;n?(console.log("Clicked movie ID:",n),A(n)):console.error("Movie ID not found in clicked item")}))):console.error("Gallery element not found")}catch(e){console.error("Error displaying movies:",e),w&&(w.innerHTML="<p>Error loading movies.</p>"),p(0)}}window.addEventListener("resize",(()=>{w.children.length>0&&(J?F(J,y):Q(y))}));const V=document.querySelector(".search"),z=document.querySelector(".search-button");let J="";async function Y(e){e.preventDefault(),""!==V.value.trim()&&(showLoader(),J=V.value.trim(),await F(J,1),V.value="")}z.addEventListener("click",Y),V.addEventListener("keydown",(async function(e){"Enter"===e.key&&await Y(e)}));const G=document.querySelector(".loader");document.addEventListener("DOMContentLoaded",(()=>{Q(),H()})),document.addEventListener("click",(()=>{console.log("calling showLoader()"),G.classList.add("show"),setTimeout((()=>{G.classList.remove("show")}),1e3)}));
//# sourceMappingURL=index.44f274da.js.map
