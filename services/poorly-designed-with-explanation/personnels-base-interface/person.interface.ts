import { HOSPITALITY_ROLES } from "../../restaurant-example/builder-patterns/factory/enum";

// an interface for all staff members in the Hospitality industry
export interface IPerson {
    readonly name: string;
    readonly age: number;
    readonly gender?: string;

    readonly badgeNumber: string;
    readonly role: HOSPITALITY_ROLES;
}