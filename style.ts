
let myString: string = "Hello, TypeScript!";
let myNumber: number = 42;
let myBoolean: boolean = true;
let myNumberArray: number[] = [1, 2, 3, 4, 5];
function addNumbers(a: number, b: number): number {
    return a + b;
}
console.log(addNumbers(5, 10)); 
interface Person {
    name: string;
    age: number;
}function greet(person: Person): string {
    return `Hello, ${person.name}! You are ${person.age} years old.`;
}
console.log(greet({ name: "John", age: 30 })); 
function getLengthOrSquare(value: string | number): number {
    if (typeof value === "string") {
        return value.length;
    } else {
        return value * value;
    }
}
console.log(getLengthOrSquare("Hello")); 
console.log(getLengthOrSquare(4)); 
class Car {
    make: string;
    model: string;
    year: number;    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }    getDetails(): string {
        return `${this.year} ${this.make} ${this.model}`;
    }
}const myCar = new Car("Toyota", "Corolla", 2022);
console.log(myCar.getDetails()); // Output: 2022 Toyota Corolla// 6. Generics
function identity<T>(value: T): T {
    return value;
}
console.log(identity<number>(42)); // Output: 42
console.log(identity<string>("Hello")); // Output: Hello// 7. Enums
enum Direction {
    Up,
    Down,
    Left,
    Right
}function getDirectionMessage(direction: Direction): string {
    switch (direction) {
        case Direction.Up:
            return "You are moving up!";
        case Direction.Down:
            return "You are moving down!";
        case Direction.Left:
            return "You are moving left!";
        case Direction.Right:
            return "You are moving right!";
        default:
            return "Unknown direction!";
    }
}console.log(getDirectionMessage(Direction.Up)); // Output: You are moving up!// 8. Type Assertions
function assertString(value: unknown): string {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    throw new Error("Value is not a string!");
}
console.log(assertString("hello")); // Output: HELLO