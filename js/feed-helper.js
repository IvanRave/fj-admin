// Required google js api
google.load("feeds", "1");

window.fj = window.fj || {};

(function (app) {
	if (!app.helper) {
		throw new Error('required app-helper');
	}

	if (!app.reqHelper) {
		throw new Error('required req-helper');
	}

	if (!app.cnst) {
		throw new Error('required app-cnst');
	}

	app.feedHelper = {};

	var handlePostedBlog = function (resultPostLink, r) {
		console.log(r);

		var editLink = 'https://www.blogger.com/blogger.g?blogID=' + r.blog.id + '#editor/target=post;postID=' + r.id + ';onPublishedMenu=posts;onClosedMenu=posts;postNum=0;src=link';
		resultPostLink.href = editLink;
		resultPostLink.target = '_blank';
		resultPostLink.appendChild(document.createTextNode('result link to edit'));
	};

	var cbkClickPost = function (btnPost, entry, resultPostLink) {
		console.log(JSON.stringify(entry));
    
    btnPost.disabled = true;

		app.reqHelper.postBlog(app.cnst.BLOG_ID, entry.title, entry.content,
			handlePostedBlog.bind(null, resultPostLink));
	};

	var buildEntrySection = function (entry) {
		var section = document.createElement("div");
		section.classList.add('job-section');
		// title - h3
		var blockTitle = document.createElement("h3");
		blockTitle.appendChild(document.createTextNode(entry.title));
		section.appendChild(blockTitle);

		// content
		var blockContent = document.createElement('p');
		blockContent.innerHTML = entry.content;
		//blockContent.appendChild(document.createTextNode(entry.content));
		section.appendChild(blockContent);

		// place for a result link
		var resultPostLink = document.createElement('a');

		// button to post
		var blockPost = document.createElement('div');
		var btnPost = document.createElement('button');

		btnPost.appendChild(document.createTextNode('Post'));
		btnPost.onclick = cbkClickPost.bind(null, btnPost, entry, resultPostLink);

		blockPost.appendChild(btnPost);
		blockPost.appendChild(resultPostLink);

		section.appendChild(blockPost);

		return section;
	};

	// app.feedHelper.buildDemoEntry = function () {
	// var entry = {
	// "title" : "Marketing specialist (Bosch Workshop Concept)",
	// "link" : "http://krasnodar.hh.ru/vacancy/10919058",
	// "author" : "",
	// "publishedDate" : "Thu, 03 Jul 2014 14:43:35 -0700",
	// "contentSnippet" : "Вакансия компании: BOSCHСоздана: 04.07.2014Регион: МоскваПредполагаемый уровень месячного дохода: не указан",
	// "content" : "<p>Вакансия компании: BOSCH</p><p>Создана: 04.07.2014</p><p>Регион: Москва</p><p>Предполагаемый уровень месячного дохода: не указан</p>",
	// "categories" : []
	// };

	// var container = document.getElementById("feed");

	// container.appendChild(buildEntrySection(entry));
	// };

	var handleEntry = function (container, entry) {
		container.appendChild(buildEntrySection(entry));

		console.log(entry);
	};

	var filterJobMatch = function (entry, jobTitle) {
		if (entry.title.toLowerCase().indexOf(jobTitle) >= 0) {
			return true;
		}

		if (entry.content.toLowerCase().indexOf(jobTitle) >= 0) {
			return true;
		}

		return false;
	};

	var filterByFunJob = function (entry) {
		var usualJobArr = app.cnst.USUAL_JOBS;

		var jobMatches = usualJobArr.filter(filterJobMatch.bind(null, entry));

		// If no matches - that it is a fun job (possible fun:))
		return jobMatches.length === 0;
	};

	var correctEntryContent = function (entry) {
		entry.content += '<br><hr>Источник вакансии: <a href="' + entry.link + '">' + entry.link + '</a>';
		return entry;
	};

	var cbkLoadFeed = function (result) {
		app.helper.hideLoader();
		if (result.error) {
			// todo: #42! handle a error
			console.log(result.error);
			alert(JSON.stringify(result.error));
			return;
		}

		var funEntries = result.feed.entries.filter(filterByFunJob);

		if (funEntries.length === 0) {
			alert('No fun jobs on this rss channel');
			return;
		}

		funEntries = funEntries.map(correctEntryContent);

		var container = document.getElementById("feed");
		container.innerHTML = '';
		funEntries.forEach(handleEntry.bind(null, container));
	};

	var initialize = function (rssUrl) {
		if (!rssUrl) {
			alert('no rss');
			return;
		}

		var feed = new google.feeds.Feed(rssUrl);
		//.setNumEntries(num) sets the number of feed entries loaded by this feed to num.
		// By default, the Feed class loads four entries.
		feed.setNumEntries(app.cnst.NUM_ENTRIES_TO_LOAD);

		app.helper.showLoader();
		feed.load(cbkLoadFeed);
	};

	app.feedHelper.loadRss = function (rssUrl) {
		//google.setOnLoadCallback(initialize);
		initialize(rssUrl);
	};

})(window.fj);
