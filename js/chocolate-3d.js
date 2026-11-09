/**
 * CHOCO. — 3D FLOATING & SPINNING CHOCOLATE ENGINE
 * High-performance 3D perspective transforms, mouse parallax,
 * click-to-spin physics, and dynamic golden sparkle effects.
 */

class Chocolate3DStage {
  constructor() {
    this.stage = document.querySelector('.choco-stage-3d');
    this.tiltCanvas = document.querySelector('.choco-tilt-canvas');
    this.pieces = document.querySelectorAll('.stage-chocolate-piece, .stage-chocolate-main');
    this.asideChocolates = document.querySelectorAll('.aside-choc-item');

    // Motion states
    this.mouseX = 0;
    this.mouseY = 0;
    this.targetRotX = 0;
    this.targetRotY = 0;
    this.currentRotX = 0;
    this.currentRotY = 0;
    this.ambientRotation = 0;
    this.isMotionPaused = false;

    // Tasting notes dictionary for click discovery
    this.tastingNotes = [
      "70% Criollo: Wild blackberry &amp; warm cedar",
      "Madagascar Milk 48%: Salted caramel &amp; bourbon vanilla",
      "Artisanal Truffle: Rich 80% ganache &amp; 24k gold leaf",
      "Pure Cacao Pod: Single-estate agroforestry harvest",
      "Stone-Conched Chunk: Micro-crystalline snap &amp; honeyed floral notes"
    ];

    this.init();
  }

  init() {
    // Check if reduced motion is preferred
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.isMotionPaused = true;
      return;
    }

    this.bindEvents();
    this.setupInteractionEffects();
    this.startRenderLoop();
  }

  bindEvents() {
    // Mouse movement listener across the screen
    window.addEventListener('mousemove', (e) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      // Normalized between -1 and 1
      this.mouseX = (e.clientX - centerX) / centerX;
      this.mouseY = (e.clientY - centerY) / centerY;

      // Desired tilt angles
      this.targetRotX = -this.mouseY * 18; // Max 18 deg tilt on X
      this.targetRotY = this.mouseX * 24;  // Max 24 deg tilt on Y
    }, { passive: true });

    // Touch device support (mobile / tablet touch drag)
    if (this.stage) {
      let touchStartX = 0;
      let touchStartY = 0;

      this.stage.addEventListener('touchstart', (e) => {
        if (e.touches.length > 0) {
          touchStartX = e.touches[0].clientX;
          touchStartY = e.touches[0].clientY;
        }
      }, { passive: true });

      this.stage.addEventListener('touchmove', (e) => {
        if (e.touches.length > 0) {
          const deltaX = (e.touches[0].clientX - touchStartX) / (window.innerWidth / 2);
          const deltaY = (e.touches[0].clientY - touchStartY) / (window.innerHeight / 2);
          this.targetRotY = Math.max(-25, Math.min(25, deltaX * 35));
          this.targetRotX = Math.max(-20, Math.min(20, -deltaY * 30));
        }
      }, { passive: true });

      this.stage.addEventListener('touchend', () => {
        this.targetRotX = 0;
        this.targetRotY = 0;
      }, { passive: true });
    }

    // Interactive badge click to pause/resume motion
    const badge = document.querySelector('.stage-interactive-badge');
    if (badge) {
      badge.style.cursor = 'pointer';
      badge.setAttribute('title', 'Click to toggle 3D motion');
      badge.addEventListener('click', () => {
        this.isMotionPaused = !this.isMotionPaused;
        const textSpan = badge.querySelector('.badge-text');
        if (textSpan) {
          textSpan.textContent = this.isMotionPaused ? 'Motion: Paused (Click to resume)' : 'Interactive: Move & Click Chocolates';
        }
        badge.style.borderColor = this.isMotionPaused ? '#a69886' : 'var(--color-caramel)';
      });
    }
  }

  setupInteractionEffects() {
    const allClickableChocs = [...this.pieces, ...this.asideChocolates];

    allClickableChocs.forEach((choc, idx) => {
      choc.addEventListener('click', (e) => {
        e.stopPropagation();

        // 1. Trigger high-velocity 3D spin burst
        choc.classList.remove('spin-burst-active');
        void choc.offsetWidth; // Force CSS reflow
        choc.classList.add('spin-burst-active');

        // 2. Spawn golden caramel sparkle particles
        const rect = choc.getBoundingClientRect();
        const originX = rect.left + rect.width / 2;
        const originY = rect.top + rect.height / 2;
        this.spawnGoldenSparkles(originX, originY, 14);

        // 3. Show discovery tasting note toast
        const note = this.tastingNotes[idx % this.tastingNotes.length];
        if (typeof showToast === 'function') {
          showToast(`✦ ${note}`, 'info');
        }

        setTimeout(() => {
          choc.classList.remove('spin-burst-active');
        }, 1100);
      });
    });
  }

  spawnGoldenSparkles(x, y, count = 12) {
    for (let i = 0; i < count; i++) {
      const particle = document.createElement('div');
      particle.className = 'sparkle-particle';

      const size = Math.random() * 8 + 4;
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * 85 + 35;
      const tx = Math.cos(angle) * distance;
      const ty = Math.sin(angle) * distance;

      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      particle.style.setProperty('--tx', `${tx}px`);
      particle.style.setProperty('--ty', `${ty}px`);
      particle.style.zIndex = '9999';

      document.body.appendChild(particle);

      setTimeout(() => {
        particle.remove();
      }, 850);
    }
  }

  startRenderLoop() {
    const animate = () => {
      if (!this.isMotionPaused) {
        // Smooth Lerp for camera tilt (damping factor 0.07)
        this.currentRotX += (this.targetRotX - this.currentRotX) * 0.07;
        this.currentRotY += (this.targetRotY - this.currentRotY) * 0.07;

        // Ambient continuous 3D rotation
        this.ambientRotation = (this.ambientRotation + 0.35) % 360;

        // Apply tilt to main stage canvas
        if (this.tiltCanvas) {
          this.tiltCanvas.style.transform = `
            rotateX(${this.currentRotX}deg) 
            rotateY(${this.currentRotY}deg)
          `;
        }

        // Apply multi-depth parallax and individual 3D spin offsets to pieces
        this.pieces.forEach((piece) => {
          if (piece.classList.contains('spin-burst-active')) return;

          const depth = parseFloat(piece.dataset.depth || '1.0');
          const spinSpeed = parseFloat(piece.dataset.spin || '0.5');
          const baseRot = parseFloat(piece.dataset.baserot || '0');

          const pieceRotY = (this.ambientRotation * spinSpeed + baseRot) % 360;
          const pieceRotX = Math.sin(this.ambientRotation * 0.02 + baseRot) * 12;

          const zOffset = depth * 50;

          // Check if it's the main central bar
          if (piece.classList.contains('stage-chocolate-main')) {
            piece.style.transform = `
              translateZ(${zOffset}px) 
              rotateX(${this.currentRotX * 0.4 + pieceRotX * 0.3}deg) 
              rotateY(${this.currentRotY * 0.4 + Math.sin(this.ambientRotation * 0.02) * 8}deg)
            `;
          } else {
            // Satellite floating & spinning chocolates
            piece.style.transform = `
              translateZ(${zOffset}px) 
              rotateX(${pieceRotX}deg) 
              rotateY(${pieceRotY}deg) 
              rotateZ(${Math.cos(this.ambientRotation * 0.015) * 6}deg)
            `;
          }
        });

        // Parallax for right-side floating chocolates with scroll position
        const scrollY = window.scrollY;
        this.asideChocolates.forEach((asideChoc, index) => {
          if (asideChoc.classList.contains('spin-burst-active')) return;
          const factor = (index + 1) * 0.06;
          const offsetY = Math.sin(this.ambientRotation * 0.03 + index) * 15 - scrollY * factor * 0.2;
          const rotY = (this.ambientRotation * 0.6 + index * 45) % 360;
          asideChoc.style.transform = `translateY(${offsetY}px) rotateY(${rotY}deg) rotateZ(${index * 8}deg)`;
        });
      }

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }
}

// Instantiate once DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.choc3D = new Chocolate3DStage();
});

