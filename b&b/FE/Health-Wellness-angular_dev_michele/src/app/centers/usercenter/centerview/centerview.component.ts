import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd ,Router } from '@angular/router';
import { CartDTO } from 'src/dto/cartdto';
import { CenterDTO } from 'src/dto/centerdto';
import { ProductDTO } from 'src/dto/productdto';
import { UserDTO } from 'src/dto/userdto';
import { CartService } from 'src/service/cart.service';
import { CenterService } from 'src/service/center.service';
import { ProductService } from 'src/service/product.service';

@Component({
  selector: 'app-centerview',
  templateUrl: './centerview.component.html',
  styleUrls: ['./centerview.component.css']
})
export class CenterviewComponent implements OnInit {

  numbers : number[] = [];
  center : CenterDTO;
  products : ProductDTO[];
    user : UserDTO;
    cart : CartDTO;
    i: number;
  id : number;
  constructor(private centerService : CenterService, private productService : ProductService, private router : ActivatedRoute, private cartService : CartService) {
  this.cart = JSON.parse(localStorage.getItem('cart'));
  }
  retriveList(itemqt : number){
    console.log(itemqt);
    console.log(this.numbers);
    
    for(this.i =1; this.i<= itemqt; this.i++){
      this.numbers.push(this.i);
    }
  }
  retriveId(){
    this.router.params.subscribe(params=>{
      this.id = params['id'];
      console.log(this.id);
      this.centerRead(this.id);
      this.productList(this.id);
    })
  }

  centerRead(id : number){
    this.centerService.read(id).subscribe((result)=>{
      if(result != null){
        this.center = result;
      }
    });
  }
  productList(id : number){
    this.productService.getAllByCenterId(id).subscribe((result)=>{
      if(result != null){
        this.products = result;
      }
    });
  }
  addProductToCart(item : number, qt : number){
    console.log(this.cart.id);
    console.log(item);
    console.log(qt);
    this.cartService.updateProductInCart(this.cart.id,item,qt).subscribe((res)=>{
      if(res!=null){
        console.log(res);
      }
    });
  }
  ngOnInit() {
    this.retriveId();
  }

}
