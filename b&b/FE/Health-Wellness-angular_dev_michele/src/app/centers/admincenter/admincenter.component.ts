import { Component, OnInit } from '@angular/core';
import { CenterDTO } from 'src/dto/centerdto';
import { UserDTO } from 'src/dto/userdto';
import { Usertype } from 'src/dto/usertype';
import { CenterService } from 'src/service/center.service';
import { ProductService } from 'src/service/product.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-admincenter',
  templateUrl: './admincenter.component.html',
  styleUrls: ['./admincenter.component.css']
})
export class AdmincenterComponent implements OnInit {

  centerDTO : CenterDTO;
  centerList : CenterDTO[];
  user : UserDTO;
  update : boolean;
  add : boolean;

  constructor(private centerService : CenterService, private productService : ProductService) { 

  }

  ngOnInit() {
    this.update=false;
    this.add=false;
    this.getAllCenter();
  }
  getAllCenter(){
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    if(this.user.usertype = Usertype.ADMIN){
      this.centerService.getAllByUserId(this.user.id).subscribe((res)=>{
        this.centerList = res;
      });
    }else if(this.user.usertype.toString() == 'SUPERADMIN'){
      this.centerService.getAll().subscribe((res)=>{
        this.centerList = res;
      });
    }
  }
  deleteCenter(id: number){
    this.centerService.delete(id);
  }

  //update center service...
  updateCenter(f : NgForm, center: CenterDTO):void{
    if(f.value.name!= null){
      console.log(f.value.name);
      center.name = f.value.name;
    }
    if(f.value.address!= null){
      console.log(f.value.address);
      center.address = f.value.address;
    }
    if(f.value.email!= null){
      console.log(f.value.email);
      center.email= f.value.email;
    }
    if(f.value.website!= null){
      console.log(f.value.website);
      center.website = f.value.website;
    }
    if(f.value.zipcode!= null){
      console.log(f.value.zipcode);
      center.zipcode = f.value.zipcode;
    }
    if(f.value.phone!= null){
      console.log(f.value.phone);
      center.phone = f.value.phone;
    }
    if(f.value.city!= null){
      center.city = f.value.city;
    }
    this.centerService.update(center).subscribe((res)=>{
      console.log(res);
    });;
  }
  addCenter(a : NgForm){
    //add a constructor method for centers.
    this.centerDTO = new CenterDTO(this.user,a.value.name,a.value.address,a.value.zipcode,a.value.phone,a.value.email,a.value.website,null);
    console.log(this.centerDTO);
    this.centerService.insert(this.centerDTO).subscribe((res)=>{
      console.log(res);
    });
  }
  avaibleAdd(){
    console.log(this.add);
    if(this.add == false){
      this.add = true;
    }
    else{
      this.add = false;
    }
  }
  
  avaibleUpdate(){
    console.log(this.update);
    if(this.update == false){

      this.update = true;
    }
    else{
      this.update = false;
    }
  }
}
