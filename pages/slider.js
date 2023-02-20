import { pets } from '../pages/pets.js'
import { addCard } from '../pages/addCard.js'

// slider

let left__button = document.querySelector('.left__button')
let right__button = document.querySelector('.right__button')

let currentIndex = 0
let prevIndex = null
let slideCount = 3

let selectedPets = []
let selectedIndexes = []
let newPets = []

function generateCards() {
  while (selectedPets.length < slideCount) {
    const randomIndex = Math.floor(Math.random() * pets.length)
    const randomPet = pets[randomIndex]
    if (
      !selectedPets.includes(randomPet) &&
      !selectedIndexes.includes(randomIndex)
    ) {
      selectedPets.push(randomPet)
      selectedIndexes.push(randomIndex)
    }
  }
  while (newPets.length < slideCount) {
    const randomPet = pets[Math.floor(Math.random() * pets.length)]
    if (!selectedPets.includes(randomPet) && !newPets.includes(randomPet)) {
      newPets.push(randomPet)
    }
  }
  addCard(selectedPets)
}

generateCards()

right__button.addEventListener('click', function () {
  let pets__card = document.querySelectorAll('.pets__card')
  pets__card.forEach((el) => el.remove())
  selectedPets = newPets
  newPets = []
  generateCards()
})

left__button.addEventListener('click', function () {
  let pets__card = document.querySelectorAll('.pets__card')
  pets__card.forEach((el) => el.remove())
  selectedPets = newPets
  newPets = []
  generateCards()
})
