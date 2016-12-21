import {showDate, showTime} from './modules/datehelper-multiple';
import hello from './modules/hello';
const pre = document.querySelector('pre');
let content = [];
content.push('Heute ist der ' + showDate());
content.push('Es ist ' + showTime() + ' Uhr.');
content.push(hello);
pre.innerHTML = content.join("\n");