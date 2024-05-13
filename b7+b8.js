"use strict";
class Student7 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
}
class Classroom {
    constructor() {
        this.students = [];
    }
    addStudent(student) {
        this.students.push(student);
    }
    removeStudent(id) {
        const index = this.students.findIndex(student => student.getId() === id);
        if (index !== -1) {
            const removedStudent = this.students.splice(index, 1)[0];
            allStudents.push(removedStudent);
        }
    }
    editStudent(id, newName) {
        const student = this.students.find(student => student.getId() === id);
        if (student) {
            student.name = newName;
        }
    }
    showStudents() {
        console.log("Học sinh lớp này:");
        this.students.forEach(student => {
            console.log(`ID: ${student.getId()}, Tên: ${student.getName()}`);
        });
    }
}
let allStudents = [
    new Student7(1, "Quang Tê liệt con "),
    new Student7(2, "Tuấn khỉ"),
    new Student7(3, "Hoàng tử Long Biên"),
    new Student7(4, " Hoàng Tử Mùa Đông - Xuân Tổng - Hạ Hoàng - Lãnh Chúa Mùa Thu "),
    new Student7(5, "Phú Xuyên"),
    new Student7(6, "Hải Phòng")
];
let classroom1 = new Classroom();
let classroom2 = new Classroom();
for (let i = 0; i < 3; i++) {
    classroom1.addStudent(allStudents.pop());
    classroom2.addStudent(allStudents.pop());
}
console.log("Lớp A:");
classroom1.showStudents();
console.log("Lớp B:");
classroom2.showStudents();
classroom1.removeStudent(2);
console.log("Sau khi loại bỏ học sinh có ID 2 khỏi Lớp A:");
classroom1.showStudents();
classroom2.editStudent(4, "Câpj nhập tên");
console.log("Sau khi chỉnh sửa học sinh có mã số 4 ở lớp B:");
