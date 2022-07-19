// Exportar Modulo

class Person {
  constructor(nombre, apellido, edad, hobbies) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.hobbies = hobbies
  }

getDatosPerson(){
    return `Nombre: ${this.nombre} - Apellido: ${this.apellido} - Edad: ${this.edad} - Hobbies: ${this.hobbies}`;
}
}

module.exports = Person