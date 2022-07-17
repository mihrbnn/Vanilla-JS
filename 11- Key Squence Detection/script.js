const helpText = document.querySelector(".help")
const helpButton = document.querySelector(".helpButton")
const pressed = []
const secretCode = "sisifos"
window.addEventListener("keyup",(e)=>{
    console.log(e.key)
    pressed.push(e.key)
    pressed.splice(-secretCode.length-1,pressed.length-secretCode.length)
    if(pressed.join("").includes(secretCode)){
        cornify_add();
    }
    console.log(pressed)
    console.log(button)

})

function help(e){
   helpText.innerHTML = "Okay, don't worry. Just type <strong>sisifos</strong>"
}

helpButton.addEventListener("click",help)
