import { openPopup } from '../pages/popup.js'
export { addCard }

let pets__slider_container = document.querySelector('.pets__slider_container')

function addCard(arr) {
  for (let el = 0; el < arr.length; el++) {
    let pets__card = document.createElement('div')
    pets__card.classList.add('pets__card')
    pets__card.innerHTML = `<div class="pets__picture"><img src="${arr[el].img}" alt="${arr[el].name}"></div><div class="pets__name"><p>${arr[el].name}</p></div><div class="pets__button"><a class="card__button button__primary">Learn more</a></div>`

    pets__card.addEventListener('click', () => openPopup(arr[el]))
    pets__slider_container.append(pets__card)
  }
}
