
import crypto from 'crypto';
export enum PkEntityType {
    "USER" = "us",
    "ADMIN" = "ad",
    "PRODUCT" = "pr",
    "VENDOR" = "vr"
}

export function generatePK(prefix: PkEntityType): string {
    return `${prefix}-${crypto.randomUUID()}`;
}