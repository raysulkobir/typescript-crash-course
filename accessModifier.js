"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    name;
    age;
    id;
    constructor(name, age, id) {
        this.name = name;
        this.age = age;
        this.id = id;
    }
    greet() {
        console.log(`Hello ${this.name} you are ${this.age} years old`);
    }
    getAge() {
        return this.age;
    }
    getId() {
        return this.id;
    }
}
//# sourceMappingURL=accessModifier.js.map