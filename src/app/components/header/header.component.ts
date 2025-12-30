import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate, keyframes, query } from '@angular/animations';
import { AnimationsService } from '../../services/animations.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [
    AnimationsService.fadeInDown('0.6s', '30px'),
    trigger('slideIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-30px)' }),
        animate('0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ]),
    trigger('navItem', [
      transition(':enter', [
        query('a', [
          style({ opacity: 0, transform: 'translateY(-10px)' }),
          animate('0.4s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
        ], { optional: true })
      ])
    ]),
  ]
})
export class HeaderComponent {
  isScrolled = false;
  isMobileMenuOpen = false;

  onImageError(event: any) {
    console.error('Logo image failed to load. Trying alternative path...', event);
    const img = event.target as HTMLImageElement;
    // Try alternative paths
    if (img.src.includes('logo.jpg') && !img.src.includes('assets')) {
      img.src = 'assets/logo.jpg';
    } else if (img.src.includes('assets/logo.jpg')) {
      img.src = 'logo.jpg';
    } else {
      console.error('Logo image not found. Please ensure logo.jpg exists in assets or public folder.');
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }

}
