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
        elementosLista.classList.toggle("sombreado", window.scrollY > 0)
    }
    
})

//


