var area = document.getElementById('insert-links') ;
var boton = document.getElementById('save');
var lista = document.getElementById('container-links');

boton.addEventListener('click' ,function(event) {
   /*console.log(event);*/
  alert('estoy');
   if (area.value) { /* me da el contenido*/
      var li = document.createElement('li');
      var link = document.createElement('a');

      link.textContent = area.value ;

      link.setAttribute('href', '#') ;  /* agregar elementos*/

      li.appendChild(link) ;

      lista.appendChild(li) ;

      area.value ='';
   }

});
