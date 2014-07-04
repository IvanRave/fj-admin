window.fj = window.fj || {};

// Note: Starting with Gecko 30.0 (Firefox 30.0 / Thunderbird 30.0 / SeaMonkey 2.27),
// synchronous requests on the main thread have been deprecated
// due to the negative effects to the user experience.
// req.open(method, url, isAsync) - by default isAsync - true

(function (app) {
	app.reqHelper = {};

	var cbkOnReadyJSON = function (req, next) {
		// readyState: возвращает текущее состояние объекта
		// (0 — неинициализирован,
		// 1 — открыт,
		// 2 — отправка данных,
		// 3 — получение данных и
		// 4 — данные загружены)
		if (req.readyState === 4) {
			if (req.status === 200) {
				next(JSON.parse(req.responseText));
			} else if (req.status === 401) {
				window.location.hash = '';
				alert('Authorization is expired. Please update the page and re-login');
			} else {
				alert('Error: ' + req.readyState + ' ' + req.status);
			}
		}
	};

	var cbkOnReadyXml = function (req, e) {
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

		req.onreadystatechange = cbkOnReadyXml.bind(null, req);
		req.send(null);
	};

	app.reqHelper.execBlogger = function (reqUrl, reqMethod, reqData, next) {
		if (!app.auth.accessToken) {
			alert('No auth');
			return;
		}

		var reqDataStr = JSON.stringify(reqData);

		// todo: #33! check date and expires

		// And send the token over to the server
		var req = new XMLHttpRequest();

		reqUrl += '?access_token=' + app.auth.accessToken;

		// consider using POST so query isn't logged
		req.open(reqMethod, reqUrl);

		//req.setRequestHeader('authorization', 'BEARER ' + app.auth.accessToken);
		req.setRequestHeader("Content-type", "application/json");
		// req.setRequestHeader("Content-length", reqDataStr.length);

		req.onreadystatechange = cbkOnReadyJSON.bind(null, req, next);

		req.send(reqDataStr);
	};

	app.reqHelper.postBlog = function (blogId, blogTitle, blogContent, next) {
		var url = 'https://www.googleapis.com/blogger/v3/blogs/' + blogId + '/posts';

		var data = {
			"kind" : "blogger#post",
			"blog" : {
				"id" : blogId
			},
			"title" : blogTitle,
			"content" : blogContent
		};

		app.reqHelper.execBlogger(url, 'POST', data, next);
	};
})(window.fj);
