
import {Person} from "./dia8_reto1";

class Contacts {

    public people:Person[];

    constructor() {
        this.people = [];
    }

    public printAgenda():void{
        for(let i = 0; i < this.people.length; i++){
            console.log(this.people[i]);
        }
    }}

let contactos = new Contacts();

let persona1 = new Person("Teo", 49, "Finca España");
let persona2 = new Person("Lucas", 10, "Finca España");
let persona3 = new Person("Emilio", 7, "Finca España");

contactos.people.push(persona1, persona2, persona3);
contactos.printAgenda();

