import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate, stagger, query } from '@angular/animations';
import { AnimationsService } from '../../services/animations.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  animations: [
    AnimationsService.fadeInUp('0.8s', '40px'),
    AnimationsService.scaleIn('0.6s', 0.85),
    trigger('menuItemHover', [
      state('normal', style({ transform: 'translateY(0) scale(1)' })),
      state('hover', style({ transform: 'translateY(-8px) scale(1.02)' })),
      transition('normal => hover', animate('0.3s cubic-bezier(0.34, 1.56, 0.64, 1)')),
      transition('hover => normal', animate('0.3s ease-out'))
    ]),
    trigger('staggerMenuItems', [
      transition(':enter', [
        query('.menu-item', [
          style({ opacity: 0, transform: 'translateY(40px) scale(0.9)' }),
          stagger(150, [
            animate('0.7s cubic-bezier(0.34, 1.56, 0.64, 1)', style({ 
              opacity: 1, 
              transform: 'translateY(0) scale(1)' 
            }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class MenuComponent {
  menuItems: Array<{
    title: string;
    description: string;
    price: string;
    image: string;
    hoverState?: string;
  }> = [
    {
      title: 'Brownie Box(500g, 1000g)',
      description: 'Rich, fudgy brownies in a beautiful gift box. Available in 500g and 1000g sizes.',
      price: '(₹900)',
      image: 'https://res.cloudinary.com/ddanlymn8/image/upload/v1767117005/SnapInsta.to_568522615_17843140713598811_3075882203507958256_n_myssxa.jpg',
      hoverState: 'normal'
    },
    {
      title: 'Customized Brownie(250g)',
      description: 'Personalized brownies with custom messages, designs, or decorations. Perfect for special occasions.',
      price: '(₹400)',
      image: 'https://res.cloudinary.com/ddanlymn8/image/upload/v1767119842/IMG_20251231_000630_byyaps.jpg',
      hoverState: 'normal'
    },
    {
      title: 'Celebration Brownie(500g)',
      description: 'Specially designed brownies for birthdays, weddings, and celebrations. Custom designs available.',
      price: '(₹700)',
      image: 'https://res.cloudinary.com/ddanlymn8/image/upload/v1767117007/SnapInsta.to_599210509_17852509812598811_36811398982545483_n_by3dbt.jpg',
      hoverState: 'normal'
    },
    {
      title: 'Sweets & Treats(9pcs)',
      description: 'A delightful assortment of 9 handcrafted sweets and treats. Perfect for gifting or sharing.',
      price: '(₹900)',
      image: 'https://res.cloudinary.com/ddanlymn8/image/upload/v1767117005/SnapInsta.to_590807091_17852578434598811_4034920208290626549_n_tfsml0.jpg',
      hoverState: 'normal'
    }
  ];
}
