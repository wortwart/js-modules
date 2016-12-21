[
	'modules/datehelper-standard',
	'modules/hello-standard',
	'app-autoembed'
].forEach(function(el) {
	var script = document.createElement('script');
	script.setAttribute('src', el + '.js');
	document.body.appendChild(script);
});
