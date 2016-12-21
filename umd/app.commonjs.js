'use strict';
const datehelper = require('./modules/datehelper');
const hello = require('./modules/hello');
const pre = document.querySelector('pre');
let content = [];
content.push('Heute ist der ' + datehelper.showDate());
content.push('Es ist ' + datehelper.showTime() + ' Uhr.');
content.push(hello);
pre.innerHTML = content.join("\n");