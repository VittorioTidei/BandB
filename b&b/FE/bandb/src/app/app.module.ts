import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CalendarioComponent } from './appCalendario/calendario/calendario.component';
import { RicercaComponent } from './appCalendario/ricerca/ricerca.component';
import { PrenotazioneComponent } from './appCalendario/prenotazione/prenotazione.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';




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
    CommonModule,
    FormsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    FlatpickrModule.forRoot(),
    NgbModalModule,
    AppRoutingModule,
    NgbModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {

 }
