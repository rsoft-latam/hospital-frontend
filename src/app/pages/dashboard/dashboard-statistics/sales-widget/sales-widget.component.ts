import { AfterViewInit, Component, ElementRef, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import Chart from 'chart.js';
import { salesWidgetData } from './sales-widget.data';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'elastic-sales-widget',
  templateUrl: './sales-widget.component.html',
  styleUrls: ['./sales-widget.component.scss']
})
export class SalesWidgetComponent implements OnInit, AfterViewInit {

  @ViewChild('canvas') canvas: ElementRef;

  constructor(@Inject(PLATFORM_ID) private platformId: any) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const ctx = this.canvas.nativeElement.getContext('2d');

      new Chart(ctx, {
        type: 'line',
        data: salesWidgetData,
        options: {
          responsive: true,
          scales: {
            xAxes: [{
              display: false,
              stacked: true,
              gridLines: {
                color: '#F7F7F7'
              }
            }],
            yAxes: [{
              display: false,
              stacked: true,
              gridLines: {
                color: '#F7F7F7'
              },
            }]
          },
          legend: {
            display: false
          },
          tooltips: {
            mode: 'index',
            intersect: false
          },
          elements: {
            point: {
              radius: 0
            }
          }
        }
      });
    }

  }

}
