import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TrafficLightsComponent } from './traffic-lights/traffic-lights.component';
import { RecentIncidentsComponent } from './recent-incidents/recent-incidents.component';
import { DataAnalyticsComponent } from './data-analytics/data-analytics.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'traffic-lights', component: TrafficLightsComponent },
  { path: 'recent-incidents', component: RecentIncidentsComponent },
  { path: 'data-analytics', component: DataAnalyticsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
