const arr=[1,2,13,466,323]
/*const arr2=new Array(1,13,6,223)
console.log(arr[4],arr2[0])
// array methods
arr.push(29)
arr.push(119)
arr.pop()
arr.unshift(119)
arr.unshift(33) // add value in the starting of the array and shift the rest by one position
arr.shift()// remove element from the starting of the array 
console.log(arr.includes(19))// check availabilty in the array
console.log(arr.indexOf(119)) // returns -1 if the element is not present in the array

const newArr=arr.join() //add all element of erray in a string 
console.log(arr)
console.log(newArr)
console.log(typeof newArr)*/

// slice , splice
console.log(arr);

console.log("a",arr)
const myn1=arr.slice(1,3)
console.log(myn1)
console.log("b",arr)
const myn2=arr.splice(1,3)// value to delete from, number of value to delete
console.log("c",arr) //returns new array with deleted one and original value changed
console.log(myn2) 