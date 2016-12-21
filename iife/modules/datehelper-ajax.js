(function() {
	'use strict';
	var padLeft = function(num) {
		var n = num + '';
		var pad = '00';
		return (pad + n).slice(-pad.length);
	};
	var showDate = function() {
		var d = new Date(Date.now());
		return padLeft(d.getDate()) + '.' + padLeft(d.getMonth() + 1) + '.';
	};
	var showTime = function() {
		var d = new Date(Date.now());
		return d.getHours() + ':' + padLeft(d.getMinutes());
	};
	return {
		showDate: showDate,
		showTime: showTime
	};
})();
