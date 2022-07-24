// Dia 8 Reto 4

class Book {

    private title: string;
    private nPages: number;
    private isbn: string;
    private author: string;
    private editorial: string;
    static author: string;
    constructor(title:string, nPages:number, isbn:string, author:string, editorial:string){

      this.title = title;
      this.nPages = nPages;
      this.isbn = isbn;
      this.author = author;
      this.editorial = editorial
    }

public getTitle(title:string){
  return this.title; 
}
public getnPages(nPages:number){
  return this.nPages;
}
public getisbn(isbn:string){
  return this.isbn; 
}
public getauthor(author:string){
  return this.author; 
}
public geteditorial(editorial:string){
 return this.editorial; 
}
public setTitle(title:string){
  this.title = title; 
}
public setnPages(nPages:number){
  this.nPages = nPages; 
}
public setisbn(isbn:string){
  this.isbn = isbn; 
}
public setauthor(author:string){
  this.author = author; 
}
public seteditorial(editorial:string){
  this.editorial = editorial; 
}

public toString():string 
{
  return "Title - " + this.title + "\n" +  "Pages - " + this.nPages + "\n" + "ISBN - " + this.isbn + "\n" + "Author - " + this.author + "\n" + "Editorial - " + this.editorial
}
public showBook(){
  console.log(this.toString());
}
}
let book1 = new Book("El Principito", 235, "2344433-BC23333", "Antoine Saint-Exupery", "Planeta")
console.log(book1.toString());

export {Book}
