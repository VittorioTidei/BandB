import { Component, OnInit } from '@angular/core';
import {UserDTO} from "../../../dto/userdto";
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { CartDTO } from 'src/dto/cartdto';
import { Usertype } from 'src/dto/usertype';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  collapsed = true;

  user: UserDTO;
  isSuperAdmin : Boolean;
  isAdmin: Boolean;
  isUser: Boolean;

  cart : CartDTO;
  constructor() { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    this.cart = JSON.parse(localStorage.getItem('cart'));
    if(this.user.usertype.toString()== 'SUPERADMIN'){
      console.log('sono super admin');
      this.isSuperAdmin = true;
    }
    else{
      console.log('false');
      console.log(this.user.usertype.toString());
      this.isSuperAdmin = false;
    }
  }

}
