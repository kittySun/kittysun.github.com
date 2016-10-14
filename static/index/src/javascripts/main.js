define(function(require) {
	var Spinning = require('./spinning');
	var s = new Spinning('#container');
	s.render();
	var $ = require("jquery");
	require("./jquery.fullPage.js")($);
	$(document).ready(function() {
		$('#dowebok').fullpage({
			sectionsColor: ['#fff', '#fff', '#f4f4f4', '#fff'],
			anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
			navigation: true,
			navigationPosition: "left"
		});
		$('#home_head').css('margin-top','0px');
	})
});