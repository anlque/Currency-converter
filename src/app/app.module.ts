import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CurrencyConverterComponent } from './currency-converter.component';
import { NgModule } from '@angular/core';
import { CurrencyRatesComponent } from './currency-rates.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule], 
  declarations: [AppComponent,CurrencyRatesComponent, CurrencyConverterComponent], 
  bootstrap: [AppComponent]
})
export class AppModule { }
