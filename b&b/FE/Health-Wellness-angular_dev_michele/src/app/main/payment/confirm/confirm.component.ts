import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { UserService } from "src/service/user.service";
import { ActivatedRoute } from "@angular/router";
import { CartDTO } from "src/dto/cartdto";
import { UserDTO } from "src/dto/userdto";
import { CartService } from "src/service/cart.service";
import { PaymentTypeService } from "src/service/paymenttype.service";
import { CenterDTO } from "src/dto/centerdto";
import { ProductDTO } from "src/dto/productdto";
import { CenterService } from "src/service/center.service";
import { ProductService } from "src/service/product.service";
import { OrderService } from "src/service/order.service";
import { ProductCartListDTO } from "src/dto/productcartlistdto";
import { PaymentTypeDTO } from "src/dto/paymenttypedto";
@Component({
  selector: "app-confirm",
  templateUrl: "./confirm.component.html",
  styleUrls: ["./confirm.component.css"],
})
export class ConfirmComponent implements OnInit {
  ProductCartList : ProductCartListDTO[];
  cart: CartDTO;
  user: UserDTO;
  id: number;
  currentId: number;
  product: ProductDTO;
  userId: number;
  paymentDTO: PaymentTypeDTO;
  centerId: number;
  paymentId: number;
  cartId: number;
  checkconfirm: boolean = false;

  constructor(
    private service: PaymentTypeService,
    private CenterService: CenterService,
    private productService: ProductService,
    private OrderService: OrderService,
    private router: ActivatedRoute,
  ) {
    this.cart = JSON.parse(localStorage.getItem("cart"));
    this.user = JSON.parse(localStorage.getItem("user"));
  }
  ngOnInit() {
    this.retriveId();
    this.retrivePaymentId();
    this.productRead(this.currentId );
  }
  paymentRead(id : number){
    this.service.read(id).subscribe((res) => {
      if (res != null) {
        this.paymentDTO = res;
        this.paymentId = res.id;
      }
    }); 
  }
  
  productRead(id: number) {
    this.productService.getAllByCartId(id).subscribe((res) => {
      if (res != null) {
        this.ProductCartList = res;
      }
    });
  }
  convert() {
    this.OrderService.convert(this.userId, this.centerId, this.paymentId, this.cartId).subscribe((res)=>{
      this.checkconfirm = true;
      console.log(res);
    });
  }
  retriveId(){
    this.router.params.subscribe( params =>{
      this.id = params['id'];
    });
    this.productRead(this.id);
  }
  retrivePaymentId(){
    this.router.params.subscribe( params =>{
      this.paymentId = params['paymentId'];
    });
  }
}
