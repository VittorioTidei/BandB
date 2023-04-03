import { Component, ContentChildrenDecorator, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { OrderDTO } from 'src/dto/orderdto';
import { CenterDTO } from 'src/dto/centerdto';
import { CartDTO } from 'src/dto/cartdto';
import { PaymentTypeDTO } from 'src/dto/paymenttypedto';
import { UserDTO } from 'src/dto/userdto';
import { OrderService } from 'src/service/order.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit, OnChanges {

  @Input () pino;
  orders: OrderDTO[];
  ordertoinsert: OrderDTO = new OrderDTO();
  user: UserDTO;
  currentuser: UserDTO;
  center: CenterDTO;
  payment: PaymentTypeDTO;
  cart : CartDTO;
  show : boolean

  constructor(private service: OrderService) {
    this.show = false;
    if (this.pino='account'){
      
      this.currentuser =JSON.parse(localStorage.getItem('currentUser'));
      this.getAllByUserId(this.currentuser);
      console.log(this.orders);
      // this.currentuser = JSON.parse(localStorage.getItem('currentUser'));
      //  this.orders = this.currentuser.orders;
    }
   }

  ngOnInit () {


  }
  showProductsList(){
    if(this.show){
      this.show = false;
      console.log(this.show);
    }
    else{
      console.log('sonoqui');
      this.show = true;
      console.log(this.show);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.pino);

  }
  getOrders() {
    this.service.getAll().subscribe(orders => this.orders = this.orders);
  }
  // delete(order: OrderDTO) {
  //   this.service.delete(order.id).subscribe(() => this.getOrders());
  // }
  // update(order: OrderDTO) {
  //   this.service.update(order).subscribe(() => this.getOrders());
  // }
  // insert(order: OrderDTO) {
  //   this.service.insert(order).subscribe(() => this.getOrders());
  // }
  getAllByUserId(user : UserDTO){
    this.service.getAllByUserId(user.id).subscribe((response)=>{  
    if (response != null) {
    this.orders = response;
    }
  });
  }

  // convert(user,center,payment,cart){
  //   this.service.convert(user.id,center.id,payment.id,cart.id).subscribe(()=>this.getOrders)
  // }

  // clear(){
  //   this.ordertoinsert = new OrderDTO();
  // }
}
