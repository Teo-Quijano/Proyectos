// Retos de Repaso Dia 5 - Pagina 1

let numeroUno = 14
let numeroDos = 73

let producto = numeroUno*numeroDos
console.log(producto);

let textoUno = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mattis vehicula consequat. Proin dapibus nuncquam, nec dictum erat feugiat vitae";

console.log(textoUno.length);

console.log(textoUno.replace(/\s/g,''));

if (producto > 30 && textoUno.includes("amet"))
{
    console.log(true)
}
else {
    console.log(false)
}