window.fj = window.fj || {};

// Note: Starting with Gecko 30.0 (Firefox 30.0 / Thunderbird 30.0 / SeaMonkey 2.27),
// synchronous requests on the main thread have been deprecated
// due to the negative effects to the user experience.
// req.open(method, url, isAsync) - by default isAsync - true

(function (app) {
	app.reqHelper = {};

	var cbkOnReady = function (req, e) {
		// readyState: возвращает текущее состояние объекта
		// (0 — неинициализирован,
		// 1 — открыт,
		// 2 — отправка данных,
		// 3 — получение данных и
		// 4 — данные загружены)
		if (req.readyState === 4) {
			console.log(e);
			alert(req.readyState + ' ' + req.status);
			console.log(req.responseXML);
		}
	};

	app.reqHelper.loadXml = function () {
		var req = new XMLHttpRequest();
		req.open('GET', 'data/rss-list.xml');

		req.onreadystatechange = cbkOnReady.bind(null, req);
		req.send(null);
	};

	app.reqHelper.jsonp = function (url, callback) {
		var callbackName = 'jsonp_callback_' + Math.round(100000 * Math.random());
		window[callbackName] = function (data) {
			delete window[callbackName];
			document.body.removeChild(script);
			callback(data);
		};

		var script = document.createElement('script');
		script.src = url + (url.indexOf('?') >= 0 ? '&' : '?') + 'callback=' + callbackName;
		document.body.appendChild(script);
	};

	app.reqHelper.loadBlogger = function (accessToken) {
		// And send the token over to the server
		var req = new XMLHttpRequest();

		var url = 'https://www.googleapis.com/blogger/v3/users/self/blogs?access_token=' + accessToken;

		// consider using POST so query isn't logged
		req.open('GET', url);

		req.onreadystatechange = cbkOnReady.bind(null, req);

		req.send(null);
	};
})(window.fj);
