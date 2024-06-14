import { Person } from "../Person";
import { IRole } from "./IRole.interface";

export class Chef extends Person implements IRole {
    constructor(details: Partial<Chef>) {
        super(details);
    }
    role: string;
    description: string;
    responsibilities: string[];
    public cook(dish: string) {
        console.log(`Chef is cooking ${dish}`);
    }
}