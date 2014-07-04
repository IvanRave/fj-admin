// load from external file

window.fj = window.fj || {};

(function (app) {
	if (!app.helper) {
		throw new Error('required app-helper');
	}

	if (!app.cnst) {
		throw new Error('required app-cnst');
	}

	if (!app.feedHelper) {
		throw new Error('required feed-helper');
	}

	app.auth = {};

	var buildRssBtn = function (rssObj) {
		var btn = document.createElement('button');
		btn.classList.add('btn');
		btn.appendChild(document.createTextNode((rssObj.city || '') + ' ' + rssObj.site));

		btn.onclick = function () {
			app.feedHelper.loadRss(rssObj.url);
		};

		return btn;
	};

	var loadBtnRss = function () {
		var rssInitiator = document.getElementById('rss-initiator');

		var rssBtns = app.cnst.RSSES.map(buildRssBtn);

		rssBtns.forEach(function (rssBtn) {
			rssInitiator.appendChild(rssBtn);
		});
	};

	/**
	 * Show secured buttons and fields
	 */
	var activateCabinet = function () {
		// >IE8
		var onlyPublicArr = document.getElementsByClassName('only-public');
		var onlySecuredArr = document.getElementsByClassName('only-secured');

		app.helper.hideElems(onlyPublicArr);
		app.helper.showElems(onlySecuredArr);

		loadBtnRss();
	};

	var handleAccessToken = function () {
		var accessToken = app.helper.getHashParam('access_token');
		var expiresIn = app.helper.getHashParam('expires_in');
		if (accessToken && expiresIn) {
			app.auth = {
				accessToken : accessToken,
				expiresIn : expiresIn,
				created : new Date()
			};
			// clean hash to not reuse after update (on release config)
			//window.location.hash = '';

			activateCabinet();
		} else {

			// http://localhost:24242
			var appUrl = app.cnst.AUTH_REDIRECT_URL;
			// for localhost path check it
			//= window.location.protocol + '//' + window.location.host;
			// Show login button
			var loginUrl = app.cnst.GOOGLE_AUTH_URL + '?response_type=token&client_id=' + app.cnst.CLIENT_ID + '&scope=' + app.cnst.CLIENT_SCOPE + '&redirect_uri=' + appUrl;
			var loginBtn = document.getElementById('login-btn');
			loginBtn.href = loginUrl;
			loginBtn.style.display = 'block';
		}
	};

	handleAccessToken();
})(window.fj);
