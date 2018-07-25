import { Component, OnInit } from '@angular/core';
import { StocksService } from '../../services/stocks.service';

@Component({
  selector: 'manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent {

  //Symbols array retrieved from stockservice
  symbols: Array<string>;
  //stock property to hold input value
  stock: string;
  
  //Asynchronous reqeust to get existing data from memory
  //,so we dont ne OnInit lifecycle hook.
  constructor(private service: StocksService) {
    this.symbols = service.get();
   }

  //Method to Add stocks to the list
  add(){
    this.symbols = this.service.add(this.stock.toUpperCase());
    this.stock= '';
  }
  
  //Method to Remove stocks from the list
  remove(symbol){
    this.symbols = this.service.remove(symbol);
  }
}
