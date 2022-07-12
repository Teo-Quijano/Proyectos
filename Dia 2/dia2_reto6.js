// Dia 2 Reto 6

let persona = {
  nombre: "Pepe",
  edad: 35,
  esVaron: true,
  aficiones: ["nadar", "patinar", "leer"],
  dni: { numero: 44556677, fechaDeExpedicion: "20 de Marzo de 2010" },
};

console.log(persona.nombre);
console.log(persona.aficiones);
console.log(persona.aficiones[2]);
console.log(persona.dni);
console.log(persona.dni.fechaDeExpedicion);
console.log((persona.dni.fechaDeExpedicion.replace = "14 de Marzo de 2010"));
console.log(persona.aficiones.splice(1, 1, "correr"));
console.log(persona.aficiones);
