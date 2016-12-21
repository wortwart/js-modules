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
	return 'Hallo, Modul 2!';
}, 'hello');