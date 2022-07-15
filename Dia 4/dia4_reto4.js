// Dia 4 Reto 3

let factorial = 10;
let valor = 1;
for (let i = factorial ; i > 0 ; i--) {

    valor*= i;
}
console.log(valor);

let result= 0;
let factorial2= 0;

while (factorial > 1) { 
    factorial--;    
    resultado = valor*factorial;  
}
console.log(resultado); 

let numeros= [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
let i = 0;

while (i<numeros.length) {

    if ( numeros[i]%2 == 0){

        console.log(numeros[i]);
    }
    i++
    
}

let total = 0;

for (let sum = 0; sum <= 100; sum++){

    total = total + sum
}

console.log("Monto Total: " + total);

let nombres = ["Pepe", "Rita", "Teodoro", "Julia"];
let pepe = "";
let p = 0;

while (p < 0) {

    pepe += nombres[p] + "\n";
    
    p++;

}

console.log(p);


let valor1 = [];

for (let i = 0; i <= 100; i++){

    valor1.push(Math.round(Math.random()*20))
}

console.log(valor1);

let valor2 = [];

for (let i = 0; i <= 100; i++){

    valor1.push(Math.round(Math.random()*20))
}

console.log(valor2);

let totalValor= valor1 + valor2;

console.log(totalValor);
