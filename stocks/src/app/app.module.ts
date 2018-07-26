import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StocksService } from './services/stocks.service';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SummaryComponent } from './components/summary/summary/summary.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManageComponent } from './components/manage/manage.component';
import { AppRoutes } from './app.routes';
import { DcdashboardComponent } from './dcdashboard/dcdashboard.component';
import { MetricComponent } from './metric/metric.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NodesComponent } from './nodes/nodes.component';
import { NodesRowComponent } from './nodes-row/nodes-row.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    DashboardComponent,
    ManageComponent,
    DcdashboardComponent,
    MetricComponent,
    NodesComponent,
    NodesRowComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutes,
    NgbModule.forRoot()
  ],
  providers: [StocksService],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
