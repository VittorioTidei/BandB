import { Component, OnInit } from '@angular/core';
import { CategoryDTO } from 'src/dto/categorydto';
import { TreatmentDTO } from 'src/dto/treatmentdto';
import { CategoryService } from 'src/service/category.service';
import { TreatmentService } from 'src/service/treatment.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  categoryList : CategoryDTO[];
  treatmentList: TreatmentDTO[];
  category : CategoryDTO;
  

  constructor(private service : CategoryService, private treatmentservice: TreatmentService) { 
    this.getAllCategory();
    this.getAllTreatment();
  }

  ngOnInit() {
    this.getAllCategory();
    this.getAllTreatment();
  }

  getAllCategory(){
    this.service.getAll().subscribe((response)=>{
      if (response != null){
        this.categoryList = response;
      }
    });
    
  }
  main(){
    
  }

  getAllTreatment(){
    this.treatmentservice.getAll().subscribe((response)=>{
      if (response != null){
        this.treatmentList = response;
      }
    })
    
  }

submitted = false;

onSubmit() { this.submitted = true; }

}
