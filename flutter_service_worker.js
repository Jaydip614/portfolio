'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "7c50e52f160ba913fa76bb0c09ab3106",
"assets/AssetManifest.bin.json": "552c89588b75f164be34c136fdf1d72b",
"assets/AssetManifest.json": "90c5f5f970157f3a70e4c3984bc31bfc",
"assets/assets/fonts/SourceSans3-Bold.ttf": "91e42896d12340dc2039cf7098cf6682",
"assets/assets/fonts/SourceSans3-Medium.ttf": "0029d6c389a7945dbc32604af073250d",
"assets/assets/fonts/SourceSans3-Regular.ttf": "72a368e7e2bcbd83f75c763aa19d8bf4",
"assets/assets/images/achievements/badge_logo.png": "67f2598c3b3bf9deb0d519239f6df285",
"assets/assets/images/achievements/cpp_logo.png": "eda66ba9335be1fa4c0190a48de83c48",
"assets/assets/images/achievements/ieee_logo.png": "a6d3c9ab8dfdbadd622d7e25660af66d",
"assets/assets/images/error_icon.png": "2a75e877d1678b77ed80c23610169bab",
"assets/assets/images/home_bg.png": "b1fcb8273792cdd602f5caee72db7b57",
"assets/assets/images/home_vector.png": "c81fc87b6c255ca0141a689baa2914f0",
"assets/assets/images/jaydip_circle_image.png": "55bdb58ff106b16cf25331a72db671af",
"assets/assets/images/profile_image.png": "14b02f0eda8a1a4033c9347243edea63",
"assets/assets/images/projects/interview_ai_logo.png": "4260e615267a607db1506f0e80dbaf1f",
"assets/assets/images/projects/portfolio_square_logo.png": "fcee0b68e179e68f7f97203beb8662b3",
"assets/assets/images/projects/presence_logo.png": "a80b9400c363b5a1e8c8e53b63899a49",
"assets/assets/images/projects/pstore_logo.png": "275e8200d70e88293ab0cc34e22b69fe",
"assets/assets/images/projects/uiux_design_logo.png": "f70283563dde334ca8e2acd7524ed8a8",
"assets/assets/images/projects/web_black_logo.png": "28fb21ed986c47fce06482ec68a1618b",
"assets/assets/images/sent_icon.png": "4c9798c1b51983f5d6966f659193388d",
"assets/assets/images/socials/codechef_image.png": "936849b04df2c7b6393b9c02674c3a83",
"assets/assets/images/socials/developer_image.png": "4437e8274d4c4360f7128e2d35821084",
"assets/assets/images/socials/github_image.png": "5b181fff0490f2f586130a473c058d74",
"assets/assets/images/socials/github_white_logo.png": "a9e8c39738d4a44530cb482d05e704a6",
"assets/assets/images/socials/instagram_white_logo.png": "ae7e6e4f03a2d0718d373f51e49ac42d",
"assets/assets/images/socials/leetcode_image.png": "2fabdcc5d9906070ebcf99e03071a561",
"assets/assets/images/socials/linkedin_image.png": "d221d1d5f141b08e041f74897a2e1a8f",
"assets/assets/images/socials/linkedin_white_logo.png": "74aa89439c203911706470558ce41863",
"assets/assets/images/tools/androidstudio.png": "b13dee92cd947f03f066271be5e2298e",
"assets/assets/images/tools/figma.png": "11bda884d5a2d5f5e90fa7ca0f8740d0",
"assets/assets/images/tools/github.png": "ec3a60c8c6539a07eb70b52f6737ea6e",
"assets/assets/images/tools/vscode.png": "a6abeed287993ba97987cc36b4004570",
"assets/assets/logos/app_logo.png": "64bc052bf4e5f1b098c0d282fcfc78b8",
"assets/FontManifest.json": "119a0d456ee024fe6df87243a0c586f5",
"assets/fonts/MaterialIcons-Regular.otf": "f126e7a2269505c6c1a4f81f8377fbe2",
"assets/NOTICES": "aa6cd85a8304461451fc21b9e2d070dc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "0232d5f834ed32e80ddbd97ab753e4c3",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "fbc40ef60c48c235ecad9a7709d2fe5f",
"icons/Icon-192.png": "850565ef62ec4fc12f713b44d0a5431e",
"icons/Icon-512.png": "23c9cfa14bc54dddb340d6b6f3f8dd55",
"icons/Icon-maskable-192.png": "850565ef62ec4fc12f713b44d0a5431e",
"icons/Icon-maskable-512.png": "23c9cfa14bc54dddb340d6b6f3f8dd55",
"index.html": "912ac36ff4e1afadf5869102bc978827",
"/": "912ac36ff4e1afadf5869102bc978827",
"main.dart.js": "cfc5aefcac17fda7ef43091c4b61d4fa",
"manifest.json": "3cf88fc5425e8204841c07471ed0c2a7",
"version.json": "1efc03e2b3cd9bb89cafcd1fc698e5b9"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
