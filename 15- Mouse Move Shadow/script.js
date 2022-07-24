const hero = document.querySelector(".hero")
const text = hero.querySelector("h1")

function shadow(e){

    const {offsetWidth:width,offsetHeight:height} = hero

    console.log(e)
}

hero.addEventListener('mousemove', shadow);
