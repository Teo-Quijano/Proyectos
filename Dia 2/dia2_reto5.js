// Dia 2 Reto 5

let dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];
let colores = ["Azul", "Verde", "Rojo", "Amarillo", "Blanco"];
let nombres = ["Ami", "Lucas", "Emilio", "Rocio", "Claudia"];
let matriz = [dias, colores, nombres];

console.log(matriz[2]);
console.log(matriz[2][4]);
console.log(matriz[2][4][(4, 0)]);
console.log((matriz[2] = [1, 2, 3, 4, 5]));
console.log(matriz[2]);
console.log((matriz[1][3] = true));
console.log(matriz[1][3]);
console.log(matriz[0].push("Sabado"));
console.log(matriz[0]);
console.log(dias.shift(0));
console.log(nombres.pop(4));
console.log(matriz[2].sort());
