//module1.js의 모든 데이터 객체 형태로 가져오기
// const module1 = require('./03_module01.js');
// console.log(module1)

// const {color} = require('./03_module01.js')
// console.log(color)

// 가져오는 방식은 똑같음!
const module2 = require('./03_module02.js')
console.log(module2)

const {name, sayHi} = require('./03_module02.js')
console.log(name)
sayHi()