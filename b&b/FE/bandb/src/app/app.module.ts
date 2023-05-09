
//Apps
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PrenotazioneComponent } from './prenotazione/prenotazione.component';
import { AdminComponent } from './admin/admin.component'; 
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
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    NavbarComponent,
    PrenotazioneComponent,
    AdminComponent
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
    {provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: {useUtc: true}}
  ],
  bootstrap: [AppComponent]
})

export class AppModule {

 }
