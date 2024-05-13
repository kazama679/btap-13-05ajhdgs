// Abstract method
abstract class Employee3{
    name:string
    constructor(name:string){
        this.name=name
    }
    abstract getName():void;
}
class Enployee2 extends Employee3{ 
    address:string;
    constructor(address:string, name:string){
        super(name)
        this.address=address
    }
    getName():void{

    }
}

// Method
abstract class Employee4{
    name:string
    constructor(name:string){
        this.name=name
    }
    getName():void{
        
    };
}
class Enployee5 extends Employee4{
    address:string;
    constructor(address:string, name:string){
        super(name)
        this.address=address
    }
}