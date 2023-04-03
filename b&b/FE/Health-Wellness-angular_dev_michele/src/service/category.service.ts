import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CategoryDTO } from "src/dto/categorydto";
import { AbstractService } from "./abstractservice";


@Injectable({
    providedIn: 'root'
})
export class CategoryService extends AbstractService<CategoryDTO>{
    constructor(http: HttpClient){
        super(http);
        this.type = 'category';
    }

}