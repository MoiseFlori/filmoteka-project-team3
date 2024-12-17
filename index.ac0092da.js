async function e(){const e="https://api.themoviedb.org/3/genre/movie/list?api_key=21161239b69d8dd6ebeec5ac6086d760&language=en-US";try{console.log("Cerere la API-ul de genuri:",e);const t=await fetch(e),n=await t.json();return n.genres&&0!==n.genres.length?(console.log("Genuri obținute:",n.genres),n.genres):(console.error("Niciun gen găsit:",n),[])}catch(e){return console.error("Eroare la API-ul de genuri:",e),[]}}document.getElementById("search-form"),document.querySelector(".search__input");const t=document.querySelector(".movies"),n=(document.querySelector(".header"),document.querySelector(".menu__link-home"),document.querySelector(".menu__link-library"),document.querySelector(".modal__backdrop"),document.getElementById("modal"),document.querySelector(".warning-notification"),document.querySelector(".pagination-container"),document.querySelector('[data-index="1"]')),o=document.querySelector('[data-index="2"]'),r=document.querySelector('[data-index="3"]'),i=document.querySelector('[data-index="4"]'),a=document.querySelector('[data-index="5"]'),c=document.querySelector(".first-button"),s=document.querySelector(".last-button"),l=document.querySelector(".pagination-container"),d=document.querySelector(".arrow-right"),u=document.querySelector(".arrow-left"),m=document.querySelector("#previous"),g=document.querySelector("#after");l.addEventListener("click",(function(e){"BUTTON"===e.target.tagName&&(Number(e.target.textContent)&&(v=Number(e.target.textContent)),m.hidden=!0,g.hidden=!0,e.target.classList.contains("pagination-button")&&(p.forEach((e=>e.classList.remove("pagination--current"))),e.target.classList.add("pagination--current")),e.target.classList.contains("arrow-right")&&v<20&&(p.forEach((e=>e.classList.remove("pagination--current"))),n.classList.add("pagination--current"),n.textContent=Number(n.textContent)+5,o.textContent=Number(o.textContent)+5,r.textContent=Number(r.textContent)+5,i.textContent=Number(i.textContent)+5,a.textContent=Number(a.textContent)+5,v=n.textContent),e.target.classList.contains("arrow-left")&&v>=5&&(p.forEach((e=>e.classList.remove("pagination--current"))),n.textContent=Number(n.textContent)-5,o.textContent=Number(o.textContent)-5,r.textContent=Number(r.textContent)-5,i.textContent=Number(i.textContent)-5,a.textContent=Number(a.textContent)-5,a.classList.add("pagination--current"),v=a.textContent),e.target.classList.contains("first-button")&&(p.forEach((e=>e.classList.remove("pagination--current"))),n.textContent=1,o.textContent=2,r.textContent=3,i.textContent=4,a.textContent=5,n.classList.add("pagination--current"),v=n.textContent,u.hidden=!0,m.hidden=!0,c.hidden=!0),e.target.classList.contains("last-button")&&(p.forEach((e=>e.classList.remove("pagination--current"))),n.textContent=Number(s.textContent)-4,o.textContent=Number(s.textContent)-3,r.textContent=Number(s.textContent)-2,i.textContent=Number(s.textContent)-1,a.textContent=s.textContent,a.classList.add("pagination--current"),v=a.textContent,d.hidden=!0,g.hidden=!0,s.hidden=!0),Number(v)>5?(u.hidden=!1,m.hidden=!1,c.hidden=!1):(u.hidden=!0,m.hidden=!0,c.hidden=!0),Number(v)<16&&(d.hidden=!1,g.hidden=!1,s.hidden=!1),t.innerHTML="",window.scrollTo({top:0,behavior:"smooth"}),C())}));let v=1,p=document.querySelectorAll(".pagination-button");m.hidden=!0,u.hidden=!0,c.hidden=!0;let h=9;let y=[];async function f(){return 0===y.length&&(y=await e()),y}async function b(){const e=`https://api.themoviedb.org/3/movie/popular?api_key=21161239b69d8dd6ebeec5ac6086d760&language=en-US&page=${v}`;try{console.log("Fetching popular movies...");const t=await fetch(e),n=await t.json();if(console.log(n),!n.results||0===n.results.length)return console.error("No popular movies found:",n),[];const o=await f();console.log("Genres retrieved:",o);const r=n.results.map((e=>({...e,genre_names:e.genre_ids.map((e=>o.find((t=>t.id===e))?.name||"Unknown"))})));return console.log("Movies with genres:",r),r}catch(e){return console.error("Error fetching popular movies:",e),[]}}async function E(e){const t=`https://api.themoviedb.org/3/movie/${e}?api_key=21161239b69d8dd6ebeec5ac6086d760&language=en-US`;try{console.log(`Fetching details for movie ID: ${e}`);const n=await fetch(t);if(!n.ok)throw new Error("Failed to fetch movie details");const o=await n.json();return console.log("Movie details fetched:",o),o}catch(e){throw console.error("Error fetching movie details:",e),e}}async function x(e,t){const n=`https://api.themoviedb.org/3/search/movie?${new URLSearchParams({api_key:"21161239b69d8dd6ebeec5ac6086d760",query:e,page:t,language:"en-US",include_adult:!1})}`;try{console.log(`searchMovies(${e},${t}) with URL: ${n}`);const o=await fetch(n),r=await o.json();return console.log(r),!1===r.success?(console.error("The resource you requested could not be found."),!1):r}catch(e){return console.error("Error fetching movie by Id:",e),[]}}async function _(e){try{const t=await fetch(`https://api.themoviedb.org/3/movie/${e}/videos?api_key=21161239b69d8dd6ebeec5ac6086d760`),n=(await t.json()).results.find((e=>"Trailer"===e.type&&"YouTube"===e.site));return n?`https://www.youtube.com/embed/${n.key}`:null}catch(e){return console.error("Error fetching trailer URL:",e),null}}function w(e){let t="movie__average--red";e.vote_average>=7?t="movie__average--green":e.vote_average>=5&&(t="movie__average--orange");const n=e.poster_path?`https://image.tmdb.org/t/p/w500${e.poster_path}`:"./images/no-image-available.jpg",o=e.poster_path?`${e.title} movie poster`:`No poster available for ${e.title}`;void 0===e.genre_names&&(e.genre_names=[]);let r=e.genre_names.slice(0,2);e.genre_names.length>2&&r.push("Other");const i=r.join(", ");return`\n    <li class="movie_list_item" data-movie-id="${e.id}">\n      <div class="movie__cover-inner">\n        <img \n          class="movie__cover" \n          src="${n}" \n          alt="${o}" \n        />\n        <div class="movie__cover--darkened"></div>\n      </div>\n      <div class="movie-info">\n        <h3 class="movie-title">${e.title}</h3>\n        <p class="movie-date">${i} | ${new Date(e.release_date).getFullYear()}</p>\n        <div class="movie__average ${t}">\n          ${e.vote_average.toFixed(1)}\n        </div>\n      </div>\n    </li>\n  `}async function C(){try{console.log("page",v),console.log("Apelare la funcția renderMovies...");const e=await b(),t=document.querySelector(".movies");if(!e||0===e.length)return console.error("Niciun film pentru afișare."),void(t.innerHTML="<p>No movies found.</p>");const n=(window.innerWidth>=1024?h=9:window.innerWidth>=768&&window.innerWidth<1024?h=8:window.innerWidth<768&&(h=4),h),o=e.slice(0,n).map(w).join("");console.log("HTML-ul generat pentru filme:",o),t.innerHTML=o}catch(e){console.error("Eroare la afișarea filmelor:",e),document.querySelector(".movies").innerHTML="<p>Error loading movies.</p>"}}async function L(e,t){try{console.log("Apelare la funcția renderSearchedMovies...");const n=await x(e,t),o=document.querySelector(".movies"),r=n.results;n.page,n.total_pages;if(console.log(n),!r||0===r.length)return console.error("Niciun film pentru afișare."),void(o.innerHTML="<p>No movies found.</p>");const i=r.map(w).join("");console.log("HTML-ul generat pentru filme:",i),o.innerHTML=i}catch(e){console.error("Eroare la afișarea filmelor:",e),document.querySelector(".movies").innerHTML="<p>Error loading movies.</p>"}}console.log("*** Loaded searchbar.js");const S=document.querySelector(".search-field"),q=document.querySelector(".search-button"),N=document.querySelector(".pagination");function k(){const e=document.getElementById("trailer-modal-container"),t=document.getElementById("trailer-backdrop"),n=document.getElementById("trailer-content");function o(){n.innerHTML="",e.classList.remove("open")}return t.addEventListener("click",o),document.addEventListener("keydown",(t=>{"Escape"===t.key&&e.classList.contains("open")&&o()})),function(t){n.innerHTML=`\n      <iframe \n        src="${t}" \n        frameborder="0" \n        allow="autoplay; encrypted-media" \n        allowfullscreen>\n      </iframe>`,e.classList.add("open")}}function T(e){return JSON.parse(localStorage.getItem(e))||[]}function M(e,t){return T(e).some((e=>e.id===t))}function $(e,t){let n=T(e);M(e,t.id)?n=n.filter((e=>e.id!==t.id)):n.push(t),localStorage.setItem(e,JSON.stringify(n))}function I(e){const t=document.getElementById("watched-button"),n=document.getElementById("queue-button");t.textContent=M("watched",e.id)?"REMOVE FROM WATCHED":"ADD TO WATCHED",n.textContent=M("queue",e.id)?"REMOVE FROM QUEUE":"ADD TO QUEUE",t.onclick=()=>{$("watched",e),t.textContent=M("watched",e.id)?"REMOVE FROM WATCHED":"ADD TO WATCHED"},n.onclick=()=>{$("queue",e),n.textContent=M("queue",e.id)?"REMOVE FROM QUEUE":"ADD TO QUEUE"}}async function A(){const e=document.querySelector(".movies"),t=document.querySelector(".modal-wrapper"),n=document.querySelector(".backdrop"),o=document.getElementById("poster-section"),r=document.getElementById("movie-title"),i=(document.getElementById("movie-votes"),document.getElementById("movie-popularity")),a=document.getElementById("original-title"),c=document.getElementById("movie-genre"),s=document.getElementById("movie-about"),l=document.getElementById("trailer-button"),d=k();function u(){document.body.classList.remove("modal-open"),t.classList.remove("open")}e.addEventListener("click",(e=>{const n=e.target.closest(".movie_list_item");if(n){!async function(e){try{!function(e){o.style.backgroundImage=`url('https://image.tmdb.org/t/p/w500/${e.poster_path||""}')`,r.textContent=e.title||"No Title";let n="movie__average--red";e.vote_average>=7?n="movie__average--green":e.vote_average>=5&&(n="movie__average--orange");const u=document.querySelector("#modal-movie-votes");u&&(u.innerHTML=`\n    <span class="vote-average ${n}">\n      ${e.vote_average?.toFixed(1)||"N/A"}\n    </span>\n    <span class="vote-separator">/</span>\n    <span class="vote-count">\n      ${e.vote_count||0}\n    </span>\n  `);i.textContent=e.popularity?.toFixed(1)||"N/A",a.textContent=e.original_title||"N/A",c.textContent=e.genres?.map((e=>e.name)).join(", ")||"Unknown",s.textContent=e.overview||"No description available.",l.onclick=()=>async function(e){try{const t=await _(e);t?d(t):alert("Trailer not available.")}catch(e){console.error("Error fetching trailer:",e)}}(e.id),I(e),document.body.classList.add("modal-open"),t.classList.add("open")}(await E(e))}catch(e){console.error("Error fetching movie details:",e)}}(n.getAttribute("data-movie-id"))}})),n.addEventListener("click",u),document.addEventListener("keydown",(e=>{"Escape"===e.key&&t.classList.contains("open")&&u()})),t.addEventListener("click",(e=>{document.getElementById("movie-details").contains(e.target)||u()}));!function(t){e.innerHTML="";const n=t.map((e=>w(e))).join("");e.innerHTML=n}(await b())}console.log(N),S.addEventListener("click",(function(e){e.preventDefault();L(S.value,1)})),q.addEventListener("click",(function(e){e.preventDefault();L(S.value,1)})),document.addEventListener("DOMContentLoaded",(()=>{console.log("App initialized"),C(),A()}));
//# sourceMappingURL=index.ac0092da.js.map
