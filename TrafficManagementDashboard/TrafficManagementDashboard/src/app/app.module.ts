import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TrafficLightsComponent } from './traffic-lights/traffic-lights.component';
import { RecentIncidentsComponent } from './recent-incidents/recent-incidents.component';
import { DataAnalyticsComponent } from './data-analytics/data-analytics.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TrafficLightsComponent,
    RecentIncidentsComponent,
    DataAnalyticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
