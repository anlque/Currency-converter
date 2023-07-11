import { Component,Input,OnChanges,SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-currency-converter',
    template: `
    <div class="currency-converter">
        <h3>Convert:</h3>
        <div class="content">
            <div class="input-select">
                <input id="inputCurr" type="number" min="0" [(ngModel)]="inputValue" (ngModelChange)="convertInput()">
                <select [(ngModel)]="inCurr" (ngModelChange)="convertInput()">
                    <option *ngFor="let curr of currencies">{{curr}}</option>
                </select>
            </div>
            <div class="input-select">
                <input id="outputCurr" type="number" min="0" [(ngModel)]="outputValue" (ngModelChange)="convertOutput()">
                <select [(ngModel)]="outCurr" (ngModelChange)="convertOutput()">
                    <option *ngFor="let curr of currencies">{{curr}}</option>
                </select>
            </div>
        </div>
    </div>
    `
  })
  
  export class CurrencyConverterComponent implements OnChanges {
    @Input() usdRate: number = 0;
    @Input() eurRate: number = 0;
    currencies: string[] = ['UAH', 'EUR', 'USD'];
    inCurr: string = "UAH";
    outCurr: string = "EUR";
    inputValue: number = 0;
    outputValue: number = 0;
    
    inrToForeignRates: { [key: string]: number } = {};
  
    ngOnChanges(changes: SimpleChanges): void {
      
      if (changes['eurRate'] || changes['usdRate']) {
        this.updateInrToForeignRates();
      }
    }
  
    private updateInrToForeignRates(): void {
      this.inrToForeignRates = {
        UAH: 1,
        EUR: this.eurRate,
        USD: this.usdRate
      };
    }
  
    convertInput(): void {
      
      const newValue = this.inputValue * this.inrToForeignRates[this.outCurr] / this.inrToForeignRates[this.inCurr];
  
      
      this.outputValue = Number(newValue.toFixed(3)) 
    }
  
    convertOutput(): void {
      const newValue = this.outputValue * this.inrToForeignRates[this.inCurr] / this.inrToForeignRates[this.outCurr];
      this.inputValue = Number(newValue.toFixed(3)) 
    }
  
  }

  