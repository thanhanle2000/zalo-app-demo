export interface Product {
    id: number;
    label: string;
    price: number;
    img: string;
    rate: number;
    sale: number;
    description: string;
    quantity?: number
}