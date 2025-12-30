import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { AnimationsService } from '../../services/animations.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  animations: [
    AnimationsService.fadeInUp('0.8s', '40px'),
    trigger('fadeInDelay', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(40px)' }),
        animate('0.8s 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('fadeInDelay2', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(40px)' }),
        animate('0.8s 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('slideInRight', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(80px) scale(0.9)' }),
        animate('1.2s 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)', style({ opacity: 1, transform: 'translateX(0) scale(1)' }))
      ])
    ]),
    // Note: Infinite animations are handled via CSS (see hero.component.scss)
    trigger('float', [
      transition(':enter', [
        animate('4s ease-in-out', keyframes([
          style({ transform: 'translateY(0px)', offset: 0 }),
          style({ transform: 'translateY(-20px)', offset: 0.5 }),
          style({ transform: 'translateY(0px)', offset: 1 })
        ]))
      ])
    ]),
    trigger('pulse', [
      transition(':enter', [
        animate('2.5s ease-in-out', keyframes([
          style({ transform: 'scale(1)', offset: 0 }),
          style({ transform: 'scale(1.05)', offset: 0.5 }),
          style({ transform: 'scale(1)', offset: 1 })
        ]))
      ])
    ]),
    trigger('badgePulse', [
      transition(':enter', [
        animate('2s ease-in-out', keyframes([
          style({ transform: 'scale(1)', boxShadow: '0 0 0 0 rgba(220, 38, 38, 0.4)', offset: 0 }),
          style({ transform: 'scale(1.05)', boxShadow: '0 0 0 10px rgba(220, 38, 38, 0)', offset: 0.5 }),
          style({ transform: 'scale(1)', boxShadow: '0 0 0 0 rgba(220, 38, 38, 0)', offset: 1 })
        ]))
      ])
    ]),
    trigger('buttonHover', [
      state('normal', style({ transform: 'translateY(0)' })),
      state('hover', style({ transform: 'translateY(-3px)' })),
      transition('normal => hover', animate('0.3s ease-out')),
      transition('hover => normal', animate('0.3s ease-out'))
    ])
  ]
})
export class HeroComponent {
  rating = 5;
  customers = 1000;
  buttonState = 'normal';
  buttonState2 = 'normal';
}
