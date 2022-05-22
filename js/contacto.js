const sendBtn = document.querySelector('#sendBtn');
const comunidad = document.querySelector('#comunidadBtn');
const form = document.querySelector('#form');

let data = {
  personas: [],
  mensajes: [],
};
let registro = false;

if (registro) {
  comunidad.style.display = flex;
}

//4 método .createElement() es para crear un elemento en, por ejemplo, el formulario dentro de Listado de Personas
// const contenedorPersonas = document.querySelector("#contenedorPersonas");

//3 Crear función handleSendBtn
const handleSendBtn = () => {
  // Capturamos los datos del formulario al hacer click en ENVIAR
  const nuevaPersona = {
    nombre: form.nombre.value,
    apellido: form.apellido.value,
    correo: form.correo.value,
    edad: form.edad.value,
    nacionalidad: form.pais.value,
    genero: form.genero.value,
    fechaIngreso: new Date(),
  };

  // agregamos la nueva persona al objeto de datos
  data = { ...data, personas: [...data.personas, nuevaPersona] };

  // limpiamos el formulario
  form.reset();

  console.log(
    `${nuevaPersona.nombre} ${nuevaPersona.apellido} de ${getEdad(
      nuevaPersona.edad
    )} años, se registro en Coffee Break el ${fechaCorta(
      nuevaPersona.fechaIngreso
    )} `
  );
  //pintamos el DOM con la nueva persona con la función addNewPerson

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

sendBtn.addEventListener('click', () => handleSendBtn());

const videoCards = [...document.querySelectorAll('.video-card')];

videoCards.forEach((item) => {
  console.log(item);
  item.addEventListener('mouseover', () => {
    let video = item.children[1];
    video.play();
  });
  item.addEventListener('mouseleave', () => {
    let video = item.children[1];
    video.pause();
  });
});
