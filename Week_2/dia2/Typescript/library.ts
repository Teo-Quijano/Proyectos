// Dia 8 Reto 8

import {Book} from "./book";

class Library {
  private books: Book[];
  private address: string;
  private manager: string;

  constructor(books: Book[], address: string, manager: string) {
    this.books = books;
    this.address = address;
    this.manager = manager;
  }
  public getaddress(): string {
    return this.address;
  }

  public getmanager(): string {
    return this.manager;
  }

  public toString() {
    let salida: string = "";

    for (let i = 0; i < this.books.length; i++) {
      salida += this.books[i].toString + "\n";
    }

    return salida;
  }

  public setaddress(address: string): void {
    this.address = address;
  }

  public setmanager(manager: string): void {
    this.manager = manager;
  }

  public getNumberOfBooks(): number {
    return this.books.length;
  }

  public findByAuthor(author: string): Book[] {
    return this.books.filter((book) => Book.author === author);
  }
}

export {Library};