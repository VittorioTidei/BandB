import { Component } from '@angular/core';
import { User } from '../../service/user';
import { RegisteruserService } from 'src/service/registeruser.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent {
  user:User = new User();

  constructor(private registeruserservice: RegisteruserService, private router: Router) { }

  ngOnInit(): void {

  }

  userRegister(){
    this.registeruserservice.registerUser(this.user).subscribe(data => {
      this.router.navigate(['']);
    },error=>alert("Email invalid or already used!"))
  }
}
