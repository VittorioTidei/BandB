import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeModule } from './home/home.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './layout/main/main.component';
import {ReactiveFormsModule} from "@angular/forms";
import { DropdownComponent } from './dropdown/dropdown.component';
import { NgbDropdownConfig, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchComponent } from './search/search.component';
import {UserDTO} from "../dto/userdto";
import { UsercenterComponent } from './centers/usercenter/usercenter.component';
import { AccountupdateComponent } from './account/accountupdate/accountupdate.component';
import { CenterComponent } from './center/center.component';
//import { SearchComponent } from './search/search.component';


/** 
 * Modulo principale dell'applicazione. Qui vengono importati i moduli secondari. L'UNICA component
 * da dichiare qui è l'AppComponent, tutte le altre devono essere dichiarate nel loro modulo e questo importato
 * qui.
 * 
 * @author Vittorio Valent
*/
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    DropdownComponent,
    CenterComponent,
//    SearchComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbDropdownModule,
    HomeModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
