import { Chef } from "./personnels-base-class/chefs";
import { Waiter } from "./personnels-base-class/waiter";

export interface Order{
    name: string;
    description?: string;
    allergies?: string[];
    waiter: Waiter;
    chef: Chef
}