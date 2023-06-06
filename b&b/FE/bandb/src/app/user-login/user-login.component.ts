import { Component, OnInit } from '@angular/core';
import { User } from '../../service/user';
import { LoginuserService } from 'src/service/loginuser.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit{

  user:User = new User();
  form:FormGroup;


  constructor(private loginuserservice: LoginuserService, private router: Router, public fb: FormBuilder) {

      this.form=fb.group({
        'email':['', Validators.required],
        'password':['',Validators.required]
      })

   }
 

  ngOnInit(): void {
    
  }

  userLogin(){
    this.user=this.form.value;
    this.loginuserservice.loginUser(this.user).subscribe(data => {
      this.router.navigate(['dashboardLogin']);
    },error=>alert("Email or password invalid!"))
  }

  getUserEmail(){
    return this.user.email;
  }


}

