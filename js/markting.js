// uso estricto
'use strict';


// al pasare el raton por encima del texto se activa el evento mouseover


function mostrarSubMenu() {
    let mostrar = document.querySelector('.submenu-menu');
  
    addEventListener('mouseover', () => {
      mostrar.style.display = 'block';
      mostrar.style.backgroundColor = 'red';
      mostrar.style.width = '100%'; 
      mostrar.style.cursor = 'pointer';

    });
    
    addEventListener('mouseout', () => {
      mostrar.style.display = 'none';
    });

  }
console.log('YO');
let btn = document.querySelector('.botton');
 btn.addEventListener('click', () => {
   mostrarSubMenu();
 })
  
  console.log('ESTOY');
  function mostrarSubMenu2() {
    let submenu2 = document.querySelector('.submenu2-menu');
    
    addEventListener('mouseover', () => {
      submenu2.style.display = 'block';
      submenu2.style.backgroundColor = 'green';
      submenu2.style.width = 'max-content';
      submenu2.style.cursor = 'pointer';
    });
  
    addEventListener('mouseout', () => {
      submenu2.style.display = 'none';
    });
  }
console.log('AQUI');

let btn2 = document.querySelector('.botton1');
  
  btn2.addEventListener('click', () => {
    mostrarSubMenu2();
  });