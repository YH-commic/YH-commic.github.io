'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "b60549ea4bae4b92c424b4b90d18d1ca",
"assets/ep9/10001.jpg": "621040a3c1410036946a9e206606d451",
"assets/ep9/10002.jpg": "ad658acd1735b32e304ac5603549f9a5",
"assets/ep9/10003.jpg": "23e0543863ed7c6c424eeab390046b18",
"assets/ep9/10004.jpg": "56b15b8590da28ba2a23bfcc00c78df6",
"assets/ep9/10005.jpg": "7c818556bb2b87fe897005df4fce6221",
"assets/ep9/10006.jpg": "0e14ed18e3ba94ac7b111333da7551fe",
"assets/ep9/10007.jpg": "2db9de468253015238152451e4634b12",
"assets/ep9/10008.jpg": "f1503e41a361f741c39140d3eb470e50",
"assets/ep9/10009.jpg": "d9f1909de5a48ceff508be44a9912058",
"assets/ep9/10010.jpg": "bed2481341982b4635295a7fd9728359",
"assets/ep9/10011.jpg": "a467440571ce17c2f75cbaaa408695b3",
"assets/ep9/10012.jpg": "669844633136964e9db4ee57b10a94a7",
"assets/ep9/10013.jpg": "09020b4ee946d6d451bdafa4aaae21a9",
"assets/ep9/10014.jpg": "bc5f04fec683c725ee852e336ea73640",
"assets/ep9/10015.jpg": "4c9111be1dcefe225ea379784f5cdd5d",
"assets/ep9/10016.jpg": "28125cc6ec95cc952740318e4d472071",
"assets/ep9/10017.jpg": "27a1a5c05d009ed590881419d8f4e4f0",
"assets/ep9/10018.jpg": "e2026a6ef9fa58e3d3692f6d223edb31",
"assets/ep9/10019.jpg": "6cb4d682a3f1b6097ac62e58601073d6",
"assets/ep9/10020.jpg": "5698111715890828c3f30f8f5f9cb0c8",
"assets/ep9/10021.jpg": "edc69b3a7d353daa08fcdf5fb8620e62",
"assets/ep9/10022.jpg": "1cd5d6e2691089a1eda397063fd22308",
"assets/ep9/10023.jpg": "4f4454406896466367c64636d18cf3f2",
"assets/ep9/10024.jpg": "930ded579a17dc6eb396a9d57f7bdce5",
"assets/ep9/10025.jpg": "1d6d7c945771a9222ee160b3d306f7a2",
"assets/ep9/10026.jpg": "beb73028c87333d85c1261b0f4a90bbf",
"assets/ep9/10027.jpg": "7724609f2e2259e31dd898e10ed7f143",
"assets/ep9/10028.jpg": "501a376c7191a88dcf1e268062313a7b",
"assets/ep9/10029.jpg": "7a0dfbda2109d6a52432b1c8272a15e0",
"assets/ep9/10030.jpg": "680243223c1e101537ef74b0bde8c2fd",
"assets/ep9/10031.jpg": "df7d702a177b638f78d97942e07bba35",
"assets/ep9/10032.jpg": "6410d731bb55e0ec2afe1e88c53ab0ec",
"assets/ep9/10033.jpg": "513ce16784077b230e431bf34f2f1f1c",
"assets/ep9/10034.jpg": "69448d4c47553465ccf79b3688959f4e",
"assets/ep9/10035.jpg": "8d0936281a5a65b86f7f46bb68df3a92",
"assets/ep9/10036.jpg": "b9fd70e1cb8ee4b8c119b7643a605fd4",
"assets/ep9/10037.jpg": "46db88da43ed156227a0cfb9ff8ece54",
"assets/ep9/10038.jpg": "b1880d592f8e72026a2592d4f0edcc9c",
"assets/ep9/10039.jpg": "0c4764b3660df180695e89966211ca46",
"assets/ep9/10040.jpg": "d3bcaa8702ae72ebebef8e147e311a0e",
"assets/ep9/10041.jpg": "5fac884e74c8dc80357e60d65a9703dc",
"assets/ep9/10042.jpg": "a1ce384e640ac56eacc7b633e34fc317",
"assets/ep9/10043.jpg": "105da6641259f3953819c9f93400b53d",
"assets/ep9/10044.jpg": "042db841621d63572a1c83c9bb8c4813",
"assets/ep9/10045.jpg": "bf2c2a5b81d433a90f120edd9d2054c1",
"assets/ep9/10046.jpg": "c5bd149dc5481464ae239284e3e335e8",
"assets/ep9/10047.jpg": "cf2bea7f21f9f021758e5572647acc98",
"assets/ep9/10048.jpg": "d558096badc31acb988c5c8a6b176e51",
"assets/ep9/10049.jpg": "b718a783eb68601ea1e5966c47ddf944",
"assets/ep9/10050.jpg": "da0686409e8b7f1899dfafc3ce20fe75",
"assets/ep9/10051.jpg": "c2bc0f6b3c7aaa952692936312942bf4",
"assets/ep9/10052.jpg": "75ca9fd7e5f7b19e3c563df4cae794f0",
"assets/ep9/10053.jpg": "c5287d51e5529e00ccd477383ad9dad5",
"assets/ep9/10054.jpg": "43cf8d3fa8ffbd965175b50a4fab8ab5",
"assets/ep9/10055.jpg": "9caacfd299dbbaf5e31c7591e5c8e47d",
"assets/ep9/10056.jpg": "8d7142e18cbcf1a5c0bed9717de8d2b8",
"assets/ep9/10057.jpg": "bc7a55a64d3bae0cc09a4991532988c1",
"assets/ep9/10058.jpg": "319a4ba73fa0afa032ad5c6173159627",
"assets/ep9/10059.jpg": "ddf9ae6d45dc40e598b7c78495f12c2c",
"assets/ep9/10060.jpg": "c4c91594064dd5908420deb641870880",
"assets/ep9/10061.jpg": "aead8515fe0312edd6ebbca93c8bba12",
"assets/FontManifest.json": "9ca5dcfcd70a3310e33da7169e2df95e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/images/apple.png": "cf11ebcc0a874e3ad3830431f7b0ab58",
"assets/images/book.png": "b9ec2a1e591f54e647e5aaa313bac0e7",
"assets/images/book_mark.png": "24400ed08cd3cffcd1b5c6885b3ee243",
"assets/images/comic_book.png": "7ff9bc74d5b8538708a6c3af0d2dfde9",
"assets/images/ex_comic_pic.jpg": "41e55ffe12ba6cfaa66f014cee2aa268",
"assets/images/facebook.png": "cda888975eb3a93283ba1608c5ea29d3",
"assets/images/folder_plus.png": "dac358df7c43bb334331dbea1b82498b",
"assets/images/google.png": "ff629c02385f2f3a199b7e0b3065d077",
"assets/images/image_regular.png": "3e2d4539bce4bca351c9a9ddf45fad55",
"assets/images/stack_image.png": "460ed63e13fc30d9599e2b3b47d54c7f",
"assets/NOTICES": "720a0ef7ef24023d9049a3e95cb2ad35",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutterfire_ui/assets/countries.json": "8c937aac9f3b69162be779fbcd6199d2",
"assets/packages/flutterfire_ui/assets/fonts/SocialIcons.ttf": "a1207fae1578da27a062cb73d424aed9",
"assets/packages/flutterfire_ui/assets/icons/apple_dark.svg": "1b587ffd7d75c462847f8137a93f3161",
"assets/packages/flutterfire_ui/assets/icons/apple_light.svg": "2508cc7c5d302fd37edff1b87fedb594",
"assets/packages/flutterfire_ui/assets/icons/facebook.svg": "5fad3daafe7c7c5163fca56662d2738a",
"assets/packages/flutterfire_ui/assets/icons/google.svg": "3b5ceaea5e2391782d39df225a375d5d",
"assets/packages/flutterfire_ui/assets/icons/twitter.svg": "6086e2aad26effea1344c8e118520e32",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"assets/packages/getwidget/icons/dribble.png": "1e36936e4411f32b0e28fd8335495647",
"assets/packages/getwidget/icons/facebook.png": "293dc099a89c74ae34a028b1ecd2c1f0",
"assets/packages/getwidget/icons/google.png": "596c5544c21e9d6cb02b0768f60f589a",
"assets/packages/getwidget/icons/line.png": "da8d1b531d8189396d68dfcd8cb37a79",
"assets/packages/getwidget/icons/linkedin.png": "822742104a63a720313f6a14d3134f61",
"assets/packages/getwidget/icons/pinterest.png": "d52ccb1e2a8277e4c37b27b234c9f931",
"assets/packages/getwidget/icons/slack.png": "19155b848beeb39c1ffcf743608e2fde",
"assets/packages/getwidget/icons/twitter.png": "caee56343a870ebd76a090642d838139",
"assets/packages/getwidget/icons/wechat.png": "ba10e8b2421bde565e50dfabc202feb7",
"assets/packages/getwidget/icons/whatsapp.png": "30632e569686a4b84cc68169fb9ce2e1",
"assets/packages/getwidget/icons/youtube.png": "1bfda73ab724ad40eb8601f1e7dbc1b9",
"assets/shaders/ink_sparkle.frag": "93f0b10ca00d158a358a2535d2547582",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "d4b9072e7dd196eb79c9a1bbd336d22b",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "119e1fe8338352066c1b22094075fc23",
"icons/Icon-512.png": "d0fb624ad13265e5214d66bf3b51e7ec",
"icons/Icon-maskable-192.png": "119e1fe8338352066c1b22094075fc23",
"icons/Icon-maskable-512.png": "d0fb624ad13265e5214d66bf3b51e7ec",
"index.html": "97c40f5e0ad37b91174f2ba6ed66c8f9",
"/": "97c40f5e0ad37b91174f2ba6ed66c8f9",
"main.dart.js": "c9a152338211b314e1d835c8cd6f3960",
"manifest.json": "cd42ae0ef8184ace21e38c0d580c7979",
"version.json": "559a7fe4b0dd8a5570c20abf635eb802"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
