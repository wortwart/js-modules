'use strict';
var pre = document.querySelector('pre');
require(['datehelper', 'hello'].map(function(el) {
		return './modules/' + el;
	}), function(datehelper, hello) {
	var content = [];
	content.push('Heute ist der ' + datehelper.showDate());
	content.push('Es ist ' + datehelper.showTime() + ' Uhr.');
	content.push(hello.text);
	setTimeout(function() {pre.innerHTML += content.join("\n");}, 500);
});
pre.innerHTML += "noch länger warten ...\n";