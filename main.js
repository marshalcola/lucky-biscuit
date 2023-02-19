const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
let phrase = document.querySelector("#lucky")
const biscuitNotOpen = document.querySelector("#sorte")
let guess = Math.round(Math.random() * 6)
const button = document.querySelector("button")

const lucky = [
  "A vida trará coisas boas se tiver paciência.",
  "Não compense na ira o que lhe falta na razão.",
  "Não há que ser forte. Há que ser flexível.",
  "A juventude não é uma época da vida, é um estado de espírito.",
  "Siga os bons e aprenda com eles.",
  "Não importa o tamanho da montanha, ela não pode tapar o sol.",
  "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu."
]

//Events
biscuitNotOpen.addEventListener("click", handleOpenBiscuit)
button.addEventListener("click", backHome)


function handleClick (){
  handleOpenBiscuit()
}

function handleOpenBiscuit (){
  phrase.innerText = lucky[guess]
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function backHome () {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
  guess = Math.round(Math.random() * 5)

}
