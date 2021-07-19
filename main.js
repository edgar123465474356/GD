window.onload = function(){
    var contenedor = document.getElementById('contenedor_carga');
    contenedor.style.visibility = 'hidden';
    contenedor.style.opacity = '0';
}

const open = document.getElementById('open')
const close = document.getElementById('close')
const modal_container = document.getElementById('modal_container')


open.addEventListener('click', ()=>{
    modal_container.classList.add('show');
});

close.addEventListener('click', ()=>{
    modal_container.classList.remove('show');
});

open.addEventListener('click', ()=>{
    modal_container.classList.add('show');
});

