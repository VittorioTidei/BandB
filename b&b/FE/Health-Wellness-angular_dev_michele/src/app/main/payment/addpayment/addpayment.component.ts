import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartDTO } from 'src/dto/cartdto';
import { PaymentTypeDTO } from 'src/dto/paymenttypedto';
import { ProductCartListDTO } from 'src/dto/productcartlistdto';
import { ProductDTO } from 'src/dto/productdto';
import { UserDTO } from 'src/dto/userdto';
import { PaymentTypeService } from 'src/service/paymenttype.service';
import { NgForm } from '@angular/forms';
import { ProductService } from 'src/service/product.service';

@Component({
  selector: 'app-addpayment',
  templateUrl: './addpayment.component.html',
  styleUrls: ['./addpayment.component.css']
})
export class AddpaymentComponent implements OnInit {
  ProductCartList : ProductCartListDTO[];
  cart: CartDTO;
  user: UserDTO;
  id: number;
  currentId: number;
  product: ProductDTO;
  paymentDTO: PaymentTypeDTO;
  paymentList : PaymentTypeDTO[];
  paymentId: number;
  cartId: number;
  constructor(    private service: PaymentTypeService,
    private productService: ProductService,
    private router: ActivatedRoute,
    ) {     this.cart = JSON.parse(localStorage.getItem("cart"));
    this.user = JSON.parse(localStorage.getItem("user"));
  }

  ngOnInit() {
    this.retrivePaymentId();
  }
  retrivePaymentId(){
    this.service.getAll().subscribe((res)=>{
      this.paymentList =res;
    });
  }
  addPayment(f : NgForm) : void{
    this.paymentDTO = new PaymentTypeDTO(f.value.name, f.value.data);
    this.service.insert(this.paymentDTO);
  }
}

function retrivePaymentType() {
    throw new Error('Function not implemented.');
  }
