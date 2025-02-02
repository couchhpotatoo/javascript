const user={
    name:"pooja",
    city:"prayag",
    welcome:function(){
        console.log(`${this.name} , welcome`);
        // console.log(this) // refer to current context(object)
    }
}
// user.welcome()
// user.name="heer"

// user.welcome()// value will be changed
// console.log(this) // gives empty object
// arrow function
const chai=()=>{
    let name="pooja"
    console.log(this.name); //output undefined
    
}
// chai()
// const add=(num1,num2)=>{  //explicit return
//     return num1+num2
// }
const add=(num1,num2)=> num1+num2 //implicit return

console.log(add(2,3))