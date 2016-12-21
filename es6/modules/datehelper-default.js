const padLeft = function(num) {
	let n = num + '';
	let pad = '00';
	return (pad + n).slice(-pad.length);
}
const unused = function() {
	alert('Hallo, Modul 1!');
}
const showDate = function() {
	let d = new Date(Date.now());
	return padLeft(d.getDate()) + '.' + padLeft(d.getMonth() + 1) + '.';
}
const showTime = function() {
	let d = new Date(Date.now());
	return d.getHours() + ':' + padLeft(d.getMinutes());
}
export default {
	unused: unused,
	showDate: showDate,
	showTime: showTime
}