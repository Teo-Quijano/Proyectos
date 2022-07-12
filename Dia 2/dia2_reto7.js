// Dia 2 Reto 7

let direccion = {
  calle: "Tacoronte",
  numero: 10,
  piso: 1,
  puerta: "Izquierda",
};
console.log(direccion);

let direccion2 = direccion;

let direccion3 = { ...direccion };

direccion.ciudad = "San Cristobal de la Laguna";
console.log(direccion);
console.log(direccion2);
console.log(direccion3);

let nombres = ["Ami", "Lucas", "Emilio", "Rocio", "Claudia"];

let nombres2 = nombres;
let nombres3 = { ...nombres };
nombres.push("Olivia");
console.log(nombres);
console.log(nombres2);
console.log(nombres3);

direccion3.pais = "España";

let direccionConcatenada = { ...direccion, direccion3 };
console.log(direccionConcatenada);

let nombresConcatenados = { ...nombres, nombres3 };
console.log(nombresConcatenados);
