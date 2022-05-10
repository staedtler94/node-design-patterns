import { Logger } from "tslog";

const log: Logger = new Logger();
log.silly('The logger is set here! :)');

export const logger = log;