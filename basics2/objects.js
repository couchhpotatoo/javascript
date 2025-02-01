//singletom

const user1=new Object()

//object literals
const sym=Symbol("hello")
const user={
    name:"abc",
    age:18,
    [sym]:"hey",
    location:"pauri",
    email:"abc@gmial.com",
    isLoggedIn:false,
    lastLogged:["monday","saturday"]
}
 console.log(user.email)

//  console.log(user["email"])
//  console.log(user[sym])
//  console.log(typeof user["sym"])
  console.log(user.name="xyz")
 //Object.freeze(user)
 user.email="xyz@gmail.com"
 //console.log(user)
 user.greeting=function(){
    console.log("hello user")
 }
 user.greetingTwo=function(){
    console.log(`hello,${this.name}` )
 }
 console.log(user.greeting) //gives function anonymous
 console.log(user.greeting())
 console.log(user.greetingTwo())