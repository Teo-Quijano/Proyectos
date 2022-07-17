// Dia 5 Reto 3

function crearVector(n, m) {
  let array = [];
  for (let i = n; i <= m; i++) {
    array.push(Math.round(Math.random()));
    console.log(array);
  }
}
crearVector(10, 5);
crearVector(6, 12);

function sumaVector(v1, v2) {
  if (v1.length === v2.length);
    let resultado = 0;
    for (var i = 0; i < v1.length; i++) {
      resultado= v1[i] + v2[i];

      console.log(resultado);
    }
  }


let t1 = [1, 2, 3, 4, 5, 20, 30];
let t2 = [6, 7, 8, 9, 10, 50, 60];
sumaVector(t1, t2);

function productoNumeroVector(v, n) {

  resultado = v.map(v => v * n);
  console.log(resultado)
}

let v = [2, 6, 3, 4, 7, 5];
let n = 2;
productoNumeroVector(v, n);

function restaVector(v1, v2) {
  if (v1.length === v2.length);
  {
    let result = v1.filter((el) => !v2.includes(el));
    console.log(result);
  }
}

let t3 = [1, 2, 3, 4, 5, 20, 30];
let t4 = [2, 5, 1, 9, 30, 20];
restaVector(t3, t4);

function productoVector(v1, v2) {
  if (v1.length === v2.length);
  {
    let result = 0;
    for (var i = 0; i < v1.length; i++) {
      result = v1[i] * v2[i];

      console.log(result);
    }
  }
}

let t5 = [1, 2, 3];
let t6 = [2, 2, 2];
productoVector(t5, t6);
