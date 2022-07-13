// Dia 2 Reto 8

let persona = {
  nombre: "Teodoro Jose",
  apellidos: ["Quijano", "Fuenmayor"],
  edad: 49,
  padres: [
    {
      nombrePadre: "Jose",
      apellidosPadre: ["Quijano", "San Miguel"],
      edadPadre: 78,
      padresPadre: [
        {
          nombreabupaterno: "Teodoro",
          apellidosabupaterno: ["Quijano", "Arbizu"],
          edadabupaterno: 90,
        },
        {
          nombreabupaterna: "Julia",
          apellidosabupaterna: ["San Miguel", "Lopez"],
          edadabupaterna: 95,
        },
      ],
    },

    {
      nombreMadre: "Rita",
      apellidosMadre: ["Fuenmayor", "Reyes"],
      edadMadre: 77,
      padresMadre: [
        {
          nombreabumaterno: "Juan",
          apellidosabumaterno: ["Fuenmayor", "Matos"],
          edadabumaterno: 92,
        },
        {
          nombreabumaterna: "Isabel",
          apellidosabumaterna: ["Reyes", "Tejera"],
          edadabumaterna: 88,
        },
      ],
    },
  ],
};
console.log(persona);
console.log(persona.padres[1].padresMadre[0].nombreabumaterno);
console.log(persona.padres[0].padresPadre[1].apellidosabupaterna[1]);
console.log(persona.padres[1].edadMadre + persona.padres[0].padresPadre[0].edadabupaterno);
console.log((persona.padres[0].padresPadre[0].edadabupaterno = 95));
console.log((persona.padres[0].padresPadre[1].edadabupaterna = 90));
console.log(persona.padres[0].padresPadre[0].edadabupaterno);
console.log(persona.padres[0].padresPadre[1].edadabupaterna);
console.log(persona.padres[1].padresMadre[1].apellidosabumaterna.push(persona.padres[0].padresPadre[0].apellidosabupaterno[1]));
console.log(persona.padres[1].padresMadre[1].apellidosabumaterna);
console.log(persona.padres[1].apellidosMadre.shift());
console.log(persona.padres[1].apellidosMadre);
console.log(persona.padres[0].padresPadre[0].apellidosabupaterno[1].slice(-1));
