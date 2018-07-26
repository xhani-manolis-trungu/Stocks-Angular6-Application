import { Component, ViewChild } from '@angular/core';
import { DcdashboardComponent } from './dcdashboard/dcdashboard.component';
@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent {

@ViewChild(DcdashboardComponent) dcdashboard: DcdashboardComponent;

refresh(){
    this.dcdashboard.generateData();
}

}