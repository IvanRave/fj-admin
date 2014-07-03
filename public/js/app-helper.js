window.fj = window.fj || {};

(function (app) {
	app.helper = {};

	app.helper.getUrlParam = function (name) {
		name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
		var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
		results = regex.exec(location.search);
		return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
	};

	app.helper.getHashParam = function (name) {
		var arr = location.hash.match(new RegExp(name + '=([^&]*)'));
		if (arr && arr.length > 0) {
			return arr[1];
		}
	};

	app.helper.showElems = function (elems) {
    console.log('showelems', elems);
		for (var i = 0; i < elems.length; i += 1) {
      console.log(elems[i].style.display);
			elems[i].style.display = 'block';
		}
	};

	app.helper.hideElems = function (elems) {
    console.log('hideelems', elems);
		for (var i = 0; i < elems.length; i += 1) {
    console.log(elems[i].style.display);
			elems[i].style.display = 'none';
		}
	};
})(window.fj);
