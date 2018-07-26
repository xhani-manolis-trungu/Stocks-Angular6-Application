import { Component, OnInit } from '@angular/core';

@Component({
  //DONT look for element called app-nodes 
  // BUT LOOK for attribute app-nodes, so that it can take any valid CSS selector
  // attribute CSS selector to target an element with the app-nodes attribute
  selector: '[app-nodes]',
  templateUrl: './nodes.component.html',
  styleUrls: ['./nodes.component.css']
})
export class NodesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
