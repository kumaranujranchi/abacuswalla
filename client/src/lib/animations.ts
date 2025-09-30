import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Check for reduced motion preference
const prefersReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Hero parallax effect - subtle background movement
 */
export function initHeroParallax(element: HTMLElement | null) {
  if (!element || prefersReducedMotion()) return;

  const updateParallax = () => {
    const scrolled = window.scrollY;
    const parallaxSpeed = 0.5; // Image moves slower than viewport
    const translateY = scrolled * parallaxSpeed;
    element.style.transform = `translate3d(0, ${translateY}px, 0)`;
  };

  // Use requestAnimationFrame for smooth 60fps performance
  let ticking = false;
  const onScroll = () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        updateParallax();
        ticking = false;
      });
      ticking = true;
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  
  return () => {
    window.removeEventListener('scroll', onScroll);
  };
}

/**
 * Staggered fade-up animation for elements that come into view
 */
export function initScrollFadeUp(selector: string) {
  if (prefersReducedMotion()) {
    // Make elements visible immediately
    document.querySelectorAll(selector).forEach(el => {
      el.classList.add('in-view');
    });
    return;
  }

  const elements = document.querySelectorAll(selector);
  
  if (elements.length === 0) return;

  // Use Intersection Observer for performance
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Add stagger delay
          setTimeout(() => {
            entry.target.classList.add('in-view');
          }, index * 120); // 120ms stagger between each element
          
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
  );

  elements.forEach(el => observer.observe(el));

  return () => observer.disconnect();
}

/**
 * Program card hover parallax effect
 */
export function initProgramCardHover(card: HTMLElement) {
  if (prefersReducedMotion()) return;

  const image = card.querySelector('img');
  if (!image) return;

  card.addEventListener('mouseenter', () => {
    gsap.to(image, {
      y: 5,
      scale: 1.04,
      duration: 0.3,
      ease: 'power2.out'
    });
  });

  card.addEventListener('mouseleave', () => {
    gsap.to(image, {
      y: 0,
      scale: 1,
      duration: 0.3,
      ease: 'power2.out'
    });
  });
}

/**
 * Icon 3D tilt effect on hover
 */
export function init3DIconTilt(container: HTMLElement) {
  if (prefersReducedMotion()) return;

  const icon = container.querySelector('[data-icon]');
  if (!icon) return;

  container.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * 6;
    const rotateY = ((x - centerX) / centerX) * 6;
    
    gsap.to(icon, {
      rotationX: -rotateX,
      rotationY: rotateY,
      duration: 0.3,
      ease: 'power2.out',
      transformPerspective: 1000
    });
  });

  container.addEventListener('mouseleave', () => {
    gsap.to(icon, {
      rotationX: 0,
      rotationY: 0,
      duration: 0.3,
      ease: 'power2.out'
    });
  });
}

/**
 * Ripple effect on click
 */
export function createRipple(event: MouseEvent, element: HTMLElement) {
  const ripple = document.createElement('span');
  ripple.classList.add('ripple');
  
  const rect = element.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = event.clientX - rect.left - size / 2;
  const y = event.clientY - rect.top - size / 2;
  
  ripple.style.width = ripple.style.height = `${size}px`;
  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;
  
  element.appendChild(ripple);
  
  setTimeout(() => ripple.remove(), 600);
}

/**
 * Testimonial carousel 3D effect
 */
export function init3DCarousel(container: HTMLElement) {
  if (prefersReducedMotion()) return;

  const cards = container.querySelectorAll('[data-testimonial-card]');
  if (cards.length === 0) return;

  // Initial setup - center card prominent, side cards faded and rotated
  cards.forEach((card, index) => {
    const isCenterCard = index === Math.floor(cards.length / 2);
    
    if (!isCenterCard) {
      gsap.set(card, {
        scale: 0.9,
        opacity: 0.6,
        rotationY: index < cards.length / 2 ? -15 : 15,
        z: -100
      });
    }
  });
}

/**
 * Testimonial stars animation
 */
export function animateStars(container: HTMLElement) {
  if (prefersReducedMotion()) {
    return;
  }

  const stars = container.querySelectorAll('[data-star]');
  if (stars.length === 0) return;

  gsap.from(stars, {
    scale: 0,
    opacity: 0,
    duration: 0.3,
    stagger: 0.1,
    ease: 'back.out(1.7)',
    delay: 0.2
  });
}

/**
 * Bottom CTA gradient shift animation
 */
export function initCTAGradientShift(element: HTMLElement) {
  if (prefersReducedMotion()) return;

  element.classList.add('animate-gradient-shift');
}

/**
 * Initialize all homepage animations
 */
export function initHomePageAnimations() {
  // Hero parallax
  const heroBackground = document.querySelector('[data-hero-bg]') as HTMLElement;
  if (heroBackground) {
    initHeroParallax(heroBackground);
  }

  // Scroll-triggered fade-ups
  initScrollFadeUp('.animate-fade-up');

  // Program cards hover effects
  document.querySelectorAll('[data-program-card]').forEach((card) => {
    initProgramCardHover(card as HTMLElement);
  });

  // Feature icon 3D tilt
  document.querySelectorAll('[data-feature-icon]').forEach((icon) => {
    init3DIconTilt(icon as HTMLElement);
  });

  // Testimonial 3D carousel
  const testimonialContainer = document.querySelector('[data-testimonial-3d]') as HTMLElement;
  if (testimonialContainer) {
    init3DCarousel(testimonialContainer);
  }

  // Ripple effects on buttons
  document.querySelectorAll('[data-ripple]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      createRipple(e as MouseEvent, btn as HTMLElement);
    });
  });

  // CTA gradient animation
  const ctaStrip = document.querySelector('[data-cta-gradient]') as HTMLElement;
  if (ctaStrip) {
    initCTAGradientShift(ctaStrip);
  }
}

/**
 * Cleanup function for animations
 */
export function cleanupAnimations() {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
}
