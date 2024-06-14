import { HOSPITALITY_ROLES } from "./kitchen-service/enum";
import { theConstantOMS } from "./kitchen-service/order-management-system.service";
import { Chef } from "./kitchen-service/personnels-base-class/chefs";
import { Waiter } from "./kitchen-service/personnels-base-class/waiter";

export class FacadeService {
    constructor() { }

    public facadeRunning() {
        const John = new Chef({
            name: 'John',
            cooking_cuisine: ['Italian', 'French', 'Japanese'],
            role: HOSPITALITY_ROLES.CHEF,
            age: 25,
            badgeNumber: 'C1234',
            gender: "Male"
        });
        const walter = new Waiter({
            name: 'Walter',
            role: HOSPITALITY_ROLES.WAITER,
            age: 25,
            badgeNumber: 'W1234',
        });
        
        theConstantOMS.executionCycle();
        walter.greet();
        walter.takeOrder('Pasta');

        walter.greet();
        walter.takeOrder('Burger');
    }
}