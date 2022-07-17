// Dia 5 Reto 1

function suma(a, b=0){

    let resultadoSuma = a + b
    console.log("El resutado es: " + resultadoSuma)
}

function producto(a, b=0){

    let resultadoProducto = a * b
    console.log("El resultado es: " + resultadoProducto)
}

function resta(a, b=0){

    let resultadoResta = a - b
    console.log("El resutado es: " + resultadoResta)
}

function division(a, b=0){

    let resultadoDivision = a / b
    console.log("El resultado es: " + resultadoDivision)
}

let operaciones = [suma, resta, producto, division]

let aleatoria = Math.floor(Math.random()*operaciones.length);
let seleccion = operaciones[aleatoria];

let operacion = seleccion
let a = 5
let b = 10

switch (operacion) {

case suma:
    let resultadoSuma = a + b
    console.log("El resutado es: " + resultadoSuma);
    break;
case resta:
    let resultadoResta = a - b
    console.log("El resutado es: " + resultadoResta);
    break;
case producto:
    let resultadoProducto = a * b
    console.log("El resultado es: " + resultadoProducto);
    break;
case division:
    let resultadoDivision = a / b
    console.log("El resultado es: " + resultadoDivision);
    break;

}