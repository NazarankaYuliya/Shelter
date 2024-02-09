const header__logo = document.querySelector('.header__logo').cloneNode(true)
const menu__icon = document.querySelector('.menu__icon')
const menu__icon_clone = document.querySelector('.menu__icon').cloneNode(true)
const header__list = document.querySelector('.header__list').cloneNode(true)
const shadow = document.querySelector('.shadow')
const burger = document.querySelector('.burger')
const burger__header = document.querySelector('.burger__header')

burger__header.append(header__logo, menu__icon_clone)
burger.append(burger__header, header__list)

menu__icon.addEventListener('click', openBurger)
menu__icon_clone.addEventListener('click', closeBurger)

header__list.addEventListener('click', function (event) {
  if (event.target.closest('.header__item')) {
    closeBurger()
  }
})

window.addEventListener('click', (event) => {
  if (event.target === shadow) {
    closeBurger()
  }
})

function openBurger() {
  shadow.classList.add('active')
  burger.classList.add('active')
  menu__icon.classList.add('active')
  menu__icon_clone.classList.add('active')

  document.body.classList.toggle('stop-scrolling')
}

function closeBurger() {
  shadow.classList.remove('active')
  burger.classList.remove('active')
  menu__icon.classList.remove('active')
  menu__icon_clone.classList.remove('active')
  document.body.classList.remove('stop-scrolling')
}
