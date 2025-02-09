let random=parseInt(Math.random()*100+1)
const submit=document.querySelector('#subt')
const guessSlot=document.querySelector('.guesses')
const user=document.querySelector('.guessField')
const remain=document.querySelector('.lastResult')
const lowhi=document.querySelector('.lowOrHi')
const start=document.querySelector('.resultParas')
const p=document.createElement('p')
let prev=[]
let numguess=1
let play=true
if(play){
    submit.addEventListener('click',function(e){

        e.preventDefault()
        const guess=parseInt(user.value)
        console.log(guess)
        validate(guess)
    })
}
function validate(guess){
    if(isNaN(guess) || guess<1 || guess>100){
        console.log("enter a valid number");
 }
    else{
        prev.push(guess)
        if(numguess===11){
            display(guess)
            messsage(`game over.last number was ${random}`)
            endgame()
        }else{
            display(guess)
            checkguess(guess)
        }
    }

}
function checkguess(guess){
    if(guess===random){
        messsage("right guess")
        endgame()
    }else{
        messsage("wrong guess")
    }

}
function display(guess){
    user.value=''
    guessSlot.innerHTML+=`${guess}   `
    numguess++
    remain.innerHTML=`${11-numguess}`
}
function messsage(msg){
lowhi.innerHTML=`<h2>${msg}</h2>`
}
function newgame(){
const newbut=document.querySelector('#newGame')

newbut.addEventListener('click',function(e){
    random=parseInt(Math.random()*100+1)
prev=[]
numguess=1
guessSlot.innerHTML`${11-numguess}`
user.removeAttribute('disabled')
start.removeChild(p);
play=true

})

}
function endgame(){
    user.value=''
    user.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML=`<h2 id="newGame">start new game</h2>`
    start.appendChild(p)
    play=false
    newgame()

}
