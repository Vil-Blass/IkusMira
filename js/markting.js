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

function mostrarSubMenu2() {

  submenu2.style.display = 'block';
  submenu2.style.backgroundColor = 'red';
  submenu2.style.cursor = 'pointer';
  submenu2.style.position = 'absolute';
  submenu2.style.zIndex = '1';
  submenu2.style.top = '50px';
  submenu2.style.width = 'fit-content';

  

}
function ocultarSubMenu2() {
  setTimeout(() => {
    submenu2.style.display = 'none';
  },5000)
}
function ocultarSubMenu() {
  setTimeout(() => {
    mostrar.style.display = 'none';
     

  }, 5000)

}


console.log('YO' + mostrar.innerHTML);
const btn = document.querySelector('.botton');
const btn1 = document.querySelector('.botton1');

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


let imagenesZara = [
  './media/img/zara0.jpg',
'  ./media/img/zara1.jpg',
'  ./media/img/zara2.jpg',
'  ./media/img/zara3.jpg',
'  ./media/img/zara4.jpg',
'  ./media/img/zara5.jpg'


]


const contenedor = document.querySelector('.principal');
contenedor.style.backgroundImage = `url(${imagenesZara[0]})`;
contenedor.style.backgroundRepeat = 'no-repeat';
contenedor.style.backgroundSize = 'cover';
let sigte = 0;



window.addEventListener('wheel', function(event) {
  const delta = event.deltaY;
 
 

  if (delta > 0 ) {
    // Scrolling hacia abajo
    contenedor.style.backgroundImage = `url(${imagenesZara[sigte]})`;
    contenedor.style.transitionTransform = 'all 3s ease';
    sigte++;

    if (sigte === imagenesZara.length) {
      sigte = 0;
    }
  }
});


let registro = document.querySelector('#email');
let tomo = document.querySelector('#toma');
let arrayEmail = [];

tomo.addEventListener('click', () => {
  arrayEmail.push(registro.value);
  console.log(arrayEmail);
})

//guardar el email en el local storage
localStorage.setItem('email', JSON.stringify(arrayEmail));

let btnMenu = document.querySelector('.bottonMenu-cajaboton');

btnMenu.addEventListener('click', () => {
  mostrarSubMenu();
})


