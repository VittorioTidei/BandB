import { Component, OnInit } from '@angular/core';
import {ProductDTO} from "../../dto/productdto";
import {Router} from "@angular/router";
import {ProductService} from "../../service/product.service";
import {UserDTO} from "../../dto/userdto";
import { CartService } from 'src/service/cart.service';
import { CartDTO } from 'src/dto/cartdto';
import { CategoryService } from 'src/service/category.service';
import { TreatmentService } from 'src/service/treatment.service';
import { TreatmentDTO } from 'src/dto/treatmentdto';
import { CategoryDTO } from 'src/dto/categorydto';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products : ProductDTO[];
  currentUser: UserDTO;
  cart : CartDTO;
  categoryList : CategoryDTO[];
  treatmentList: TreatmentDTO[];
  category : CategoryDTO;
  newproducts: ProductDTO[];
  constructor(
      private service: ProductService,
      private router: Router,
      private cartService : CartService,
      private Categoryservice : CategoryService, private treatmentservice: TreatmentService
  ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.cart = JSON.parse(localStorage.getItem('cart'));
    this.list();
  }

  ngOnInit() {
    this.getAllCategory();
    this.getAllTreatment();
  }

  getAllCategory(){
    this.Categoryservice.getAll().subscribe((response)=>{
      if (response != null){
        this.categoryList = response;
      }
    });
    
  }
  main(option : TreatmentDTO){
    for(let p of this.products){
      if (p.treatment == option){
        this.newproducts.push(p);
      } 
    }
    this.products = this.newproducts;
  }

  getAllTreatment(){
    this.treatmentservice.getAll().subscribe((response)=>{
      if (response != null){
        this.treatmentList = response;
      }
    })
    
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

  list() : void {
    this.service.getAllByAdminNot(this.currentUser.id).subscribe((response) => {
      this.products = response;
      console.log(this.products);
    });
  }
}
