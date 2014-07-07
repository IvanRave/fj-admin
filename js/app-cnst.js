window.fj = window.fj || {};

(function (app) {

	if (!app.cnst) {
		app.cnst = {};
	}

	app.cnst.auth = {
		'GOOGLE_AUTH_URL' : 'https://accounts.google.com/o/oauth2/auth',
		'AUTH_REDIRECT_URL' : 'https://ivanrave.github.io/fj-admin/',
		'CLIENT_ID' : '983416106847-0s22qk7qvcmgtukb23b3cn2nnfl62mji.apps.googleusercontent.com',
		'CLIENT_SCOPE' : 'https://www.googleapis.com/auth/blogger'
	};

	app.cnst.blog = {
		'BLOG_ID' : '7235680921074654464',
		'NUM_ENTRIES_TO_LOAD' : 200
	};

})(window.fj);
