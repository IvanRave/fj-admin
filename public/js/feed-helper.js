// Required google js api
google.load("feeds", "1");

window.fj = window.fj || {};

(function (app) {
	if (!app.reqHelper) {
		throw new Error('required req-helper');
	}

	app.feedHelper = {};

	var cbkClickPost = function (entry) {
		console.log(entry);
	};

	var buildEntrySection = function (entry) {
		var section = document.createElement("div");
		// title - h3
		var blockTitle = document.createElement("h3");
		blockTitle.appendChild(document.createTextNode(entry.title));
		section.appendChild(blockTitle);

		// content
		var blockContent = document.createElement('p');
		blockContent.appendChild(document.createTextNode(entry.content));
		section.appendChild(blockContent);

		// button to post
		var blockPost = document.createElement('div');
		var btnPost = document.createElement('button');

		btnPost.onclick = cbkClickPost.bind(null, entry);

		blockPost.appendChild(btnPost);
		section.appendChild(blockPost);
    
    return section;
	};

	var handleEntry = function (container, entry) {
		container.appendChild(buildEntrySection(entry));
    
		console.log(entry);
	};

	var cbkLoadFeed = function (result) {
		if (result.error) {
			// todo: #42! handle a error
			return;
		}

		var container = document.getElementById("feed");
		result.feed.entries.forEach(handleEntry.bind(null, container));
	};

	var initialize = function () {
		var rssUrl = 'http://krasnodar.hh.ru/search/vacancy/rss?items_on_page%3D200&area=1&items_on_page=200&search_period=30&search_period=30&order_by=publication_time&order_by=publication_time';

		var feed = new google.feeds.Feed(rssUrl);
		//.setNumEntries(num) sets the number of feed entries loaded by this feed to num.
		// By default, the Feed class loads four entries.
		feed.setNumEntries(4);
		feed.load(cbkLoadFeed);
	};

	app.feedHelper.loadRss = function () {
		//google.setOnLoadCallback(initialize);
		initialize();
	};

})(window.fj);
