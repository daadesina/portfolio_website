const container = document.getElementById('container');
const body = document.body;
const dark_toggle = document.getElementById('dark_toggle');
const light_toggle = document.getElementById('light_toggle');
const nav_bar_bg = document.querySelectorAll('.nav_bar_bg');
const gray_color = document.querySelectorAll('.gray_color');
const nav_content_mobile = document.getElementById('nav_content_mobile');
const menu_toggle = document.getElementById('menu_toggle');
const nav_content_hover = document.querySelectorAll('.nav_content_hover');
const white_text = document.querySelectorAll('.white_text');
const btn_hover = document.querySelectorAll('.btn_hover')

gray_color.forEach(el => el.classList.add("transition-all", "duration-700"))
white_text.forEach(el => el.classList.add("transition-all", "duration-700"))

// Initially hide elements
dark_toggle.style.display = 'none';
light_toggle.style.display = 'none';
nav_content_mobile.style.display = 'none';

// Function to enable dark mode
function enableDarkMode() {
    container.classList.add('text-white');
    body.style.backgroundColor = "#080808";
    dark_toggle.style.display = 'block';
    light_toggle.style.display = 'none';

    nav_bar_bg.forEach(el => el.style.backgroundColor = "#1B1B1B");
    gray_color.forEach(el => el.style.color = '#9C9C9C');
    nav_content_hover.forEach(el => el.style.color = '');
    white_text.forEach(el => el.style.color = 'white');
    btn_hover.forEach(el => el.addEventListener('mouseover', function(e){
        el.style.backgroundColor = '#101010  '
    }))
    btn_hover.forEach(el => el.addEventListener('mouseout', function(e){
        el.style.backgroundColor = '#1B1B1B'
    }))

    localStorage.setItem('theme', 'dark'); // Save preference
}

// Function to enable light mode
function enableLightMode() {
    container.classList.remove('text-white');
    body.style.backgroundColor = "#E0E0E0";
    dark_toggle.style.display = 'none';
    light_toggle.style.display = 'block';

    nav_bar_bg.forEach(el => el.style.backgroundColor = '#B0B0B0');
    gray_color.forEach(el => el.style.color = 'black');
    nav_content_hover.forEach(el => el.style.color = '#333');
    white_text.forEach(el => el.style.color = '#1E1E1E');
    // btn_hover.forEach(el => el.style.backgroundColor = '#606060')
    btn_hover.forEach(el => el.addEventListener('mouseover', function(e){
        el.style.backgroundColor = '#606060'
    }))
    btn_hover.forEach(el => el.addEventListener('mouseout', function(e){
        el.style.backgroundColor = '#B0B0B0'
    }))
    

    localStorage.setItem('theme', 'light'); // Save preference
}

// Load theme from localStorage
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    
    // If no preference is saved, default to dark mode
    if (savedTheme === 'light') {
        enableLightMode();
    } else {
        enableDarkMode(); // Default to dark mode
    }
});

// Load theme from localStorage
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('theme') === 'dark') {
        enableDarkMode();
    } else {
        enableLightMode();
    }
});

// Event listeners for toggling themes
dark_toggle.addEventListener('click', enableLightMode);
light_toggle.addEventListener('click', enableDarkMode);


// Mobile menu toggle
menu_toggle.addEventListener('click', function (e) {
    e.preventDefault();
    nav_content_mobile.style.display = (nav_content_mobile.style.display === 'none') ? 'flex' : 'none';
});
