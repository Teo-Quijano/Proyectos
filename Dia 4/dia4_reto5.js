// Dia 4 Reto 5

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

for (i = 0; i < personas.length; i++);
{
  if ((personas.colorpelo = "Castano")) console.log(personas.nombre);
}

for (i = 0; i < personas.length; i++);
{
  if (personas.anionacimiento > "1992") console.log(personas.nombre);
}

for (i = 0; i < personas.length; i++);
{
  if (
    (personas.colorpelo =
      ("Negro" && personas.dni.anioexpedicion + "10" < "2022") ||
      personas.anionacimiento > "2004" ||
      personas.aficiones == "Comer" ||
      personas.aficiones == "Dormir")
  );
  console.log(personas.nombre);
}

