import { Chef } from "../roles/chef.role";
import { Waiter } from "../roles/waiter.role";

export interface RestaurantStaffDTO {
    waiters: Waiter[];
    chefs: Chef[];
}
