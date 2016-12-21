'use strict';
const texttools = require('./modules/texttools-multiple');
let text = ' Dieser Text    hat	zu viele Leerzeichen   ';
console.log('"' + texttools.sortWords(text).join(', ') + '"');