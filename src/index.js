/*jshint esnext: true */
const str = 'ES6';
console.log(`Hello2 ${str}`);

const Dog = require('./dog');

const toby = new Dog('Toby');

console.log(toby.bark());
