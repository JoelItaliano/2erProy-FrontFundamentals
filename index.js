const buscadorHidden = document.getElementById('search_hidden');
const buscador = document.getElementById('search');
const container = document.getElementById('container');
const lupaOculta = document.getElementById('lupa_oculta');
const contBarraBusqueda = document.getElementById('conteiner_barra_busqueda');
const navLateralSegSeccionMostrar = document.getElementById('nav_icon_seg_secc_mostrar_secc_oculta');
const navIconSegSeccOculto = document.getElementById('nav_icon_expand_seg_secc_oculto');
const icoMenuLateral = document.getElementById('ico_menu_lat')
const navOculta = document.getElementById('nav_oculto')
const navShow = document.getElementById('nav_show')
let validadorNavLateral = 1 //

/**
 * Evento de escucha de click, cuando esta selecc la barra de busqueda 
 * realiza acciones de cambio de clase y cambios de estilos
 */
document.addEventListener('click', () => {
   if (document.activeElement.type === 'search'){
   //buscadorHidden.style.display = 'flex'
      container.classList.add('input_Hidden')
      lupaOculta.style.display = 'flex'
      buscador.style.backgroundColor = 'rgb(0,0,0)'
      contBarraBusqueda.style.marginLeft ='0%'
      contBarraBusqueda.style.width = '81%'  
   }else{
      container.classList.remove('input_Hidden')
      lupaOculta.style.display = 'none'
      buscador.style.backgroundColor = 'rgb(17,17,17)'
      contBarraBusqueda.style.marginLeft ='6%'
      contBarraBusqueda.style.width = '75%'  
   }
})

icoMenuLateral.addEventListener('click',() =>{
   
   if (validadorNavLateral === 1){
   navOculta.style.display = 'inherit'
   navShow.style.display = 'none'
   validadorNavLateral = 0
   }else{
      navOculta.style.display = 'none'
      navShow.style.display = 'inherit'
      validadorNavLateral = 1
   }
})



/*
*Funcion que escucha el click en la seg seccion de la barrra lateral
*/
function mostrarSecOcultaNav(){
   navIconSegSeccOculto.style.display = 'inline'
   navLateralSegSeccionMostrar.style.display = 'none'
}
function ocultarSeccNav(){
   navIconSegSeccOculto.style.display = 'none'
   navLateralSegSeccionMostrar.style.display = 'flex'
}