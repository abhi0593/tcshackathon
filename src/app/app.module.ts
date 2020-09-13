import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard-front/dashboard.component';
import { MaterialModule } from './material-module';
import { HttpClientModule } from '@angular/common/http';
import { CounterpartyDetailComponent } from './dashboard/counterparty-detail/counterparty-detail.component';
import { ChartComponent } from './dashboard/counterparty-detail/chart/chart.component';
import { NewsComponent } from './dashboard/counterparty-detail/news/news.component';
import { NewsSourceComponent } from './dashboard/counterparty-detail/news-source/news-source.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CounterpartyDetailComponent,
    ChartComponent,
    NewsComponent,
    NewsSourceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
