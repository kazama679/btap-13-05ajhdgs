"use strict";
class Shape1 {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return `${this.name}`;
    }
}
class Reactangle extends Shape1 {
    constructor(name, width, height) {
        super(name);
        this.width = width;
        this.height = height;
    }
    getSize() {
        console.log("chiều rộng:", this.width);
        console.log("chiều dài:", this.height);
    }
}
let rectangle1 = new Reactangle("hình chữ nhật", 2, 3);
console.log(rectangle1.getName());
rectangle1.getSize();
