import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrenotazioneComponent } from './prenotazione/prenotazione.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {path:'', component: HomeComponentComponent},
  {path:'prenotazione',component:PrenotazioneComponent},
  {path:'admin',component:AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
