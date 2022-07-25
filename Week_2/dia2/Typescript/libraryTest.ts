import { Library } from "./library";
import { Book } from "./book";

let myBook = new Book(
  "El Principito",
  235,
  "473838283933",
  "Antoine de Saint-Exupery",
  "Molino"
);

let myBook1 = new Book(
  "Juego de Tronos",
  822,
  "312375298392",
  "George R.R. Martin",
  "Planeta"
);

let myBook2 = new Book(
  "El Diario de Greg",
  73,
  "523832845728",
  "Jeff Kinney",
  "Anaya"
);

let mybooks = [myBook, myBook1, myBook2];

let miLibrary = new Library(mybooks, "Punta del Hidalgo", "Teo Quijano");

miLibrary.setaddress("Calle Tacoronte 10, 82, 75");
console.log(miLibrary.getaddress());

miLibrary.setmanager("Emilio Quijano");
console.log(miLibrary.getmanager());

console.log(miLibrary.getNumberOfBooks());
console.log(miLibrary.findByAuthor("Jeff"));
