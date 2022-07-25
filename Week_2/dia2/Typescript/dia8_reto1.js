// Dia 8 Reto 1

var Person = /** @class */ (function () {
    function Person(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    Person.prototype.setAddress = function (newAddress) {
        this.address = newAddress;
        console.log(newAddress);
    };
    Person.prototype.getAddress = function () {
        return this.address;
    };
    Person.prototype.printName = function () {
        return this.name;
    };
    Person.prototype.yearOfBirth = function () {
        var year = new Date().getFullYear();
        return year - this.age;
    };
    return Person;
}());

var persona1 = new Person("Teo", 49, "Finca España");
console.log(persona1.printName());
console.log(persona1.yearOfBirth());
console.log(persona1.getAddress());
console.log(persona1.setAddress("Punta del Hidalgo"));
console.log(persona1.getAddress());
