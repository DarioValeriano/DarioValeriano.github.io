const menu = document.querySelector('.menu-hamburguesa')
const lista = document.querySelector('.lista-nav')
const navbar = document.querySelector('header')
const links = document.querySelector('.links-fixed')
const elementosLista = document.querySelectorAll('.elemento-lista')
const secciones = document.querySelectorAll('section');

menu.addEventListener('click', () => {
    if(window.scrollY == 0){
        if(lista.classList.contains('invisible')){
            lista.classList.remove('invisible')
            navbar.classList.add('blured')
            navbar.classList.add('redimension')
            
        } else {
            lista.classList.add('invisible')
            navbar.classList.remove('blured')
            navbar.classList.remove('redimension')
        }
    }else{
        if(lista.classList.contains('invisible')){
            lista.classList.remove('invisible')
            navbar.classList.add('redimension')
        } else{
            lista.classList.add('invisible')
            navbar.classList.remove('redimension')
        }
    }
})

for (let i = 0; i < elementosLista.length; i++) {
    elementosLista[i].addEventListener('click', () => {
        lista.classList.add('invisible')
        navbar.classList.remove('redimension')
        if(window.scrollY == 0){
            navbar.classList.remove('blured')
        }
    })
}

/*document.addEventListener('DOMContentLoaded', function() {
    const bloque1 = document.querySelector('.primer-bloque');
    const bloque2 = document.querySelector('.segundo-bloque');
    bloque2.classList.add('oculto')
    function alternarVisibilidad(bloque) {
        bloque.classList.toggle('oculto')
    }
    setInterval(function() {
        alternarVisibilidad(bloque1);
        alternarVisibilidad(bloque2);
    }, 15000); // Cambia cada 10 segundos (10000 milisegundos)
});*/

document.addEventListener('DOMContentLoaded', function() {
    var miVideo = document.getElementById('video-tesoro');
    miVideo.currentTime = 40; // Establece el tiempo en segundos donde quieres que comience el video
});

window.addEventListener("scroll", () =>{
    let posicionScroll = window.scrollY;
    if(lista.classList.contains('invisible')){
        navbar.classList.toggle("blured", posicionScroll> 0)
    }
    if(posicionScroll > window.innerHeight / 3){
        links.classList.remove("invisible")
    } else{
        links.classList.add("invisible")
    }
    secciones.forEach(seccion => {
        const seccionTop = seccion.offsetTop;
        const seccionHeight = seccion.clientHeight;
    
        if (posicionScroll >= seccionTop && posicionScroll < seccionTop + seccionHeight) {
          history.replaceState(null, '', `#${seccion.id}`);
        }
    })
    
})

window.addEventListener('resize', function() {
    let elemento1 = document.querySelector('.foto');
    let elemento2 = document.querySelector('.bloque-principal');
    // Verificar si el ancho del viewport es mayor a 768 píxeles
    if (window.innerWidth >= 768) {
        // Restablecer la altura del elemento2 para que pueda calcularse de nuevo
        elemento2.style.height = 'auto';
        
        // Obtener la altura del elemento1
        let alturaElemento1 = elemento1.offsetHeight - 60;
        
        // Asignar la altura del elemento1 al elemento2
        elemento2.style.height = alturaElemento1 + 'px';
    } else {
        elemento2.style.height = '322px';
    }
});

window.dispatchEvent(new Event('resize'));
