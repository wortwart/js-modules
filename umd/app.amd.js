'use strict';
var pre = document.querySelector('pre');
require(['./modules/datehelper', './modules/hello'], function(datehelper, hello) {
	var content = [];
	content.push('Heute ist der ' + datehelper.showDate());
	content.push('Es ist ' + datehelper.showTime() + ' Uhr.');
	content.push(hello);
	setTimeout(function() {pre.innerHTML += content.join("\n");}, 500);
});
