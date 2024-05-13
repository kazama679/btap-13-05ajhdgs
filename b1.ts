abstract class Shape1{
    name:string;
    constructor(name:string){
        this.name= name
    }
    getName():any{
        return `${this.name}`
    }
    abstract getSize():void
}
class Reactangle extends Shape1{
    width:number
    height:number
    constructor(name:string, width:number, height:number){
        super(name)
        this.width=width
        this.height=height
    }
    getSize():void{
        console.log("chiều rộng:",this.width);
        console.log("chiều dài:",this.height);
    }
}
let rectangle1 = new Reactangle("hình chữ nhật", 2,3);
console.log(rectangle1.getName());
rectangle1.getSize();