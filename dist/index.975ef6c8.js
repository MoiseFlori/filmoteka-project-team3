// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"1RB6v":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, importScripts */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ("reload" in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                if (asset.type === "js") {
                    if (typeof document !== "undefined") {
                        let script = document.createElement("script");
                        script.src = asset.url;
                        return new Promise((resolve, reject)=>{
                            var _document$head;
                            script.onload = ()=>resolve(script);
                            script.onerror = reject;
                            (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
                        });
                    } else if (typeof importScripts === "function") return new Promise((resolve, reject)=>{
                        try {
                            importScripts(asset.url);
                        } catch (err) {
                            reject(err);
                        }
                    });
                }
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"8lqZg":[function(require,module,exports) {
var _indexScss = require("./sass/index.scss");
var _paginationScss = require("./sass/_pagination.scss");
var _searchBar = require("./js/components/searchBar");
var _loaderJs = require("./js/components/loader.js");
var _movieListJs = require("./js/components/movieList.js");
var _paginationJs = require("./js/components/pagination.js");
var _buttonsJs = require("./js/components/buttons.js");
document.addEventListener("DOMContentLoaded", ()=>{
    (0, _movieListJs.renderMovies)();
    (0, _buttonsJs.toggleHeaderButtons)();
});
document.addEventListener("click", ()=>{
    (0, _loaderJs.showLoader)();
});

},{"./sass/index.scss":"9OQSl","./js/components/movieList.js":"4Q1Sa","./sass/_pagination.scss":"gAN3y","./js/components/searchBar":"6eKpv","./js/components/loader.js":"iwJJl","./js/components/pagination.js":"hN7NQ","./js/components/buttons.js":"kEkok"}],"9OQSl":[function() {},{}],"4Q1Sa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "generateMovieHTML", ()=>generateMovieHTML);
parcelHelpers.export(exports, "renderSearchedMovies", ()=>renderSearchedMovies);
parcelHelpers.export(exports, "renderMovies", ()=>renderMovies);
var _moviesApi = require("../api/moviesApi");
var _pagination = require("./pagination");
var _searchBar = require("./searchBar");
var _refs = require("./refs");
var _modal = require("../components/modal");
function generateMovieHTML(movie) {
    let ratingClass = "movie__average--red";
    if (movie.vote_average >= 7) ratingClass = "movie__average--green";
    else if (movie.vote_average >= 5) ratingClass = "movie__average--orange";
    const moviePoster = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "./images/no-image-available.jpg";
    const altText = movie.poster_path ? `${movie.title || ""} movie poster` : "No poster available";
    const genresArray = movie.genre_names || [];
    let displayedGenres = genresArray.slice(0, 2);
    if (genresArray.length > 2) displayedGenres.push("Other");
    const genres = genresArray.length > 0 ? displayedGenres.join(", ") : "";
    const rating = movie.vote_average !== undefined ? movie.vote_average.toFixed(1) : "";
    const releaseYear = movie.release_date ? new Date(movie.release_date).getFullYear() : "";
    return `
    <li class="movie_list_item" data-movie-id="${movie.id || ""}">
      <div class="movie__cover-inner">
        <img 
          class="movie__cover" 
          src="${moviePoster}" 
          alt="${altText}" 
        />
      </div>
      <div class="movie__cover--darkened"></div>
      <div class="movie-info">
        ${movie.title ? `<h3 class="movie-title">${movie.title}</h3>` : ""}
        ${genres || releaseYear ? `<p class="movie-date">${[
        genres,
        releaseYear
    ].filter(Boolean).join(" | ")}</p>` : ""}
        ${rating ? `<div class="movie__average ${ratingClass}">${rating}</div>` : ""}
      </div>
    </li>
  `;
}
function getMoviesPerPage() {
    const width = window.innerWidth;
    if (width >= 1024) return 9;
    if (width >= 768) return 8;
    return 4;
}
async function renderSearchedMovies(query, page) {
    try {
        const { results , total_pages  } = await (0, _moviesApi.searchMovies)(query, page);
        if (!results || results.length === 0) {
            (0, _refs.gallery).innerHTML = "<p>No movies found.</p>";
            (0, _pagination.updatePageButtons)(0); // Hide pagination when no results
            return;
        }
        const moviesPerPage = getMoviesPerPage();
        const moviesToShow = results.slice(0, moviesPerPage);
        const moviesHTML = moviesToShow.map(generateMovieHTML).join("");
        (0, _refs.gallery).innerHTML = moviesHTML;
        // Update pagination with the actual number of pages from search results
        (0, _pagination.updatePageButtons)(total_pages);
    } catch (error) {
        console.error("Error displaying searched movies:", error);
        (0, _refs.gallery).innerHTML = "<p>Error loading movies.</p>";
        (0, _pagination.updatePageButtons)(0);
    }
}
async function renderMovies(page = 1) {
    console.log("Rendering movies for page:", page);
    try {
        const { results , total_pages  } = await (0, _moviesApi.fetchPopularMovies)(page);
        if (!results || results.length === 0) {
            console.warn("No movies found");
            (0, _refs.gallery).innerHTML = "<p>No movies found.</p>";
            (0, _pagination.updatePageButtons)(0);
            return;
        }
        console.log("Movies fetched:", results.length);
        const moviesPerPage = getMoviesPerPage();
        const moviesToShow = results.slice(0, moviesPerPage);
        const moviesHTML = moviesToShow.map(generateMovieHTML).join("");
        if (0, _refs.gallery) {
            (0, _refs.gallery).innerHTML = moviesHTML;
            (0, _pagination.updatePageButtons)(total_pages);
            (0, _refs.gallery).addEventListener("click", (event)=>{
                const movieItem = event.target.closest(".movie_list_item");
                if (!movieItem) return;
                const movieId = movieItem.dataset.movieId;
                if (movieId) {
                    console.log("Clicked movie ID:", movieId);
                    (0, _modal.initializeModal)(movieId);
                } else console.error("Movie ID not found in clicked item");
            });
        } else console.error("Gallery element not found");
    } catch (error) {
        console.error("Error displaying movies:", error);
        if (0, _refs.gallery) (0, _refs.gallery).innerHTML = "<p>Error loading movies.</p>";
        (0, _pagination.updatePageButtons)(0);
    }
}
// Add resize listener to handle responsive layout
window.addEventListener("resize", ()=>{
    if ((0, _refs.gallery).children.length > 0) {
        // Re-render current page when window is resized
        if (0, _searchBar.currentSearchQuery) renderSearchedMovies((0, _searchBar.currentSearchQuery), (0, _pagination.currentPage));
        else renderMovies((0, _pagination.currentPage));
    }
});

},{"../api/moviesApi":"43Tgy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./pagination":"hN7NQ","./searchBar":"6eKpv","./refs":"clHxW","../components/modal":"9rqXZ"}],"43Tgy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fetchPopularMovies", ()=>fetchPopularMovies);
parcelHelpers.export(exports, "searchMovies", ()=>searchMovies);
parcelHelpers.export(exports, "fetchMovieDetails", ()=>fetchMovieDetails);
parcelHelpers.export(exports, "fetchMovieById", ()=>fetchMovieById);
parcelHelpers.export(exports, "fetchTrailerUrl", ()=>fetchTrailerUrl);
// Funcții pentru obținerea datelor despre filme:
// fetchPopularMovies()
// fetchMovieById(id)
// searchMovies(query, page)
// Funcția pentru obținerea filmelor populare
var _configJs = require("./config.js");
var _genresApiJs = require("./genresApi.js");
var _pagination = require("../components/pagination");
async function fetchPopularMovies(page = (0, _pagination.currentPage)) {
    console.log("Fetching popular movies for page:", page);
    const apiUrl = `${(0, _configJs.BASE_URL)}/movie/popular?api_key=${(0, _configJs.API_KEY)}&language=en-US&page=${page}`;
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (!data.results || data.results.length === 0) {
            console.error("No popular movies found:", data);
            return {
                results: [],
                total_pages: 0
            };
        }
        const genres = await (0, _genresApiJs.getGenres)();
        const moviesWithGenres = data.results.map((movie)=>({
                ...movie,
                genre_names: movie.genre_ids.map((id)=>genres.find((genre)=>genre.id === id)?.name || "Unknown")
            }));
        const limitedTotalPages = Math.min(data.total_pages, 20);
        return {
            results: moviesWithGenres,
            total_pages: limitedTotalPages
        };
    } catch (error) {
        console.error("Error fetching popular movies:", error);
        return {
            results: [],
            total_pages: 0
        };
    }
}
async function searchMovies(query, page = 1) {
    const searchParams = new URLSearchParams({
        api_key: (0, _configJs.API_KEY),
        query: query,
        page: page,
        language: "en-US",
        include_adult: false
    });
    const apiUrl = `${(0, _configJs.BASE_URL)}/search/movie?${searchParams}`;
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (!data || !data.results) return {
            results: [],
            total_pages: 0
        };
        const genres = await (0, _genresApiJs.getGenres)();
        const moviesWithGenres = data.results.map((movie)=>({
                ...movie,
                genre_names: movie.genre_ids?.map((id)=>genres.find((genre)=>genre.id === id)?.name || "Unknown") || []
            }));
        // Limit total pages to 20
        const limitedTotalPages = Math.min(data.total_pages, 20);
        return {
            results: moviesWithGenres,
            total_pages: limitedTotalPages
        };
    } catch (error) {
        console.error("Error fetching movies:", error);
        return {
            results: [],
            total_pages: 0
        };
    }
}
async function fetchMovieDetails(movieId) {
    const MOVIE_DETAIL_URL = `${(0, _configJs.BASE_URL)}/movie/${movieId}?api_key=${(0, _configJs.API_KEY)}&language=en-US`;
    try {
        const response = await fetch(MOVIE_DETAIL_URL);
        if (!response.ok) throw new Error("Failed to fetch movie details");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching movie details:", error);
        throw error;
    }
}
async function fetchMovieById(id) {
    const apiUrl = `${(0, _configJs.BASE_URL)}/movie/${id}?api_key=${(0, _configJs.API_KEY)}&language=en-US`;
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error("Failed to fetch movie details");
        const data = await response.json();
        if (data.success === false) {
            console.error("The resource you requested could not be found.");
            return false;
        }
        return data;
    } catch (error) {
        console.error("Error fetching movie by Id:", error);
        return null;
    }
}
async function fetchTrailerUrl(movieId) {
    try {
        const response = await fetch(`${(0, _configJs.BASE_URL)}/movie/${movieId}/videos?api_key=${(0, _configJs.API_KEY)}`);
        const data = await response.json();
        const trailer = data.results.find((video)=>video.type === "Trailer" && video.site === "YouTube");
        return trailer ? `https://www.youtube.com/embed/${trailer.key}` : null;
    } catch (error) {
        console.error("Error fetching trailer URL:", error);
        return null;
    }
}

},{"./config.js":"eTNWY","./genresApi.js":"g2Fsv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../components/pagination":"hN7NQ"}],"eTNWY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BASE_URL", ()=>BASE_URL);
parcelHelpers.export(exports, "API_KEY", ()=>API_KEY);
const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "21161239b69d8dd6ebeec5ac6086d760";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"g2Fsv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fetchGenres", ()=>fetchGenres);
parcelHelpers.export(exports, "getGenres", ()=>getGenres);
var _configJs = require("./config.js");
let genresCache = [];
async function fetchGenres() {
    const apiUrl = `${(0, _configJs.BASE_URL)}/genre/movie/list?api_key=${(0, _configJs.API_KEY)}&language=en-US`;
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (data.genres) genresCache = data.genres;
        return genresCache;
    } catch (error) {
        console.error("Eroare la \xeenc\u0103rcarea genurilor:", error);
        return [];
    }
}
async function getGenres() {
    if (genresCache.length === 0) await fetchGenres();
    return genresCache;
}

},{"./config.js":"eTNWY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hN7NQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "currentPage", ()=>currentPage);
parcelHelpers.export(exports, "defineResultsPerPage", ()=>defineResultsPerPage);
parcelHelpers.export(exports, "updatePageButtons", ()=>updatePageButtons);
var _movieList = require("./movieList");
var _searchBar = require("./searchBar");
const btn1Ref = document.querySelector('[data-index="1"]');
const btn2Ref = document.querySelector('[data-index="2"]');
const btn3Ref = document.querySelector('[data-index="3"]');
const btn4Ref = document.querySelector('[data-index="4"]');
const btn5Ref = document.querySelector('[data-index="5"]');
const firstPageRef = document.querySelector(".first-button");
const lastPageRef = document.querySelector(".last-button");
const paginationRef = document.querySelector(".pagination-container");
const rightArrowRef = document.querySelector(".arrow-right");
const leftArrowRef = document.querySelector(".arrow-left");
const prevDotsRef = document.querySelector("#previous");
const afterDotsRef = document.querySelector("#after");
let currentPage = 1;
let totalPages = 20;
// Initialize pagination
paginationRef.addEventListener("click", onPaginationClick);
function updatePageButtons(total) {
    totalPages = Math.min(total || 20, 20);
    paginationRef.style.display = "flex";
    const pageButtons = [
        btn1Ref,
        btn2Ref,
        btn3Ref,
        btn4Ref,
        btn5Ref
    ];
    pageButtons.forEach((btn)=>btn.hidden = true);
    // Show only the buttons needed
    for(let i = 0; i < Math.min(totalPages, 5); i++){
        pageButtons[i].hidden = false;
        pageButtons[i].textContent = i + 1;
        pageButtons[i].classList.toggle("pagination--current", i + 1 === currentPage);
    }
    lastPageRef.textContent = totalPages;
    // Hide first button and dots if we're at the start or have few pages
    firstPageRef.hidden = currentPage <= 3 || totalPages <= 5;
    prevDotsRef.hidden = currentPage <= 3 || totalPages <= 5;
    // Hide last button and dots if we're at the end or have few pages
    lastPageRef.hidden = currentPage >= totalPages - 2 || totalPages <= 5;
    afterDotsRef.hidden = currentPage >= totalPages - 2 || totalPages <= 5;
    // Show/hide arrows based only on current position
    leftArrowRef.hidden = currentPage <= 1;
    rightArrowRef.hidden = currentPage >= totalPages;
    // Adjust button numbers for when we're near the end
    if (currentPage > 3 && totalPages > 5) {
        let startPage = currentPage - 2;
        if (startPage + 4 > totalPages) startPage = totalPages - 4;
        pageButtons.forEach((btn, index)=>{
            if (!btn.hidden) {
                btn.textContent = startPage + index;
                btn.classList.toggle("pagination--current", startPage + index === currentPage);
            }
        });
    }
}
async function onPaginationClick(event) {
    const target = event.target;
    if (target.tagName === "BUTTON") {
        target.blur();
        const prevPage = currentPage;
        if (target.classList.contains("pagination-button") && target.dataset.index) currentPage = Number(target.textContent);
        else if (target.classList.contains("arrow-right") && currentPage < totalPages) currentPage += 1;
        else if (target.classList.contains("arrow-left") && currentPage > 1) currentPage -= 1;
        else if (target.classList.contains("first-button")) currentPage = 1;
        else if (target.classList.contains("last-button")) currentPage = totalPages;
        if (prevPage !== currentPage) {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
            if (0, _searchBar.currentSearchQuery) await (0, _movieList.renderSearchedMovies)((0, _searchBar.currentSearchQuery), currentPage);
            else await (0, _movieList.renderMovies)(currentPage);
        }
    }
}
function defineResultsPerPage() {
    let pageSize = 9;
    if (window.innerWidth >= 1024) pageSize = 9;
    else if (window.innerWidth >= 768 && window.innerWidth < 1024) pageSize = 8;
    else if (window.innerWidth < 768) pageSize = 4;
    return pageSize;
}
window.addEventListener("resize", defineResultsPerPage);

},{"./movieList":"4Q1Sa","./searchBar":"6eKpv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6eKpv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "currentSearchQuery", ()=>currentSearchQuery);
var _movieList = require("./movieList");
// Logic for the search bar (including input events)
const searchText = document.querySelector(".search");
const searchButton = document.querySelector(".search-button");
let currentSearchQuery = "";
async function handleSearch(event) {
    event.preventDefault();
    if (searchText.value.trim() === "") return;
    showLoader();
    currentSearchQuery = searchText.value.trim();
    await (0, _movieList.renderSearchedMovies)(currentSearchQuery, 1);
    searchText.value = "";
}
searchButton.addEventListener("click", handleSearch);
searchText.addEventListener("keydown", async function(e) {
    if (e.key === "Enter") await handleSearch(e);
});

},{"./movieList":"4Q1Sa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"clHxW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "formRef", ()=>formRef);
parcelHelpers.export(exports, "inputRef", ()=>inputRef);
parcelHelpers.export(exports, "gallery", ()=>gallery);
parcelHelpers.export(exports, "headerRef", ()=>headerRef);
parcelHelpers.export(exports, "pageHomeRef", ()=>pageHomeRef);
parcelHelpers.export(exports, "pageLabraryRef", ()=>pageLabraryRef);
parcelHelpers.export(exports, "modalBackdrop", ()=>modalBackdrop);
parcelHelpers.export(exports, "modalBox", ()=>modalBox);
parcelHelpers.export(exports, "headerWarning", ()=>headerWarning);
parcelHelpers.export(exports, "pagiCont", ()=>pagiCont);
const formRef = document.getElementById("search-form");
const inputRef = document.querySelector(".form-input");
const gallery = document.querySelector(".movies");
const headerRef = document.querySelector(".header");
const pageHomeRef = document.querySelector(".menu__link-home");
const pageLabraryRef = document.querySelector(".menu__link-library");
const modalBackdrop = document.querySelector(".modal__backdrop");
const modalBox = document.getElementById("modal");
const headerWarning = document.querySelector(".warning-notification");
const pagiCont = document.querySelector(".pagination-container");

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9rqXZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initializeModal", ()=>initializeModal);
var _moviesApi = require("../api/moviesApi");
var _movieList = require("../components/movieList");
var _trailer = require("../components/trailer");
var _buttons = require("../components/buttons");
async function initializeModal(movieId1) {
    const modalWrapper = document.querySelector(".modal-wrapper");
    const backdrop = document.querySelector(".backdrop");
    const posterSection = document.getElementById("poster-section");
    const movieTitle = document.getElementById("movie-title");
    const movieVotes = document.getElementById("movie-votes");
    const moviePopularity = document.getElementById("movie-popularity");
    const originalTitle = document.getElementById("original-title");
    const movieGenre = document.getElementById("movie-genre");
    const movieAbout = document.getElementById("movie-about");
    const trailerButton = document.getElementById("trailer-button");
    const openTrailerModal = (0, _trailer.initializeTrailerModal)();
    if (!movieId1) {
        console.error("No movie ID provided!");
        return;
    }
    try {
        const movieDetails = await (0, _moviesApi.fetchMovieDetails)(movieId1);
        populateModal(movieDetails);
        openModal();
    } catch (error1) {
        console.error("Error fetching movie details:", error1);
    }
    function populateModal(data) {
        posterSection.style.backgroundImage = `url('https://image.tmdb.org/t/p/w500/${data.poster_path || ""}')`;
        movieTitle.textContent = data.title || "No Title";
        let ratingClass = "movie__average--red";
        if (data.vote_average >= 7) ratingClass = "movie__average--green";
        else if (data.vote_average >= 5) ratingClass = "movie__average--orange";
        const modalMovieVotes = document.querySelector("#modal-movie-votes");
        if (modalMovieVotes) modalMovieVotes.innerHTML = `
        <span class="vote-average ${ratingClass}">
          ${data.vote_average?.toFixed(1) || "N/A"}
        </span>
        <span class="vote-separator">/</span>
        <span class="vote-count">
          ${data.vote_count || 0}
        </span>
      `;
        moviePopularity.textContent = data.popularity?.toFixed(1) || "N/A";
        originalTitle.textContent = data.original_title || "N/A";
        movieGenre.textContent = data.genres?.map((g)=>g.name).join(", ") || "Unknown";
        movieAbout.textContent = data.overview || "No description available.";
        trailerButton.onclick = ()=>fetchTrailer(data.id);
        (0, _buttons.setupButtons)(data);
    }
    async function fetchTrailer(movieId) {
        try {
            const trailerUrl = await (0, _moviesApi.fetchTrailerUrl)(movieId);
            if (trailerUrl) openTrailerModal(trailerUrl);
            else alert("Trailer not available.");
        } catch (error) {
            console.error("Error fetching trailer:", error);
        }
    }
    function openModal() {
        document.body.classList.add("modal-open");
        modalWrapper.classList.add("open");
        backdrop.addEventListener("click", closeModal);
        document.addEventListener("keydown", handleKeydown);
        modalWrapper.addEventListener("click", handleOutsideClick);
    }
    function closeModal() {
        document.body.classList.remove("modal-open");
        modalWrapper.classList.remove("open");
        backdrop.removeEventListener("click", closeModal);
        document.removeEventListener("keydown", handleKeydown);
        modalWrapper.removeEventListener("click", handleOutsideClick);
    }
    function handleKeydown(e) {
        if (e.key === "Escape" && modalWrapper.classList.contains("open")) closeModal();
    }
    function handleOutsideClick(e) {
        const modalContent = document.getElementById("movie-details");
        if (!modalContent.contains(e.target)) closeModal();
    }
}

},{"../api/moviesApi":"43Tgy","../components/movieList":"4Q1Sa","../components/trailer":"bWUWD","../components/buttons":"kEkok","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bWUWD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initializeTrailerModal", ()=>initializeTrailerModal);
function initializeTrailerModal() {
    const trailerModalWrapper = document.getElementById("trailer-modal-container");
    const trailerBackdrop = document.getElementById("trailer-backdrop");
    const trailerContent = document.getElementById("trailer-content");
    function openTrailerModal(trailerUrl) {
        // Adauga iframe-ul pentru trailer
        trailerContent.innerHTML = `
      <iframe 
        src="${trailerUrl}" 
        frameborder="0" 
        allow="autoplay; encrypted-media" 
        allowfullscreen>
      </iframe>`;
        trailerModalWrapper.classList.add("open");
    }
    function closeTrailerModal() {
        trailerContent.innerHTML = ""; // Elimina iframe-ul cand se inchide modal-ul
        trailerModalWrapper.classList.remove("open");
    }
    trailerBackdrop.addEventListener("click", closeTrailerModal);
    document.addEventListener("keydown", (e)=>{
        if (e.key === "Escape" && trailerModalWrapper.classList.contains("open")) closeTrailerModal();
    });
    return openTrailerModal;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kEkok":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setupButtons", ()=>setupButtons);
parcelHelpers.export(exports, "toggleHeaderButtons", ()=>toggleHeaderButtons);
// Managing the "Add to Watch" and "Add to Queue" buttons
var _localStorage = require("../app/localStorage");
var _myLibraryPage = require("../app/myLibraryPage");
var _myLibraryPageDefault = parcelHelpers.interopDefault(_myLibraryPage);
const libraryBtn = document.getElementById("library-btn");
const homeBtn = document.getElementById("home-btn");
const searchForm = document.getElementById("search-form");
const libraryButtons = document.getElementById("library-buttons");
const watchedButton = document.getElementById("watched-button");
const queueButton = document.getElementById("queue-button");
const mainGallery = document.querySelector(".gallery");
const libraryGallery = document.querySelector("#library-gallery");
function setupButtons(movie) {
    watchedButton.textContent = (0, _localStorage.isInStorage)("watched", movie.id) ? "REMOVE FROM WATCHED" : "ADD TO WATCHED";
    queueButton.textContent = (0, _localStorage.isInStorage)("queue", movie.id) ? "REMOVE FROM QUEUE" : "ADD TO QUEUE";
    watchedButton.onclick = ()=>{
        (0, _localStorage.toggleStorage)("watched", movie);
        watchedButton.textContent = (0, _localStorage.isInStorage)("watched", movie.id) ? "REMOVE FROM WATCHED" : "ADD TO WATCHED";
        if (document.querySelector("#library-gallery").style.display === "block") {
            (0, _myLibraryPageDefault.default)();
            showUpdateMessage();
        }
    };
    queueButton.onclick = ()=>{
        (0, _localStorage.toggleStorage)("queue", movie);
        queueButton.textContent = (0, _localStorage.isInStorage)("queue", movie.id) ? "REMOVE FROM QUEUE" : "ADD TO QUEUE";
        if (document.querySelector("#library-gallery").style.display === "block") {
            (0, _myLibraryPageDefault.default)();
            showUpdateMessage();
        }
    };
}
function toggleHeaderButtons() {
    function activateHome() {
        searchForm.style.display = "block";
        libraryButtons.style.display = "none";
        mainGallery.style.display = "block";
        libraryGallery.style.display = "none";
        homeBtn.classList.add("active");
        libraryBtn.classList.remove("active");
    }
    function activateLibrary() {
        searchForm.style.display = "none";
        libraryButtons.style.display = "flex";
        mainGallery.style.display = "none";
        libraryGallery.style.display = "block";
        libraryBtn.classList.add("active");
        homeBtn.classList.remove("active");
        (0, _myLibraryPageDefault.default)();
    }
    homeBtn.addEventListener("click", activateHome);
    libraryBtn.addEventListener("click", activateLibrary);
    activateHome();
}
function showUpdateMessage() {
    const message = document.createElement("p");
    message.textContent = "Library updated!";
    message.className = "update-message";
    document.querySelector("#library-gallery").prepend(message);
    setTimeout(()=>{
        message.remove();
    }, 2000);
}

},{"../app/localStorage":"hvNMO","../app/myLibraryPage":"7VEqH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hvNMO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getFromStorage", ()=>getFromStorage);
parcelHelpers.export(exports, "isInStorage", ()=>isInStorage);
parcelHelpers.export(exports, "toggleStorage", ()=>toggleStorage);
parcelHelpers.export(exports, "saveToStorage", ()=>saveToStorage);
function getFromStorage(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
}
function isInStorage(key, id) {
    const items = getFromStorage(key);
    return items.some((item)=>item.id === id);
}
function toggleStorage(key, movie) {
    let items = getFromStorage(key);
    if (isInStorage(key, movie.id)) items = items.filter((item)=>item.id !== movie.id);
    else items.push(movie);
    localStorage.setItem(key, JSON.stringify(items));
}
function saveToStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7VEqH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Implementează logica pentru pagina „My Libraries,” care permite utilizatorilor să gestioneze și să vizualizeze filmele salvate.
// Afișează două liste separate: „Watched” și „Queue,” utilizând componenta libraryList.js.
// Coordonează funcționalitatea de comutare între tab-urile „Watched” și „Queue,” folosind componenta libraryTabs.js.
// Preia filmele salvate din localStorage sau dintr-o bază de date backend, utilizând serviciul storage.js.
// Gestionează interacțiunile utilizatorilor, precum eliminarea unui film dintr-o listă sau deschiderea modalului pentru detaliile unui film.
var _localStorage = require("../app/localStorage");
var _libraryList = require("../components/libraryList");
var _libraryListDefault = parcelHelpers.interopDefault(_libraryList);
var _libraryTabs = require("../components/libraryTabs");
var _libraryTabsDefault = parcelHelpers.interopDefault(_libraryTabs);
function initMyLibraryPage() {
    const libraryButtonsContainer = document.querySelector("#library-buttons");
    libraryButtonsContainer.style.display = "block"; // Afișează butoanele din header
    // Afișează filmele din "WATCHED" implicit
    (0, _libraryListDefault.default)((0, _localStorage.getFromStorage)("watched"));
    // Initializează tab-urile folosind funcționalitatea butoanelor din header
    (0, _libraryTabsDefault.default)({
        onWatchedTabClick: ()=>{
            (0, _libraryListDefault.default)((0, _localStorage.getFromStorage)("watched"));
        },
        onQueueTabClick: ()=>{
            (0, _libraryListDefault.default)((0, _localStorage.getFromStorage)("queue"));
        }
    });
}
exports.default = initMyLibraryPage;

},{"../app/localStorage":"hvNMO","../components/libraryList":"c50hU","../components/libraryTabs":"hon3Z","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c50hU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
//  Displaying movies saved in the "Watched" and "Queue" lists.
var _movieList = require("../components/movieList");
var _movieList1 = require("./movieList");
var _modal = require("../components/modal");
function renderLibraryList(movies) {
    const libraryContainer = document.querySelector(".library-list");
    libraryContainer.innerHTML = "";
    if (!movies || movies.length === 0) {
        libraryContainer.innerHTML = "<p>No movies found.</p>";
        return;
    }
    let movieItems = "";
    movies.forEach((movie)=>{
        movieItems += (0, _movieList1.generateMovieHTML)(movie);
    });
    libraryContainer.innerHTML = `<ul class="movies">${movieItems}</ul>`;
    libraryContainer.addEventListener("click", (event)=>{
        const movieItem = event.target.closest(".movie_list_item");
        if (!movieItem) return;
        const movieId = movieItem.dataset.movieId;
        (0, _modal.initializeModal)(movieId);
    });
}
exports.default = renderLibraryList;

},{"../components/movieList":"4Q1Sa","./movieList":"4Q1Sa","../components/modal":"9rqXZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hon3Z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function initLibraryTabs({ onWatchedTabClick , onQueueTabClick ,  }) {
    const watchedBtn = document.querySelector("#watched-btn");
    const queueBtn = document.querySelector("#queue-btn");
    watchedBtn.addEventListener("click", ()=>{
        watchedBtn.classList.add("library-btn-active");
        queueBtn.classList.remove("library-btn-active");
        onWatchedTabClick();
    });
    queueBtn.addEventListener("click", ()=>{
        queueBtn.classList.add("library-btn-active");
        watchedBtn.classList.remove("library-btn-active");
        onQueueTabClick();
    });
}
exports.default = initLibraryTabs;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gAN3y":[function() {},{}],"iwJJl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "showLoader", ()=>showLoader);
const loader = document.querySelector(".loader");
function showLoader() {
    console.log("calling showLoader()");
    loader.classList.add("show");
    setTimeout(()=>{
        loader.classList.remove("show");
    }, 1000);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["1RB6v","8lqZg"], "8lqZg", "parcelRequiree8fd")

//# sourceMappingURL=index.975ef6c8.js.map
