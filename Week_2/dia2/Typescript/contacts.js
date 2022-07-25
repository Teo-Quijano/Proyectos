"use strict";
exports.__esModule = true;
var dia8_reto1_1 = require("./dia8_reto1");
var Contacts = /** @class */ (function () {
    function Contacts() {
        this.people = [];
    }
    Contacts.prototype.printAgenda = function () {
        for (var i = 0; i < this.people.length; i++) {
            console.log(this.people[i]);
        }
    };
    return Contacts;
}());
var contactos = new Contacts();
var persona1 = new dia8_reto1_1.Person("Teo", 49, "Finca España");
var persona2 = new dia8_reto1_1.Person("Lucas", 10, "Finca España");
var persona3 = new dia8_reto1_1.Person("Emilio", 7, "Finca España");
contactos.people.push(persona1, persona2, persona3);
contactos.printAgenda();
