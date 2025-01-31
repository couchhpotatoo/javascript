// numbers
let score=400
console.log(score)
const bal= new Number(400)
console.log(bal)
console.log(bal.toString().length)
console.log(bal.toFixed(2))
const other=123.5945
console.log(other.toPrecision(4))
const hundreds=10000000
console.log(hundreds.toLocaleString()) //american format
console.log(hundreds.toLocaleString('en-IN'))

//maths
console.log(Math)
console.log(Math.abs(-13))
console.log(Math.round(4.7))
console.log(Math.ceil(5.1))
console.log(Math.floor(4.9))
console.log(Math.min(12,13,566,31))
console.log(Math.max(12,4,424,76))
console.log(Math.random()) //value between 0 and 1 
const max=20
const min=10
console.log(Math.floor(Math.random()*(max-min+1))+min) //to generate random number in given range and +1 to avoid 0 value