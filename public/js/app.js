// load from external file

window.fj = window.fj || {};

(function (app) {
	if (!app.helper) {
		throw new Error('required app-helper');
	}

	app.auth = {};

	/**
	 * Show secured buttons and fields
	 */
	var activateCabinet = function () {
		// >IE8
		var onlyPublicArr = document.getElementsByClassName('only-public');
		var onlySecuredArr = document.getElementsByClassName('only-secured');

    app.helper.hideElems(onlyPublicArr);
    app.helper.showElems(onlySecuredArr);
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
			// clean hash to not reuse after update
			window.location.hash = '';

			activateCabinet();
		}
	};

	handleAccessToken();
})(window.fj)
