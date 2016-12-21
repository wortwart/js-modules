import datehelper from './modules/datehelper-default';
import hello from './modules/hello';
const pre = document.querySelector('pre');
let content = [];
content.push('Heute ist der ' + datehelper.showDate());
content.push('Es ist ' + datehelper.showTime() + ' Uhr.');
content.push(hello);
pre.innerHTML = content.join("\n");