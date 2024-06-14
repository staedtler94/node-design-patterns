import { HOSPITALITY_ROLES } from "../../fascade/kitchen-service/enum";
import { IPerson } from "./person.interface";

export class Waiter implements IPerson{
    constructor(details: Partial<Waiter>) {
        this._name = details.name;
        this._age = details.age;
        this._badgeNumber = details.badgeNumber;
        this._gender = details.gender;

        this._role = HOSPITALITY_ROLES.WAITER;
    }

    private readonly _name: string;
    public get name(): string {
        return this._name;
    }

    private readonly _age: number;
    public get age(): number {
        return this._age;
    }

    private readonly _gender?: string;
    public get gender(): string {
        return this._gender;
    }

    private readonly _badgeNumber: string;
    public get badgeNumber(): string {
        return this._badgeNumber;
    }

    private readonly _role: HOSPITALITY_ROLES.WAITER;
    public get role(): HOSPITALITY_ROLES {
        return this._role;
    }

    takeOrder(){}
}