'use strict';
const padLeft = function(num) {
	var n = num + '';
	var pad = '00';
	return (pad + n).slice(-pad.length);
};
const showDate = function() {
	var d = new Date(Date.now());
	return padLeft(d.getDate()) + '.' + padLeft(d.getMonth() + 1) + '.';
};
const showTime = function() {
	var d = new Date(Date.now());
	return d.getHours() + ':' + padLeft(d.getMinutes());
};
module.exports = {
	showDate: showDate,
	showTime: showTime
};
