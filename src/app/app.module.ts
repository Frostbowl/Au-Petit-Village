import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from "@angular/common/locales/fr";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';


import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SortByPricePipe } from './sort-by-price.pipe';

registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    FooterComponent,
    HomeComponent,
    SortByPricePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'fr-FR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
