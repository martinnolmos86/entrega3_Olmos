// creamos los objetos
let dogsAndCats = [
  { nombre: "Nala", caracteristicas: "", imagen: "./assets/gato1.jpg" },
  { nombre: "Isi", caracteristicas: "Soy ISI", imagen: "./assets/gato2.jpg" },
  { nombre: "Rocco", caracteristicas: "", imagen: "./assets/perro1.png" },
  { nombre: "Charlie", caracteristicas: "", imagen: "./assets/perro2.jpg" },
  { nombre: "Luna", caracteristicas: "", imagen: "./assets/gato3.jpg" },
  { nombre: "Galgo", caracteristicas: "", imagen: "./assets/perro3.jpg" },
  { nombre: "Negrito", caracteristicas: "", imagen: "./assets/perro4.jpg" },
  { nombre: "Indra", caracteristicas: "", imagen: "./assets/indra (3).jpg" },
];

// // CAPTURAMOS UN ELEMENTO

const containerDogsAndCats = document.querySelector("#container");

// RECORRO EL ARRAY DE LOS ANIMALES Y LOS MUESTRO EN EL HTML

dogsAndCats.map((animal, i) => {
  let card = document.createElement("div");
  card.classList.add("card", "col-sm-12", "col-lg-3");
  card.innerHTML = `
  <img src="${animal.imagen}" class="card-img-top" alt="...">
  <div class="card-body">
  <h5 class="card-title">${animal.nombre}</h5>
  <p class="card-text">Un texto de ejemplo rápido para colocal cerca del título de la tarjeta y
  componer la mayor parte del contenido de la tarjeta.</p>
  <button type="button" class="btn btn-dark btnAnimals" onClick="adoptar(${i})">Adoptar</button>
  </div>
  `;
  containerDogsAndCats.appendChild(card);
});

// const adoptar = (i) => {
//   alert(`elegiste a ${dogsAndCats[i].nombre}`);
// };

// Función para mostrar el alert con la información del animal seleccionado
function adoptar(index) {
  let animalSeleccionado = dogsAndCats[index];
  alert(`Has seleccionado adoptar a ${animalSeleccionado.nombre}`);
}

// const btnAnimals = document.querySelector(".btnAnimals");

// // LLAMO AL ESCUCHADOR
// btnAnimals.addEventListener("click", () => {
//   alert(`Usted eligio a `);
// });

// CAPTURO LA ETIQUETA FORM PARA CREAR EL FORMULARIO DE DONACIONES

const formul = document.querySelector("form");

// CREO EL FORMULARIO

formul.innerHTML = `
<div class="row g-3">
                <div class="col">
                    <input type="text" class="form-control" id="nombre" placeholder="Nombre" aria-label="Nombre">
                </div>
                <div class="col">
                    <input type="text" class="form-control" id="apellido" placeholder="Apellido" aria-label="Apellido">
                </div>
            </div>

            <div class="row mb-3 mt-3">

                <div class="col">
                    <input type="email" class="form-control" id="email" placeholder="Email">
                </div>
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text">$</span>
                <input type="text" class="form-control" id="donacion" aria-label="Cantidad (al dólar más cercano)"
                    placeholder="Ingrese el monto que desea donar">
            </div>
            <button type="submit" class="btn btn-primary button">Enviar</button>

`;

// CREO EL CONSTRUCTOR DE LOS DONANTES

class Donante {
  constructor(name, lastName, email, donation) {
    this.nombre = name;
    this.apellido = lastName;
    this.email = email;
    this.donation = donation;
  }
}

// ARRAY PARA ALMACENAR LOS DONANTES

montoDonar = [];

// CAPTURO EL FORMULARIO Y LOS ID DE LOS IMPUTS

const form = document.querySelector("form");
const captureName = document.querySelector("#nombre");
const captureApellido = document.querySelector("#apellido");
const captureEmail = document.querySelector("#email");
const captureDonacion = document.querySelector("#donacion");

form.addEventListener("submit", validateForm);

function validateForm(e) {
  e.preventDefault();

  const newDonante = new Donante(
    captureName.value,
    captureApellido.value,
    captureEmail.value,
    captureDonacion.value
  );
  montoDonar.push(newDonante);
  console.log(montoDonar);
}
