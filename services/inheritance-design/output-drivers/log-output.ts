import { IOutput } from "./interface/IOutput.interface";
import { IExecute } from "./models/IExecute.model";

export class LogOutput implements IOutput {  
    name: string;
    directory: string;

    constructor() {
        this.name = 'Log Output Driver';
        this.directory = './log';
    }

    execute(input: IExecute) {
        console.log(`Executing log output: ${this.name}`);
        return {};
    }

    load() {
        console.log(`Loading log output: ${this.name}`);
        return true;
    }
}