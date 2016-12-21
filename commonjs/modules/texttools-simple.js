'use strict';
const cleanWhitespace = function(text) {
	return text.trim().replace(/(\s+)/g, ' ');
}
module.exports = cleanWhitespace;