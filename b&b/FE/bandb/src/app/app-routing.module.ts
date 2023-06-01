import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrenotazioneComponent } from './prenotazione/prenotazione.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { DashboardLoginComponent } from './dashboard-login/dashboard-login.component';
import { RegisterUserComponent } from './register-user/register-user.component';

const routes: Routes = [
  {path:'', component: HomeComponentComponent},
  {path:'prenotazione',component:PrenotazioneComponent},
  {path:'login',component:UserLoginComponent},
  {path:'dashboardLogin',component:DashboardLoginComponent},
  {path:'register',component:RegisterUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
