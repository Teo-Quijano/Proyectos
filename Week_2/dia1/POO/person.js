// Exportar Modulo

class Person {
  constructor(peso, altura) {
    this.nombre = "Emilio";
    this.apellido = "Quijano";
    this.altura = altura;
    this.peso = peso;
    this.edad = 7;
    this.dob = 2015;
    this.pelo = "Negro";
    this.ojos = "Castaños";
    this.idioma = "Español";
    this.hobbies = ["Jugar", "Patinar", "Leer", "Nadar", "Pintar"];
  }

getDatosPerson(){
    return `Nombre: ${this.nombre} - Apellido: ${this.apellido} - Edad: ${this.edad} - Hobbies: ${this.hobbies}`;
}
}

module.exports.Person = Person; 