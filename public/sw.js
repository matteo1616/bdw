/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.5.0/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.5.0"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-6ce3bc100ca4f3818695.js"
  },
  {
    "url": "app-c93f2534366d9b0c6ecc.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-554b9a695eb29cca4f78.js"
  },
  {
    "url": "index.html",
    "revision": "6478c67c546f77351d173e63e4532053"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "53210d984bdd72665dfc724c12374974"
  },
  {
    "url": "3.5b45ca12df3e7aa2ab91.css"
  },
  {
    "url": "1.a635c6d9d53091eb9e50.css"
  },
  {
    "url": "0.996290fd3efb0f900abd.css"
  },
  {
    "url": "component---src-pages-index-jsx-ca811d37e8c652f4f42a.js"
  },
  {
    "url": "2-f1ac7eed66141fc92f3f.js"
  },
  {
    "url": "0-f538097f4393b4f08fb4.js"
  },
  {
    "url": "3-27b61195805938571a3f.js"
  },
  {
    "url": "1-1e135d8ebd7e7addbd02.js"
  },
  {
    "url": "static/d/742/path---index-6a9-2kpwEOVCD1xa8nN0CnPXaGrHU.json",
    "revision": "83890390b7d062e7bc9a6ed91abf36ef"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "2beec1809167319434ef85e8e791873c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});