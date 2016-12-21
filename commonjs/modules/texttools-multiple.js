'use strict';
module.exports.cleanWhitespace = function(text) {
	return text.trim().replace(/(\s+)/g, ' ');
}
module.exports.sortWords = function(text) {
	return text.toLowerCase().split(/\s+/).filter(function(el) {
		if (el.match(/\w/)) return el;
	}).sort();
}
