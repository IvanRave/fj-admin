window.fj = window.fj || {};

(function (app) {

	app.cnst = {
		'GOOGLE_AUTH_URL' : 'https://accounts.google.com/o/oauth2/auth',
    'AUTH_REDIRECT_URL' : 'https://ivanrave.github.io/fj-admin/',
		'CLIENT_ID' : '983416106847-0s22qk7qvcmgtukb23b3cn2nnfl62mji.apps.googleusercontent.com',
		'CLIENT_SCOPE' : 'https://www.googleapis.com/auth/blogger',
		'BLOG_ID' : '7235680921074654464',
		'NUM_ENTRIES_TO_LOAD' : 200,
		'USUAL_JOBS' : ["менеджер",
			"бухгалтер",
			"водитель",
			"грузчик",
			"продавец",
			"кассир",
			"секретарь",
			"курьер",
			"логист",
			"кладовщик",
			"автомаляр",
			"автослесарь",
			"сметчик",
			"отделочник",
			"промоутер",
			"монтажник",
			"оператор",
			"агент",
			"охранник",
			"риэлтор",
			"супервайзер",
			"юрист",
			"слесарь",
			"токарь",
			"повар",
			"официант",
			"управляющий ",
			"консультант ",
			"финансовый ",
			"кредит",
			"рерайтер",
			"мерчендайзер",
			"аналитик",
			"маркетолог",
			"горничная",
			"экономист",
			"торговый",
			"администратор",
			"упаковщик",
			"юрисконсульт",
			"диспетчер",
			"мерчандайзер",
			"врач",
			"фрезеровщик",
			"товаровед",
			"продажи",
			"няня",
			"укладчик",
			"домработница",
			"станочник",
			"столяр",
			"стропальщик",
			"прораб",
			"автомеханик",
			"строитель",
			"электрик",
			"рассылка",
			"риелтор",
			"механик",
			"геодезист",
			"уборщица",
			"парикмахер",
			"рабочий",
			"сварщик",
			"кредитный",
			"архивариус",
			"экспедитор",
			"инженер",
			"офис",
			"аудитор",
			"аудит",
			"директор",
			"электромонтажник",
			"электромеханик",
			"ревизор",
			"покупатель",
			"разнорабочий",
			"адвокат",
			"название",
			"машинист",
			"бетонщик",
			"продвижение",
			"водитель-экспедитор",
			"оценщик",
			"закупки",
			"сторож",
			"мойщик",
			"уборщик",
			"трейдер",
			"менeджер",
			"медсестра",
			"верстальщик",
			"склад",
			"электрогазосварщик",
			"декларант",
			"рекрутер",
			"инвентаризатор",
			"дворник",
			"тракторист",
			"комплектовщик",
			"плиточник",
			"инспектор",
			"теплотехник",
			"руководитель",
			"расклейщик",
			"шиномонтажник",
			"бухгaлтeр",
			"бармен",
			"референт",
			"фармацевт",
			"провизор",
			"котельщик",
			"операционист",
			"электросварщик",
			"автоэлектрик",
			"копровщик",
			"энергетик",
			"драгер",
			"маркетинг",
			"кредитование",
			"упаковщица",
			"документация",
			"сантехник",
			"брусчатчик",
			"монолитчик",
			"каменщик",
			"кабельщик",
			"автомойщик",
			"штукатур",
			"плотник",
			"концентраторщик",
			"портной",
			"документовед",
			"фасовщик",
			"маляр",
			"бригадир",
			"электромонтер",
			"автозаправщик",
			"комендант",
			"снабженец",
			"кровельщик",
			"брокер",
			"арматурщик"],
		"RSSES" : [{
				"url" : "http://hh.ru/search/vacancy/rss?clusters=true&area=1",
				"city" : "Москва",
				"site" : "http://hh.ru/"
			}, {
				"url" : "http://spb.hh.ru/search/vacancy/rss?clusters=true&area=2",
				"city" : "Санкт-Петербург",
				"site" : "http://hh.ru/"
			}, {
				"url" : "http://rostov.hh.ru/search/vacancy/rss?clusters=true&area=76",
				"city" : "Ростов-на-Дону",
				"site" : "http://hh.ru/"
			}, {
				"url" : "http://krasnodar.hh.ru/search/vacancy/rss?clusters=true&area=53",
				"city" : "Краснодар",
				"site" : "http://hh.ru"
			}, {
				"url" : "http://sochi.hh.ru/search/vacancy/rss?clusters=true&area=237",
				"city" : "Сочи",
				"site" : "http://hh.ru/"
			}, {
				"url" : "http://kiev.hh.ua/search/vacancy/rss?clusters=true&area=115",
				"city" : "Киев",
				"site" : "http://hh.ru/"
			}, {
				"url" : "http://kazan.hh.ru/rss/searchvacancy.xml?orderBy=2&itemsOnPage=200&areaId=227&professionalAreaId=0&compensationCurrencyCode=RUR&searchPeriod=30",
				"city" : "Казань",
				"site" : "http://hh.ru/"
			}, {
				"url" : "http://rss.superjob.ru/vacancy/search/?town=4",
				"city" : "Москва",
				"site" : "http://www.superjob.ru/"
			}, {
				"url" : "http://rss.superjob.ru/vacancy/search/?town=14",
				"city" : "Санкт-Петербург",
				"site" : "http://www.superjob.ru/"
			}, {
				"url" : "http://rss.superjob.ru/vacancy/search/?town=73",
				"city" : "Ростов-на-Дону",
				"site" : "http://www.superjob.ru/"
			}, {
				"url" : "http://rss.superjob.ru/vacancy/search/?town=25",
				"city" : "Краснодар",
				"site" : "http://www.superjob.ru/"
			}, {
				"url" : "http://rss.superjob.ru/vacancy/search/?town=745",
				"city" : "Сочи",
				"site" : "http://www.superjob.ru/"
			}, {
				"url" : "http://jobselector.com/vacancy/list/0/122.xml",
				"site" : "http://jobselector.com/",
				"city" : "Санкт-Петербург"
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
				"url" : "http://rabota.slando.ru/moscow/rss/28.xml",
				"city" : "Москва",
				"site" : "http://rabota.slando.ru/"
			}, {
				"url" : "http://www.free-lance.ru/rss/all.xml",
				"site" : "http://www.free-lance.ru/"
			}, {
				"url" : "http://www.weblancer.net/rss/projects.rss",
				"site" : "http://www.weblancer.net/"
			}, {
				"url" : "http://krasnoyarsk.hh.ru/rss/searchvacancy.xml?orderBy=2&itemsOnPage=200&areaId=221&professionalAreaId=0&compensationCurrencyCode=RUR&searchPeriod=30",
				"city" : "Красноярск",
				"site" : "http://hh.ru/"
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
				"url" : "http://stavropol.hh.ru/rss/searchvacancy.xml?orderBy=2&itemsOnPage=200&areaId=1481&professionalAreaId=0&compensationCurrencyCode=RUR&searchPeriod=30",
				"city" : "Ставрополь",
				"site" : "http://hh.ru/"
			}, {
				"url" : "http://kaluga.hh.ru/rss/searchvacancy.xml?orderBy=2&itemsOnPage=200&areaId=1859&professionalAreaId=0&compensationCurrencyCode=RUR&searchPeriod=30",
				"city" : "Калуга",
				"site" : "http://hh.ru/"
			}, {
				"url" : "http://jobster.ru/xml?q=&ps=250&city=msk",
				"city" : "Москва",
				"site" : "http://jobster.ru"
			}, {
				"url" : "http://jobselector.com/vacancy/list/rss/0/82",
				"city" : "Москва",
				"site" : "http://jobselector.com/"
			}, {
				"url" : "http://jobselector.com/vacancy/list/rss/0/122",
				"city" : "Санкт-Петербург",
				"site" : "http://jobselector.com/"
			}, {
				"url" : "http://jobselector.com/vacancy/list/rss/0/119",
				"city" : "Ростов-на-Дону",
				"site" : "http://jobselector.com/"
			}, {
				"url" : "http://jobselector.com/vacancy/list/rss/0/70",
				"city" : "Краснодар",
				"site" : "http://jobselector.com/"
			}, {
				"url" : "http://jobselector.com/vacancy/list/rss/0/132",
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
				"url" : "http://www.acula.org/feed/newprojects.xml",
				"site" : "http://www.acula.org"
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
				"url" : "http://job.e-sochi.ru/vacancy.rss",
				"city" : "Сочи",
				"site" : "http://job.e-sochi.ru/"
			}, {
				"url" : "http://www.free-lancing.ru/rss/rss.php",
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
				"url" : "http://webfreelance.ru/rssfeed.php?x=50",
				"site" : "http://webfreelance.ru/"
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
				"url" : "http://www.careerist.ru/Vacancy/RssSearch/?keywords=%D0%9F%D0%BE%D0%B8%D1%81%D0%BA_%D0%B2%D0%B0%D0%BA%D0%B0%D0%BD%D1%81%D0%B8%D0%B9&adv=0",
				"city" : "Москва",
				"site" : "http://careerist.ru/"
			}, {
				"url" : "http://spb.careerist.ru/Vacancy/RssSearch/?keywords=%D0%9F%D0%BE%D0%B8%D1%81%D0%BA_%D0%B2%D0%B0%D0%BA%D0%B0%D0%BD%D1%81%D0%B8%D0%B9&adv=0",
				"city" : "Санкт-Петербург",
				"site" : "http://careerist.ru/"
			}, {
				"url" : "http://novosibirsk.hh.ru/rss/searchvacancy.xml?orderBy=2&itemsOnPage=200&areaId=222&professionalAreaId=0&compensationCurrencyCode=RUR&searchPeriod=30",
				"city" : "Новосибирск",
				"site" : "http://hh.ru/"
			}, {
				"url" : "http://nn.hh.ru/rss/searchvacancy.xml?orderBy=2&itemsOnPage=200&areaId=228&professionalAreaId=0&compensationCurrencyCode=RUR&searchPeriod=30",
				"city" : "Нижний Новгород",
				"site" : "http://hh.ru/"
			}, {
				"url" : "http://samara.hh.ru/rss/searchvacancy.xml?orderBy=2&itemsOnPage=200&areaId=226&professionalAreaId=0&compensationCurrencyCode=RUR&searchPeriod=30",
				"city" : "Самара",
				"site" : "http://hh.ru/"
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
		]
	};

})(window.fj);
