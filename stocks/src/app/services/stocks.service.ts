import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



let stocks: Array<string> = ['AAPL', 'GOOG', 'FB', 'AMZN', 'TWTR'];
let service: string = 'https://angular2-in-action-api.herokuapp.com';

/*
* Inteface for stock object
*/
export interface StockInterface {
  symbol: string;
  lastTradePriceOnly: number;
  change: number;
  changeInPercent: number;
}

@Injectable({
  providedIn: 'root'
})

/*
* WIre up dependency injection
*/
@Injectable()
export class StocksService {

  constructor(private http: HttpClient) { }
  
  // Method to get the stocks
  get() {
    return stocks.slice();
  }
  
  // Method to add a new stock to list
  add(stock) {
    stocks.push(stock);
    return this.get();
  }

  // Method to remove stock from list
  remove(stock) {
    stocks.splice(stocks.indexOf(stock), 1);
    return this.get();
  }

  // Call HttpClient service to load stock values from API
  load(symbols) {
    if (symbols) {
      return this.http.get<Array<StockInterface>>(service + '/stocks/snapshot?symbols=' + symbols.join());
    }
  }
}

