import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { AnimationsService } from '../../services/animations.service';

@Component({
  selector: 'app-philosophy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './philosophy.component.html',
  styleUrl: './philosophy.component.scss',
  animations: [
    AnimationsService.fadeInLeft('0.8s', '30px'),
    AnimationsService.fadeInRight('0.8s', '30px'),
    trigger('staggerValues', [
      transition(':enter', [
        query('.philosophy-item', [
          style({ opacity: 0, transform: 'translateX(-30px)' }),
          stagger(200, [
            animate('0.7s cubic-bezier(0.34, 1.56, 0.64, 1)', style({ opacity: 1, transform: 'translateX(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class PhilosophyComponent {
  values = [
    '100% Organic Flour & Local Dairy',
    'Handmade daily in small batches',
    'No artificial preservatives or colors'
  ];

  philosophyImages = [
    {
      url: 'https://res.cloudinary.com/ddanlymn8/image/upload/v1767117005/SnapInsta.to_568522615_17843140713598811_3075882203507958256_n_myssxa.jpg',
      alt: 'Brownie Box'
    },
    {
      url: 'https://res.cloudinary.com/ddanlymn8/image/upload/v1767119842/IMG_20251231_000630_byyaps.jpg',
      alt: 'Customized Birthday Brownie'
    }
  ];
}
