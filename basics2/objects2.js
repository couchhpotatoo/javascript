// singleton
// const user={}
// user.name="hello"
// user.email="hello.gmail.com"
// user.id=12344
// console.log(user)
// const user2={
// email:"abc@gmail.com",
// fullname:{
//     username:{
//     firstname:"abc",
//     lastname:"xyz"}
// }
// }
// console.log(user2.fullname.username.lastname)
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj3=Object.assign(obj1,obj2)
const obj4={...obj1,...obj2}
console.log(obj3);
console.log(obj4);

