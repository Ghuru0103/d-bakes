import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { AnimationsService } from '../../services/animations.service';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
  animations: [
    AnimationsService.fadeInUp('0.8s', '30px'),
    trigger('staggerGallery', [
      transition(':enter', [
        query('.gallery-item', [
          style({ opacity: 0, transform: 'scale(0.8) rotateY(10deg)' }),
          stagger(80, [
            animate('0.6s cubic-bezier(0.34, 1.56, 0.64, 1)', style({ 
              opacity: 1, 
              transform: 'scale(1) rotateY(0deg)' 
            }))
          ])
        ], { optional: true })
      ])
    ]),
    AnimationsService.lightbox('0.4s'),
  ]
})
export class GalleryComponent implements OnInit {
  selectedImage: string | null = null;
  
  // Gallery images
  images = [
    'https://res.cloudinary.com/ddanlymn8/image/upload/SnapInsta.to_568522615_17843140713598811_3075882203507958256_n_myssxa.jpg',
    'https://res.cloudinary.com/ddanlymn8/image/upload/v1767117005/SnapInsta.to_565241108_17843140701598811_1196979438862179273_n_zaupib.jpg',
    'https://res.cloudinary.com/ddanlymn8/image/upload/v1767117007/SnapInsta.to_599210509_17852509812598811_36811398982545483_n_by3dbt.jpg',
    'https://res.cloudinary.com/ddanlymn8/image/upload/v1767117005/SnapInsta.to_590807091_17852578434598811_4034920208290626549_n_tfsml0.jpg',
    'https://res.cloudinary.com/ddanlymn8/image/upload/v1767117006/SnapInsta.to_599253056_17852578410598811_5803170818773003983_n_vbrpkd.jpg',
    'https://res.cloudinary.com/ddanlymn8/image/upload/v1767117005/SnapInsta.to_591171348_17852578473598811_2080357190828022756_n_x32oy3.jpg'
  ];

  ngOnInit() {
    // Component initialized
  }

  openLightbox(image: string) {
    this.selectedImage = image;
  }

  closeLightbox() {
    this.selectedImage = null;
  }
}
