
import { Order } from "../factory/dto/order.model";
import { HOSPITALITY_ROLES } from "../factory/enum";
import { Chef } from "../factory/roles/chef.role";

export class OrderManagementSystemService {
    constructor() { }
    ordersList: Order[] = [];

    public addOrder(order: Partial<Order>) {
        if (order.name === null || order.name === undefined)
            return order; // throw Error

        this.ordersList.push(order as Order);
    }

    public getOrderList() {
        return this.ordersList;
    }

    public assignChefToOrder(order: Order, chef: Chef) {
        order.chefAlloted = chef;
    }

    public orderCompletion(order: Order) {
        console.log(`Order ${order.name} is completed`);
        order.waiterAlloted.serveOrder(order);
    }

    public executionCycle() {
        const menuCycleId = setInterval(() => {
            console.log('Order Execution Cycle');

            this.ordersList.forEach((order, index) => {
                order.chefAlloted = new Chef({ name: 'Chef', role: HOSPITALITY_ROLES.CHEF, cuisine: ['Italian'] });
                order.chefAlloted.prepare(order.name);
                this.orderCompletion(order);
                this.ordersList.splice(index, 1);
            });
        }, this.loopTime);

        setTimeout(() => {
            clearInterval(menuCycleId);
        }, this.maxShopTime);
    }

    private loopTime = 1000;
    private maxShopTime = 5000;
}


const theConstantOMS = new OrderManagementSystemService();

export { theConstantOMS };