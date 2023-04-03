import {Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LoginDTO } from 'src/dto/logindto';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/service/user.service';
import { Router } from '@angular/router';
import { CartDTO } from 'src/dto/cartdto';
import { CartService } from 'src/service/cart.service';
import { UserDTO } from 'src/dto/userdto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  id : number;
  cart:CartDTO;
  loginDTO: LoginDTO;
  currentUser : UserDTO;

  public signupVisible: boolean = false;

  constructor(
      private cartService: CartService,
      private service: UserService,
      private router: Router
  ) { }

  ngOnInit() {
  }

  login(f: NgForm): void {
    this.loginDTO = new LoginDTO(f.value.username, f.value.password);
    console.log(f.value.username);
    this.service.login(this.loginDTO).subscribe((response) => {
      console.log(response);
      this.currentUser = response.body;
        if (response.body != null) {
          localStorage.setItem('currentUser', JSON.stringify(response.body));
          //checking cart method
          this.cartService.read(this.currentUser.id).subscribe((res)=>{
            if(res == null){
              console.log('il carrello non esiste');
              this.cart = new CartDTO(this.id, this.currentUser);
              this.cartService.insert(this.cart).subscribe((res)=>{
                if(res!= null){
                  //non entra qui 
                  console.log('errore : ');
                  console.log(res);
                }else{
                  console.log('sono nella eccezione del carrello');
                  this.cartService.read(this.currentUser.id).subscribe((resp)=>{
                    console.log('lettura carrello: ' + resp);
                    localStorage.setItem('cart',JSON.stringify(resp));
                  })
                }
              });
            }else{
              console.log('il carrello esiste');
              localStorage.setItem('cart',JSON.stringify(res));
            }
          })
          this.router.navigate(['/main']);
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
  }

  toggleSignupForm() {
    this.signupVisible = !this.signupVisible;
  }

}
