
import { Component,Input } from '@angular/core';

@Component({
    selector: 'app-currency-rates',
    template: `
      <div class="currency-rates">
        <span>US Dollar rate: {{usdRate}}</span>
        <span>Euro rate: {{eurRate}}</span>
      </div>
    `
  })
  export class CurrencyRatesComponent {
    @Input() usdRate: number=0;
    @Input() eurRate: number=0;
  }

  
