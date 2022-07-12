// Dia 2 Reto 3

let miMapa = new Map();

miMapa.set("numero", 1);
miMapa.set(1, 1);
miMapa.set("string", "Mi string");
miMapa.set(2, "Mi string");
miMapa.set(3, true);
miMapa.set("boolean", true);
miMapa.set("array", [1, 2, 3, 4]);
miMapa.set(4, ["Juan", "Pepe", "Ana", "Maria"]);

console.log(miMapa);
console.log(miMapa.size);
console.log(miMapa.get(3));
console.log(miMapa.delete("string", "Mi string"));
console.log(miMapa);
