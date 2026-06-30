class User{
    name:string;
    age:number;

    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }

    greet(){
        console.log(`Hello ${this.name} you are ${this.age} years old`);    
    }
}

const user=new User("Raysul",28);
user.greet();
