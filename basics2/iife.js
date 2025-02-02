//IIFE-> immediately invoked function expresssion

// named iife

(function chai(){
    console.log(`hello`);
    
})();
 // ()first paranthesis for function def and second () for its executuon
// iife dont know where to stop so ; is important
 
//in arror function
(  ()=>{
    console.log("hello there");
    
})();
(  (name)=>{
    console.log(`${name},hello there`);
    
})("pooja")