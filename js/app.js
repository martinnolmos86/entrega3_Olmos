// let name = "Martin";
// console.log(name);

// name = "Carlos";

// console.log(name);

// let age = 35;
// age = 23;
// console.log("tenes " + age + " años");

// // ejercicio suma , resta , multiplicacion y division

// const num1 = 20;
// const num2 = 4;

// console.log("suma ", num1 + num2);
// console.log("resta", num1 - num2);
// console.log("division", num1 / num2);
// console.log("multiplicacion", num1 * num2);

// // Pedir al usuario dos números y almacenarlos en variables, luego imprimir en la consola el resultado de sumar los dos números.

// let number1 = Number(prompt("Ingrese un numero para sumar"));
// let number2 = Number(prompt("ingrese otro numero para sumar"));

// let suma = number1 + number2;

// console.log("La suma de ambos numeros ingresados es : " + suma);

// let precio = Number(prompt("Ingrese un precio"));
// let descuento = 20;
// let precioFinal = precio - precio * (descuento / 100);
// console.log("El precio del producto con el descuento es de " + precioFinal);

// const namer = "Martin";
// console.log("Mi nombre es " + namer);

// let nombre = prompt("Ingresa tu nombre");
// let ages = Number(prompt("Ingresa tu edad"));

// console.log("Hola " + nombre + " tienes " + ages + " años.");

// // Declarar una variable numérica llamada "a" y asignarle un valor, luego declarar una variable numérica llamada "b" y
//  asignarle otro valor. Luego, intercambiar los valores de las variables y mostrar el resultado en la consola.
// let a = Number(prompt("Ingresa un valor numerico a A"));
// let b = Number(prompt("Ingresa un valor numerico a B"));

// let temp = a;

// a = b;
// b = temp;

// console.log("El valor de A es " + a + " y el Valor de b es : " + b);

// // Declarar una variable numérica con un valor, y luego incrementar su valor en 10. Luego, imprimir en la consola el valor resultante.

// let numeroMult = Number(prompt("Ingrese un numero a multiplicar por 10 "));

// numeroMult -= 10;

// console.log("El resultado es :" + numeroMult);

// // Pedir al usuario dos números y almacenarlos en variables. Luego, calcular la suma, resta, multiplicación y división
// de los números y mostrar los resultados en la consola.

// let numero1 = Number(prompt("Ingresa un numero uno"));
// let numero2 = Number(prompt("Ingrese el segundo numero"));

// let plus = numero1 + numero2;
// let subtraction = numero1 - numero2;
// let multiplication = numero1 * numero2;
// let division = numero1 / numero2;
// console.log("el resultado de la suma es :" + plus);
// console.log("el resultado de la resta es :" + subtraction);
// console.log("el resultado de la multiplicacion es :" + multiplication);
// console.log("el resultado de la division es :" + division);

// Realiza un programa que solicite al usuario tres números y muestre por consola el promedio de dichos números.
// let numberone = Number(prompt("Ingresa el primer numero"));
// let numbertwo = Number(prompt("Ingresa el segundo numero"));
// let numberthree = Number(prompt("Ingresa el tercer numero"));

// let promedio = (numberone + numbertwo + numberthree) / 3;

// console.log("el promedio de tus numeros ingresados es :" + promedio);

// Realiza un programa que solicite al usuario su nombre y su edad, y muestre por consola un mensaje que le diga en qué año nació.
// let namer = prompt("Ingresa tu nombre");
// let age = Number(prompt("ingrese tu edad"));

// let year = 2023 - age;

// console.log("Hola " + namer + " el año que naciste es en :" + year);

// const frase = prompt("Ingresa una frase");
// let palabras = frase.split(" ").length;

// console.log(palabras);

// el signo == hace comparacion sin importar el tipo de dato

// let a = 5;
// let b = "5";
// console.log(a == b);

// el signo === compara el tipo de dato pero si se fija que tipo de dato es

// let c = 5;
// let d = "5";
// console.log(c === d);

// en este caso nos devuelve por consola false por que no son dos numero

// let color = prompt("Ingrese un color ");
// if (color == "blue") {
//   console.log("El color es azul");
// } else {
//   console.log("el color no es azul");
// }

// let nombreUsuario = prompt("Ingresar nombre de usuario");
// if (nombreUsuario == "") {
//   alert("No ingresaste el nombre de usuario");
// } else {
//   alert("Nombre de usuario ingresado " + nombreUsuario);
// }

// let nameUser = prompt("Ingresa tu nombre");
// let lastName = prompt("Ingrese su apellido");

// if (nameUser != "" && lastName != "") {
//   console.log("sr " + nameUser + "de apellido " + lastName);
// } else {
//   alert("Erro, ingrese su nombre y apellido");
// }
// Crea un programa que solicite al usuario su edad y determine si es mayor de edad (18 años o más).
// Si lo es, muestra en la consola un mensaje que diga "Eres mayor de edad". Si no lo es, muestra en la
// consola un mensaje que diga "Eres menor de edad".
// let ageUser = Number(prompt("Ingrese su edad"));

// if (ageUser > 18) {
//   console.log("Eres mayor de Edad");
// } else {
//   console.log("Eres menor de edad");
// }

// Crea un programa que solicite al usuario un número y determine si es par o impar. Si es par, muestra en la consola un mensaje que diga
// "El número es par". Si es impar, muestra en la consola un mensaje que diga "El número es impar".
// let parImpar = Number(prompt("Ingrese un numero"));
// if (parImpar % 2 === 0) {
//   console.log("Es par");
// } else {
//   console.log("Es impar");
// }

// Crea un programa que solicite al usuario una contraseña y compruebe si es correcta. Si la contraseña es correcta, muestra en la consola un mensaje que
// diga "Contraseña correcta". Si no lo es, muestra en la consola un mensaje que diga "Contraseña incorrecta".
// let password = prompt("Ingresa un password");

// if (password === "32156492") {
//   console.log("La contraseña es " + password);
// } else {
//   console.log("Error de contraseña");
// }

// Crea un programa que solicite al usuario dos números y determine cuál de los dos es mayor. Si el primer número es mayor que el segundo,
// muestra en la consola un mensaje que diga "El primer número es mayor". Si el segundo número es mayor, muestra en la consola un mensaje que diga
// "El segundo número es mayor". Si ambos números son iguales, muestra en la consola un mensaje que diga "Los dos números son iguales".

// let firsNumber = Number(prompt("Ingrese el primer numero"));
// let secondNumber = Number(prompt("Ingrese el segundo numero"));

// if (firsNumber > secondNumber) {
//   alert("El primer numero es mayor");
// } else if (secondNumber > firsNumber) {
//   alert("El segundo numero es mayor que el primero");
// } else alert("Son iguales");

// Crea un programa que solicite al usuario un número del 1 al 7 y muestre en la consola el día de la semana correspondiente.
// Si el usuario ingresa un número fuera de ese rango, muestra en la consola un mensaje que diga "El número ingresado no es válido".

// let oneToSeven = Number(prompt("Ingresa un numero del 1 al 7"));

// if (oneToSeven == 1) {
//   console.log("Lunes");
// } else if (oneToSeven == 2) {
//   console.log("Hoy es Martes");
// } else if (oneToSeven == 3) {
//   console.log("Hoy es Miercoles");
// } else if (oneToSeven == 4) {
//   console.log("Hoy es Jueves");
// } else if (oneToSeven == 5) {
//   console.log("Hoy es Viernes");
// } else if (oneToSeven == 6) {
//   console.log("Hoy es Sabado");
// } else if (oneToSeven == 7) {
//   console.log("Es domingo");
// }

// Crea un programa que solicite al usuario tres números y determine cuál es el mayor de los tres. Muestra en la consola un mensaje que diga
// "El número mayor es: X", donde X es el número mayor.

// let num1 = Number(prompt("Ingrese el primer numero"));
// let num2 = Number(prompt("Ingrese el segundo numero"));
// let num3 = Number(prompt("Ingrese el tercer numero"));

// if (num1 > num2 && num1 > num3) {
//   console.log(num1 + " Es numero mayor");
// } else if (num2 > num1 && num2 > num3) {
//   console.log(+num2 + " Es el mayor de los tres numeros");
// } else if (num3 > num1 && num3 > num2) {
//   console.log(num3 + " Es el mayor de los 3 numeros ingresados");
// }

// Imprimir los números pares del 1 al 20.

// for (let index = 1; index <= 20; index++) {
//   if (index % 2 === 0) {
//     console.log("los numeros pares son " + index);
//   }
// }
// Imprimir los números impares del 1 al 20.
// for (let index = 1; index <= 20; index += 2) {
//   console.log("impares" + index);
// }

// Imprimir los números del 10 al 1 en orden descendente.

// for (let index = 10; index > 0; index--) {
//   console.log(index);
// }

// Imprimir la tabla del 5, del 1 al 10.

// for (let index = 1; index <= 10; index++) {
//   multiplos = index * 5;
//   console.log(index + "*" + multiplos);
// }

// Calcular la suma de los primeros 10 números enteros.

// Calcular el factorial de un número ingresado por el usuario.

// let num = parseInt(prompt("Ingrese un número para calcular su factorial:"));
// let factorial = 1;

// for (let i = 1; i <= num; i++) {
//   factorial *= i;
// }

// console.log(`El factorial de ${num} es: ${factorial}`);

// Imprimir la secuencia de Fibonacci de longitud n, donde n es un número ingresado por el usuario.

// Dado un arreglo de números, calcular su suma total utilizando un bucle "for".

// Dado un arreglo de cadenas, imprimir cada cadena con su longitud correspondiente utilizando un bucle "for".

// Dado un objeto con propiedades numéricas, calcular su suma total utilizando un bucle "for in".

// Imprime los números del 1 al 50, pero si el número es múltiplo de 3, imprime "Fizz" en su lugar, y si es múltiplo de 5,
//  imprime "Buzz". Si es múltiplo de ambos (es decir, múltiplo de 3 y 5), imprime "FizzBuzz".

// for (let index = 1; index <= 50; index++) {
//   if (index % 3 == 0 && index % 5 == 0) {
//     console.log("FizzBuzz");
//   } else if (index % 5 == 0) {
//     console.log("Buzz");
//   } else if (index % 3 == 0) {
//     console.log("Fizz");
//   } else {
//     console.log(index);
//   }
// }

// Imprimir los números del 1 al 100, pero solo los números que sean divisibles entre 3, 5 y 7.

// for (let index = 1; index <= 100; index++) {
//   if (index % 3 === 0) {
//     console.log(index);
//   } else if (index % 5 === 0) {
//     console.log(index);
//   } else if (index % 7 === 0) {
//     console.log(index);
//   }
// }

// for (let index = 1; index <= 100; index++) {
//   if (index % 3 === 0 || index % 5 === 0 || index % 7 === 0) {
//     console.log(index);
//   }
// }

// Imprimir los números pares del 1 al 20.

// for (let index = 01; index <= 20; index++) {
//   if (index % 2 == 0) {
//     console.log(index);
//   }
// }

// Imprimir los números impares del 1 al 20.

// for (let index = 01; index <= 20; index++) {
//   if (index % 2 !== 0) {
//     console.log(index);
//   }
// }

// Imprimir la tabla de multiplicar del 5.

// for (let index = 1; index <= 10; index++) {
//   console.log(`5 x ${index} = ${index * 5}`);
// }

// Realizar un programa que solicite al usuario ingresar un número positivo y calcule la suma de todos los números
//  impares desde 1 hasta el número ingresado. Utilice un ciclo while para realizar el cálculo.

// let numberPlus = Number(prompt("Ingrese un numero positivo"));
// let i = 1;
// while (i <= numberPlus) {
//   if (i % 2 !== 0) {
//     console.log(`${i}`);
//   }
//   i++;
// }

// Escribir un programa que pida al usuario que adivine un número secreto entre 1 y 100.
// El programa debe continuar pidiendo al usuario que ingrese un número hasta que adivine el número secreto.
// Utilice un ciclo while para implementar la lógica del juego.

// let push = Number(prompt("Adivine el numero SECRETO de 1 al 100 , ingreselo"));
// while (push !== 25) {
//   console.log(`${push} no es el numero secreto`);
//   push = Number(prompt(`Ingrese otro numero`));
//   if (push === 25) {
//     console.log(`ADIVINASTE el numero es 25`);
//   }
// }

// let push = NaN;
// while (push !== 25) {
//   push = prompt("Adivina el número secreto de 1 al 100:");
//   if (isNaN(push)) {
//     alert("Por favor, ingresa un número válido.");
//   } else {
//     push = Number(push);
//     if (push !== 25) {
//       console.log(`${push} no es el número secreto. Intenta de nuevo.`);
//     } else {
//       console.log("¡Adivinaste! El número secreto es 25.");
//     }
//   }
// }

// Escribir un programa que pida al usuario que ingrese una serie de números separados por comas,
// y luego calcule el promedio de estos números. Utilice un ciclo while para iterar sobre los números ing-resados.

// let input = prompt("Ingrese una serie de números separados por comas:");
// let numbers = input.split(",");
// let sum = 0;
// let i = 0;

// while (i < numbers.length) {
//   sum += Number(numbers[i]);
//   i++;
// }

// let average = sum / numbers.length;
// console.log(`El promedio es: ${average}`);
// console.log(`${numbers}`);

// Realizar un programa que solicite al usuario que ingrese una cadena de texto,
// y luego imprima la cadena de texto en orden inverso utilizando un ciclo while.

// let input = prompt("Ingrese una frase y te la devuelvo al revez:");
// let i = input.length - 1;
// let reversed = "";

// while (i >= 0) {
//   reversed += input[i];
//   i--;
// }

// console.log(reversed);

// funciones ejercicios

// 1) Crear un programa que pida al usuario que ingrese un numero
// y le devuelva un mensaje indicando si el numero es positivo,
// negativo o si es 0.
// let number = Number(
//   prompt("Ingrese un numero y te digo si es positivo, negativo o 0")
// );
// const operation = (number) => {
//   if (number > 0) {
//     console.log(`${number} es positivo`);
//   } else if (number < 0) {
//     console.log(`${number} es negativo`);
//   } else {
//     return console.log(`${number} es 0`);
//   }
// };

// operation(number);

// const checkNumber = () => {
//   let input = prompt(
//     "Ingrese un numero y te digo si es positivo, negativo o 0"
//   );
//   let number = Number(input);

//   // Validar entrada
//   while (isNaN(number)) {
//     input = prompt("Ingrese un numero valido");
//     number = Number(input);
//   }

//   // Calcular resultado
//   let result;
//   if (number > 0) {
//     result = "positivo";
//   } else if (number < 0) {
//     result = "negativo";
//   } else {
//     result = "0";
//   }

//   return result;
// };

// // Llamada a la función y salida del resultado
// console.log(checkNumber());

/*
2) Crear un programa que pida un numero al usuario y le devuelva
un mensaje diciendo si el numero es primo o no.
Aclaración: Los números primos son aquellos que tienen exactamente 4 divisores enteros.
*/
// let input = prompt("ingrese un numero y te digo si es primo o no ");
// let primo = Number(input);

// const prime = () => {
//   // validacion
//   while (isNaN(primo)) {
//     input = prompt("Ingrese un numero valido");
//     primo = Number(input);
//   }
//   if (primo < 2) {
//     console.log(`NO es primo`);
//   }

//   for (let i = 2; i < primo; i++) {
//     if (primo % i === 0) {
//       return console.log(`NO es primo`);
//     }
//     return console.log(`ES primo`);
//   }
// };
// prime(primo);

// 3) Crear un programa que convierta la termperatura de grados Celsius a
// Faranheit y viceversa. El usuario deberia ingresar la temperatura y a que
// unidad la quiere convertir.
//C a F (C x 9/5) + 32
// F a C (F -32) x 5/9

// let fAC = prompt("Ingrese c si quiere pasar de c a f, o f si quire de f a c");

// const convert = () => {
//   let temp = Number(prompt("Ingrese una temperatura"));

//   // validacion
//   while (fAC.toLowerCase() !== "c" && fAC.toLowerCase() !== "f") {
//     fAC = prompt("Ingrese c si quiere pasar de c a f, o f si quiere de f a c");
//   }
//   while (isNaN(temp)) {
//     alert("Error, no ingresaste un numero, ingresalo");
//     temp = Number(prompt("Ingrese una temperatura"));
//   }

//   if (fAC == "c") {
//     return console.log(`de c a f es : ${(temp * 9) / 5 + 32}`);
//   } else if (fAC == "f") {
//     return console.log(`de f a c es : ${((temp - 32) * 5) / 9} `);
//   }
// };
// convert();
/*
4) Crear un programa para calcular el total de una compra. Para ello, se le
tiene que pedir al usuario que ingrese el precio de cada producto y, cuando termine, 
que ingrese la palabra 'total'. Devolverle el total de la compra.
*/

let nombre = prompt(
  "Bienvenido a adopciones de mascotas , ¿ como es tu nombre ?"
);

// funcion eleccion
const select = () => {
  let seleccion = prompt(`${nombre},¿que desea hacer ?¿ adoptar o donar ?`);
  if (seleccion === "donar") {
    donate();
  } else if (seleccion === "adoptar") {
    adopt();
  } else if (seleccion === null) {
    alert(`¡Hasta luego!`);
    return;
  }
  // si el usuario no coloca adoptar ni donar
  while (
    seleccion.toLowerCase() !== "adoptar" &&
    seleccion.toLowerCase() !== "donar"
  ) {
    seleccion = prompt(
      "Por favor, ingrese una opción válida: ¿desea adoptar o donar?"
    );

    if (seleccion === null) {
      alert("¡Hasta luego!");
      return;
    }
  }
};
// funcion donar
const donate = () => {
  let amount = prompt("Ingrese el monto a donar");

  // si el usuario ingresa cancelar
  if (amount === null) {
    alert("¡Hasta luego!");
    return;
  }
  // Convertir a número y verificar si es válido
  amount = Number(amount);
  if (isNaN(amount) || amount <= 0) {
    alert("Monto inválido");
    return;
  }
  alert(
    `Gracias ${nombre} por la colaboracion de $${amount} para apoyar nuestra causa `
  );
};

// funcion adoptar
const adopt = () => {
  let eleccion = prompt(
    `${nombre} ¿quien queres que sea tu nuevo compañero de vida? ¿perros o gatos ?`
  );
  // si coloca cancelar muestra este mensaje
  if (eleccion === null) {
    alert("¡Hasta luego!");
    return;
  } else if (eleccion === "perros") {
    adoptDogs();
    return;
  } else if (eleccion === "gatos") {
    adoptCats();
    return;
  }
};
// funcion perros
const adoptDogs = () => {
  let dogSelecction = prompt(
    "Ingrese el nombre del perro a adoptar: Luna, Lolla, Zeus o Rocky"
  ).toLowerCase();
  let mensaje;
  let correo;

  switch (dogSelecction) {
    case "luna":
      correo = prompt(
        "Usted eligio a Luna, le enviaremos un formulario a su correo para completar, gracias "
      );
      if (mensaje != null) {
        alert(
          `${nombre} pronto recibiras un correo con novedades sobre Luna, gracias`
        );
      }
      break;
    case "lolla":
      mensaje = prompt(
        "Usted eligio a Lolla, le enviaremos un formulario a su correo para completar, gracias "
      );
      if (mensaje != null) {
        alert(
          `${nombre} pronto recibiras un correo con novedades sobre Luna, gracias`
        );
        break;
      }
    case "zeus":
      mensaje = prompt(
        "Usted eligio a Zeus, le enviaremos un formulario a su correo para completar, gracias "
      );
      if (mensaje != null) {
        alert(
          `${nombre} pronto recibiras un correo con novedades sobre Luna, gracias`
        );
        break;
      }
    case "rocky":
      mensaje = prompt(
        "Usted eligio a Rocky, le enviaremos un formulario a su correo para completar, gracias "
      );
      if (mensaje != null) {
        alert(
          `${nombre} pronto recibiras un correo con novedades sobre Luna, gracias`
        );
        break;
      }
    default:
      mensaje = "El animal que ha ingresado no está disponible para adopción";
  }

  // alert(mensaje);
};

// funcion gatos
const adoptCats = () => {
  let catSelecction = prompt(
    "Ingrese el nombre del gato a adoptar: Clara, Henry, Simba, Misha."
  ).toLowerCase();
  let mensaje;
  let correo;

  switch (catSelecction) {
    case "clara":
      mensaje =
        "Usted eligio a Clara, le enviaremos un formulario a su correo para completar, ¿nos facilias el correo?";
      break;
    case "henry":
      mensaje =
        "Usted eligio a Henry, le enviaremos un formulario a su correo para completar, ¿nos facilias el correo?";
      break;
    case "simba":
      mensaje =
        "Usted eligio a Simba, le enviaremos un formulario a su correo para completar, ¿nos facilias el correo?";
      break;
    case "misha":
      mensaje =
        "Usted eligio a Misha, le enviaremos un formulario a su correo para completar, ¿nos facilias el correo?";
      break;
    default:
      mensaje = "El animal que ha ingresado no está disponible para adopción";
  }

  alert(mensaje);
  correo = prompt(`su correo es :`);
  if (correo != null) {
    alert(`${nombre} pronto nos comunicaremos a su correo, gracias.`);
  }
};

// Llamado a funciones
select();
