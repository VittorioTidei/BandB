import {CenterDTO} from './centerdto';
import {TreatmentDTO} from './treatmentdto';


export class ProductDTO{

    id: number;

    title: string;

    description: string;

    price: number;

    discount: number;

    qty: number;

    starDiscountDate: Date;

    endDiscountDate: Date;
    
    imagePath: string;

    deleted: boolean;

    createdAt: Date;

    updatedAt: Date;

    center: CenterDTO;
    
    treatment: TreatmentDTO;

    currentPrice: number;
    
    constructor(title : string,description: string,price:number,discount:number,qty:number,startDiscountDate:Date, endDiscountDate:Date, deleted:boolean, createdAt:Date, updatedAt:Date, center:CenterDTO, treatment:TreatmentDTO, currentPrice: number){
        this.title = title;
        this.description = description;
        this.price = price;
        this.discount = discount;
        this.qty =qty;
        this.starDiscountDate = startDiscountDate;
        this.endDiscountDate = endDiscountDate;
        this.deleted= deleted;
        this.createdAt=createdAt;
        this.updatedAt=updatedAt;
        this.center =center;
        this.treatment = treatment;
        this.currentPrice= currentPrice;
    }
}
