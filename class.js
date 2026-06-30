"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello ${this.name} you are ${this.age} years old`);
    }
}
const user = new User("Raysul", 28);
user.greet();
//# sourceMappingURL=class.js.map