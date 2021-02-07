import { animate, state, style, transition, trigger } from '@angular/animations';

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
