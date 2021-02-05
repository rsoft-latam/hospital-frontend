import { animate, state, style, transition, trigger } from '@angular/animations';

export const SLIDE_RIGHT_ROUTE_TRANSITION = [
  trigger('routeTransition', [
    state('void', style({ width: '100%', height: '100%'}) ),
    state('*', style({ width: '100%', height: '100%'}) ),
    transition(':enter', [
      style({
        transform: 'translateX(-100%)',
        position: 'fixed'
      }),
      animate('0.5s cubic-bezier(0.35, 0, 0.25, 1)', style({transform: 'translateX(0%)'}))
    ]),
    transition(':leave', [
      style({
        transform: 'translateX(0%)',
        position: 'fixed'
      }),
      animate('0.5s cubic-bezier(0.35, 0, 0.25, 1)', style({transform: 'translateX(100%)'}))
    ])
  ])
];

export const FADE_IN_OUT_ROUTE_TRANSITION = [
  trigger('routeTransition', [
    state('void', style({ width: '100%', height: '100%', display: 'block', position: 'absolute' }) ),
    state('*', style({ width: '100%', height: '100%', display: 'block', position: 'absolute' }) ),
    transition(':enter', [
      style({
      })
    ]),
    transition(':leave', [
      style({
        opacity: '1',
        overflow: 'hidden'
      }),
      animate('0.5s linear', style({
        opacity: '0',
        overflow: 'hidden'
      }))
    ])
  ])
];

export const FADE_IN_ROUTE_TRANSITION = [
  trigger('routeTransition', [
    state('void', style({ width: '100%', height: '100%', display: 'block', position: 'absolute' }) ),
    state('*', style({ width: '100%', height: '100%', display: 'block', position: 'absolute' }) ),
    transition(':enter', [
      style({
        opacity: '0',
      }),
      animate('0.5s linear', style({
        opacity: '1',
      }))
    ]),
    transition(':leave', [

    ])
  ])
];

export const ROUTE_TRANSITION = FADE_IN_ROUTE_TRANSITION;
