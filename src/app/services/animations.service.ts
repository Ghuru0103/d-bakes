import { Injectable } from '@angular/core';
import { 
  trigger, 
  state, 
  style, 
  transition, 
  animate, 
  keyframes,
  query,
  stagger,
  AnimationMetadata,
  AnimationTriggerMetadata
} from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class AnimationsService {

  // Professional fade animations
  static fadeIn(duration: string = '0.6s'): AnimationTriggerMetadata {
    return trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(`${duration} ease-out`, style({ opacity: 1 }))
      ])
    ]);
  }

  static fadeInUp(duration: string = '0.8s', distance: string = '30px'): AnimationTriggerMetadata {
    return trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: `translateY(${distance})` }),
        animate(`${duration} cubic-bezier(0.25, 0.46, 0.45, 0.94)`, style({ 
          opacity: 1, 
          transform: 'translateY(0)' 
        }))
      ])
    ]);
  }

  static fadeInDown(duration: string = '0.6s', distance: string = '20px'): AnimationTriggerMetadata {
    return trigger('fadeInDown', [
      transition(':enter', [
        style({ opacity: 0, transform: `translateY(-${distance})` }),
        animate(`${duration} ease-out`, style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]);
  }

  static fadeInLeft(duration: string = '0.8s', distance: string = '50px'): AnimationTriggerMetadata {
    return trigger('fadeInLeft', [
      transition(':enter', [
        style({ opacity: 0, transform: `translateX(-${distance})` }),
        animate(`${duration} cubic-bezier(0.25, 0.46, 0.45, 0.94)`, style({ 
          opacity: 1, 
          transform: 'translateX(0)' 
        }))
      ])
    ]);
  }

  static fadeInRight(duration: string = '0.8s', distance: string = '50px'): AnimationTriggerMetadata {
    return trigger('fadeInRight', [
      transition(':enter', [
        style({ opacity: 0, transform: `translateX(${distance})` }),
        animate(`${duration} cubic-bezier(0.25, 0.46, 0.45, 0.94)`, style({ 
          opacity: 1, 
          transform: 'translateX(0)' 
        }))
      ])
    ]);
  }

  // Scale animations
  static scaleIn(duration: string = '0.5s', scale: number = 0.8): AnimationTriggerMetadata {
    return trigger('scaleIn', [
      transition(':enter', [
        style({ opacity: 0, transform: `scale(${scale})` }),
        animate(`${duration} cubic-bezier(0.34, 1.56, 0.64, 1)`, style({ 
          opacity: 1, 
          transform: 'scale(1)' 
        }))
      ])
    ]);
  }

  static zoomIn(duration: string = '0.6s'): AnimationTriggerMetadata {
    return trigger('zoomIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.3)' }),
        animate(`${duration} cubic-bezier(0.34, 1.56, 0.64, 1)`, style({ 
          opacity: 1, 
          transform: 'scale(1)' 
        }))
      ])
    ]);
  }

  // Slide animations
  static slideInUp(duration: string = '0.8s'): AnimationTriggerMetadata {
    return trigger('slideInUp', [
      transition(':enter', [
        style({ transform: 'translateY(100%)', opacity: 0 }),
        animate(`${duration} cubic-bezier(0.25, 0.46, 0.45, 0.94)`, style({ 
          transform: 'translateY(0)', 
          opacity: 1 
        }))
      ])
    ]);
  }

  static slideInDown(duration: string = '0.8s'): AnimationTriggerMetadata {
    return trigger('slideInDown', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)', opacity: 0 }),
        animate(`${duration} cubic-bezier(0.25, 0.46, 0.45, 0.94)`, style({ 
          transform: 'translateY(0)', 
          opacity: 1 
        }))
      ])
    ]);
  }

  // Rotate animations
  static rotateIn(duration: string = '0.8s'): AnimationTriggerMetadata {
    return trigger('rotateIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'rotate(-200deg) scale(0.5)' }),
        animate(`${duration} cubic-bezier(0.34, 1.56, 0.64, 1)`, style({ 
          opacity: 1, 
          transform: 'rotate(0deg) scale(1)' 
        }))
      ])
    ]);
  }

  // Bounce animations
  static bounceIn(duration: string = '1s'): AnimationTriggerMetadata {
    return trigger('bounceIn', [
      transition(':enter', [
        animate(`${duration} cubic-bezier(0.68, -0.55, 0.265, 1.55)`, keyframes([
          style({ opacity: 0, transform: 'scale(0.3)', offset: 0 }),
          style({ transform: 'scale(1.05)', offset: 0.5 }),
          style({ transform: 'scale(0.9)', offset: 0.7 }),
          style({ opacity: 1, transform: 'scale(1)', offset: 1 })
        ]))
      ])
    ]);
  }

  // Stagger animations for lists
  static staggerFadeIn(duration: string = '0.5s', staggerDelay: number = 100): AnimationTriggerMetadata {
    return trigger('staggerFadeIn', [
      transition(':enter', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(`${staggerDelay}ms`, [
            animate(`${duration} ease-out`, style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ]);
  }

  // Flip animations
  static flipInX(duration: string = '0.8s'): AnimationTriggerMetadata {
    return trigger('flipInX', [
      transition(':enter', [
        animate(`${duration}`, keyframes([
          style({ opacity: 0, transform: 'rotateX(90deg)', offset: 0 }),
          style({ opacity: 1, transform: 'rotateX(0deg)', offset: 1 })
        ]))
      ])
    ]);
  }

  static flipInY(duration: string = '0.8s'): AnimationTriggerMetadata {
    return trigger('flipInY', [
      transition(':enter', [
        animate(`${duration}`, keyframes([
          style({ opacity: 0, transform: 'rotateY(90deg)', offset: 0 }),
          style({ opacity: 1, transform: 'rotateY(0deg)', offset: 1 })
        ]))
      ])
    ]);
  }

  // Pulse animation - Note: For infinite animations, use CSS instead
  static pulse(duration: string = '2s'): AnimationTriggerMetadata {
    return trigger('pulse', [
      transition(':enter', [
        animate(`${duration} ease-in-out`, keyframes([
          style({ transform: 'scale(1)', offset: 0 }),
          style({ transform: 'scale(1.05)', offset: 0.5 }),
          style({ transform: 'scale(1)', offset: 1 })
        ]))
      ])
    ]);
  }

  // Float animation - Note: For infinite animations, use CSS instead
  static float(duration: string = '3s'): AnimationTriggerMetadata {
    return trigger('float', [
      transition(':enter', [
        animate(`${duration} ease-in-out`, keyframes([
          style({ transform: 'translateY(0px)', offset: 0 }),
          style({ transform: 'translateY(-20px)', offset: 0.5 }),
          style({ transform: 'translateY(0px)', offset: 1 })
        ]))
      ])
    ]);
  }

  // Shake animation
  static shake(duration: string = '0.5s'): AnimationTriggerMetadata {
    return trigger('shake', [
      transition('* => *', [
        animate(`${duration}`, keyframes([
          style({ transform: 'translateX(0)', offset: 0 }),
          style({ transform: 'translateX(-10px)', offset: 0.1 }),
          style({ transform: 'translateX(10px)', offset: 0.2 }),
          style({ transform: 'translateX(-10px)', offset: 0.3 }),
          style({ transform: 'translateX(10px)', offset: 0.4 }),
          style({ transform: 'translateX(0)', offset: 0.5 })
        ]))
      ])
    ]);
  }

  // Lightbox animation
  static lightbox(duration: string = '0.3s'): AnimationTriggerMetadata {
    return trigger('lightbox', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(`${duration} ease-out`, style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate(`${duration} ease-out`, style({ opacity: 0 }))
      ])
    ]);
  }

  // Slide and fade (combined)
  static slideFadeIn(duration: string = '0.8s', direction: 'up' | 'down' | 'left' | 'right' = 'up'): AnimationTriggerMetadata {
    const transforms: Record<string, string> = {
      up: 'translateY(30px)',
      down: 'translateY(-30px)',
      left: 'translateX(-30px)',
      right: 'translateX(30px)'
    };

    return trigger('slideFadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: transforms[direction] }),
        animate(`${duration} cubic-bezier(0.25, 0.46, 0.45, 0.94)`, style({ 
          opacity: 1, 
          transform: 'translate(0, 0)' 
        }))
      ])
    ]);
  }
}
