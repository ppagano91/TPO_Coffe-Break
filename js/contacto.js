// Variables para formulario
const sendBtn = document.querySelector('#sendBtn');
const comunidad = document.querySelector('#comunidadBtn');
const form = document.querySelector('#form');

// Variables auxiliares dentro de JS
let data = {
  personas: [],
  mensajes: [],
};
let registro = false;
var validated = true;

let cantErrors;
if (registro) {
  comunidad.style.display = flex;
}

const handleSendBtn = () => {
  cantErrors = 0;
  checkFields();
  if (validated === false) return;

  // Capturamos los datos del formulario al hacer click en ENVIAR
  const nuevaPersona = {
    nombre: form.nombre.value,
    apellido: form.apellido.value,
    email: form.email.value,
    edad: form.edad.value,
    nacionalidad: form.pais.value,
    genero: form.genero.value,
    fechaIngreso: new Date(),
    password: form.password.value,
    confirmarPassword: form.confirmarPassword.value,
  };

  // Agregamos la nueva persona al objeto de datos
  data = { ...data, personas: [...data.personas, nuevaPersona] };

  // Limpiamos el formulario
  form.reset();

  // Mostrar los datos por consola
  console.log(
    `${nuevaPersona.nombre} ${nuevaPersona.apellido} de ${getEdad(
      nuevaPersona.edad
    )} años, se registro en Coffee Break el ${fechaCorta(
      nuevaPersona.fechaIngreso
    )} `
  );

  // Mostrar los datos con un alert
  alert(
    `¡Hola ${nuevaPersona.nombre}! Tu registro se ha realizado exitosamente.\n ¡Felicitaciones! Ya sos parte de la Comunidad Coffee Break`
  );

  registro = true;
};

function fechaCorta(fecha) {
  let formatted_date =
    fecha.getDate() + '-' + (fecha.getMonth() + 1) + '-' + fecha.getFullYear();
  return formatted_date;
}

function getEdad(dateString) {
  let hoy = new Date();
  let fechaNacimiento = new Date(dateString);
  let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
  let diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth();
  if (
    diferenciaMeses < 0 ||
    (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())
  ) {
    edad--;
  }
  return edad;
}

// Función para validación de campos
const checkFields = () => {
  //capturar los valores ingresados por el usuario
  const nombre = form.nombre.value.trim();
  const apellido = form.apellido.value.trim();
  const email = form.email.value.trim();
  const edad = form.edad.value;
  const nacionalidad = form.pais.value;
  const genero = form.genero.value;
  const fechaIngreso = new Date();
  const password = form.password.value.trim();
  const confirmarPassword = form.confirmarPassword.value.trim();

  // Expresiones Regulares
  const expRegPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,18}$/;

  //Validación de nombre y apellido
  !nombre
    ? errorValidacion(form.nombre, '*Campo Obligatorio')
    : validacionOk(form.nombre);

  !apellido
    ? errorValidacion(form.apellido, '*Campo Obligatorio')
    : validacionOk(form.apellido);

  //Validación de email
  !email
    ? errorValidacion(form.email, '*Campo Obligatorio')
    : !validarEmail(email)
    ? errorValidacion(form.email, 'El e-mail no es válido')
    : validacionOk(form.email);

  //Validación de Fecha Nacimiento
  !edad
    ? errorValidacion(form.edad, '*Campo Obligatorio')
    : validacionOk(form.edad);

  // Validación de campo género (No logrado)
  // console.log(form.genero);
  // genero === ''
  //   ? errorValidacion(form.genero, '*Campo Obligatorio')
  //   : validacionOk(form.genero);

  // Validación de Password
  !password
    ? errorValidacion(form.password, '*Campo Obligatorio')
    : password.length < 8
    ? errorValidacion(form.password, 'Mínimo 8 caracteres')
    : !password.match(expRegPassword)
    ? errorValidacion(
        form.password,
        'Debe tener al menos una letra mayúscula, una letra minúscula y un número.'
      )
    : validacionOk(form.password);

  //Validación de Confirmación Password
  !confirmarPassword
    ? errorValidacion(form.confirmarPassword, 'Confirme su password')
    : confirmarPassword !== password
    ? errorValidacion(
        form.confirmarPassword,
        'El password ingresado no coincide'
      )
    : validacionOk(form.confirmarPassword);
  return validated;
};

const errorValidacion = (input, msje) => {
  const formControl = input.parentElement;
  const aviso = formControl.querySelector('span');
  aviso.innerText = msje;
  formControl.className = 'form-control error';
  validated = false;
  cantErrors++;
};
const validacionOk = (input) => {
  const formControl = input.parentElement;
  formControl.className = 'form-control ok';
  if (cantErrors === 0) validated = true;
};

const validarEmail = (email) => {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
};

/* MODAL */
const closeModal = document.querySelector('#closeModal');
const modalContainer = document.querySelector('#modalContainer');
const modalContent = document.querySelector('#modalContent');

const modalTitle = document.getElementById('modalTitle');
const modalText = document.getElementById('modalText');
const modalText2 = document.getElementById('modalText2');

/* ADD EVENT LISTENER */
sendBtn.addEventListener('click', (e) => {
  e.preventDefault();
  handleSendBtn();
  console.log(data['personas'][data['personas'].length - 1]);
  let lastUser = data['personas'][data['personas'].length - 1];
  if (validated) {
    modalContainer.style.opacity = '1';
    modalContainer.style.visibility = 'visible';
    modalContent.classList.toggle('modal-close');
    modalTitle.innerHTML = `¡Felicitaciones!`;
    modalText.innerHTML = `¡Hola ${lastUser.nombre}! Tu registro se ha realizado exitosamente.`;
    modalText2.innerHTML = 'Ya sos parte de la Comunidad Coffee Break';
  }
});

closeModal.addEventListener('click', () => {
  modalContent.classList.toggle('modal-close');

  setTimeout(() => {
    modalContainer.style.opacity = '0';
    modalContainer.style.visibility = 'hidden';
  }, 500);
});

window.addEventListener('click', (e) => {
  if (e.target === modalContainer) {
    modalContent.classList.toggle('modal-close');
    setTimeout(() => {
      modalContainer.style.opacity = '0';
      modalContainer.style.visibility = 'hidden';
    }, 500);
  }
});
