// Dia 8 Reto 6


class Book {

    private title: string;
    private nPages: number;
    private isbn: string;
    private author: string;
    private editorial: string;
    constructor(title:string, nPages:number, isbn:string, author:string, editorial:string){

      this.title = title;
      this.nPages = nPages;
      this.isbn = isbn;
      this.author = author;
      this.editorial = editorial
    }}

class Library {

    private books: Book[] = [];
    private address: string;
    private manager: string;

    constructor(books, address, manager){

        this.books = new Array<Book>();
        this.address = address;
        this.manager = manager;
    }};


let book1 = new Book("El Principito", 235, "2344433-BC23333", "Antoine Saint-Exupery", "Planeta")
let book2 = new Book("Juego de Tronos", 645, "23235235-BC232345", "George R.R.", "Castellana")
let book3 = new Book("El Diario de Greg", 123, "23435636-BC2323573", "Jeff Kinney", "Molino")
