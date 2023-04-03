import { Component, OnInit } from '@angular/core';
import { UserDTO } from 'src/dto/userdto';
import { UserService } from 'src/service/user.service';
import { NgForm } from '@angular/forms';
import { DefaultRouteReuseStrategy } from '@angular/router/src/route_reuse_strategy';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userList: UserDTO[];
  update : Boolean;
  constructor(private userService: UserService) {
    this.update = false;
   }

  ngOnInit() {
    this.retriveList();
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

  delete(user : UserDTO){
    this.userService.delete(user.id);
  }
  
  Update(f: NgForm, updateUser : UserDTO): void {
    updateUser.firstname = f.value.firstname;
    updateUser.lastname = f.value.lastname;
    // this.updateUser.birthdayDate = f.value.birthdayDate;
    updateUser.password = f.value.pass;
    updateUser.phone = f.value.phone;
    updateUser.email = f.value.email;
    this.userService.update(updateUser).subscribe((response) => {
        if (response != null) {
          localStorage.setItem('currentUser', JSON.stringify(updateUser));
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

  retriveList(){
    this.userService.list().subscribe((res)=>{
      if(res != null){
        this.userList = res;
      }
      else{
        console.log('error retriveList');
      }
    })
  }


}
