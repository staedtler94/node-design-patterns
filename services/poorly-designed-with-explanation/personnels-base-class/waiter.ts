import { Person } from "./person";
import { theConstantOMS } from "../../restaurant-example/builder-patterns/singleton/order-management-system.service";
import { HOSPITALITY_ROLES } from "../../restaurant-example/builder-patterns/factory/enum";
import { Order } from "../../restaurant-example/fascade/kitchen-service/order.model";

export class Waiter extends Person {
    constructor(details: Partial<Waiter>) {
        super({ ...details, role: HOSPITALITY_ROLES.WAITER });
        this._skills = ['taking orders', 'serving', 'cleaning tables'];
    }

    private readonly _skills: string[];
    public get skills(): string[] {
        return this._skills;
    }
    takeOrder(dish: string) {
        console.log(`Waiter ${this.name} has taken an order for ${dish}`);
        theConstantOMS.addOrder({ name: dish, waiter: this });
    }

    public greet(): void {
        super.greet();
        console.log(`Hope you are comfortable, let me know when you are ready to order`);
    }

    servers(order: Order) {
        console.log(`Hello, here is your order ${order.name}`);
    }
}