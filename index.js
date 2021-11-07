let bubble1 = document.querySelector('#button-0')
let bubble2 = document.querySelector('#button-1')
let bubble3 = document.querySelector('#button-2')
let bubble4 = document.querySelector('#button-3')
let bubble5 = document.querySelector('#button-4')
let bubble6 = document.querySelector('#button-5')
const controls = document.querySelector('.controls')

const images = [
    './assets/1.jpg',
    './assets/2.jpg',
    './assets/3.jpg',
    './assets/4.jpg',
    './assets/5.jpg',
    './assets/6.jpg'
]

var currentImageIndex = 0

function clearButtons(){
    for(let x=0; x<controls.children.length; x++){
        controls.children[x].innerHTML = '○'
    }
}

document.getElementById('main-image').src = images[0]


bubble1.addEventListener('click', function(){
    document.getElementById('main-image').src = images[0]
    clearButtons()
    bubble1.innerHTML = '●'
    
})

bubble2.addEventListener('click', function(){
    document.getElementById('main-image').src = images[1]
    clearButtons()
    bubble2.innerHTML = '●'
})

bubble3.addEventListener('click', function(){
    document.getElementById('main-image').src = images[2]
    clearButtons()
    bubble3.innerHTML = '●'
})

bubble4.addEventListener('click', function(){
    document.getElementById('main-image').src = images[3]
    clearButtons()
    bubble4.innerHTML = '●'
})

bubble5.addEventListener('click', function(){
    document.getElementById('main-image').src = images[4]
    clearButtons()
    bubble5.innerHTML = '●'
})

bubble6.addEventListener('click', function(){
    document.getElementById('main-image').src = images[5]
    clearButtons()
    bubble6.innerHTML = '●'
})