var pre = document.querySelector('pre');
var content = [];
content.push('Heute ist der ' + datehelper.showDate());
content.push('Es ist ' + datehelper.showTime() + ' Uhr.');
content.push(hello);
pre.innerHTML += content.join("\n");