const version = "1.0";

const appAssets = ["index.html", "../src/App.js", "../src/index.js"];

// eslint-disable-next-line no-restricted-globals
self.addEventListener("install", (e) => {
	e.waitUntil(
		caches
			.open(`static-${version}`)
			.then((cache) => cache.addAll(appAssets))
	);
});

// eslint-disable-next-line no-restricted-globals
self.addEventListener("activate", (e) => {
	let cleaned = caches.keys().then((keys) => {
		keys.forEach((key) => {
			if (key !== `static-${version}` && key.match("static-")) {
				return caches.delete(key);
			}
		});
	});

	e.waitUntil(cleaned);
});

const staticCache = (request, cacheName = `static-${version}`) => {
	return caches.match(request).then((cachedRes) => {
		if (cachedRes) return cachedRes;

		return fetch(request).then((networkRes) => {
			caches
				.open(cacheName)
				.then((cache) => cache.put(request, networkRes));

			return networkRes.clone();
		});
	});
};

// const fallbackCache = (request) => {
// 	return fetch(request)
// 		.then((networkRes) => {
// 			// eslint-disable-next-line no-throw-literal
// 			if (!networkRes.ok) throw "Fetch Error";

// 			caches
// 				.open(`static-${version}`)
// 				.then((cache) => cache.put(request, networkRes));

// 			return networkRes.clone();
// 		})
// 		.catch((error) => caches.match(request));
// };

// eslint-disable-next-line no-restricted-globals
self.addEventListener("fetch", (e) => {
	// eslint-disable-next-line no-restricted-globals
	if (e.request.url.match(location.origin)) {
		e.respondWith(staticCache(e.request));
	} else if (e.request.url.match("api.rawg.io/api/games")) {
		e.respondWith(staticCache(e.request, "games"));
	}
});
