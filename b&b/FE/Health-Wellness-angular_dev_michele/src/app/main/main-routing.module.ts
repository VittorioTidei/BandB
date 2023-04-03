import { compileBaseDefFromMetadata } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from '../account/account.component';
import { CartComponent } from '../cart/cart.component';
import { CentersComponent } from '../centers/centers.component';
import { MyProfileComponent } from '../my-profile/my-profile.component';
import { OrdersComponent } from '../orders/orders.component';
import { ProductsComponent } from '../products/products.component';
import { UsersComponent } from '../users/users.component';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ConfirmComponent } from './payment/confirm/confirm.component';
import { PaymentComponent } from './payment/payment.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { CenterviewComponent } from '../centers/usercenter/centerview/centerview.component';
import { AddpaymentComponent } from './payment/addpayment/addpayment.component';
import { AdmincenterComponent } from '../centers/admincenter/admincenter.component';
import { ProductAdminComponent } from '../centers/admincenter/product-admin/product-admin.component';

const routes: Routes = [
  {path: 'main', component: DashboardComponent, children:[
    {path: '', component: DashboardComponent},
    {path:'product/:id', component: ProductsComponent}
  ]},
  {path: 'orders', component :OrdersComponent},
  {path: 'centers', component :CentersComponent},
  {path: 'centers/adminCenter', component :AdmincenterComponent},
  {path: 'Products/adminCenter/:id', component :ProductAdminComponent},
    {path: 'centers/center/:id', component: CenterviewComponent},
  {path: 'users', component: UsersComponent, children:[
    {path:':id', component: UsersComponent}
  ]},
  {path:'account', component: AccountComponent, children:[
    {path:'center',component: CentersComponent},
    {path:'',component: MyProfileComponent},
    {path:'orders', component: OrdersComponent}
  ]},
  {path : 'cart', component: CartComponent},
  {path : 'payment/:id', component: PaymentComponent, children:[
    {path:'confirm', component: ConfirmComponent},
    {path: 'addPayment', component : AddpaymentComponent}
  ]},
  {path:'promotion', component: PromotionsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
