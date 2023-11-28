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

  submenu2.style.display = 'block';
  submenu2.style.backgroundColor = 'red';
  submenu2.style.cursor = 'pointer';
  submenu2.style.position = 'absolute';
  submenu2.style.zIndex = '1';
  submenu2.style.top = '70px';
  submenu2.style.width = 'fit-content';
  submenu2.style.right='100px';
  



}

function ocultarSubMenu() {
  setTimeout(() => {
    mostrar.style.display = 'none';
     submenu2.style.display = 'none';

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
  ocultarSubMenu();
})
btn1.addEventListener('click', () => {
  mostrarSubMenu();
})
console.log('ESTOY');


let imagenesZara = [
'  ./media/img/zara1.jpg',
'  ./media/img/zara2.jpg',
'  ./media/img/zara3.jpg',
'  ./media/img/zara4.jpg',
'  ./media/img/zara5.jpg'


]


const contenedor = document.querySelector('.principal');

let sigte = 0;

//crear un carrusel

// function carrusel() {
//   //recorrer array de imagenes
//   setInterval(() => {
//      for (let i = 0; i < imagenesZara.length; i++) {
//     contenedor.style.backgroundImage = `url(${imagenesZara[sigte]})`;
//     sigte++;


//     if (sigte === imagenesZara.length) {
//       sigte = 0;
//     }
//   }
  
//   }, 3000)
// }
// carrusel();

 
// //al hacer scroll se cambia la imagen desde abajo
// window.addEventListener('scroll', carrusel); () => {
//   contenedor.style.backgroundImage = `url(${imagenesZara[sigte]})`;
//   sigte++;
// }
window.addEventListener('scroll', () => {
  const scrollHeight = window.innerHeight + window.scrollY;
  const totalHeight = document.documentElement.scrollHeight;

  if (scrollHeight >= totalHeight) {
    contenedor.style.backgroundImage = `url(${imagenesZara[sigte]})`;
    sigte++;

    if (sigte === imagenesZara.length) {
      sigte = 0;
    }
  }
});

window.addEventListener('wheel', function(event) {
  const delta = event.deltaY;
  

  if (delta > 0) {
    // Scrolling hacia abajo
    contenedor.style.backgroundImage = `url(${imagenesZara[sigte]})`;
    sigte++;

    if (sigte === imagenesZara.length) {
      sigte = 0;
    }
  }
});