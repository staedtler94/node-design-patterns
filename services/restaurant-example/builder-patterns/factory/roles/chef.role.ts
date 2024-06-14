import { Person } from "../Person";

export class Chef extends Person {
    constructor(details: Partial<Chef>) {
        super(details);
    }
    public cook(dish: string) {
        console.log(`Chef is cooking ${dish}`);
    }
}