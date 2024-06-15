import { Chef } from "../roles/chef.role";
import { Waiter } from "../roles/waiter.role";

export interface Order{
    name: string;
    description?: string;
    allergies?: string[];
    tableNumber: string;
    waiterAlloted: Waiter;
    chefAlloted: Chef
}