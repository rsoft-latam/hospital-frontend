import { AfterViewInit, Component, ElementRef, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import Chart from 'chart.js';
import { barchartWidgetData } from './barchart-widget.data';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'elastic-barchart-widget',
  templateUrl: './barchart-widget.component.html',
  styleUrls: ['./barchart-widget.component.scss']
})
export class BarchartWidgetComponent implements OnInit, AfterViewInit {

  @ViewChild('canvas') canvas: ElementRef;

  constructor(@Inject(PLATFORM_ID) private platformId: any) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const ctx = this.canvas.nativeElement.getContext('2d');

      new Chart(ctx, {
        type: 'bar',
        data: barchartWidgetData,
        options: {
          responsive: true,
          scales: {
            xAxes: [{
              stacked: true,
              gridLines: {
                color: '#F7F7F7'
              }
            }],
            yAxes: [{
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
          }
        }
      });
    }

  }

}
