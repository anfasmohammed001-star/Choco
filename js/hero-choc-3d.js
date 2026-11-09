/**
 * CHOCO. — HERO AMBIENT PARTICLE & TILT PARALLAX
 * Features:
 *  - Organic cocoa powder particle physics
 *  - Elegant Champagne Gold (#D6AD45) dust particle field
 *  - Smooth 3D mouse parallax tilt
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeroChocolateStage();
});

function initHeroChocolateStage() {
  const stage = document.getElementById('hero-stage');
  const canvas = document.getElementById('hero-particle-canvas');
  if (!stage || !canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;

  function resizeCanvas() {
    width = canvas.width = stage.offsetWidth;
    height = canvas.height = stage.offsetHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas, { passive: true });

  // Particle System Definition
  const particles = [];
  const COCOA_COUNT = 30;
  const GOLD_COUNT = 25;

  class LuxuryParticle {
    constructor(type) {
      this.type = type; // 'cocoa' or 'gold'
      this.reset(true);
    }

    reset(initial = false) {
      this.x = Math.random() * (width || 600);
      this.y = initial ? Math.random() * (height || 600) : (height || 600) + 10;
      this.radius = this.type === 'cocoa' ? Math.random() * 2.5 + 1.0 : Math.random() * 1.8 + 0.8;
      this.speedY = this.type === 'cocoa' ? -(Math.random() * 0.4 + 0.15) : -(Math.random() * 0.55 + 0.2);
      this.speedX = (Math.random() - 0.5) * 0.35;
      this.alpha = Math.random() * 0.45 + 0.2;
      this.pulseSpeed = Math.random() * 0.02 + 0.01;
      this.pulseAngle = Math.random() * Math.PI * 2;
    }

    update(mouseXRatio, mouseYRatio) {
      this.y += this.speedY + (mouseYRatio - 0.5) * 0.25;
      this.x += this.speedX + (mouseXRatio - 0.5) * 0.4;

      this.pulseAngle += this.pulseSpeed;
      if (this.type === 'gold') {
        this.currentAlpha = this.alpha * (0.55 + 0.45 * Math.sin(this.pulseAngle));
      } else {
        this.currentAlpha = this.alpha;
      }

      if (this.y < -15 || this.x < -15 || this.x > width + 15) {
        this.reset(false);
      }
    }

    draw(ctx) {
      ctx.save();
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);

      if (this.type === 'gold') {
        // Champagne Gold (#D6AD45)
        ctx.fillStyle = `rgba(214, 173, 69, ${this.currentAlpha})`;
        ctx.shadowColor = 'rgba(214, 173, 69, 0.55)';
        ctx.shadowBlur = 5;
      } else {
        // Warm Cocoa Powder
        ctx.fillStyle = `rgba(140, 90, 55, ${this.currentAlpha * 0.55})`;
        ctx.shadowBlur = 0;
      }

      ctx.fill();
      ctx.restore();
    }
  }

  for (let i = 0; i < COCOA_COUNT; i++) {
    particles.push(new LuxuryParticle('cocoa'));
  }
  for (let i = 0; i < GOLD_COUNT; i++) {
    particles.push(new LuxuryParticle('gold'));
  }

  // Smooth Mouse Parallax Physics
  let targetTiltX = 0;
  let targetTiltY = 0;
  let currentTiltX = 0;
  let currentTiltY = 0;
  let mouseNormX = 0.5;
  let mouseNormY = 0.5;

  const heroSection = stage.closest('.hero-experience') || stage;

  heroSection.addEventListener('mousemove', (e) => {
    const rect = heroSection.getBoundingClientRect();
    mouseNormX = (e.clientX - rect.left) / rect.width;
    mouseNormY = (e.clientY - rect.top) / rect.height;

    targetTiltX = (mouseNormY - 0.5) * -8;
    targetTiltY = (mouseNormX - 0.5) * 10;
  });

  heroSection.addEventListener('mouseleave', () => {
    targetTiltX = 0;
    targetTiltY = 0;
    mouseNormX = 0.5;
    mouseNormY = 0.5;
  });

  function render() {
    currentTiltX += (targetTiltX - currentTiltX) * 0.05;
    currentTiltY += (targetTiltY - currentTiltY) * 0.05;

    stage.style.transform = `perspective(1200px) rotateX(${currentTiltX.toFixed(2)}deg) rotateY(${currentTiltY.toFixed(2)}deg)`;

    ctx.clearRect(0, 0, width, height);
    for (let p of particles) {
      p.update(mouseNormX, mouseNormY);
      p.draw(ctx);
    }

    requestAnimationFrame(render);
  }

  render();
}
