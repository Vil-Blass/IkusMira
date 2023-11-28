// uso estricto
'use strict';


// al pasare el raton por encima del texto se activa el evento mouseover
let mostrar = document.querySelector('.submenu-menu');
let submenu2 = document.querySelector('.submenu2-menu');
function mostrarSubMenu() {


  mostrar.style.display = 'block';
  mostrar.style.backgroundColor = 'red';
  mostrar.style.width = '100%';
  mostrar.style.cursor = 'pointer';



}

function ocultarSubMenu() {

  mostrar.style.display = 'none';


}

function mostrarSubMenu2() {

  submenu2.style.display = 'block';
  submenu2.style.backgroundColor = 'red';
  submenu2.style.width = '100%';
  submenu2.style.cursor = 'pointer';
  submenu2.style.animation = '2s';

}

function ocultarSubMenu2() {

  submenu2.style.display = 'none';

}


console.log('YO' + mostrar.innerHTML);
const  btn = document.querySelector('.botton');
const  btn1 = document.querySelector('.botton1');

btn.addEventListener('mouseout', () => {
  ocultarSubMenu();
})
btn.addEventListener('click', () => {
  mostrarSubMenu();
})
btn1.addEventListener('mouseout', () => {
  ocultarSubMenu2();
})
btn1.addEventListener('click', () => {
  mostrarSubMenu2();
})

console.log('ESTOY');