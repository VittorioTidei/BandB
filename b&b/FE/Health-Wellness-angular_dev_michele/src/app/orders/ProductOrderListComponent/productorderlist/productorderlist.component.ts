import { Component, OnInit, Input } from '@angular/core';
import { ProductOrderListDTO } from 'src/dto/productOrderListdto';
import { ProductCartListDTO } from 'src/dto/productcartlistdto';
import { OrderService } from 'src/service/order.service';

@Component({
  selector: 'app-productorderlist',
  templateUrl: './productorderlist.component.html',
  styleUrls: ['./productorderlist.component.css']
})
export class ProductorderlistComponent implements OnInit {
  @Input() orderId;
  productOrderList : ProductOrderListDTO[];
  p : ProductOrderListDTO;
  constructor(private service : OrderService) { 
  }

  ngOnInit() {
  }
  getAllByUserId(orderId : number){
    this.service.getAllByOrderId(orderId).subscribe((response)=>{  
    if (response != null) {
    this.productOrderList=response;
    }
  });
  }

}
