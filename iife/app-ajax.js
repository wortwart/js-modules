var xhr = new XMLHttpRequest();
xhr.open('GET', 'modules/datehelper-ajax.js');
xhr.onreadystatechange = function() {
  if (xhr.readyState > 3 && xhr.status == 200) {
		eval('window.datehelper=' + xhr.responseText);
		var pre = document.querySelector('pre');
		var content = [];
		content.push('Heute ist der ' + datehelper.showDate());
		content.push('Es ist ' + datehelper.showTime() + ' Uhr.');
		//content.push(hello);
		pre.innerHTML += content.join("\n");
  }
};
xhr.send();
