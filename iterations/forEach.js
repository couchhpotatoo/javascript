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
const code=[{
    name:"javascript",
    file:"js"
},
{
    name:"java",
    file:"java"
},
{
    name:"c++",
    file:"cpp"
}
]
code.forEach(
    (item)=>{
        console.log(item.file)
    }
)

