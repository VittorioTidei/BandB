import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartDTO } from 'src/dto/cartdto';
import { ProductDTO } from 'src/dto/productdto';
import { CartService } from 'src/service/cart.service';
import { ProductService } from 'src/service/product.service';

@Component({
  selector: 'app-productview',
  templateUrl: './productview.component.html',
  styleUrls: ['./productview.component.css']
})
export class ProductviewComponent implements OnInit {

  cart:CartDTO;
  id : number;
  product : ProductDTO;
  constructor( private cartService : CartService,private productService : ProductService, private router : ActivatedRoute) {

  }
  ngOnInit() {
    this.retriveId();
  }
  productRead(id : number){
    this.productService.read(id).subscribe((res)=>{
      if(res != null){
        this.product = res;
      }
    });
  }
  insertToCart(qt: number){
    //add a method for counting the qt
    this.cart = JSON.parse(localStorage.getItem('cart'));
    this.cartService.updateProductInCart(this.cart.id, this.id,qt).subscribe((res)=>{
      if(res!=null){
        console.log(res);
      }
    });
  }

  retriveId(){
    this.router.params.subscribe( params =>{
      this.id = params['id'];
    });
    this.productRead(this.id);
  }
}
