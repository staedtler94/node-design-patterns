import { Order } from "../dto/order.model";
import { Person } from "../Person";
import { HOSPITALITY_ROLES } from "../enum";

export class Waiter extends Person{
    constructor(details: Partial<Waiter>) {
        super({ ...details, role: HOSPITALITY_ROLES.WAITER });
    }
    
    public takeOrder(dish: string) {
        console.log(`Waiter takes order for ${dish}`);
    }
    public serveOrder(order: Order) {
        console.log(`Waiter serves order for ${order}`);
    }
    public cleanTable() {
        console.log(`Waiter cleans table`);
    }
}