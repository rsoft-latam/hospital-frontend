import { AfterViewInit, Component, ElementRef, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import Chart from 'chart.js';
import { recentsalesWidgetData } from './recentsales-widget.data';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'elastic-recentsales-widget',
  templateUrl: './recentsales-widget.component.html',
  styleUrls: ['./recentsales-widget.component.scss']
})
export class RecentsalesWidgetComponent implements OnInit, AfterViewInit {

  sales: any[] = [ ];
  @ViewChild('canvas') canvas: ElementRef;

  constructor(@Inject(PLATFORM_ID) private platformId: any) { }

  ngOnInit() {
    this.sales = [
      {
        image: 'assets/img/demo/avatars/1.png',
        itemName: 'Design Lamp',
        value: 39.54,
        timeAgo: '2 minutes ago'
      },
      {
        image: 'assets/img/demo/avatars/2.png',
        itemName: 'Apple MacBook',
        value: 699,
        timeAgo: '19 minutes ago'
      },
      {
        image: 'assets/img/demo/avatars/3.png',
        itemName: 'Apple iPhone 8',
        value: 3113.12,
        timeAgo: '2 hours ago'
      },
      {
        image: 'assets/img/demo/avatars/4.png',
        itemName: 'USB-C Cable',
        value: 87.58,
        timeAgo: '6 hours ago'
      },
      {
        image: 'assets/img/demo/avatars/5.png',
        itemName: 'Lighting Cable',
        value: 24.99,
        timeAgo: '13 hours ago'
      }
    ];
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const ctx = this.canvas.nativeElement.getContext('2d');

      new Chart(ctx, {
        type: 'line',
        data: recentsalesWidgetData,
        options: {
          responsive: true,
          scales: {
            xAxes: [{
              display: false,
              gridLines: {
                color: '#F7F7F7'
              }
            }],
            yAxes: [{
              display: false,
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
