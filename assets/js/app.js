const hamburgerMenu = document.querySelector('.toggle')

hamburgerMenu.addEventListener('click', () => {
  document.querySelector('.nav-list').classList.toggle('nav-toggle')
  hamburgerMenu.classList.toggle('active')
})