// Importar Modulo

let modulo = require("./contacts");


class Person {
    constructor(nombre, apellido, telefono) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.telefono = telefono;
    }}


    let usuario1 = new Person("Teo", "Quijano", 555321987);
   
    let usuario2 = new Person("Lucas", "Quijano", 555234678);

    let usuario3 = new Person("Emilio", "Quijano", 555456159);
   
    let pruebaContacts = new Contacts(usuario1, usuario2, usuario3);


  console.log(pruebaContacts)

