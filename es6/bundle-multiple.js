const padLeft = function(num) {
	let n = num + '';
	let pad = '00';
	return (pad + n).slice(-pad.length);
};

const showDate = function() {
	let d = new Date(Date.now());
	return padLeft(d.getDate()) + '.' + padLeft(d.getMonth() + 1) + '.';
};
const showTime = function() {
	let d = new Date(Date.now());
	return d.getHours() + ':' + padLeft(d.getMinutes());
};

var hello = 'Hallo, Modul 2!';

const pre = document.querySelector('pre');
let content = [];
content.push('Heute ist der ' + showDate());
content.push('Es ist ' + showTime() + ' Uhr.');
content.push(hello);
pre.innerHTML = content.join("\n");
