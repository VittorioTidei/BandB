import { Component } from '@angular/core';
import { User } from '../../service/user';
import { LoginuserService } from 'src/service/loginuser.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  user:User = new User();

  constructor(private loginuserservice: LoginuserService, private router: Router) { }

  ngOnInit(): void {

  }

  userLogin(){
    console.log(this.user)
    this.loginuserservice.loginUser(this.user).subscribe(data=>{
      this.router.navigate(['dashboardLogin']);
    },error=>alert("Email or password invalid!"))
  }
}

