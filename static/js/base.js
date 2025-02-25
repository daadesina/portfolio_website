const container = document.getElementById('container')
const dark_toggle = document.getElementById('dark_toggle')
const light_toggle = document.getElementById('light_toggle')
const nav_bar = document.getElementById('nav_bar')
const gray_color = document.getElementsByClassName('gray_color')

dark_toggle.style.display = 'none'
light_toggle.style.display = 'none'

function darkMode(){
    container.classList.add('text-white')
    container.style.backgroundColor = "#080808"
    dark_toggle.style.display = 'block'
    nav_bar.style.backgroundColor = "#1B1B1B"
    for (let i = 0; i < gray_color.length; i++){
        gray_color[i].style.color = '#9C9C9C'
    }
}
darkMode()