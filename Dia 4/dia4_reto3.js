// Dia 4 Reto 3

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
    anionacimiento: "1978",
    aficiones: ["Netflix", "Dormir", "Leer", "Comer", "Cine"],
    dni: { anioexpedicion: "2018", lugarnacimiento: "Caracas" },
    colorpelo: "Negro",
  };
  
  let personas = [emilio, lucas, ami, teo];
  
  for (i = 0; i <= 3; i++)
  {
      if (personas[i].anionacimiento >= 1978 && personas[i].anionacimiento <= 2000) {
          console.log("Tu edad esta entre 40 y 20 Anios");
      }
      else
      {
        console.log("Tu edad es menor de 20 Anios");
      }
  }

  
 
  let array = personas.length;
  let i = 0;
  while (i < array) 
  {
      if (personas[i].anionacimiento >= 1978 && personas[i].anionacimiento <= 2000) {
          console.log("Tu edad esta entre 40 y 20 Anios");
      }
      else
      {
          console.log("Tu edad es menor de 20 Anios");
        i++
} 
}

for (let valores of personas) 
{
      if (personas[i].anionacimiento > 1978 && personas[i].anionacimiento < 2000) {
          console.log("Tu edad esta entre 40 y 20 Anios");
      }
      else
      {
        console.log("Tu edad es menor de 20 Anios");
}
}

for (i = 0; i <= personas.length; i++); {

if (personas[0].aficiones.push("Jugar a la Play"));
if (personas[1].aficiones.push("Jugar a la Play"));
if (personas[2].aficiones.push("Jugar a la Play"));
if (personas[3].aficiones.push("Jugar a la Play"));

}
console.log(personas);