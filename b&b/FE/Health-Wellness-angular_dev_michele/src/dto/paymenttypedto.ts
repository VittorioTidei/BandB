import { OrderDTO } from "./orderdto";

export class PaymentTypeDTO{

    id: number;

    name: String;

    data: String;

    orders: Array<OrderDTO>;

    constructor(name: string, data:string){
        this.name = name;
        this.data = data;
    }
}