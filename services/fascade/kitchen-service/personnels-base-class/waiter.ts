import { HOSPITALITY_ROLES } from "../enum";
import { Order } from "../order.model";
import { Person } from "./person";
import { theConstantOMS } from "../order-management-system.service";

export class Waiter extends Person {
    constructor(details: Partial<Waiter>) {
        super({ ...details, role: HOSPITALITY_ROLES.WAITER });
    }

    takeOrder(dish: string) {
        console.log(`Waiter ${this.name} has taken an order for ${dish}`);
        theConstantOMS.addOrder({ name: dish, waiter: this});
     }

    public greet(): void {
        super.greet();
        console.log(`Hope you are comfortable, let me know when you are ready to order`);
    }

    servers(order: Order){
        console.log(`Hello, here is your order ${order.name}`);
    }
}