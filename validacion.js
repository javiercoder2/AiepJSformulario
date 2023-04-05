/* let form = document.getElementById('myForm');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  let nombre = document.getElementById('nombre').value.trim();
  let email = document.getElementById('email').value.trim();
  let telefono = document.getElementById('telefono').value.trim();
  let mensaje = document.getElementById('mensaje').value.trim();

  let errorNombre = document.getElementById('errorNombre');
  let errorEmail = document.getElementById('errorEmail');
  let errorTelefono = document.getElementById('errorTelefono');
  let errorMensaje = document.getElementById('errorMensaje');

  if (nombre === '') {
    errorNombre.textContent = 'El nombre es obligatorio';
  } else {
    errorNombre.textContent = '';
  }

  if (email === '') {
    errorEmail.textContent = 'El email es obligatorio';
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errorEmail.textContent = 'El email no es válido';
  } else {
    errorEmail.textContent = '';
  }

  if (telefono === '') {
    errorTelefono.textContent = 'El teléfono es obligatorio';
  } else if (!/^[0-9]{9}$/.test(telefono)) {
    errorTelefono.textContent = 'El teléfono no es válido';
  } else {
    errorTelefono.textContent = '';
  }

  if (mensaje === '') {
    errorMensaje.textContent = 'El mensaje es obligatorio';
  } else {
    errorMensaje.textContent = '';\n  }

  if (nombre !== '' && email !== '' && telefono !== '' && mensaje !== '' && /\S+@\S+\.\S+/.test(email) && /^[0-9]{9}$/.test(telefono)) {
    form.submit();
  }
}); */