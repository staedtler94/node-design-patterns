export interface Products{
    readonly skuNumber: string;
    readonly name: string;
    
    readonly vendor: string;
    readonly category: string;

    readonly taxRate: number;
    readonly costPrice: number;
    readonly salesPrice: number;
    readonly discountRate: number;

    getDetails: () => Products
}