const padLeft = function(num) {
	let n = num + '';
	let pad = '00';
	return (pad + n).slice(-pad.length);
}
export const unused = function() {
	alert('Hallo, Modul 1!');
}
export const showDate = function() {
	let d = new Date(Date.now());
	return padLeft(d.getDate()) + '.' + padLeft(d.getMonth() + 1) + '.';
}
export const showTime = function() {
	let d = new Date(Date.now());
	return d.getHours() + ':' + padLeft(d.getMinutes());
}
