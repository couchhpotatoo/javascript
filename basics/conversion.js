let score="33"
console.log(typeof(score))
let con=Number(score)
console.log(typeof con)
let x="12abc"
let conv=Number(x)
console.log(typeof conv)
console.log(conv) //NaN
let y=null
let conver=Number(y)
console.log(conver) //o
console.log(typeof(conver)) //number
//in case of undefined and string,value will be NaN
//true=1,false=0
//""->false,"xyz"=>true