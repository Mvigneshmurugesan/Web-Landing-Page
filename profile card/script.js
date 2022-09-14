const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const name = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs=document.querySelectorAll('.animated-bg');
const animated_bg_text = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2500)

function getData() {
    header.innerHTML = ' <img src="pexels-jonas-svidras-552961.jpg">'
    title.innerHTML = 'Hi,I Am Vignesh '
    excerpt.innerHTML = ' I Learning JavaScript & Front End Development'
    profile_img.innerHTML = ' <img src="IMG_20220713_092204__01.jpg">'
    name.innerHTML = 'Vignesh M'
    date.innerHTML = 'Feb 13, 2022'

    animated_bgs.forEach(bg=> bg.classList.remove ('animated-bg'))
    animated_bg_text.forEach(bg =>bg.classList.remove('animated-bg-text'))
}

alert('Welcome to all!')