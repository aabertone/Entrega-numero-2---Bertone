// funcion para salir si el usuario cancela antes de empezar
function salirdeljuego() {
    alert("Operacion cancelada, gracias por participar");
    console.log("El usuario ha cancelado la operacion");
    return;
}
// solicitud de datos jugador 1 devuelve una matriz con datos
function datosjugador1() {
let nombre1 = prompt("Jugador 1 ingrese su nombre");
if (nombre1 === null) {
  salirdeljuego();
  return null;
}
while (!nombre1 || !isNaN(nombre1)) {
  alert("Debe ingresar un nombre");
  nombre1 = prompt("Jugador 1 ingrese su nombre");
  if (nombre1 === null) {
    salirdeljuego();
    return null;
  }
}
let edad1 = prompt("Bienvenido/a " + nombre1 + " ingrese su edad");
if (edad1 === null) {
  salirdeljuego();
  return null;
}
while (isNaN(edad1) || edad1 < 18) {
  alert("Debes ser mayor de edad para jugar.");
  edad1 = prompt(nombre1 + " ingrese su edad");
  if (edad1 === null) {
    salirdeljuego();
    return null;
  }
}
let apuesta1 = prompt(nombre1 + " ingrese el monto de su apuesta");
if (apuesta1 === null) {
  salirdeljuego();
  return null;
}
while (isNaN(apuesta1) || apuesta1 < 10 || apuesta1 > 100) {
  alert("La apuesta debe ser un numero entre 10$ y 100$");
  apuesta1 = prompt(nombre1 + " ingrese el monto de su apuesta");
  if (apuesta1 === null) {
    salirdeljuego();
    return null;
  }
}
let numero1 = prompt(nombre1 + " ingrese su numero a adivinar recuerde pedirle a su compañero que no mire");
if (numero1 === null) {
  salirdeljuego();
  return null;
}
while (isNaN(numero1)) {
  alert("Debe ingresar un numero");
  numero1 = prompt(nombre1 + " ingrese su numero a adivinar recuerde pedirle a su compañero que no mire");
  if (numero1 === null) {
    salirdeljuego();
    return null;
  }
}
console.log("Datos jugador 1: ", nombre1, apuesta1, numero1);
return [nombre1 , apuesta1 , numero1 ];
}

// solicitud de datos jugador 2 devuelve una matriz con datos
function datosjugador2() {   
let nombre2 = prompt("Jugador 2 ingrese su nombre");
if (nombre2 === null) {
  salirdeljuego();
  return null;
}
while (!nombre2 || !isNaN(nombre2)) {
  alert("Debe ingresar un nombre");
  nombre2 = prompt("Jugador 2 ingrese su nombre");
  if (nombre2 === null) {
    salirdeljuego();
    return null;
  }
}
let edad2 = prompt("Bienvenido/a " + nombre2 + " ingrese su edad");
if (edad2 === null) {
  salirdeljuego();
  return null;
}
while (isNaN(edad2) || edad2 < 18) {
  alert("Debes ser mayor de edad para jugar.");
  edad2 = prompt(nombre2 + " ingrese su edad");
  if (edad2 === null) {
    salirdeljuego();
    return null;
  }
}
let apuesta2 = prompt(nombre2 + " ingrese el monto de su apuesta");
if (apuesta2 === null) {
  salirdeljuego();
  return null;
}
while (isNaN(apuesta2) || apuesta2 < 10 || apuesta2 > 100) {
  alert("La apuesta debe ser un numero entre 10$ y 100$");
  apuesta2 = prompt(nombre2 + " ingrese el monto de su apuesta");
  if (apuesta2 === null) {
    salirdeljuego();
    return null;
  }
}
let numero2 = prompt(nombre2 + " ingrese su numero a adivinar recuerde pedirle a su compañero que no mire");
if (numero2 === null) {
  salirdeljuego();
  return null;
}
while (isNaN(numero2)) {
  alert("Debe ingresar un numero");
  numero2 = prompt(nombre2 + " ingrese su numero a adivinar recuerde pedirle a su compañero que no mire");
  if (numero2 === null) {
    salirdeljuego();
    return null;
  }
}
console.log("Datos jugador 2: ", nombre2, apuesta2, numero2);
return [nombre2 , apuesta2 , numero2 ];
}

// funcion principal del juego, evalua, descuenta y loopea hasta que alguien gane o pierda o se retire.
function juego() {
  console.log("Juego iniciado");
    alert("Bienvenido al juego\n\nEn este juego jugarán 2 jugadores, cada jugador deberá pagar para poder jugar un monto entre 10$ y 100$\n\nReglas del juego: Debes ser mayor de edad para poder jugar, cada jugador ingresará 1 numero que el otro jugador deberá adivinar, si el jugador adivina el numero de su compañero gana el juego y se le devolverá el dinero que le quede mas el dinero de su contricante, si no lo adivina pierde su turno\nPor cada turno que el jugador no adivine perderá 10$ de su apuesta inicial, ten en cuenta que si pierdes muchas veces tu premio se irá reduciendo\nEl juego termina cuando 1 jugador adivina o cuando algun jugador se queda sin dinero\n\nTe recordamos que no hay reembolsos, una vez esten registrados ambos jugadores y empice el juego si deseas retirarte se considera que pierdes y le daremos el dinero a tu contrincante\n\nSuerte a ambos jugadores");
  let usuario1 = datosjugador1();
  if (usuario1 === null) {
    return;
  } 
  let usuario2 = datosjugador2();
  if (usuario2 === null) {
    return;
  } 
  while (usuario1[1] > 0 && usuario2[1] > 0) {
  let adivinanza1 = prompt(usuario1[0] + " adivine el valor de su compañero");
  if (adivinanza1 === null) {
    alert(usuario1[0] + " has decidido retirarte, " + usuario2[0] + " aqui tienes tus $" + (Number(usuario1[1]) + Number(usuario2[1])));
    console.log(usuario1[0] + " se ha retirado del juego.");
    console.log("Juego terminado.");
    return;
  }
  if (adivinanza1 == usuario2[2]) {
    alert("Felicidades " + usuario1[0] + " has adivinado el numero de tu compañero y ganado $" + (Number(usuario1[1]) + Number(usuario2[1])));
    console.log(usuario1[0] + " ha ganado el juego.");
    break;
  } else {
    usuario1[1] = usuario1[1] - 10;
    alert("Lo siento " + usuario1[0] + " no has adivinado el numero de tu compañero, perdiste $10 te quedan $" + usuario1[1]);
    console.log(usuario1[0] + " le quedan $" + usuario1[1]);
  }
  if (usuario1[1] <= 0) {
    break;
  }
  let adivinanza2 = prompt(usuario2[0] + " adivine el valor de su compañero");
  if (adivinanza2 === null) {
    alert(usuario2[0] + " has decidido retirarte, " + usuario1[0] + " aqui tienes tus $" + (Number(usuario1[1]) + Number(usuario2[1])));
    console.log(usuario2[0] + " se ha retirado del juego.");
    console.log("Juego terminado.");
    return;
  }
  if (adivinanza2 == usuario1[2]) {
    alert("Felicidades " + usuario2[0] + " has adivinado el numero de tu compañero y ganado $" + (Number(usuario1[1]) + Number(usuario2[1])));
    console.log(usuario2[0] + " ha ganado el juego.");
    break;
  } else {
    usuario2[1] = usuario2[1] - 10;
    alert("Lo siento " + usuario2[0] + " no has adivinado el numero de tu compañero, perdiste $10 te quedan $" + usuario2[1]);
    console.log(usuario2[0] + " le quedan $" + usuario2[1]);
  }
}
if (usuario1[1] <= 0) {
  alert("Lo siento " + usuario1[0] + " te has quedado sin dinero, perdiste el juego. " + usuario2[0] + " aqui tienes tus $" + usuario2[1]);
}else if (usuario2[1] <= 0) {
  alert("Lo siento " + usuario2[0] + " te has quedado sin dinero, perdiste el juego. " + usuario1[0] + " aqui tienes tus $" + usuario1[1]);
}else {
  alert("El juego ha terminado.");
}
console.log("Juego terminado.");
return;
}







