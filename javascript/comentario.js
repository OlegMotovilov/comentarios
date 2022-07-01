/*const formularioContactos = document.querySelector('#contactform');
eventListeners();
function eventListeners() {
 formularioContactos.addEventListener('submit', leerFormulario);
}
function leerFormulario(e) {
  e.preventDefault();
  // Leer los datos de los inputs
  const nombre = document.querySelector('#name').value,
    email = document.querySelector('#email').value,
    mensaje = document.querySelector('#message-text').value,
    accion = document.querySelector('#submit').value;
    if(nombre === '' || email === '' || mensaje === '') {
      mostrarNotificacion('Todos los Campos son Obligatorios', 'error');
      } else {
      // Pasa la validación, crear llamada a Ajax
      console.log(accion);
      const infoContacto = new FormData();
      infoContacto.append('nombre', nombre);
      infoContacto.append('empresa', empresa);
      infoContacto.append('telefono', telefono);
      infoContacto.append('accion', accion);
      console.log(...infoContacto);
      if(accion === 'crear'){
        // crearemos un nuevo contacto
        insertarBD(infoContacto);
        } else {
        // editar el contacto
        }
       
      }     
}*/
function algonormal(formulario) {
  
  /*validar nombre, mensaje y email no vacios*/
  const name = contactform.name.value,
      email = contactform.email.value,
      messagetext = contactform.messagetext.value;
      if (name == "" || email =="" || messagetext=="") {
        alert("Falta información");
        return false;
      } 
      // validar el correo electrónico
      var ercorreo=/^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/;         
      if (!(ercorreo.test(email))) { 
          alert('EL CORREO ELECTRÓNICO NO ES VÁLIDO.');
          return false; }
      const infoContacto = new FormData();
      infoContacto.append('nombre', name);
      infoContacto.append('email', email);
      infoContacto.append('mensaje', messagetext);
      console.log(...infoContacto);   
      //alert(contactform.messagetext.value);
      BDdatos(infoContacto);
      //console.log(subir.value);
}
function BDdatos(datos) {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'php/modelo.php', true);
  xhr.send(datos);
  
  // leer la respuesta
  /*xhr.onload = function() {
    if(this.status === 200) {
    console.log(xhr.responseText);
    }
    }*/
 

// leer la respuesta
/*xhr.onload = function() {
  if(this.status === 200) {
    console.log(JSON.parse( xhr.responseText) ); 
    // leemos la respuesta de PHP
    const respuesta = JSON.parse( xhr.responseText);
    // Inserta un nuevo elemento a la tabla
    const nuevoContacto = document.createElement('tr');
    nuevoContacto.innerHTML = `
      <td>${respuesta.datos.nombre}</td>
      <td>${respuesta.datos.empresa}</td>
      <td>${respuesta.datos.telefono}</td>
    `;

    }
   
  }*/

}