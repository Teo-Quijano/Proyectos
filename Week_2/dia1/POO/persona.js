// Exportar Modulo

class Person {
  constructor(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }

  getDatosPerson() {
    return `Nombre: ${this.nombre} - Apellido: ${this.apellido} - Edad: ${this.edad}`;
  }
}

module.exports = Person;