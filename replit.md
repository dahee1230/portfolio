# Replit.md

## Overview

This is "The Resonance Website Template" - a modern, single-page website template for a full-service digital studio. The project is designed as a portfolio/agency website showcasing design and engineering services. It features a clean, professional layout with smooth animations and interactive elements, built using vanilla HTML, CSS, and JavaScript with GSAP for advanced animations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Static Website Structure**: Built as a single-page application using vanilla HTML, CSS, and JavaScript
- **Component-Based Layout**: Organized into distinct sections (header, hero, about, services, portfolio, blog, contact)
- **Animation Framework**: GSAP (GreenSock Animation Platform) used for smooth scrolling, scroll-triggered animations, and interactive elements
- **Responsive Design**: Mobile-first approach with fluid typography using CSS clamp() functions

### Styling and Design System
- **Typography**: SUIT Korean font family loaded via CDN for modern, clean typography
- **CSS Architecture**: Single stylesheet approach with CSS custom properties for consistent theming
- **Layout System**: Flexbox and CSS Grid for responsive layouts
- **Color Scheme**: Light theme with neutral colors and subtle gradients

### JavaScript Functionality
- **Module Pattern**: JavaScript organized into initialization functions for different features
- **Event-Driven Architecture**: DOM event listeners for user interactions
- **Animation Controllers**: GSAP-powered animations with ScrollTrigger for scroll-based effects
- **Interactive Features**: Portfolio filters, service tabs, testimonial slider, and form handlers

### Performance Optimizations
- **CDN Resources**: External libraries (GSAP, fonts) loaded from CDNs for faster delivery
- **Progressive Enhancement**: Core functionality works without JavaScript, enhanced with animations
- **Smooth Scrolling**: Custom scroll behavior for improved user experience

## External Dependencies

### Animation Libraries
- **GSAP Core (v3.13.0)**: Main animation engine
- **ScrollToPlugin**: Smooth scrolling functionality
- **ScrollTrigger**: Scroll-based animation triggers

### Typography
- **SUIT Font Family**: Korean web font loaded from jsDelivr CDN

### Development Tools
- **No Build Process**: Direct HTML/CSS/JS development without bundlers or preprocessors
- **Static Hosting Ready**: Designed for deployment on static hosting platforms

### Browser APIs
- **DOM API**: Standard web APIs for element manipulation
- **IntersectionObserver**: Likely used for scroll-triggered animations
- **CSS Custom Properties**: Modern CSS features for dynamic theming