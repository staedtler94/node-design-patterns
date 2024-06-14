import { HOSPITALITY_ROLES } from "./enum";
import { Order } from "./order.model";
import { Chef } from "./personnels-base-class/chefs";

export class OrderManagementSystemService { 
    constructor(){}
    ordersList: Order[] = [];

    public addOrder(order: Partial<Order>){
        if( order.name === null || order.name === undefined)
            return order; // throw Error

        this.ordersList.push(order as Order);
    }

    public getOrderList(){
        return this.ordersList;
    }

    public assignChefToOrder(order: Order, chef: Chef){
        order.chef = chef;
    }

    public orderCompletion(order: Order){
        console.log(`Order ${order.name} is completed`);
        order.waiter.servers(order);
    }

    public executionCycle(){
        const menuCycleId = setInterval(() => {
            console.log('Order Execution Cycle');

            this.ordersList.forEach((order, index) => {
                order.chef = new Chef({name: 'Chef', role: HOSPITALITY_ROLES.CHEF, cooking_cuisine: ['Italian']});
                order.chef.prepare(order.name);
                this.orderCompletion(order);
                this.ordersList.splice(index, 1);
            });
        }, this.loopTime);

        setTimeout(() => {
            clearInterval(menuCycleId);
        }, this.maxShopTime);
    }

    private shopShut = false;
    private loopTime = 1000;
    private maxShopTime = 5000;

    
}


const theConstantOMS = new OrderManagementSystemService();

export { theConstantOMS };