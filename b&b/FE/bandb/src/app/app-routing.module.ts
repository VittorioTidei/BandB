import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarioComponent } from './appCalendario/calendario/calendario.component';
import { HomeComponentComponent } from './home-component/home-component.component';

const routes: Routes = [
  {path:'', component: HomeComponentComponent},
  {path:'nomePath',component:CalendarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
