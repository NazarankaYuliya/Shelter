//--- доступ к json данным ---

fetch('../pets.json')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    createPetsCard(data)
  })

// pets card
function createPetsCard(data) {
  let fragment = new DocumentFragment()
  let pets__slider_container = document.querySelector('.pets__slider_container')

  for (let el = 0; el < data.length; el++) {
    let pets__card = document.createElement('div')
    pets__card.classList.add('pets__card')
    pets__card.setAttribute('data-id', el + 1)

    let pets__picture = document.createElement('div')
    pets__picture.classList.add('pets__picture')
    pets__card.append(pets__picture)

    let image = document.createElement('img')
    image.src = data[el].img
    image.alt = data[el].name
    pets__picture.append(image)

    let pets__name = document.createElement('div')
    pets__name.classList.add('pets__name')
    pets__name.innerHTML = `<p>${data[el].name}</p>`
    pets__card.append(pets__name)

    let pets__button = document.createElement('div')
    pets__button.classList.add('pets__button')
    let card__button = document.createElement('a')
    card__button.classList.add('card__button', 'button__primary')
    card__button.innerText = 'Learn more'
    pets__button.append(card__button)
    pets__card.append(pets__button)

    pets__card.addEventListener('click', () => openPopup(data[el]))

    fragment.append(pets__card)
  }

  pets__slider_container.append(fragment)
}

let popup = document.querySelector('.popup')

// --- open popup ---

function openPopup(el) {
  popup.classList.add('popup_show')
  document.body.classList.add('stop-scrolling')

  popup.innerHTML = `<div class='popup_window'>
<button type="button" class="close_popup"><img src='../../assets/icons/popup_close.png'></button>
<div class='popup_card'>
<div class='popup_pet_img'>
<img src='${el.img}'></div>
<div class='popup_pet_content'>
<div class='popup_header'>
<h3 class='popup_pet_name'>${el.name}</h3>
<h4 class='popup_pet_type'>${el.type} - ${el.breed}</h4></div>
<h5 class='popup_pet_description'>${el.description}</h5>
<ul class='popup_pet_list'>
<li class='pet_list_item'><h5><b>Age:</b> ${el.age}</h5></li>
<li class='pet_list_item'><h5><b>Inoculations:</b> ${el.inoculations}</h5></li>
<li class='pet_list_item'><h5><b>Diseases: </b>${el.diseases}</h5></li>
<li class='pet_list_item'><h5><b>Parasites: </b>${el.parasites}</h5></li>
</ul>
</div>
</div>
</div>
`
  const close_popup = document.querySelector('.close_popup')
  close_popup.addEventListener('click', closePopup)

  document
    .querySelector('.popup_card')
    .addEventListener('mouseleave', function () {
      document.querySelector('.close_popup').classList.add('hover')
    })
  document
    .querySelector('.popup_card')
    .addEventListener('mouseenter', function () {
      document.querySelector('.close_popup').classList.remove('hover')
    })
}

// close popup
function closePopup() {
  popup.classList.remove('popup_show')
  document.body.classList.remove('stop-scrolling')
}

window.addEventListener('click', (event) => {
  if (event.target === popup) {
    closePopup()
  }
})

window.addEventListener('keydown', (event) => {
  if (event.code === 'Escape') {
    closePopup()
  }
})
