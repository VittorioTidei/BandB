import { Component, OnInit } from '@angular/core';
import { LoginuserService } from 'src/service/loginuser.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { userShareService } from 'src/service/userShareSerive';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit{

  form:FormGroup;


  constructor(private loginuserservice: LoginuserService, private router: Router, public fb: FormBuilder, private usersharedservice: userShareService) {

      this.form=fb.group({
        'email':['', Validators.required],
        'password':['',Validators.required]
      })

   }
 

  ngOnInit(): void {
    
  }

  userLogin(){
    this.usersharedservice.setUser(this.form.value);
    this.loginuserservice.loginUser(this.usersharedservice.getUser()).subscribe(data => {
      this.router.navigate(['dashboardLogin']);
    },error=>alert("Email or password invalid!"))
  }

}

