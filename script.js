
//SCROLL OUT




// COLOR SCHEME

const color_btn = document.querySelector('.color-classic')
const colors = document.querySelectorAll('.colors')
const color_other = document.querySelector('.color-other')
const candy = document.querySelector('.candy')
const cofee = document.querySelector('.cofee')
const grass = document.querySelector('.grass')
const original = document.querySelector('.original')
const span = document.querySelectorAll('.spans')
const modal = document.querySelector('.modal')

color_btn.addEventListener('click', () =>{
  color_other.classList.toggle('flex')
  modal.classList.add('modal-active')
})

original.addEventListener('click', () =>{
  for(let spans of span){
    spans.classList.remove('candy-class')
    spans.classList.remove('grass-class')
    spans.classList.remove('cofee-class')
  }
})

candy.addEventListener('click', () =>{
  for(let spans of span){
    spans.classList.add('candy-class')
    spans.classList.remove('grass-class')
    spans.classList.remove('cofee-class')
  }
  
})

grass.addEventListener('click', () =>{
  for(let spans of span){
    spans.classList.add('grass-class')
    spans.classList.remove('candy-class')
    spans.classList.remove('cofee-class')
  }
})

cofee.addEventListener('click', () =>{
  for(let spans of span){
    spans.classList.add('cofee-class')
    spans.classList.remove('candy-class')
    spans.classList.remove('grass-class')
  }
})

// COLOR SCHEME

// DARK MODE

const darkToggler = document.querySelector('.dark-mode')

darkToggler.addEventListener('click', ()  =>{
  if(document.body.classList.contains('dark')){
    document.body.classList.add('light')
    document.body.classList.remove('dark')
  }
  else if(document.body.classList.contains('light')){
    document.body.classList.add('dark')
    document.body.classList.remove('light')
  }
})
// DARK MODE

// MOBILE MENU

const hamburger = document.querySelector('#check')
const mobile_menu = document.querySelector('.mobile-menu')


hamburger.addEventListener('click', () =>{
 
    mobile_menu.classList.add('mobile-flex')
    modal.classList.add('modal-active')

})
const close_mobile = document.querySelector('.close-mobile')

close_mobile.addEventListener('click',() =>{
  if(mobile_menu.classList.contains('mobile-flex')){
    mobile_menu.classList.remove('mobile-flex')
  }
})

// MOBILE MENU

//NAVBAR ON SCROLL

window.addEventListener('scroll', function () {
let header = document.querySelector('header');
let windowPosition = window.scrollY > 0;
header.classList.toggle('scrolling-active', windowPosition);
})

//NAVBAR ON SCROLL


//MODAL
modal.addEventListener('click', () =>{
  mobile_menu.classList.remove('mobile-flex')
    modal.classList.remove('modal-active')
    if(color_other.classList.contains('flex')){
      color_other.classList.remove('flex')
    }
})
//MODAL

//CURSOR
var cursor = document.querySelector("#cursor");
    var cursor2 = document.querySelector("#cursor2");
    document.addEventListener("mousemove",function(e){
      cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
    });

//CURSOR

const cursorss = document.querySelectorAll('.cursorr')

original.addEventListener('click', () =>{
  for(let cursors of cursorss){
    cursors.classList.remove('candy-cursor')
    cursors.classList.remove('grass-cursor')
    cursors.classList.remove('cofee-cursor')
  }
})

candy.addEventListener('click', () =>{
  for(let cursors of cursorss){
    cursors.classList.add('candy-cursor')
    cursors.classList.remove('grass-cursor')
    cursors.classList.remove('cofee-cursor')
  }
})

grass.addEventListener('click', () =>{
  for(let cursors of cursorss){
    cursors.classList.add('grass-cursor')
    cursors.classList.remove('candy-cursor')
    cursors.classList.remove('cofee-cursor')
  }
})

cofee.addEventListener('click', () =>{
  for(let cursors of cursorss){
    cursors.classList.add('cofee-cursor')
    cursors.classList.remove('candy-cursor')
    cursors.classList.remove('grass-cursor')
  }
})

















