// Dia 5 Reto 4

function sumaVector(v1, v2) {
  if (v1.length === v2.length);
  v1.forEach((v1) => console.log() + v2.forEach((v2) => console.log()));
  console.log((v1 += v2));
}

let t1 = [1, 2, 3, 4, 5, 20, 30];
let t2 = [6, 7, 8, 9, 10, 50, 60];
sumaVector(t1, t2);

function sumaVectorMap(v, n) {
  resultado = v.map((v) => v + n);
  console.log(resultado);
}

let v = [2, 6, 3, 4];
let n = [2, 4, 6, 8];
sumaVectorMap(v, n);

function filtrarPares(v) {
  v = v.filter((e) => e % 2 === 0);

  console.log(v);
}

let t8 = [1, 3, 5, 7, 9, 2, 4, 6, 8];
filtrarPares(t8);


function sumatorio(v) {
  let resultado = v.reduce((total, item) => total + item);

  console.log(resultado);
}

let t9 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
sumatorio(t9);