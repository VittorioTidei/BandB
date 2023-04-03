import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CartDTO } from 'src/dto/cartdto';
import { CenterDTO } from 'src/dto/centerdto';
import { CityDTO } from 'src/dto/citydto';
import { OrderDTO } from 'src/dto/orderdto';
import { UserDTO } from 'src/dto/userdto';
import { UserService } from 'src/service/user.service';

@Component({
  selector: 'app-accountupdate',
  templateUrl: './accountupdate.component.html',
  styleUrls: ['./accountupdate.component.css']
})
export class AccountupdateComponent implements OnInit {

  update : boolean;
  account: UserDTO;
  currentUser: UserDTO;
  updateUser: UserDTO;
  city : CityDTO;
  avatar : string;
  constructor( private service : UserService) { 
    this.currentUser =JSON.parse(localStorage.getItem('currentUser'));
    this.account=JSON.parse(localStorage.getItem('currentUser'));
    this.updateUser = this.currentUser;

    // this.city.id
    // this.city.name
    // this.city.province

  }

  ngOnInit() {
  }

  changePicture(p : NgForm){

  }

  Update(f: NgForm): void {
    this.updateUser = JSON.parse(localStorage.getItem('currentUser'));
    this.updateUser.firstname = f.value.firstname;
    this.updateUser.lastname = f.value.lastname;
    // this.updateUser.birthdayDate = f.value.birthdayDate;
    this.updateUser.password = f.value.pass;
    this.updateUser.phone = f.value.phone;
    this.updateUser.email = f.value.email;
    this.service.update(this.updateUser).subscribe((response) => {
        if (response != null) {
          localStorage.setItem('currentUser', JSON.stringify(this.updateUser));
        }
    }, (error) => {
      switch (error.status) {
        case 404:
          alert(error.error);
          break;
        default:
          break;
      }
    });
    this.update=false;
  }

}
