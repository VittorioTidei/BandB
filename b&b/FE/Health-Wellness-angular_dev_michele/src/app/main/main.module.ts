import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from "./main-routing.module";
import { OrdersComponent } from '../orders/orders.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from '../users/users.component';
import { AccountComponent } from '../account/account.component';
import { CartComponent } from '../cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { ConfirmComponent } from './payment/confirm/confirm.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { ProductsComponent } from '../products/products.component';
import { CentersComponent } from '../centers/centers.component';
import { MyProfileComponent } from '../my-profile/my-profile.component';
import { SearchComponent } from '../search/search.component';
import { ProductorderlistComponent } from '../orders/ProductOrderListComponent/productorderlist/productorderlist.component';
import { AccountupdateComponent } from '../account/accountupdate/accountupdate.component';
import { CenterfilterComponent } from '../centers/centerfilter/centerfilter.component';
import { UsercenterComponent } from '../centers/usercenter/usercenter.component';
import { CenterviewComponent } from '../centers/usercenter/centerview/centerview.component';
import { ProductviewComponent } from '../products/productview/productview.component';
import { AddpaymentComponent } from './payment/addpayment/addpayment.component';
import { PaymentListComponent } from './payment/payment-list/payment-list.component';
import { ProductAdminComponent } from '../centers/admincenter/product-admin/product-admin.component';
import { AdmincenterComponent } from '../centers/admincenter/admincenter.component';

@NgModule({
  declarations: [
    DashboardComponent,
    OrdersComponent,
    ProductorderlistComponent,
    UsersComponent,
    AccountComponent,
    CartComponent,
    PaymentComponent,
    ConfirmComponent,
    PromotionsComponent,
    ProductsComponent,
    SearchComponent,
    CentersComponent,
    UsercenterComponent,
    MyProfileComponent,
    CenterfilterComponent,
    AccountupdateComponent,
    CenterviewComponent,
    ProductviewComponent,
    AddpaymentComponent,
    PaymentListComponent,
    ProductAdminComponent,
    AdmincenterComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule
  ]
})
export class MainModule { }
