// ============================================
// PARTICLE SYSTEM — Lightweight DOM Particles
// ============================================
const CHERRY_BLOSSOMS = ['🌸', '💮', '🩷', '✨'];

const PRESETS = {
  hearts: {
    chars: ['❤️', '🩷', '💖', '✨'],
    count: 15,
    speed: { min: 0.5, max: 1.5 },
    size: { min: 14, max: 28 },
    life: { min: 3000, max: 5000 },
    drift: 1.5,
    direction: 'up',
  },
  stars: {
    chars: ['⭐', '🌟', '✨'],
    count: 20,
    speed: { min: 0.3, max: 1 },
    size: { min: 10, max: 22 },
    life: { min: 2000, max: 4000 },
    drift: 2,
    direction: 'float',
  },
  confetti: {
    chars: ['🎉', '🎊', '✨', '🎈'],
    count: 30,
    speed: { min: 1, max: 3 },
    size: { min: 16, max: 30 },
    life: { min: 3000, max: 6000 },
    drift: 3,
    direction: 'down',
  },
  leaves: {
    chars: ['🌸', '💮', '🩷', '✨'],
    count: 15,
    speed: { min: 0.3, max: 0.8 },
    size: { min: 14, max: 22 },
    life: { min: 4000, max: 7000 },
    drift: 2,
    direction: 'down',
  },

  snow: {
    chars: ['❄️', '🌨️', '⛄', '✨'],
    count: 15,
    speed: { min: 0.3, max: 0.7 },
    size: { min: 10, max: 20 },
    life: { min: 5000, max: 8000 },
    drift: 1,
    direction: 'down',
  },
  sparkle: {
    chars: ['✨', '💫', '⭐'],
    count: 25,
    speed: { min: 0.2, max: 0.6 },
    size: { min: 8, max: 16 },
    life: { min: 1500, max: 3000 },
    drift: 1,
    direction: 'float',
  },
  mosquitos: {
    chars: ['🦟', '🪰', '🦟'],
    count: 25,
    speed: { min: 1, max: 2.5 },
    size: { min: 10, max: 20 },
    life: { min: 2000, max: 4000 },
    drift: 5,
    direction: 'float',
  },
  limpieza: {
    chars: ['💧', '🫧', '🧴', '🧽', '✨'],
    count: 20,
    speed: { min: 0.5, max: 1.5 },
    size: { min: 12, max: 24 },
    life: { min: 3000, max: 6000 },
    drift: 2,
    direction: 'down',
  },
  comida: {
    chars: ['🍔', '🌭', '🍟', '🍕', '🌮'],
    count: 20,
    speed: { min: 0.5, max: 1.5 },
    size: { min: 14, max: 28 },
    life: { min: 3000, max: 6000 },
    drift: 2,
    direction: 'down',
  },
  salud: {
    chars: ['💉', '🩹', '✚', '💊'],
    count: 15,
    speed: { min: 0.5, max: 1.5 },
    size: { min: 14, max: 24 },
    life: { min: 3000, max: 5000 },
    drift: 1,
    direction: 'float',
  },
};

function rand(min, max) {
  return Math.random() * (max - min) + min;
}

class ParticleSystem {
  constructor() {
    this.container = null;
    this.particles = [];
    this.animFrame = null;
    this.active = false;
  }

  init(containerId = 'particles-container') {
    this.container = document.getElementById(containerId);
    if (!this.container) {
      this.container = document.createElement('div');
      this.container.id = containerId;
      document.getElementById('game-container').appendChild(this.container);
    }
  }

  emit(presetName, options = {}) {
    if (!this.container) this.init();
    const preset = { ...PRESETS[presetName], ...options };
    if (!preset) return;

    const { count } = preset;
    for (let i = 0; i < count; i++) {
      setTimeout(() => this._spawnParticle(preset), rand(0, 1000));
    }

    if (!this.active) {
      this.active = true;
      this._update();
    }
  }

  emitContinuous(presetName, interval = 300, options = {}) {
    if (!this.container) this.init();
    const preset = { ...PRESETS[presetName], ...options };
    this._continuousInterval = setInterval(() => {
      this._spawnParticle(preset);
    }, interval);

    if (!this.active) {
      this.active = true;
      this._update();
    }

    return this._continuousInterval;
  }

  _spawnParticle(preset) {
    const el = document.createElement('span');
    el.className = 'particle';
    el.textContent = preset.chars[Math.floor(Math.random() * preset.chars.length)];

    const size = rand(preset.size.min, preset.size.max);
    const life = rand(preset.life.min, preset.life.max);
    const speed = rand(preset.speed.min, preset.speed.max);

    let x, y;
    if (preset.direction === 'up') {
      x = rand(0, 100);
      y = 100 + rand(0, 10);
    } else if (preset.direction === 'down') {
      x = rand(0, 100);
      y = -10;
    } else {
      x = rand(0, 100);
      y = rand(0, 100);
    }

    el.style.cssText = `
      position: absolute;
      left: ${x}%;
      top: ${y}%;
      font-size: ${size}px;
      pointer-events: none;
      z-index: 100;
      opacity: 0;
      transition: opacity 0.3s;
    `;

    this.container.appendChild(el);
    requestAnimationFrame(() => (el.style.opacity = '1'));

    const particle = {
      el,
      x,
      y,
      speed,
      drift: rand(-preset.drift, preset.drift),
      life,
      age: 0,
      direction: preset.direction,
      rotation: rand(0, 360),
      rotSpeed: rand(-2, 2),
    };

    this.particles.push(particle);
    setTimeout(() => this._removeParticle(particle), life);
  }

  _removeParticle(particle) {
    particle.el.style.opacity = '0';
    setTimeout(() => {
      if (particle.el.parentNode) particle.el.parentNode.removeChild(particle.el);
      const idx = this.particles.indexOf(particle);
      if (idx > -1) this.particles.splice(idx, 1);
      if (this.particles.length === 0 && !this._continuousInterval) {
        this.active = false;
      }
    }, 300);
  }

  _update() {
    if (!this.active) return;
    for (const p of this.particles) {
      p.age += 16;
      p.x += p.drift * 0.05;
      p.rotation += p.rotSpeed;

      if (p.direction === 'up') {
        p.y -= p.speed * 0.3;
      } else if (p.direction === 'down') {
        p.y += p.speed * 0.3;
      } else {
        p.y += Math.sin(p.age / 500) * 0.2;
        p.x += Math.cos(p.age / 700) * 0.1;
      }

      p.el.style.left = p.x + '%';
      p.el.style.top = p.y + '%';
      p.el.style.transform = `rotate(${p.rotation}deg)`;
    }

    this.animFrame = requestAnimationFrame(() => this._update());
  }

  stopContinuous() {
    if (this._continuousInterval) {
      clearInterval(this._continuousInterval);
      this._continuousInterval = null;
    }
  }

  clear() {
    this.stopContinuous();
    this.active = false;
    if (this.animFrame) cancelAnimationFrame(this.animFrame);
    for (const p of this.particles) {
      if (p.el.parentNode) p.el.parentNode.removeChild(p.el);
    }
    this.particles = [];
  }
}

export const particles = new ParticleSystem();
