'use strict';
const pre = document.querySelector('pre');
if (Math.floor(Math.random() * 2)) {
	const prefix = './modules/';
	const m1 = System.import(prefix + 'datehelper-multiple');
	const m2 = System.import(prefix + 'hello');
	Promise.all([m1, m2]).then(([datehelper, hello]) => {
		let content = [];
		content.push('Heute ist der ' + datehelper.showDate());
		content.push('Es ist ' + datehelper.showTime() + ' Uhr.');
		content.push(hello.default);
		pre.innerHTML = content.join("\n");
	});
} else {
	pre.innerHTML = 'Heute keine Module. Neuladen?';
}
