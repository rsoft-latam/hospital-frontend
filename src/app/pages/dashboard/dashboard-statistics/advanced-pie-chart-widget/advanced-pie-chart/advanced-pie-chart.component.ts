import { AfterViewInit, Component, ElementRef, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import Chart from 'chart.js';
import * as numeral from 'numeral';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'elastic-advanced-pie-chart',
  templateUrl: './advanced-pie-chart.component.html',
  styleUrls: ['./advanced-pie-chart.component.scss']
})
export class AdvancedPieChartComponent implements OnInit, AfterViewInit {

  @ViewChild('canvas') canvas: ElementRef;

  labels = ['Germany', 'France', 'USA', 'India', 'Italy', 'China'];
  backgroundColor = ['#009688', '#2196F3', '#9C27B0', '#00BCD4', '#F44336', '#FF9800'];
  data = [1012, 1656, 1132, 1025, 655, 453].sort((a, b) => b - a);
  total = this.data.reduce((pv, cv) => pv + cv, 0);

  chartData: any = {
    labels: this.labels,
    datasets: [{
      backgroundColor: this.backgroundColor,
      borderColor: 'transparent',
      data: this.data,
    }]
  };

  constructor(@Inject(PLATFORM_ID) private platformId: any) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const ctx = this.canvas.nativeElement.getContext('2d');

      const chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'doughnut',

        // The data for our dataset
        data: this.chartData,

        // Configuration options go here
        options: {
          cutoutPercentage: 70,
          legend: {
            display: false
          }
        }
      });
    }
  }

  getPercentageValue(value) {
    return numeral(value / this.total).format('0%');
  }
}
