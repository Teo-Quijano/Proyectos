// Fichero Libreria

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

module.exports = {suma, resta, producto, division};
