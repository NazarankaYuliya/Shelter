import { pets } from '../pages/pets.js'
import { addCard } from '../pages/addCard.js'

let petsPerPage = {
  1280: 8,
  768: 6,
  0: 3,
}

function getScreenWidth() {
  let screenWidth = window.innerWidth
  if (screenWidth >= 1280) {
    return 1280
  } else if (screenWidth >= 768) {
    return 768
  } else {
    return 0
  }
}

let currentPage = 1
let onePage = petsPerPage[getScreenWidth()]
let totalPage = 48 / onePage

//get random array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

// array of 48 elements
let petsArr = []
for (let i = 0; i < totalPage; i++) {
  shuffleArray(pets)
  petsArr.push(...pets.slice(0, onePage))
}

function createPagination(currentPage, totalPage) {
  let activeBtn = document.querySelector('.active_btn')
  activeBtn.innerText = currentPage

  let btnStart = document.querySelector('.btn__start')
  let btnPrev = document.querySelector('.btn__prev')
  if (currentPage === 1) {
    btnStart.disabled = true
    btnPrev.disabled = true
  } else {
    btnStart.disabled = false
    btnPrev.disabled = false
  }

  let btnNext = document.querySelector('.btn__next')
  let btnEnd = document.querySelector('.btn__end')
  if (currentPage === totalPage) {
    btnNext.disabled = true
    btnEnd.disabled = true
  } else {
    btnNext.disabled = false
    btnEnd.disabled = false
  }

  let start = onePage * (currentPage - 1)
  let end = start + onePage
  let paginatedData = petsArr.slice(start, end)
  addCard(paginatedData)
}

// event listeners for pagination buttons
document.querySelector('.btn__start').addEventListener('click', function () {
  currentPage = 1
  createPagination(currentPage, totalPage)
})

document.querySelector('.btn__next').addEventListener('click', function () {
  currentPage += 1
  createPagination(currentPage, totalPage)
})

document.querySelector('.btn__prev').addEventListener('click', function () {
  currentPage -= 1
  createPagination(currentPage, totalPage)
})

document.querySelector('.btn__end').addEventListener('click', function () {
  currentPage = totalPage
  createPagination(currentPage, totalPage)
})

// event listener for window resize
window.addEventListener('resize', function () {
  onePage = petsPerPage[getScreenWidth()]
  totalPage = Math.ceil(48 / onePage)

  currentPage = currentPage > totalPage ? totalPage : currentPage
  createPagination(currentPage, totalPage)
})

// initialize the page on load
window.addEventListener('load', function () {
  onePage = petsPerPage[getScreenWidth()]
  totalPage = Math.ceil(48 / onePage)
  createPagination(currentPage, totalPage)
})
