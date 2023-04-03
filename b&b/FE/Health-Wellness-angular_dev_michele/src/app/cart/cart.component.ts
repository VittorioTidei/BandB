import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { CartDTO } from 'src/dto/cartdto';
import { ProductCartListDTO } from 'src/dto/productcartlistdto';
import { UserDTO } from 'src/dto/userdto';
import { CartService } from 'src/service/cart.service';
import { ProductService } from 'src/service/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  user : UserDTO;
  cart : CartDTO;
  productList : ProductCartListDTO[];
  
  constructor(public productService : ProductService) {

   }

  // readCart(user: UserDTO){
  //   this.cartService.read(user.id).subscribe((res)=>{
  //     if(res != null){
  //       this.cart = res;
  //     }
  // });

  // }
  
  loadProducts(){
    this.cart = JSON.parse(localStorage.getItem('cart'));
    this.productService.getAllByCartId(this.cart.id).subscribe((res)=>{
      console.log('entro nel metodo');
      console.log('cart', this.cart.id);
      console.log(res);
      this.productList = res;
    });
  }
  ngOnInit() {
    this.loadProducts();
  }

}
