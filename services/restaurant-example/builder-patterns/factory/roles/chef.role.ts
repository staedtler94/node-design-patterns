import { Person } from "../Person";

export class Chef extends Person {
    constructor(details: Partial<Chef>) {
        super(details);
        this._cuisine = details.cuisine;
    }
    private readonly _cuisine: string[];
    public get cuisine(): string[] {
        return this._cuisine;
    }

    public prepare(dish: string) {
        console.log(`Chef is cooking ${dish}`);
    }
}