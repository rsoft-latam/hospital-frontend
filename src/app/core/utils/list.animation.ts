import { animate, sequence, style, transition, trigger } from '@angular/animations';


export const LIST_FADE_ANIMATION = [
  trigger('listFade', [
    transition(':leave', [
      style({ height: '*', opacity: '1', transform: 'translateX(0)' }),
      sequence([
        animate('.25s ease', style({ height: '*', opacity: '.2', transform: 'translateX(20px)'  })),
        animate('.1s ease', style({ height: '0', opacity: 0, transform: 'translateX(20px)'  }))
      ])
    ]),
    transition(':enter', [
      style({ height: '0', opacity: '0', transform: 'translateX(20px)' }),
      sequence([
        animate('.1s ease', style({ height: '*', opacity: '.2', transform: 'translateX(20px)'  })),
        animate('.35s ease', style({ height: '*', opacity: 1, transform: 'translateX(0)'  }))
      ])
    ])
  ])
];
