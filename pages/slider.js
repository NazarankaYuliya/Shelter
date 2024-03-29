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
  selectedPets = newPets
  newPets = []
  slideLeft()
})

left__button.addEventListener('click', function () {
  selectedPets = newPets
  newPets = []
  slideRight()
})

function slideLeft() {
  document
    .querySelectorAll('.pets__card')
    .forEach((card) => card.classList.add('slide_left'))

  setTimeout(function () {
    generateCards()
  }, 300)
}

function slideRight() {
  document
    .querySelectorAll('.pets__card')
    .forEach((card) => card.classList.add('slide_right'))
  setTimeout(function () {
    generateCards()
  }, 300)
}
