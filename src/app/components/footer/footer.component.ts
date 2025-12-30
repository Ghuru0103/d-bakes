import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        query('.footer-section', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(100, [
            animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class FooterComponent {
  socialLinks = [
    { name: 'Instagram', icon: 'instagram', url: 'https://www.instagram.com/d_bakes_madurai?igsh=MWc5Z3ZrZ2tsbWUyOQ==', target: '_blank' }
  ];

  quickLinks = [
    { label: 'Home', url: '#home' },
    { label: 'Our Menu', url: '#menu' },
    { label: 'Wedding Cakes', url: '#menu' },
    { label: 'About Us', url: '#our-story' },
    { label: 'Contact', url: '#contact' }
  ];
}
