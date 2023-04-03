import { ProductDTO } from "./productdto";
import { CategoryDTO } from './categorydto';



export class TreatmentDTO{

    id: number;

    name: string;
    
    description: string;

    products: Array<ProductDTO>;

    category: CategoryDTO;
}