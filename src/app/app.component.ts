import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'currency-converter';

  isLoading: boolean = false;
  usdRate: number = 0; 
  eurRate: number = 0;

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.isLoading = true;

   
    this.http.get<any>('https://api.exchangerate.host/latest?base=UAH').subscribe({
      next: (response) => {
        
        this.usdRate = Number(response.rates.USD.toFixed(3));
        this.eurRate = Number(response.rates.EUR.toFixed(3));
        this.isLoading = false;
      },
      error: (error) => {
        console.log('Ошибка при получении курсов валют:', error);
        this.isLoading = false;
      }
    });
  }
}


