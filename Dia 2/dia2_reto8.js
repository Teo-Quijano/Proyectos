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
        { nombreabupaterno: "Teodoro", apellidosabupaterno: ["Quijano", "Arbizu"], edadabupaterno: 90 },
        { nombreabupaterna: "Julia", apellidosabupaterna: ["San Miguel", "Lopez"], edadabumaterna: 95 },
      ],
    },

    {
      nombreMadre: "Rita",
      apellidosMadre: ["Fuenmayor", "Reyes"],
      edadMadre: 77,
      padresMadre: [
        { nombreabumaterno: "Juan", apellidosabupaterno: ["Fuenmayor", "Matos"], edadabumaterno: 92 },
        { nombreabumaterna: "Isabel", apellidosabumaterna: ["Reyes", "Tejera"], edadabumaterna: 88 },
      ],
    },
  ],
};
        console.log(persona);
