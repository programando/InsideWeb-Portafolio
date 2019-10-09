let  btnMenu        = document.querySelector('.btn-menu');
let  menu           = document.querySelector('.list-container');
let  containerMenu  = document.querySelector('.menu');
let  enlaces        = document.querySelectorAll('.lists li a');
let  goTop          = document.querySelector('.btn-go-top');
let  activador      = true;

/** Mustra y oculta el menu responsivo  */
/** Mustra y oculta el menu responsivo  */
btnMenu.addEventListener( 'click', ()=> {
    
    document.querySelector('.btn-menu i').classList.toggle('fa-times');
    btnMenu.style.color='#ff2e63';

    if ( activador ) {
            menu.style.left = "0";
            menu.style.transition = "0.5s";
            activador = false ;
    }else {
        menu.style.left = "-100%";
        menu.style.transition = "0.5s";
        activador = true ;
        btnMenu.style.color='#252a34';
    }
});
/** Mustra y oculta el menu responsivo  */

 
/**========================================================== */
/** Intercambio de la clase activo en el menu */
/**========================================================== */
    enlaces.forEach (( element) => {
         element.addEventListener( 'click', ( event )=> {
              enlaces.forEach( (link) => {
                 link.classList.remove('activo');
              }) ;
            event.target.classList.add('activo') ;
        })
    });
/**========================================================== */
/** Intercambio de la clase activo en el menu */
/**========================================================== */




/**========================================================== */
/** funcionalidad de boton IR ARRIBA. */
/**========================================================== */
let prevScrollPos   = window.pageYOffset;

window.onscroll = () => {
    let arriba = window.pageYOffset;
    
    if ( arriba <= 600 ) {
        goTop.style.right       = '-100%';
        goTop.style.transition  = '2.8s';
        containerMenu.style.borderBottom = "none";
        containerMenu.style.right = "-100%";
    }else{
        goTop.style.right       = '0px';
        goTop.style.transition  = '0.8s';
        containerMenu.style.borderBottom = "3px solid #ff2e63";
        containerMenu.style.right = "0%";
    }
}

// Desplazarme hacia rriba
//--------------------------
goTop.addEventListener('click', () => {
    document.body.scrollTop            = 0; // 600 Para ir abajo
    document.documentElement.scrollTop = 0;
})
/**========================================================== */
/** funcionalidad de boton IR ARRIBA. */
/**========================================================== */










