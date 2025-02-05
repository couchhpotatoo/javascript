const programming=["js","py","cpp"]
// programming.forEach(function (val){
//     console.log(val);
    
// }
// )
// function printMe(val){
//     console.log(val);
    
// }
// programming.forEach(printMe)
// programming.forEach((item,index,array)=>{
//     console.log(item,index,array)
// })
// const code=[{
//     name:"javascript",
//     file:"js"
// },
// {
//     name:"java",
//     file:"java"
// },
// {
//     name:"c++",
//     file:"cpp"
// }
// ]
// code.forEach(
//     (item)=>{
//         console.log(item.file)
//     }
// )
// const values= programming.forEach((item)=>{
// console.log(item);
// return item
// })
// console.log(values)  //returns undefined
const nums=[1,2,3,4,5,6,7,8,9,10]
// let numb=nums.filter((num) => num>4)
// console.log(numb);
const newNum=[]
nums.forEach((num)=>{
    if(num>4){
        newNum.push(num)
    }

})
console.log(newNum);




    

