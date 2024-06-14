import { Person } from "../Person";
import { IRole } from "./IRole.interface";

export class Waiter extends Person implements IRole {
    constructor(details: Partial<Waiter>) {
        super(details);
    }

    role: string;
    description: string;
    responsibilities: string[];
    
    public takeOrder(dish: string) {
        console.log(`Waiter takes order for ${dish}`);
    }
    public serveOrder(dish: string) {
        console.log(`Waiter serves order for ${dish}`);
    }
    public cleanTable() {
        console.log(`Waiter cleans table`);
    }
}