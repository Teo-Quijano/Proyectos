// Dia 3 Reto 5

let persona = {
    nombre: "Teodoro Jose",
    apellidos: ["Quijano", "Fuenmayor"],
    edad: 49,
    colorpelo: "Negro",
    dinero: 1000,
    coches: [{marca: "Volvo", asientos: 5, electrico: false}],
    padres: [
      {

        nombrePadre: "Jose",
        apellidosPadre: ["Quijano", "San Miguel"],
        edadPadre: 78,
        colorpelo1: "Blanco",
        dinero1: 1000,
        coches1: [{marca: "Seat", asientos: 5, electrico: false}],
        padresPadre: [
          {
            nombreabupaterno: "Teodoro",
            apellidosabupaterno: ["Quijano", "Arbizu"],
            edadabupaterno: 90,
            colorpelo2: "Gris",
            dinero2: 5000,
            coches2: [{marca: "KIA", asientos: 6, electrico: false}],
          },
          {
            nombreabupaterna: "Julia",
            apellidosabupaterna: ["San Miguel", "Lopez"],
            edadabupaterna: 95,
            colorpelo3: "Blanco",
            dinero3: 2500,
            coches3: [{marca: "Opel", asientos: 5, electrico: true}],
          },
        ],
      },
  
      {
        nombreMadre: "Rita",
        apellidosMadre: ["Fuenmayor", "Reyes"],
        edadMadre: 77,
        colorpelo4: "Blanco",
        dinero4: 4500,
        coches4: [{marca: "Mazda", asientos: 5, electrico: false}],
        padresMadre: [
          {
            nombreabumaterno: "Juan",
            apellidosabumaterno: ["Fuenmayor", "Matos"],
            edadabumaterno: 92,
            colorpelo5: "Negro",
            dinero5: 5000,
            coches5: [{marca: "Fiat", asientos: 4, electrico: false}],
          },
          {
            nombreabumaterna: "Isabel",
            apellidosabumaterna: ["Reyes", "Tejera"],
            edadabumaterna: 88,
            colorpelo6: "Castano",
            dinero6: 1500,
            coches6: [{marca: "Renault", asientos: 5, electrico: true}],
          },
        ],
      },
    ],
  };


  if (persona.padres[1].padresMadre[1].colorpelo6 != "Castano" && persona.padres[0].padresPadre[0].coches2.lenght == 1);{
    console.log(persona.colorpelo = "Verde")
  }

  let ahorros = persona.padres[0].dinero1 + persona.padres[1].dinero4 + persona.padres[0].padresPadre[0].dinero2 + persona.padres[1].padresMadre[1].dinero6
console.log(ahorros);

if (ahorros > 100000){
    persona.coches.push({marca: "Ferrari", asientos: 2, electrico: false})
}
else if (ahorros >= 35000 && ahorros <= 100000);{
persona.coches.push({marca: "Tesla", asientos: 4, electrico: true})
}
if (ahorros < 35000);{
        persona.coches.push({marca: "Peugeot", asientos: 5, electrico: false})
} 
console.log(persona.coches);