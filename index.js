const buscadorHidden = document.getElementById('search_hidden');
const buscador = document.getElementById('search')
const container = document.getElementById('container')
const lupaOculta = document.getElementById('lupa_oculta')
const contBarraBusqueda = document.getElementById('conteiner_barra_busqueda')


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