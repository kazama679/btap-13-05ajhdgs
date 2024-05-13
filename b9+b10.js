"use strict";
class Book {
    constructor(id, title, author, stock, status) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.stock = stock;
        this.status = status;
    }
    getId() {
        return this.id;
    }
    getTitle() {
        return this.title;
    }
    getAuthor() {
        return this.author;
    }
    getStock() {
        return this.stock;
    }
    getStatus() {
        return this.status;
    }
}
class Member {
    constructor(id, name, contact, books, status) {
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.books = books;
        this.status = status;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getContact() {
        return this.contact;
    }
    getBooks() {
        return this.books;
    }
    getStatus() {
        return this.status;
    }
    setStatus(status) {
        this.status = status;
    }
}
class LendedBook {
    constructor(memberId, bookId, dueDate) {
        this.memberId = memberId;
        this.bookId = bookId;
        this.dueDate = dueDate;
    }
}
class Library {
    constructor() {
        this.books = [];
        this.members = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    showBooks() {
        console.log("Sách trong thư viện:");
        this.books.forEach(book => {
            console.log(`ID: ${book.getId()}, Tiêu đề: ${book.getTitle()}, Tác gỉa: ${book.getAuthor()}, số lượng: ${book.getStock()}, trạng thái: ${book.getStatus()}`);
        });
    }
    registerMember(id, name, contact) {
        let newMember = new Member(id, name, contact, [], "Mở");
        this.members.push(newMember);
    }
    blockMember(id) {
        let member = this.members.find(member => member.getId() === id);
        if (member) {
            member.setStatus("Bị chặn");
        }
    }
    showMembers() {
        console.log("Các thành viên trong thư viện:");
        this.members.forEach(member => {
            console.log(`ID: ${member.getId()}, Tên: ${member.getName()}, Liên hệ: ${member.getContact()}, trạng thái: ${member.getStatus()}`);
        });
    }
}
// bài 9
const library = new Library();
const book1 = new Book(1, "sách abc", "tác giả abc", 6, "Có sẵn");
const book2 = new Book(2, "sách 123", "tác giả 123", 7, "Có sẵn");
const book3 = new Book(3, "sách xyz", "tác giả xyz", 9, "Có sẵn");
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.showBooks();
// bài 10
library.registerMember(1, "Quang", "qiqi@gmail.com");
library.registerMember(2, "Minh Anh", "menk@gmail.com");
library.blockMember(1);
library.showMembers();
