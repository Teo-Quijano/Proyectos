// POO Dia 1 Retos del 1 al 5

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
  calcularImc() {
    return this.peso / (this.altura * this.altura);
  }

  calcularEdad() {
    return currentTime.getFullYear() - this.dob;
  }

  printHobbies() {
    console.log(this.hobbies);
  }

  printAll() {
    console.log(this.hobbies);
  }

  MostrarAtributos() {
    console.log(`
             Nombre - ${this.nombre}
             Apellido - ${this.apellido}
             Altura - ${this.altura}
             Peso - ${this.peso}
             Edad - ${this.edad}
             Dob - ${this.dob}
             Pelo - ${this.pelo}
             Ojos - ${this.ojos}
             Idioma - ${this.idioma}
             Hobbies - ${this.hobbies}`);
  }
}

let currentTime = new Date();
let year = currentTime.getFullYear();

let usuario1 = new Person(80, 1.78);
console.log(usuario1);

let IMC = usuario1.calcularImc();
console.log(IMC);

let edad = usuario1.calcularEdad();
console.log(edad);

usuario1.printHobbies();

let usuario2 = new Person(25, 1.38);
console.log(usuario2);

let IMC1 = usuario2.calcularImc();
console.log(IMC1);

let instancia = new Person(25, 1.3);
instancia.MostrarAtributos();
