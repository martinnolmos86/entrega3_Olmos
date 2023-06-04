// constructores de perros y gatos

class Dogs {
  constructor(name, age, color, race) {
    (this.name = name),
      (this.age = age),
      (this.color = color),
      (this.race = race);
  }
}

class Cats {
  constructor(name, age, color) {
    (this.name = name), (this.age = age), (this.color = color);
  }
}
// Creo los perros y los gatos

const dog1 = new Dogs("Rocco", 4, "white", "Caniche");
const dog2 = new Dogs("Galgo", 3, "Brown", "Galgo");
const dog3 = new Dogs("Denver", 1, "white and black", "Dalmata");
const dog4 = new Dogs("Firu", 4, "Black", "Mezcla");
const cat1 = new Cats("Gat", 2, "Black");
const cat2 = new Cats("Raul", 3, "Yellow");

// constructor donar

class Donar {
  constructor(nombreDonante, cantidadDonada) {
    (this.nombreDonante = nombreDonante),
      (this.cantidadDonada = cantidadDonada);
  }
}

// creo un array y ingreso todos los objetos perros que tengo
const dogs = [dog1, dog2, dog3, dog4];

// bienvenida
let nombre = prompt("Ingrese su nombre");

// funcion principal llamada seleccion

const seleccion = () => {
  let elegir = prompt(
    `Bienvenido a Adopciones ${nombre}, ¿qué desea hacer? ¿Adoptar o Donar?`
  ).toLocaleLowerCase();

  while (elegir !== "adoptar" && elegir !== "donar") {
    if (elegir === null) {
      alert("Hasta luego");
      return;
    }
    elegir = prompt('Opción inválida. Por favor, elija "Adoptar" o "Donar"');
  }

  if (elegir === "adoptar") {
    adoptar();
  } else if (elegir === "donar") {
    donar();
  }
};

// funcion donar

const donar = () => {
  while (true) {
    const option = prompt(`${nombre}, elija una opción:
      1. Si desea donar.
      2. Si desea ver la cantidad donada.
      3. Si desea salir.`);

    if (option === "1") {
      const nombreDonante = prompt("Ingrese su nombre y su apellido");
      let cantidadDonada = prompt("Ingrese el monto a donar");
      cantidadDonada = Number(cantidadDonada);

      while (isNaN(cantidadDonada) || cantidadDonada <= 0) {
        alert("Ingrese un monto válido");
        cantidadDonada = prompt("Ingrese el monto a donar");
        cantidadDonada = Number(cantidadDonada);
      }

      const donante = new Donar(nombreDonante, cantidadDonada);
      montoDonar.push(donante);

      alert(
        `${nombreDonante}, usted ha donado ${cantidadDonada}. ¡Muchas gracias por su aporte!`
      );
    } else if (option === "2") {
      alert(
        montoDonar.map(
          (dog) =>
            `Gracias ${dog.nombreDonante} por donar ${dog.cantidadDonada}.`
        )
      );
    } else if (option === "3") {
      break;
    } else {
      alert("Opción inválida. Por favor, seleccione una opción válida.");
    }
  }

  alert("¡Gracias por su participación! ¡Hasta la próxima!");
};

// funcion adoptar

const adoptar = () => {
  while (true) {
    const dogsOrCats = prompt(`${nombre} selecciones que desea adoptar: 1-perros
  2-Gatos
  3-salir`);
    if (dogsOrCats === "1") {
      alert("Estos son los perros que tenemos : ");
    } else if (dogsOrCats === "2") {
      alert("Estos son los gatos que tenemos : ");
    } else if (dogsOrCats === "3") {
      break;
    } else {
      alert("ingrese la opcion correcta");
    }
  }
  alert("gracias lo esperamos pronto");
};

const montoDonar = [];

// Array de carrito vacio para ingresar lo que selecciona el usuario

const arrayCarrito = [];

// llamado a la funcion
seleccion();
