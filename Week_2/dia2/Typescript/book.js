"use strict";
// Dia 8 Reto 4
exports.__esModule = true;
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(title, nPages, isbn, author, editorial) {
        this.title = title;
        this.nPages = nPages;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
    }
    Book.prototype.getTitle = function (title) {
        return this.title;
    };
    Book.prototype.getnPages = function (nPages) {
        return this.nPages;
    };
    Book.prototype.getisbn = function (isbn) {
        return this.isbn;
    };
    Book.prototype.getauthor = function (author) {
        return this.author;
    };
    Book.prototype.geteditorial = function (editorial) {
        return this.editorial;
    };
    Book.prototype.setTitle = function (title) {
        this.title = title;
    };
    Book.prototype.setnPages = function (nPages) {
        this.nPages = nPages;
    };
    Book.prototype.setisbn = function (isbn) {
        this.isbn = isbn;
    };
    Book.prototype.setauthor = function (author) {
        this.author = author;
    };
    Book.prototype.seteditorial = function (editorial) {
        this.editorial = editorial;
    };
    Book.prototype.toString = function () {
        return "Title - " + this.title + "\n" + "Pages - " + this.nPages + "\n" + "ISBN - " + this.isbn + "\n" + "Author - " + this.author + "\n" + "Editorial - " + this.editorial;
    };
    Book.prototype.showBook = function () {
        console.log(this.toString());
    };
    return Book;
}());
exports.Book = Book;
var book1 = new Book("El Principito", 235, "2344433-BC23333", "Antoine Saint-Exupery", "Planeta");
console.log(book1.toString());
