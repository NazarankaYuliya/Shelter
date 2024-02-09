export { openPopup }

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
