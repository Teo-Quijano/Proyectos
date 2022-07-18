// Retos de Repaso Dia 5 - Pagina 3


let suma = 1
for (i = 0; i <= 100; i++){

   suma = suma + (i*i)

}
   console.log(suma)


let arrayUno = [2, 10, 45, 33, 22, 14];
let multiplo = 2;
let resultado = arrayUno.map(x => x * multiplo);
console.log(resultado)

let arrayDos = [2, 10, 45, 33, 22, 14];

for (let valor of arrayDos) {
  valor = valor * 2;
  console.log(valor);
  
  }

  function rango(inicio, fin) {
    return Array(fin - inicio + 1).fill().map((_, idx) => inicio + idx)
  }
  let salida = rango(1, 100);
  console.log(salida);
