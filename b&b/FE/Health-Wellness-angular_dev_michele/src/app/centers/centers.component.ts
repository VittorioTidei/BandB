import { Component, Input, OnInit } from '@angular/core';
import { CenterDTO } from 'src/dto/centerdto';
import { UserDTO } from 'src/dto/userdto';
import { Usertype } from 'src/dto/usertype';
import { CenterService } from 'src/service/center.service';

@Component({
  selector: 'app-centers',
  templateUrl: './centers.component.html',
  styleUrls: ['./centers.component.css']
})
export class CentersComponent implements OnInit {

  
  user : UserDTO;
  centerList : CenterDTO[];
  userCenterList : CenterDTO[];
  constructor(private service : CenterService) { 
  this.user = JSON.parse(localStorage.getItem('currentUser'));
    if(this.user.usertype == Usertype.ADMIN){
      this.userCenterList = this.user.centers;
    this.getAllByUserIdNot();
    console.log('proprietario centro');
  }else{
    this.getAll();
    console.log(JSON.stringify(this.centerList));
    console.log('normale utente');
  }

  }
  getAllByUserIdNot(){
    this.service.getAllByUserIdNot(this.userCenterList).subscribe((response)=>{
      if(response!=null){this.centerList=response;}
    })
  }

  getAll(){
    this.service.getAll().subscribe((response)=>{
      if(response!=null){
        this.centerList=response;
        console.log("ma: "+response);
        console.log(this.centerList.length)
      }
      else{
        console.log('chiamata errata')
      }
    })
  }

  ngOnInit() {
  }

}
