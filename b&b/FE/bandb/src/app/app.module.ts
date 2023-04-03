import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CalendarioComponent } from './appCalendario/calendario/calendario.component';
import { RicercaComponent } from './appCalendario/ricerca/ricerca.component';
import { PrenotazioneComponent } from './appCalendario/prenotazione/prenotazione.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    NavbarComponent,
    CalendarioComponent,
    RicercaComponent,
    PrenotazioneComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
