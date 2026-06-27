"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function greet(name, age) {
    if (age) {
        console.log(`Hello ${name} you are ${age} years old`);
    }
    else {
        console.log(`Hello ${name}`);
    }
}
function greet(name, age = 18) {
}
greet("Raysul", 20);
//# sourceMappingURL=optionalParameter.js.map