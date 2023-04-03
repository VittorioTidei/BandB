import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CenterDTO } from 'src/dto/centerdto';
import { ProductDTO } from 'src/dto/productdto';
import { ProductService } from 'src/service/product.service';

@Component({
  selector: 'app-product-admin',
  templateUrl: './product-admin.component.html',
  styleUrls: ['./product-admin.component.css']
})
export class ProductAdminComponent implements OnInit {

  localdate : Date;
  product : ProductDTO;
  productList : ProductDTO[];
  center : CenterDTO;
  id : number;
  update : boolean;
  add : boolean;

  constructor(private productService: ProductService, private router : ActivatedRoute) {

  }

  ngOnInit() {
    this.update=false;
    this.add=false;
    this.retriveId();
  }
  //creare un metodo per ricevere le informazioni dal link per il centro selezionato e passarle al center.
  addProduct(a: NgForm){
    this.localdate = new Date();
    this.product = new ProductDTO(a.value.title,a.value.description,a.value.price,a.value.discount,a.value.qty,a.value.starDiscountDate,a.value.endDiscountDate,true,this.localdate,this.localdate,this.center,a.value.treatment,a.value.currentPrice);
    this.productService.insert(this.product)
  }
  retriveId(){
    this.router.params.subscribe(params=>{
      this.id = params['id'];
      console.log(this.id);
      this.getAllProduct(this.id);
    })
  }

  getAllProduct(id: number){
    this.productService.getAllByCenterId(id).subscribe((res)=>{
      this.productList= res;
    })
  }
  deleteProduct(id: number){
    this.productService.delete(id);
  }
  avaibleAdd(){
    console.log(this.add);
    if(this.add == false){
      this.add = true;
    }
    else{
      this.add = false;
    }
  }
  
  avaibleUpdate(){
    console.log(this.update);
    if(this.update == false){

      this.update = true;
    }
    else{
      this.update = false;
    }
  }
  updateProduct(product : ProductDTO,f :NgForm): void {
    this.localdate = new Date();
    product.currentPrice = f.value.currentPrice;
    product.description = f.value.description;
    product.discount = f.value.discount;
    product.price = f.value.discount;
    product.qty = f.value.qty;
    product.updatedAt= this.localdate;
    this.productService.update(product);
  }

}
