import { Component } from '@angular/core';
import { User } from '../../service/user';
import { RegisteruserService } from 'src/service/registeruser.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent {
  user:User = new User();
  form: FormGroup;

  constructor(private registeruserservice: RegisteruserService, private router: Router, public fb: FormBuilder) { 
    this.form=fb.group({
      'email':['', Validators.required],
      'password':['',Validators.required]
    })
  }

  ngOnInit(): void {

  }

  userRegister(){
    this.user = this.form.value;
    this.registeruserservice.registerUser(this.user).subscribe(data => {
      this.router.navigate(['registerComplete']);
    },error=>alert("Email invalid or already used!"))
  }
}
