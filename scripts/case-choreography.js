/**
 * case-choreography.js
 *
 * Scroll choreography for case study pages.
 * Depends on GSAP, ScrollTrigger, and Lenis (loaded via CDN before this file).
 *
 * Safe to include on pages that don't use these patterns — every animation
 * is gated on element existence and prefers-reduced-motion.
 */

(function () {
  'use strict';

  // --- Reduced motion gate ---
  const prefersMotion = window.matchMedia('(prefers-reduced-motion: no-preference)').matches;

  // If motion is reduced, set all targets to their final state immediately and bail.
  if (!prefersMotion) {
    document.querySelectorAll('[data-reveal], .hero > *, .summary-card, .summary-card p, section > .container > .section-head, section > .container-wide > .container > .section-head, .case-sidebar, .case-sidebar-mobile').forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
    return;
  }

  // --- GSAP setup ---
  if (typeof gsap === 'undefined') {
    console.warn('GSAP not loaded; choreography skipped.');
    return;
  }
  gsap.registerPlugin(ScrollTrigger);

  // --- Lenis smooth scroll (desktop only) ---
  let lenis = null;
  if (typeof Lenis !== 'undefined' && window.matchMedia('(min-width: 960px)').matches) {
    lenis = new Lenis({
      duration: 1.0,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false
    });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(time => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
  }

  // --- 1. Hero arrival (page load) ---
  const hero = document.querySelector('.hero');
  if (hero) {
    const heroTargets = [
      hero.querySelector('.eyebrow'),
      hero.querySelector('.title'),
      hero.querySelector('.dek'),
      hero.querySelector('.lede'),
      hero.querySelector('.meta'),
      hero.querySelector('.live-link')
    ].filter(Boolean);

    gsap.set(heroTargets, { opacity: 0, y: 8 });
    gsap.to(heroTargets, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      stagger: 0.12,
      ease: 'cubic-bezier(0.2, 0.6, 0.2, 1)',
      delay: 0.05
    });
  }

  // --- 2. Summary card reveal ---
  const summary = document.querySelector('.summary-card');
  if (summary) {
    const summaryLines = summary.querySelectorAll('p:not(.eyebrow)');
    gsap.set(summary, { opacity: 0, y: 16 });
    gsap.set(summaryLines, { opacity: 0, y: 8 });

    ScrollTrigger.create({
      trigger: summary,
      start: 'top 80%',
      once: true,
      onEnter: () => {
        gsap.to(summary, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' });
        gsap.to(summaryLines, {
          opacity: 1, y: 0,
          duration: 0.5,
          stagger: 0.12,
          delay: 0.2,
          ease: 'power2.out'
        });
      }
    });
  }

  // --- 3. Section reveals ---
  document.querySelectorAll('main section').forEach(section => {
    const num = section.querySelector('.section-num');
    const title = section.querySelector('.section-title');
    const lead = section.querySelector('.prose .lead');

    const reveals = [num, title, lead].filter(Boolean);
    if (reveals.length === 0) return;

    gsap.set(num, { opacity: 0, scale: 0.85 });
    gsap.set(title, { opacity: 0, y: 16 });
    gsap.set(lead, { opacity: 0, y: 12 });

    ScrollTrigger.create({
      trigger: section,
      start: 'top 75%',
      once: true,
      onEnter: () => {
        if (num) gsap.to(num, { opacity: 1, scale: 1, duration: 0.7, ease: 'power2.out' });
        if (title) gsap.to(title, { opacity: 1, y: 0, duration: 0.6, delay: 0.08, ease: 'power2.out' });
        if (lead) gsap.to(lead, { opacity: 1, y: 0, duration: 0.6, delay: 0.16, ease: 'power2.out' });
      }
    });
  });

  // --- 4. Sequential lists (failures, themes, implications) ---
  document.querySelectorAll('.failures, .impl').forEach(list => {
    const items = list.querySelectorAll('li');
    gsap.set(items, { opacity: 0, y: 12 });

    ScrollTrigger.create({
      trigger: list,
      start: 'top 80%',
      once: true,
      onEnter: () => {
        gsap.to(items, {
          opacity: 1, y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power2.out'
        });
      }
    });
  });

  // Themes section — each theme block reveals as a unit
  document.querySelectorAll('.themes .theme').forEach((theme, i) => {
    gsap.set(theme, { opacity: 0, y: 16 });
    ScrollTrigger.create({
      trigger: theme,
      start: 'top 82%',
      once: true,
      onEnter: () => {
        gsap.to(theme, {
          opacity: 1, y: 0,
          duration: 0.6,
          ease: 'power2.out'
        });
      }
    });
  });

  // --- 5. Propositions grid ---
  const propsGrid = document.querySelector('.props');
  if (propsGrid) {
    const cards = propsGrid.querySelectorAll('article');
    gsap.set(cards, { opacity: 0, y: 16 });
    ScrollTrigger.create({
      trigger: propsGrid,
      start: 'top 78%',
      once: true,
      onEnter: () => {
        gsap.to(cards, {
          opacity: 1, y: 0,
          duration: 0.6,
          stagger: 0.14,
          ease: 'power2.out'
        });
      }
    });
  }

  // --- 6. Commitment callouts ---
  const commitments = document.querySelector('.commitments');
  if (commitments) {
    const cards = commitments.querySelectorAll('.commitment');
    gsap.set(cards, { opacity: 0, y: 16 });
    ScrollTrigger.create({
      trigger: commitments,
      start: 'top 78%',
      once: true,
      onEnter: () => {
        gsap.to(cards, {
          opacity: 1, y: 0,
          duration: 0.6,
          stagger: 0.16,
          ease: 'power2.out'
        });
      }
    });
  }

  // --- 7. The hero-stat counter ("4 of 4") ---
  const heroStat = document.querySelector('.hero-stat');
  if (heroStat) {
    const statEls = heroStat.querySelectorAll('[data-target]');
    const labelEl = heroStat.querySelector('.stat-label');
    const ofEl = heroStat.querySelector('.stat-num > span');

    gsap.set(heroStat, { opacity: 0, y: 16 });
    if (labelEl) gsap.set(labelEl, { opacity: 0, y: 8 });
    if (ofEl) gsap.set(ofEl, { opacity: 0 });

    ScrollTrigger.create({
      trigger: heroStat,
      start: 'top 78%',
      once: true,
      onEnter: () => {
        gsap.to(heroStat, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' });

        statEls.forEach((el, idx) => {
          const target = parseInt(el.dataset.target, 10);
          if (Number.isNaN(target)) return;
          const obj = { val: 0 };
          gsap.to(obj, {
            val: target,
            duration: 0.8,
            delay: 0.2 + idx * 0.05,
            ease: 'power2.out',
            onUpdate: () => { el.textContent = Math.round(obj.val); }
          });
        });

        if (ofEl) gsap.to(ofEl, { opacity: 1, duration: 0.3, delay: 0.3 });
        if (labelEl) gsap.to(labelEl, { opacity: 1, y: 0, duration: 0.5, delay: 0.65, ease: 'power2.out' });
      }
    });
  }

  // --- 8. Pin the live-preview / browser-frame on desktop ---
  const livePreview = document.querySelector('.live-preview .browser-frame');
  const commitmentsBlock = document.querySelector('.commitments');
  if (livePreview && commitmentsBlock && window.matchMedia('(min-width: 1100px)').matches) {
    // Only enable pinning on wider desktop viewports. The three-column layout
    // already gives the figure breathing room; pinning would feel cramped at
    // narrower widths.
    ScrollTrigger.create({
      trigger: livePreview,
      start: 'top 96px', // below sticky topnav
      endTrigger: commitmentsBlock,
      end: 'bottom bottom',
      pin: true,
      pinSpacing: false
    });
  }

  // --- 9. Refresh ScrollTrigger after fonts load (sizes shift) ---
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => ScrollTrigger.refresh());
  }
})();
