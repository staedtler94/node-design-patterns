import { Chef } from "./personnels-base-interface/chefs";
import { Waiter } from "./personnels-base-interface/waiter";

export interface Order{
    name: string;
    description?: string;
    allergies?: string[];
    waiter: Waiter;
    chef: Chef
}