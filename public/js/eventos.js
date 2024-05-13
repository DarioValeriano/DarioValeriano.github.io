const menu = document.querySelector('.menu-hamburguesa')
const lista = document.querySelector('.lista-nav')
const navbar = document.querySelector('header')
const elementosLista = document.querySelectorAll('.elemento-lista')

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

window.addEventListener("scroll", () =>{
    if(lista.classList.contains('invisible')){
        navbar.classList.toggle("blured", window.scrollY > 0)
        console.log(elementosLista)
        //elementosLista.classList.toggle("sombreado", window.scrollY > 0)
    }
    
})

//

window.addEventListener('resize', function() {
    let elemento1 = document.querySelector('.foto');
    let elemento2 = document.querySelector('.bloque-principal');
    // Verificar si el ancho del viewport es mayor a 768 píxeles
    if (window.innerWidth >= 768) {
        // Restablecer la altura del elemento2 para que pueda calcularse de nuevo
        elemento2.style.height = 'auto';
        
        // Obtener la altura del elemento1
        let alturaElemento1 = elemento1.offsetHeight;
        
        // Asignar la altura del elemento1 al elemento2
        elemento2.style.height = alturaElemento1 + 'px';
    } else {
        elemento2.style.height = '322px';
    }
});

window.dispatchEvent(new Event('resize'));
