class Book {
    constructor(
        private id: number,
        private title: string,
        private author: string,
        private stock: number,
        private status: string
    ) {}
    getId(): number {
        return this.id;
    }
    getTitle(): string {
        return this.title;
    }
    getAuthor(): string {
        return this.author;
    }
    getStock(): number {
        return this.stock;
    }
    getStatus(): string {
        return this.status;
    }
}
class Member {
    constructor(
        private id: number,
        private name: string,
        private contact: string,
        private books: Book[],
        private status: string
    ) {}
    getId(): number {
        return this.id;
    }
    getName(): string {
        return this.name;
    }
    getContact(): string {
        return this.contact;
    }
    getBooks(): Book[] {
        return this.books;
    }
    getStatus(): string {
        return this.status;
    }
    setStatus(status: string): void {
        this.status = status;
    }
}

class LendedBook {
    constructor(
        private memberId: number,
        private bookId: number,
        private dueDate: Date
    ) {}
}

class Library {
    private books: Book[];
    private members: Member[];
    constructor() {
        this.books = [];
        this.members = [];
    }
    addBook(book: Book): void {
        this.books.push(book);
    }
    showBooks(): void {
        console.log("Sách trong thư viện:");
        this.books.forEach(book => {
            console.log(`ID: ${book.getId()}, Tiêu đề: ${book.getTitle()}, Tác gỉa: ${book.getAuthor()}, số lượng: ${book.getStock()}, trạng thái: ${book.getStatus()}`);
        });
    }
    registerMember(id: number, name: string, contact: string): void {
        let newMember = new Member(id, name, contact, [], "Mở");
        this.members.push(newMember);
    }
    blockMember(id: number): void {
        let member = this.members.find(member => member.getId() === id);
        if (member) {
            member.setStatus("Bị chặn");
        }
    }
    showMembers(): void {
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