class User {
    constructor(
        public name: string,
        private age: number,
        protected id: number
    ) {}

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