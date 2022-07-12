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
        this.dob = new Date (2015, 2, 2);
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

let usuario1 = new Person(80, 1.78);
console.log(usuario1);
let IMC = usuario1.calcularImc();
console.log(IMC);
let fechaActual = new Date();
console.log(fechaActual);
usuario1.printHobbies();
let day = fechaActual.getDate();
let month = fechaActual.getMonth();
let year = fechaActual.getFullYear();
fechaActual = year+"-"+(month+1)+"-"+day
console.log(fechaActual);
let edadEs = fechaActual - Person.dob;
console.log(edadEs);








