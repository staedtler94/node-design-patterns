import { IExecute } from "../models/IExecute.model";

export interface IOutput {
    name: string;
    execute: (input:IExecute) => {};
    load: () => boolean;
}