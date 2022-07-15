// Dia 4 Reto 2

let emilio = {
  nombre: "Emilio",
  apellido: "Quijano",
  anionacimiento: "2015",
  aficiones: ["Jugar", "Patinar", "Leer", "Nadar", "Tablet"],
  dni: { anioexpedicion: "2021", lugarnacimiento: "Lima" },
  colorpelo: "Negro",
};

let lucas = {
  nombre: "Lucas",
  apellido: "Quijano",
  anionacimiento: "2011",
  aficiones: ["Jugar", "Patinar", "Leer", "Nadar", "Nintendo"],
  dni: { anioexpedicion: "2020", lugarnacimiento: "Lima" },
  colorpelo: "Castano",
};

let ami = {
  nombre: "Ami",
  apellido: "Dulude",
  anionacimiento: "1980",
  aficiones: ["Bailar", "Playa", "Leer", "Comer", "Pintar"],
  dni: { anioexpedicion: "2019", lugarnacimiento: "Lima" },
  colorpelo: "Negro",
};

let teo = {
  nombre: "Teo",
  apellido: "Quijano",
  anionacimiento: "1973",
  aficiones: ["Netflix", "Dormir", "Leer", "Comer", "Cine"],
  dni: { anioexpedicion: "2018", lugarnacimiento: "Caracas" },
  colorpelo: "Negro",
};

let personas = [emilio, lucas, ami, teo];

for (let i in personas) {
  console.log(personas[i]);
}

let largo1 = personas.length;
for (let i = 0; i < largo1; i++) {
  console.log(personas[i]);
}

let largo2 = personas.length;
let i = 0;
while (i < largo2) {
  console.log(personas[i]);
  i++;
}

for (let valores of personas) {
  console.log(valores);
}
