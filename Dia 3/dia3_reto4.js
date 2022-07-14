// Dia 3 Reto 4

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

if (personas[0].colorpelo == "Castano") {
  console.log(personas[0].nombre);
}
if (personas[1].colorpelo == "Castano") {
  console.log(personas[1].nombre);
}
if (personas[2].colorpelo == "Castano") {
  console.log(personas[2].nombre);
}
if (personas[3].colorpelo == "Castano") {
  console.log(personas[3].nombre);
}

if (personas[0].anionacimiento > "1992") {
  console.log(personas[0].nombre);
}
if (personas[1].anionacimiento > "1992") {
  console.log(personas[1].nombre);
}
if (personas[2].anionacimiento > "1992") {
  console.log(personas[2].nombre);
}
if (personas[3].anionacimiento > "1992") {
  console.log(personas[2].nombre);
}

if (
  personas[0].colorpelo == "Negro" ||
  personas[0].anioexpedicion + "10" < "2022"
) {
  console.log(personas[0].nombre);
}
if (
  personas[1].colorpelo == "Negro" ||
  personas[1].anioexpedicion + "10" < "2022"
) {
  console.log(personas[1].nombre);
}
if (
  personas[2].colorpelo == "Negro" ||
  personas[2].anioexpedicion + "10" < "2022"
) {
  console.log(personas[2].nombre);
}
if (
  personas[3].colorpelo == "Negro" ||
  personas[3].anioexpedicion + "10" < "2022"
) {
  console.log(personas[3].nombre);
}

if (
  personas[0].anionacimiento > "2004" ||
  personas[0].aficiones == "Comer" ||
  personas[0].aficiones == "Dormir"
) {
  console.log(personas[0].nombre);
}
if (
  personas[1].anionacimiento > "2004" ||
  personas[1].aficiones == "Comer" ||
  personas[1].aficiones == "Dormir"
) {
  console.log(personas[1].nombre);
}
if (
  personas[2].anionacimiento > "2004" ||
  personas[2].aficiones == "Comer" ||
  personas[2].aficiones == "Dormir"
) {
  console.log(personas[2].nombre);
}
if (
  personas[3].anionacimiento > "2004" ||
  personas[3].aficiones == "Comer" ||
  personas[3].aficiones == "Dormir"
) {
  console.log(personas[3].nombre);
}
