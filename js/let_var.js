'use strict'

// Pruebas con Let y var
// Prueba con "var"
var numero = 40;
console.log(numero); // valor 40

if (true) {

    var numero = 50;
    console.log(numero); // valor 50
}

console.log(numero); // valor 50

// Pruba con "let"

var texto = 60;
console.log(texto); // valor 40

if (true) {

    let texto = 500;
    console.log(texto); // valor 50
}

console.log(texto); // valor 50