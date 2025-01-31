let d=new Date()
console.log(d.toString())
console.log(d.toDateString())
// date is an object
let myDate=new Date(2003, 10 , 13 ,12,43,55)
console.log(myDate.toLocaleString())
let newDate=new Date("2003-09-29")
console.log(newDate.toDateString())
// in yy-mm-dd format month starts with 1 and in array it starts with 0

// timestamp
let ts=Date.now()
console.log(ts)
console.log(newDate.getTime())
console.log(Math.floor(Date.now()/1000)) // to convert msec to sec
let nowDate=new Date()
console.log(nowDate.getDay())
console.log(nowDate.toLocaleString('default',{
    weekday:"long"
    
}))