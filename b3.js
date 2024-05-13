"use strict";
// Abstract method
class Employee3 {
    constructor(name) {
        this.name = name;
    }
}
class Enployee2 extends Employee3 {
    constructor(address, name) {
        super(name);
        this.address = address;
    }
    getName() {
    }
}
// Method
class Employee4 {
    constructor(name) {
        this.name = name;
    }
    getName() {
    }
    ;
}
class Enployee5 extends Employee4 {
    constructor(address, name) {
        super(name);
        this.address = address;
    }
}
