// uso estricto
'use strict';


// al pasare el raton por encima del texto se activa el evento mouseover
let mostrar = document.querySelector('.submenu-menu');
let submenu2 = document.querySelector('.submenu2-menu');
function mostrarSubMenu() {


  mostrar.style.display = 'block';
  mostrar.style.backgroundColor = 'red';
  mostrar.style.cursor = 'pointer';
  mostrar.style.position = 'absolute';
  mostrar.style.zIndex = '1';
  mostrar.style.top = '50px';
  mostrar.style.width = 'fit-content';




}

function ocultarSubMenu() {
  setTimeout(() => {
  mostrar.style.display = 'none';
},5000)

}

function mostrarSubMenu2() {

  

  submenu2.style.display = 'block';
  submenu2.style.backgroundColor = 'red';
  submenu2.style.cursor = 'pointer';
  submenu2.style.position = 'absolute';
  submenu2.style.zIndex = '1';
  submenu2.style.top = '50px';
  submenu2.style.width = 'fit-content';
  submenu2.style.animation = 'ocultar 5s';
  


}

function ocultarSubMenu2() {
setTimeout(() => {
  submenu2.style.display = 'none';
  
  
},5000);
}


console.log('YO' + mostrar.innerHTML);
const  btn = document.querySelector('.botton');
const  btn1 = document.querySelector('.botton1');

btn.addEventListener('mouseout', () => {
  ocultarSubMenu();
})
btn.addEventListener('mouseover', () => {
  mostrarSubMenu();

})
btn1.addEventListener('mouseout', () => {
  ocultarSubMenu2();
})
btn1.addEventListener('mouseover', () => {
  mostrarSubMenu2();
})

console.log('ESTOY');