console.log("Hola que tal");



class Person
{ 
    constructor(peso, altura)
    {
        this.nombre = "Emilio"
        this.apellido = "Quijano"
        this.altura = altura;
        this.peso = peso;
        this.edad = 7
        this.dob = "2015-02-02"
        this.pelo = "Negro"
        this.ojos = "Castaños"
        this.idioma = "Español"
        this.hobbies = ["Jugar", "Patinar", "Leer", "Nadar", "Pintar"]
    }
        calcularImc()
        {
            return (this.peso / (this.altura * this.altura))
        }
        
        calcularEdad()
        {
            return (date.getDate() - this.dob)
            
        }

        printHobbies()
        {
            console.log(this.hobbies);
        }

}

let usuario1 = new Person(80, 178);
console.log(usuario1);
let IMC = usuario1.calcularImc();
console.log(IMC);
let fechaActual = new Date();
console.log(fechaActual);
usuario1.printHobbies();
let day = fechaActual.getDate();
console.log(day);
let month = fechaActual.getMonth();
console.log(month+1);
let year = fechaActual.getFullYear();
console.log(year);
fechaActual = day+"-"+month+"-"+year
console.log(fechaActual);







