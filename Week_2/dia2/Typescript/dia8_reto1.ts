// Dia 8 Reto 1

class Person {

    public name: string;
    public age: number;
    private address: string;

    constructor(name:string, age:number, address:string){

        this.name = name;
        this.age = age;
        this.address = address;
    }



        public setAddress(newAddress:string)
        {
            this.address = newAddress;
            console.log(newAddress);
        }
    
        getAddress()
        {
        return this.address;
        }
    
        printName():string 
        {
        return this.name;
        }
       
        yearOfBirth()
    {
        let year: number = new Date().getFullYear();
        return year - this.age;
    }

}
    let persona1 = new Person("Teo", 49, "Finca España");
    console.log(persona1.printName());
    console.log(persona1.yearOfBirth());
    console.log(persona1.getAddress());
    console.log(persona1.setAddress("Punta del Hidalgo"));
    console.log(persona1.getAddress());

   export {Person}

