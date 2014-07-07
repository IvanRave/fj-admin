window.fj = window.fj || {};

(function (app) {

	if (!app.cnst) {
		app.cnst = {};
	}

	app.cnst['RSSES'] = [{
			"url" : "http://rss.superjob.ru/vacancy/search/?town=4",
			"city" : "Москва",
			"site" : "www.superjob.ru"
		}, {
			"url" : "http://rss.superjob.ru/vacancy/search/?town=14",
			"city" : "Санкт-Петербург",
			"site" : "www.superjob.ru"
		}, {
			"url" : "http://rss.superjob.ru/vacancy/search/?town=73",
			"city" : "Ростов-на-Дону",
			"site" : "www.superjob.ru"
		}, {
			"url" : "http://rss.superjob.ru/vacancy/search/?town=25",
			"city" : "Краснодар",
			"site" : "www.superjob.ru"
		}, {
			"url" : "http://rss.superjob.ru/vacancy/search/?town=745",
			"city" : "Сочи",
			"site" : "www.superjob.ru"
		}, {
			"url" : "http://rss.superjob.ru/vacancy/search/?town=420",
			"city" : "Киев",
			"site" : "www.superjob.ru"
		}, {
			"url" : "http://rss.superjob.ru/vacancy/search/?town=511",
			"city" : "Черкассы",
			"site" : "www.superjob.ru"
		}, {
			"url" : "http://hh.ru/search/vacancy/rss?clusters=true&area=1",
			"city" : "Москва",
			"site" : "hh.ru"
		}, {
			"url" : "http://spb.hh.ru/search/vacancy/rss?clusters=true&area=2",
			"city" : "Санкт-Петербург",
			"site" : "hh.ru"
		}, {
			"url" : "http://rostov.hh.ru/search/vacancy/rss?clusters=true&area=76",
			"city" : "Ростов-на-Дону",
			"site" : "hh.ru"
		}, {
			"url" : "http://krasnodar.hh.ru/search/vacancy/rss?clusters=true&area=53",
			"city" : "Краснодар",
			"site" : "hh.ru"
		}, {
			"url" : "http://sochi.hh.ru/search/vacancy/rss?clusters=true&area=237",
			"city" : "Сочи",
			"site" : "hh.ru"
		}, {
			"url" : "http://kiev.hh.ua/search/vacancy/rss?clusters=true&area=115",
			"city" : "Киев",
			"site" : "hh.ua"
		}, {
			"url" : "http://kazan.hh.ru/search/vacancy/rss?area=227&clusters=true",
			"city" : "Казань",
			"site" : "hh.ru"
		}, {
			"url" : "http://krasnoyarsk.hh.ru/search/vacancy/rss?area=221&clusters=true",
			"city" : "Красноярск",
			"site" : "hh.ru"
		}, {
			"url" : "http://stavropol.hh.ru/search/vacancy/rss?area=1481&clusters=true",
			"city" : "Ставрополь",
			"site" : "hh.ru"
		}, {
			"url" : "http://kaluga.hh.ru/search/vacancy/rss?clusters=true&area=43",
			"city" : "Калуга",
			"site" : "hh.ru"
		}, {
			"url" : "http://novosibirsk.hh.ru/search/vacancy/rss?area=222&clusters=true",
			"city" : "Новосибирск",
			"site" : "hh.ru"
		}, {
			"url" : "http://nn.hh.ru/search/vacancy/rss?area=228&clusters=true",
			"city" : "Нижний Новгород",
			"site" : "hh.ru"
		}, {
			"url" : "http://samara.hh.ru/search/vacancy/rss?area=226&clusters=true",
			"city" : "Самара",
			"site" : "hh.ru"
		}, {
			"url" : "http://jobselector.com/vacancy/list/0/122.xml",
			"city" : "Санкт-Петербург",
			"site" : "jobselector.com"
		}, {
			"url" : "http://www.rabota.ru/v3_rssExport.html?wt=f&c=1&ot=t&cu=2&p=7&d=desc&fv=f&rc=9019&new=1&t=1&country=1&c_rus=&c_ukr=41&c_ec=133&pp=20&sm=103",
			"city" : "Москва",
			"site" : "http://www.rabota.ru/"
		}, {
			"url" : "http://spb.rabota.ru/v3_rssExport.html?wt=f&c=2&ot=t&cu=2&p=14&d=desc&cs=t&fv=f&pt=1263589200&rc=5494&new=1&t=1",
			"city" : "Санкт-Петербург",
			"site" : "http://www.rabota.ru/"
		}, {
			"url" : "http://rostov.rabota.ru/v3_rssExport.html?wt=f&c=6&ot=t&cu=2&p=14&d=desc&cs=t&fv=f&pt=1263589200&rc=457&new=1&t=1",
			"city" : "Ростов-на-Дону",
			"site" : "http://www.rabota.ru/"
		}, {
			"url" : "http://krasnodar.rabota.ru/v3_rssExport.html?wt=f&c=16&ot=t&cu=2&p=14&d=desc&cs=t&fv=f&pt=1263589200&rc=1268&new=1&t=1",
			"city" : "Краснодар",
			"site" : "http://www.rabota.ru/"
		}, {
			"url" : "http://sochi.rabota.ru/v3_rssExport.html?wt=f&c=55&ot=t&cu=2&p=14&d=desc&cs=t&fv=f&pt=1263589200&rc=46&new=1&t=1",
			"city" : "Сочи",
			"site" : "http://www.rabota.ru/"
		}, {
			"url" : "http://www.zarplata.ru/workman/rss.aspx?result=1&keywords=&locations=1&rubrics=r",
			"city" : "Москва",
			"site" : "http://www.zarplata.ru/"
		}, {
			"url" : "http://www.zarplata.ru/workman/rss.aspx?result=1&period=14&rubrics=&locations=4588%3a&freetext=False&sortfield=SaveDate&pagesize=30&viewmode=Short&showall=False&subscribename=&issearchbyid=False",
			"city" : "Санкт-Петербург",
			"site" : "http://www.zarplata.ru/"
		}, {
			"url" : "http://www.zarplata.ru/workman/rss.aspx?result=1&period=14&rubrics=&locations=4606%3a&freetext=False&sortfield=SaveDate&pagesize=30&viewmode=Short&showall=False&subscribename=&issearchbyid=False",
			"city" : "Ростов-на-Дону",
			"site" : "http://www.zarplata.ru/"
		}, {
			"url" : "http://www.zarplata.ru/workman/rss.aspx?result=1&pagesize=60&viewmode=Short&locations=4584%3a&period=14&sortfield=SaveDate&freetext=False&showall=False&issearchbyid=False&rubrics=&subscribename=",
			"city" : "Краснодар",
			"site" : "http://www.zarplata.ru/"
		}, {
			"url" : "https://www.fl.ru/rss/all.xml",
			"site" : "www.fl.ru"
		}, {
			"url" : "http://www.weblancer.net/rss/projects.rss",
			"site" : "http://www.weblancer.net/"
		}, {
			"url" : "http://free-lancers.net/rss/projects/",
			"site" : "http://free-lancers.net/"
		}, {
			"url" : "http://netlancer.ru/projects/rss.php",
			"site" : "http://netlancer.ru/"
		}, {
			"url" : "http://feeds.feedburner.com/Freelancehuntprojects",
			"site" : "http://freelancehunt.com/"
		}, {
			"url" : "http://jobselector.com/vacancy/list/0/82.xml",
			"city" : "Москва",
			"site" : "jobselector.com"
		}, {
			"url" : "http://jobselector.com/vacancy/list/0/122.xml",
			"city" : "Санкт-Петербург",
			"site" : "http://jobselector.com/"
		}, {
			"url" : "http://jobselector.com/vacancy/list/0/119.xml",
			"city" : "Ростов-на-Дону",
			"site" : "http://jobselector.com/"
		}, {
			"url" : "http://jobselector.com/vacancy/list/0/70.xml",
			"city" : "Краснодар",
			"site" : "http://jobselector.com/"
		}, {
			"url" : "http://jobselector.com/vacancy/list/0/132.xml",
			"city" : "Сочи",
			"site" : "http://jobselector.com/"
		}, {
			"url" : "http://freelance.ru/rss/projects.xml",
			"site" : "http://freelance.ru"
		}, {
			"url" : "http://www.flance.ru/rss.xml",
			"site" : "http://flance.ru"
		}, {
			"url" : "http://www.revolance.ru/rss/projects/",
			"site" : "http://www.revolance.ru"
		}, {
			"url" : "http://rss.superjob.ru/vacancy/search/?town=56",
			"city" : "Хабаровск",
			"site" : "http://www.superjob.ru/"
		}, {
			"url" : "http://www.best-lance.ru/rss/all.xml",
			"site" : "http://www.best-lance.ru"
		}, {
			"url" : "http://vingrad.ru/rss.php?mode=projects&tp=freelance",
			"site" : "http://vingrad.ru"
		}, {
			"url" : "http://www.free-lancing.ru/xmlFeed/rss.xml",
			"site" : "http://www.free-lancing.ru/"
		}, {
			"url" : "http://www.dowork.ru/RSS/Projects.ashx",
			"site" : "http://www.dowork.ru"
		}, {
			"url" : "http://sochi.org.ru/job/?Current_Screen=PosRSS",
			"city" : "Сочи",
			"site" : "http://sochi.org.ru/job/"
		}, {
			"url" : "http://rss.superjob.ru/vacancy/search/?town=752",
			"city" : "Армавир",
			"site" : "http://www.superjob.ru/"
		}, {
			"url" : "http://www.sochy.vacansia.ru/export/vacrss.php",
			"city" : "Сочи",
			"site" : "http://vacansia.ru/"
		}, {
			"url" : "http://www.freelancer.com/rss.xml",
			"site" : "http://www.freelancer.com"
		}, {
			"url" : "http://top-lance.ru/project/rss",
			"site" : "http://top-lance.ru/"
		}, {
			"url" : "http://freelancerbay.com/ru/rss/projects",
			"site" : "http://freelancerbay.com/"
		}, {
			"url" : "http://moscow.craigslist.org/jjj/index.rss",
			"city" : "Москва",
			"site" : "http://craigslist.org/"
		}, {
			"url" : "http://stpetersburg.craigslist.org/jjj/index.rss",
			"city" : "Санкт-Петербург",
			"site" : "http://craigslist.org/"
		}, {
			"url" : "http://www.careerist.ru/scr/rss/generate_vacsearch/?text=&p_region%5B0%5D=12&city%5B0%5D=38&sort_mode=time&sort_order=1",
			"city" : "Москва",
			"site" : "http://careerist.ru/"
		}, {
			"url" : "http://www.careerist.ru/scr/rss/generate_vacsearch/?text=&category=0&objectID=&newCity=&p_region%5B0%5D=14&city%5B0%5D=282&employ=50&salaryfrom=&experience=0&time=30&sort_mode=time&sort_order=1",
			"city" : "Санкт-Петербург",
			"site" : "http://careerist.ru/"
		}, {
			"url" : "http://rss.superjob.ru/vacancy/search/?town=33",
			"city" : "Екатеринбург",
			"site" : "http://www.superjob.ru/"
		}, {
			"url" : "http://rss.superjob.ru/vacancy/search/?town=12",
			"city" : "Нижний Новгород",
			"site" : "http://www.superjob.ru/"
		}, {
			"url" : "http://novosibirsk.careerist.ru/Vacancy/RssSearch/?keywords=%D0%9F%D0%BE%D0%B8%D1%81%D0%BA_%D0%B2%D0%B0%D0%BA%D0%B0%D0%BD%D1%81%D0%B8%D0%B9&adv=0",
			"city" : "Новосибирск",
			"site" : "http://careerist.ru/"
		}, {
			"url" : "http://ekaterinburg.careerist.ru/Vacancy/RssSearch/?keywords=%D0%9F%D0%BE%D0%B8%D1%81%D0%BA_%D0%B2%D0%B0%D0%BA%D0%B0%D0%BD%D1%81%D0%B8%D0%B9&adv=0",
			"city" : "Екатеринбург",
			"site" : "http://careerist.ru/"
		}, {
			"url" : "http://nnov.careerist.ru/Vacancy/RssSearch/?keywords=%D0%9F%D0%BE%D0%B8%D1%81%D0%BA_%D0%B2%D0%B0%D0%BA%D0%B0%D0%BD%D1%81%D0%B8%D0%B9&adv=0",
			"city" : "Нижний Новгород",
			"site" : "http://careerist.ru/"
		}, {
			"url" : "http://samara.careerist.ru/Vacancy/RssSearch/?keywords=%D0%9F%D0%BE%D0%B8%D1%81%D0%BA_%D0%B2%D0%B0%D0%BA%D0%B0%D0%BD%D1%81%D0%B8%D0%B9&adv=0",
			"city" : "Самара",
			"site" : "http://careerist.ru/"
		}
	];
})(window.fj);
