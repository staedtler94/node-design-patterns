import { Person } from "../Person";
import { HOSPITALITY_ROLES } from "../enum";

export class Waiter extends Person{
    constructor(details: Partial<Waiter>) {
        super({ ...details, role: HOSPITALITY_ROLES.WAITER });
    }
    
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