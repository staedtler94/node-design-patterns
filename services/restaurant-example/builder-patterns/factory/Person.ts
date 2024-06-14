import { HOSPITALITY_ROLES } from "./enum";

export class Person {
    constructor(details: Partial<Person>) {
        this._name = details.name;
        this._age = details.age;
        this._badgeNumber = details.badgeNumber;
        this._gender = details.gender;
    }
    
    private readonly _name: string;
    public get name(): string {
        return this._name;
    }
    
    private readonly _age: number;
    public get age(): number {
        return this._age;
    }

    private readonly _gender?: string;
    public get gender(): string {
        return this._gender;
    }

    private readonly _badgeNumber: string;
    public get badgeNumber(): string {
        return this._badgeNumber;
    }

    public greet() {
        console.log(`Hello, my name is ${this.name}`);
    }

}