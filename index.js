const buscadorHidden = document.getElementById('search_hidden');
const buscador = document.getElementById('search')
const container = document.getElementById('container')

document.addEventListener('click', () => {
   if (document.activeElement.type === 'search'){
   //buscadorHidden.style.display = 'flex'
      container.classList.add('input_Hidden')
      
   }else{
      container.classList.remove('input_Hidden')
   }
})


function enFoco (){
   console.log('tengoFoco')
}

function sinFoco(){
   console.log('yano')
}