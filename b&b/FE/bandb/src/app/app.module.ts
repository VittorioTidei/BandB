
//Apps
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PrenotazioneComponent } from './prenotazione/prenotazione.component';
//Modules
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
//Angular MATERIAL
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { UserLoginComponent } from './user-login/user-login.component';
import { DashboardLoginComponent } from './dashboard-login/dashboard-login.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { RegisterUserCompleteComponent } from './register-user-complete/register-user-complete.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    NavbarComponent,
    PrenotazioneComponent,
    UserLoginComponent,
    DashboardLoginComponent,
    RegisterUserComponent,
    RegisterUserCompleteComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    NgbModalModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatMomentDateModule
    ],
  providers: [
    {provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: {useUtc: true}},
    {provide: MAT_DATE_LOCALE, useValue: 'it'}
  ],
  bootstrap: [AppComponent]
})

export class AppModule {

 }
