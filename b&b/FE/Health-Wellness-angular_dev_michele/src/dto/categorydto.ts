import { TreatmentDTO } from "./treatmentdto";



export class CategoryDTO{

    id:number;
    
    name:string;

    description:string;

    treatments: Array<TreatmentDTO>;
}

