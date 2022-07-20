// POO Dia 1 Reto 7

class Person {
    constructor(nombre, apellido, telefono) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.telefono = telefono;
    }}
  
  class Contacts {
      constructor() {
        this.contacts = [Person, Person, Person];
      }}
  
  
  let usuario1 = new Person("Teo", "Quijano", 555321987);
  console.log(usuario1);
  let usuario2 = new Person("Lucas", "Quijano", 555234678);
  console.log(usuario2);
  let usuario3 = new Person("Emilio", "Quijano", 555456159);
  console.log(usuario3);
  let agenda = new Contacts(usuario1, usuario2, usuario3);
  console.log(agenda);
  
