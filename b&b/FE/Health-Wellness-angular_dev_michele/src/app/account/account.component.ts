import { Component, OnInit } from '@angular/core';
import { ngDevModeResetPerfCounters } from '@angular/core/src/render3/ng_dev_mode';

import { OrderDTO } from 'src/dto/orderdto';
import { UserDTO } from 'src/dto/userdto';
import { Usertype } from 'src/dto/usertype';
import { OrderService } from 'src/service/order.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  isAdmin: boolean;
  update : boolean;
  account : UserDTO
  pass: String;
  len
  c = 'ab'
  condition : boolean;
  order:OrderDTO;
  orders: OrderDTO[];
  accountPropertys : Object[];  
  accountProfile : Object[];
  // propertys : ['address','email','birthdayDate'];
  constructor(private service: OrderService) { 
    this.account = JSON.parse(localStorage.getItem('currentUser'));
    this.isAdmin= false;
    console.log(this.account.usertype.toString());
    if(this.account.usertype.toString() == 'ADMIN' || this.account.usertype.toString() == 'SUPERADMIN'){
      console.log('acess granted');
      this.isAdmin= true;
    }

    this.update= false;
    this.getAllByUserId(this.account);

    if(this.orders == null){
      this.condition = false;
    }else{
      this.condition = true;
    }
    this.pass = this.account.password.charAt(0);
    for(this.c of this.account.password){
      this.pass = this.pass + '*';
    }
    
    this.pass = this.pass + this.account.password.charAt(this.account.password.length);
    console.log(this.pass);
  }
  updateStatus(){
    if(this.update){
      this.update=false;
      console.log(this.update);
    }else{
      this.update=true;
      console.log(this.update);
    }
  }
  
  getAllByUserId(user : UserDTO){
    this.service.getAllByUserId(user.id).subscribe((response)=>{  
    if (response != null) {
    this.orders = response;
    console.log(JSON.stringify(this.orders));
    }
  });
  }

  ngOnInit() {

    this.getAllByUserId(this.account);
}

}
