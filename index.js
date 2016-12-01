/*jshint esnext: true */
console.log('Hello, world!');
const Color = require('color');
const redHexa = Color({r: 255, g:0, b:0}).hexString();
console.log(redHexa);
