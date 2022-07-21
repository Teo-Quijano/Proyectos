// POO Dia 1 Reto 8

class Contacts {
    constructor() {
      this.contacts = [Person, Person, Person];
    }

      printPersons(){
          for (let i = 0; i < this.contacts.length; i++) {
              console.log(this.contacts[i]) 
          }
      }
  }

    module.exports = Contacts;