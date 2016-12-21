'use strict';
const texttools = require('./modules/texttools-simple');
let text = ' Dieser Text    hat	zu viele Leerzeichen   ';
console.log('"' + text + '"');
console.log('"' + texttools(text) + '"');