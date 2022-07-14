// Dia 3 Reto 3

let platosMenu1 = 1
let platosMenu2 = 3
let dj1 = false
let dj2 = true
let horasBarraLibre1 = 2
let horasBarraLibre2 = 1
let coctelBienvenida1 = true
let coctelBienvenida2 = false

if (platosMenu1 > 1, dj1 == true, horasBarraLibre1 > 1, coctelBienvenida1 == true && platosMenu2 > 2, dj2 == false, horasBarraLibre2 > 1, coctelBienvenida2 == false)
{
    console.log("Cualquiera de los dos Restaurantes sirve");
}
else
{
    console.log("Las variables de comparacion no son iguales para ambos Restaurantes");
}
