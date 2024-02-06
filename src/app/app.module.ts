import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CrudComponent } from './dashboard/crud/crud.component';
import { CardComponent } from './dashboard/card/card.component';
import { GraficiComponent } from './dashboard/grafici/grafici.component';
import { BarraNavigazioneComponent } from './dashboard/barra-navigazione/barra-navigazione.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    NavbarComponent,
    CrudComponent,
    CardComponent,
    GraficiComponent,
    BarraNavigazioneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
