// Retos de Repaso Dia 5 - Pagina 2

let itemValor = 100
let origen = "España"

if (itemValor >= 2000){
    precioConIva = itemValor*1.16
}

if (itemValor < 2000){
    precioConIva = itemValor*1.10

if (origen !== "España")
    precioConIva = precioConIva*1.10
}

console.log(precioConIva);