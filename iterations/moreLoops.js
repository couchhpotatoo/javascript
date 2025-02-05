// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")


// console.log(map);

// for (const [key, value] of map) {
//     // console.log(key, ':-', value);
// }

//for in
const game={
    'g1': 'valorant',
    'g2': 'pubg'
}
// for (const [key,value] of game){
//     console.log(key,':',value); //not iterable with this method
    
// }
for (const key in game) {
  console.log(`${key}:${game[key]}`);
  
}
const programming=["js","py","cpp"]
for(const key in programming){
    console.log(programming[key])
}
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")
for (const key in map) {
  console.log(key);
  
}