import { Component, OnInit, OnDestroy } from '@angular/core';

// interfaces for a Metric and Node data type
interface Metric {
  used: number,
  available: number
};
interface Node {
  name: string,
  cpu: Metric,
  mem: Metric
};

@Component({
  selector: 'dcdashboard',
  templateUrl: './dcdashboard.component.html',
  styleUrls: ['./dcdashboard.component.css']
})
export class DcdashboardComponent implements OnInit, OnDestroy {
  
  cpu: Metric;
  mem: Metric;
  cluster1: Node[];
  cluster2: Node[];
  interval: any;

  constructor() { }

  ngOnInit(): void {
    this.generateData();
    // everythime interval cleared and set again we generate data 
    this.interval = setInterval(() => { this.generateData();} ,1500);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  // Generates arrays for cluster 1 , cluster 2 with mem, cpu information(available and used)
  generateData(): void {
    this.cluster1 = [];
    this.cluster2 = [];
    this.cpu = { used: 0, available: 0 };
    this.mem = { used: 0, available: 0 };
    for( let i = 1; i < 4; i++) this.cluster1.push(this.randomNode(i));
    for( let i = 4; i < 7; i++) this.cluster2.push(this.randomNode(i));
  }

  // Function to give at each Node Row Component the name: node 1, node 2, node 3, node 4, node 5, node 6
  private randomNode(i): Node {

    let node = {
      name: 'node' + i,
      cpu: { available: 16, used: this.randomInteger(0, 16)},
      mem: { available: 48, used: this.randomInteger(0, 48)}
    };
    this.cpu.used += node.cpu.used;
    this.cpu.available += node.cpu.available;
    this.mem.used += node.mem.used;
    this.mem.available += node.mem.available;

    return node;
  }
  
  // Function to give random numbers for CPU & Memory
  private randomInteger(min: number = 0, max: number = 100): number {
    return Math.floor(Math.random() * max) + 1;
  }

}
