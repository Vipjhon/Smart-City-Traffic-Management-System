import { Component, OnInit } from '@angular/core';
import { TrafficService } from '../traffic.service';
import { Chart } from 'chart.js'; 

@Component({
  selector: 'app-data-analytics',
  templateUrl: './data-analytics.component.html'
})
export class DataAnalyticsComponent implements OnInit {
  trafficData: any;

  constructor(private trafficService: TrafficService) { }

  ngOnInit(): void {
    this.trafficService.getTrafficData().subscribe(data => {
      this.trafficData = data;
      this.renderChart();
    });
  }

  renderChart(): void {
    const ctx = document.getElementById('trafficFlowChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.trafficData.map((item: any) => item.date), // Adjust according to your data structure
        datasets: [{
          label: 'Traffic Flow',
          data: this.trafficData.map((item: any) => item.flow),
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
