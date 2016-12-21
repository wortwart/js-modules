(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
const datehelper = require('./modules/datehelper');
const hello = require('./modules/hello');
const pre = document.querySelector('pre');
let content = [];
content.push('Heute ist der ' + datehelper.showDate());
content.push('Es ist ' + datehelper.showTime() + ' Uhr.');
content.push(hello);
pre.innerHTML = content.join("\n");
},{"./modules/datehelper":2,"./modules/hello":3}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
module.exports = 'Hallo, Modul 2!'
},{}]},{},[1]);
