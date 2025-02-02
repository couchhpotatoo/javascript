function one(){
    const name="pooja"
    function two(){
        const greeting = "good morning"
        console.log(name)
    }
    // console.log(greeting) // scope of greeting is only till function two
     two()
}
console.log(one())

if(true){
    name="pooja"
    if(name==="pooja"){
        lastName=" rawat"
        console.log(name+lastName)
    }
}