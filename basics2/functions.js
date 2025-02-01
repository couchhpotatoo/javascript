function add(num1,num2){
const result=num1+num2;
return result
}
add()
add(1,2)

function login(name){
    if(name===undefined){
        console.log("please enter a name ");
        return 
    }
    return  `${name} just logged in`
}
login("pooja") // will do nothing only show presence of function
console.log(login("pooja"))
console.log(login()); // undefined logged in --> will be the output
