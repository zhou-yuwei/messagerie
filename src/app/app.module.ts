import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnTeteComponent } from './composants/en-tete/en-tete.component';
import { AffichageComponent } from './composants/affichage/affichage.component';
import { PersonnesComponent } from './composants/personnes/personnes.component';
import { BoutonsComponent } from './composants/boutons/boutons.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    EnTeteComponent,
    AffichageComponent,
    PersonnesComponent,
    BoutonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
