const up=["prayag","ghaziabad","lucknow"]
const uk=["pauri","almora","dehradun"]
/*up.push(uk)
console.log(up)
console.log(up[3][1])
const states=up.concat(uk)
console.log(states)*/
// spread
const state=[...up,...uk]
console.log(state)
const arr=[1,2,3,[4,5],54,65,[232,54,[43,98,65[54,43]]]]
const newarr=arr.flat(Infinity)
console.log(newarr)

console.log(Array.isArray("hello"))
console.log(Array.from("hello"))

let v1=100
let v2=2444
let v3=5243
let v4="hello"
console.log(Array.of(v1,v2,v3,v4))