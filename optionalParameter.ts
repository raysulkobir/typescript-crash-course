function greet(name:string,age?:number):void{
    if(age){
        console.log(`Hello ${name} you are ${age} years old`);
    }else{
        console.log(`Hello ${name}`);
    }
}

function greet(name:string,age:number=18){

}

greet("Raysul", 20);