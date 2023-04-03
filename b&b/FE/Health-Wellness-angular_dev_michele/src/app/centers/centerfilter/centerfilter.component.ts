import { NgForOf } from '@angular/common';
import { NgbDropdownConfig, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { Component, Input, OnChanges ,OnInit } from '@angular/core';
import { CenterDTO } from 'src/dto/centerdto';
import { CityDTO } from 'src/dto/citydto';
import { CityService } from 'src/service/city.service';
import { CenterService } from 'src/service/center.service';
import { Usertype } from 'src/dto/usertype';
import { UserDTO } from 'src/dto/userdto';


@Component({
  selector: 'app-centerfilter',
  templateUrl: './centerfilter.component.html',
  styleUrls: ['./centerfilter.component.css']
})
export class CenterfilterComponent implements OnInit, OnChanges {

  centerList : CenterDTO[];
  research : CenterDTO[];
  user: UserDTO;
  submit : boolean;
  userCenterList : CenterDTO[];
  cityOptionList : CityDTO[];
  citySelected : CityDTO;


  constructor( private cityService : CityService, private centerService : CenterService)  {
    this.submit = false;
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    console.log(this.user.usertype);
    this.getAll();
    if(this.user.usertype == Usertype.USER){
      this.userCenterList = this.user.centers;
    this.getAllByUserIdNot();
    console.log('proprietario centro');
  }else{
    this.getAll();
    console.log('normale utente');
  }
    this.getAllCity();
    console.log(this.cityOptionList);
  }

search(selected:number): void{
  
  this.cityService.read(selected).subscribe((response)=>{
    this.research = [];
    if(response!= null){
      this.citySelected = response;
      for(let center of this.centerList){
        console.log('entro nel ciclo');
        console.log(center.city);
        if (center.city.id == this.citySelected.id){
          console.log('ciao');
          console.log(center.name);
          this.research.push(center);
          console.log(this.research);
        }else{
          console.log('corrispondenza non trovata');
        }

      }
    }
  })
}

// getAllCategory(){
//   this.categoryService.getAll().subscribe((response)=>{
//     if(response != null){
//       this.categoryList= response;
//     }
//   });
// }

ngOnChanges(selected){
  this.search(selected);
}

getAll(){
  this.centerService.getAll().subscribe((response)=>{
    if(response!=null){
      this.centerList=response;
      console.log(response)
    }
    else{
      console.log('chiamata errata')
    }
  })
}

getAllByUserIdNot(){
  this.centerService.getAllByUserIdNot(this.userCenterList).subscribe((response)=>{
    if(response!=null){this.centerList=response;}
  })
}



getAllCity(){
  this.cityService.getAll().subscribe((response)=>{
    console.log(JSON.stringify(this.research));
    if(response!= null){
      this.cityOptionList=response;
    }
  });
}

  ngOnInit() {
  }
  

}
