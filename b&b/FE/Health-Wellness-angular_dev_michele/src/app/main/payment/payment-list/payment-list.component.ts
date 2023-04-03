import { Component, OnInit } from '@angular/core';
import { CartDTO } from 'src/dto/cartdto';
import { PaymentTypeDTO } from 'src/dto/paymenttypedto';
import { ProductCartListDTO } from 'src/dto/productcartlistdto';
import { UserDTO } from 'src/dto/userdto';
import { CartService } from 'src/service/cart.service';
import { PaymentTypeService } from 'src/service/paymenttype.service';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.css']
})
export class PaymentListComponent implements OnInit {

  user : UserDTO;
  payments : PaymentTypeDTO[];
  cart : CartDTO;
  products : ProductCartListDTO[];
  constructor(public paymentService : PaymentTypeService, public cartService : CartService) {
  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    this.retriveCart(this.user);
  }
  retriveCart(user : UserDTO){
    this.cartService.read(user.id).subscribe((res)=>{
      if(res!=null){
        this.cart = res;
        this.products = this.cart.productsCartList;
      }
    });
  }

  //@TODO NEED TO IMPLEMENT THE METHOD BUY...
  buy(){
    
  }

}
