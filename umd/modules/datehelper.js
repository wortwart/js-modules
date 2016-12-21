'use strict';
+function (root, factory, modulename) {
	if (typeof define === 'function' && define.amd) {
		define(factory);
	} else if (typeof module === 'object' && module.exports) {
		module.exports = factory();
	} else {
		root[modulename] = factory();
	}
}(this, function() {
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
}, 'datehelper');