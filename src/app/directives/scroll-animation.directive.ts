import { Directive, ElementRef, OnInit, OnDestroy, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appScrollAnimation]',
  standalone: true
})
export class ScrollAnimationDirective implements OnInit, OnDestroy {
  @Input() animationType: 'fadeIn' | 'fadeInUp' | 'fadeInDown' | 'fadeInLeft' | 'fadeInRight' | 'slideInUp' | 'scaleIn' | 'zoomIn' = 'fadeInUp';
  @Input() delay: number = 0;
  @Input() threshold: number = 0.1;
  @Input() once: boolean = true; // Animate only once

  private observer?: IntersectionObserver;
  private hasAnimated = false;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    // Check if element is already in viewport (above the fold)
    const rect = this.el.nativeElement.getBoundingClientRect();
    const isInViewport = rect.top < window.innerHeight * 1.5 && rect.bottom > -100;
    
    // If element is in viewport, show immediately without animation delay
    if (isInViewport) {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        this.animateIn();
        this.hasAnimated = true;
      }, 50);
      return;
    }

    // Check if IntersectionObserver is supported
    if (typeof IntersectionObserver === 'undefined') {
      // Fallback: show immediately if IntersectionObserver not supported
      setTimeout(() => this.animateIn(), this.delay);
      return;
    }

    // Set initial state only if element is not in viewport
    this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
    this.renderer.setStyle(this.el.nativeElement, 'transition', `all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${this.delay}ms`);

    // Set initial transform based on animation type
    this.setInitialTransform();

    // Create Intersection Observer
    try {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              if (!this.hasAnimated || !this.once) {
                setTimeout(() => {
                  this.animateIn();
                  if (this.once) {
                    this.hasAnimated = true;
                  }
                }, this.delay);
              }
            } else if (!this.once) {
              this.animateOut();
            }
          });
        },
        {
          threshold: this.threshold,
          rootMargin: '0px 0px -50px 0px'
        }
      );

      // Start observing
      this.observer.observe(this.el.nativeElement);
    } catch (error) {
      console.warn('IntersectionObserver error, showing content immediately:', error);
      // Fallback: show immediately on error
      setTimeout(() => this.animateIn(), this.delay);
    }
  }

  private setInitialTransform() {
    const transforms: Record<string, string> = {
      fadeIn: 'translateY(0)',
      fadeInUp: 'translateY(30px)',
      fadeInDown: 'translateY(-30px)',
      fadeInLeft: 'translateX(-50px)',
      fadeInRight: 'translateX(50px)',
      slideInUp: 'translateY(100px)',
      scaleIn: 'scale(0.8)',
      zoomIn: 'scale(0.3)'
    };

    this.renderer.setStyle(
      this.el.nativeElement,
      'transform',
      transforms[this.animationType] || 'translateY(30px)'
    );
  }

  private animateIn() {
    this.renderer.setStyle(this.el.nativeElement, 'opacity', '1');
    
    const finalTransforms: Record<string, string> = {
      fadeIn: 'translateY(0)',
      fadeInUp: 'translateY(0)',
      fadeInDown: 'translateY(0)',
      fadeInLeft: 'translateX(0)',
      fadeInRight: 'translateX(0)',
      slideInUp: 'translateY(0)',
      scaleIn: 'scale(1)',
      zoomIn: 'scale(1)'
    };

    this.renderer.setStyle(
      this.el.nativeElement,
      'transform',
      finalTransforms[this.animationType] || 'translateY(0)'
    );
  }

  private animateOut() {
    this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
    this.setInitialTransform();
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
