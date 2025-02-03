const email="user@gmail.com"
if(email){
    console.log("got user mail");
    
}
else{
    console.log("didnt got mail"); // if we pass empty string then else command will run
    
}

// falsy value->false,0,-0,BigInt 0n, null, undefined ,NaN
//truth value->"0","false"," ",[], {},function(){}

//empty array
const name=[]
if(name.length===0){
    console.log("empty array");
    
}
// empty string
const obje={}
if(Object.keys(obje).length===0){
    console.log("empty string");
    
}

//nullish coalescing operator(??):null undefined

 let val1;
// val1=5??10 // first value will print
// console.log(val1);
// val1=null ?? 10
// console.log(val1); //10 will be printed,ignores null
val1=undefined??10
console.log(val1);

//terniary operator
// condiiton?true:false
let vari =10
vari%2==0 ? console.log(true):console.log(false)




