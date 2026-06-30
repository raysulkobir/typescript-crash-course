interface Person{

    name:string;

    greet():void;

}

class User implements Person{

    name:string;

    constructor(name:string){
        this.name=name;
    }

    greet(){
        console.log("Hello");
    }

}