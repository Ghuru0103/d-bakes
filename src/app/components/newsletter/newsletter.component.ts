import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';
import { AnimationsService } from '../../services/animations.service';

@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './newsletter.component.html',
  styleUrl: './newsletter.component.scss',
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('0.8s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('shake', [
      transition('* => *', [
        animate('0.5s', style({ transform: 'translateX(0)' })),
        animate('0.1s', style({ transform: 'translateX(-10px)' })),
        animate('0.1s', style({ transform: 'translateX(10px)' })),
        animate('0.1s', style({ transform: 'translateX(-10px)' })),
        animate('0.1s', style({ transform: 'translateX(10px)' })),
        animate('0.1s', style({ transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class NewsletterComponent {
  email = '';
  submitted = false;
  showError = false;

  onSubmit() {
    if (this.email && this.isValidEmail(this.email)) {
      this.submitted = true;
      this.showError = false;
      // Here you would typically send the email to your backend
      console.log('Subscribed:', this.email);
      setTimeout(() => {
        this.email = '';
        this.submitted = false;
      }, 3000);
    } else {
      this.showError = true;
    }
  }

  private isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
}
