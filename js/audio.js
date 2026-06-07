// ============================================
// AUDIO ENGINE — Procedural 8-bit Music & SFX
// Uses Web Audio API, no external audio files
// ============================================

const NOTE_FREQS = {
  C3: 130.81, D3: 146.83, E3: 164.81, F3: 174.61, G3: 196.00, A3: 220.00, B3: 246.94,
  C4: 261.63, D4: 293.66, E4: 329.63, F4: 349.23, G4: 392.00, A4: 440.00, 'A#4': 466.16, B4: 493.88,
  C5: 523.25, D5: 587.33, E5: 659.25, F5: 698.46, G5: 783.99, A5: 880.00, B5: 987.77,
  C6: 1046.50,
};

// Melodías predefinidas
const MELODIES = {
  title: {
    bpm: 100,
    loop: true,
    notes: [
      { n: 'E4', d: 1 }, { n: 'G4', d: 1 }, { n: 'B4', d: 1 }, { n: 'C5', d: 2 },
      { n: 'B4', d: 1 }, { n: 'G4', d: 1 }, { n: 'A4', d: 2 },
      { n: 'G4', d: 1 }, { n: 'E4', d: 1 }, { n: 'F4', d: 1 }, { n: 'G4', d: 1 },
      { n: 'A4', d: 2 }, { n: 'G4', d: 2 },
      { n: 'E4', d: 1 }, { n: 'G4', d: 1 }, { n: 'B4', d: 1 }, { n: 'C5', d: 2 },
      { n: 'D5', d: 1 }, { n: 'C5', d: 1 }, { n: 'B4', d: 2 },
      { n: 'A4', d: 1 }, { n: 'B4', d: 1 }, { n: 'C5', d: 1 }, { n: 'B4', d: 1 },
      { n: 'A4', d: 1 }, { n: 'G4', d: 1 }, { n: 'E4', d: 2 },
    ],
  },
  exploration: {
    bpm: 80,
    loop: true,
    notes: [
      { n: 'C4', d: 2 }, { n: 'E4', d: 1 }, { n: 'G4', d: 1 }, { n: 'A4', d: 2 },
      { n: 'G4', d: 1 }, { n: 'E4', d: 1 }, { n: 'F4', d: 2 }, { n: 'E4', d: 1 }, { n: 'D4', d: 1 },
      { n: 'C4', d: 2 }, { n: 'D4', d: 1 }, { n: 'E4', d: 1 }, { n: 'G4', d: 2 },
      { n: 'F4', d: 1 }, { n: 'E4', d: 1 }, { n: 'D4', d: 2 }, { n: 'C4', d: 2 },
    ],
  },
  mountain: {
    bpm: 70,
    loop: true,
    notes: [
      { n: 'E4', d: 2 }, { n: 'B4', d: 2 }, { n: 'A4', d: 1 }, { n: 'G4', d: 1 },
      { n: 'A4', d: 2 }, { n: 'E4', d: 2 },
      { n: 'D4', d: 2 }, { n: 'A4', d: 2 }, { n: 'G4', d: 1 }, { n: 'F4', d: 1 },
      { n: 'E4', d: 2 }, { n: 'D4', d: 2 },
    ],
  },
  militar: {
    bpm: 110,
    loop: true,
    notes: [
      { n: 'G3', d: 1 }, { n: 'C4', d: 1 }, { n: 'G3', d: 1 }, { n: 'C4', d: 1 },
      { n: 'E4', d: 2 }, { n: 'C4', d: 2 },
      { n: 'G3', d: 1 }, { n: 'C4', d: 1 }, { n: 'E4', d: 1 }, { n: 'G4', d: 1 },
      { n: 'C5', d: 4 },
    ],
  },
  river: {
    bpm: 90,
    loop: true,
    notes: [
      { n: 'G4', d: 1 }, { n: 'A4', d: 1 }, { n: 'B4', d: 1 }, { n: 'D5', d: 2 },
      { n: 'C5', d: 1 }, { n: 'B4', d: 1 }, { n: 'A4', d: 2 },
      { n: 'B4', d: 1 }, { n: 'A4', d: 1 }, { n: 'G4', d: 1 }, { n: 'A4', d: 2 },
      { n: 'G4', d: 1 }, { n: 'E4', d: 1 }, { n: 'G4', d: 2 },
    ],
  },
  castle: {
    bpm: 85,
    loop: true,
    notes: [
      { n: 'E4', d: 1 }, { n: 'C4', d: 1 }, { n: 'E4', d: 1 }, { n: 'A4', d: 1 },
      { n: 'B4', d: 2 }, { n: 'E4', d: 2 },
      { n: 'F4', d: 1 }, { n: 'D4', d: 1 }, { n: 'F4', d: 1 }, { n: 'B4', d: 1 },
      { n: 'C5', d: 2 }, { n: 'A4', d: 2 },
    ],
  },
  twist: {
    bpm: 130,
    loop: true,
    notes: [
      { n: 'C4', d: 1 }, { n: 'E4', d: 1 }, { n: 'F4', d: 1 }, { n: 'F4', d: 1 },
      { n: 'G4', d: 2 }, { n: 'G4', d: 2 },
      { n: 'C4', d: 1 }, { n: 'E4', d: 1 }, { n: 'F4', d: 1 }, { n: 'F4', d: 1 },
      { n: 'G4', d: 2 }, { n: 'G4', d: 2 }
    ],
  },
  cotton: {
    bpm: 140,
    loop: true,
    notes: [
      { n: 'A4', d: 0.5 }, { n: 'A4', d: 0.5 }, { n: 'C5', d: 1 }, { n: 'A4', d: 1 },
      { n: 'G4', d: 1 }, { n: 'E4', d: 1 }, { n: 'G4', d: 1 }, { n: 'A4', d: 1 },
      { n: 'A4', d: 0.5 }, { n: 'A4', d: 0.5 }, { n: 'C5', d: 1 }, { n: 'A4', d: 1 },
      { n: 'G4', d: 1 }, { n: 'E4', d: 1 }, { n: 'D4', d: 2 }
    ],
  },
  vidaloca: {
    bpm: 125,
    loop: true,
    notes: [
      { n: 'A4', d: 1 }, { n: 'B4', d: 0.5 }, { n: 'C5', d: 0.5 }, { n: 'A4', d: 1 }, { n: 'E4', d: 1 },
      { n: 'A4', d: 1 }, { n: 'B4', d: 0.5 }, { n: 'C5', d: 0.5 }, { n: 'D5', d: 2 },
      { n: 'C5', d: 1 }, { n: 'B4', d: 1 }, { n: 'A4', d: 2 }
    ],
  },
  angeles: {
    bpm: 135,
    loop: true,
    notes: [
      { n: 'C5', d: 1 }, { n: 'C5', d: 1 }, { n: 'C5', d: 1 }, { n: 'D5', d: 1 },
      { n: 'B4', d: 1 }, { n: 'A4', d: 1 }, { n: 'G4', d: 2 },
      { n: 'A4', d: 1 }, { n: 'B4', d: 1 }, { n: 'A4', d: 1 }, { n: 'G4', d: 1 },
      { n: 'E4', d: 2 }, { n: 'G4', d: 2 }
    ],
  },
  leyinnata: {
    bpm: 110,
    loop: true,
    notes: [
      { n: 'E4', d: 1 }, { n: 'G4', d: 1 }, { n: 'B4', d: 1 }, { n: 'E5', d: 1 },
      { n: 'D5', d: 1 }, { n: 'B4', d: 1 }, { n: 'G4', d: 1 }, { n: 'F4', d: 1 },
      { n: 'E4', d: 1 }, { n: 'A4', d: 1 }, { n: 'C5', d: 1 }, { n: 'E5', d: 2 },
      { n: 'D5', d: 1 }, { n: 'B4', d: 2 }
    ],
  },
  mistica: {
    bpm: 65,
    loop: true,
    notes: [
      { n: 'E4', d: 2 }, { n: 'G4', d: 2 }, { n: 'B4', d: 2 }, { n: 'D5', d: 2 },
      { n: 'C5', d: 2 }, { n: 'A4', d: 2 }, { n: 'F4', d: 4 },
      { n: 'G4', d: 2 }, { n: 'B4', d: 2 }, { n: 'E5', d: 2 }, { n: 'C5', d: 2 },
      { n: 'A4', d: 4 }, { n: 'E4', d: 4 }
    ],
  },
  epica: {
    bpm: 135,
    loop: true,
    notes: [
      { n: 'A4', d: 1 }, { n: 'A4', d: 1 }, { n: 'C5', d: 1 }, { n: 'B4', d: 1 }, { n: 'A4', d: 1 }, { n: 'E4', d: 2 },
      { n: 'A4', d: 1 }, { n: 'A4', d: 1 }, { n: 'D5', d: 1 }, { n: 'C5', d: 1 }, { n: 'B4', d: 2 },
      { n: 'E4', d: 1 }, { n: 'E4', d: 1 }, { n: 'A4', d: 1 }, { n: 'A4', d: 1 }, { n: 'E5', d: 1 }, { n: 'D5', d: 1 }, { n: 'C5', d: 0.5 }, { n: 'B4', d: 0.5 }, { n: 'A4', d: 4 }
    ],
  },
  burger: {
    bpm: 110,
    loop: true,
    notes: [
      { n: 'C4', d: 1 }, { n: 'C4', d: 0.5 }, { n: 'E4', d: 0.5 }, { n: 'F4', d: 1 }, { n: 'G4', d: 1 },
      { n: 'G4', d: 0.5 }, { n: 'F4', d: 0.5 }, { n: 'E4', d: 1 }, { n: 'C4', d: 2 }
    ]
  },
  yeti: {
    bpm: 80,
    loop: true,
    notes: [
      { n: 'C3', d: 2 }, { n: 'G3', d: 2 }, { n: 'C4', d: 2 }, { n: 'G3', d: 2 },
      { n: 'F3', d: 2 }, { n: 'C4', d: 2 }, { n: 'E3', d: 2 }, { n: 'D3', d: 2 }
    ]
  },
  reygato: {
    bpm: 160,
    loop: true,
    notes: [
      { n: 'C5', d: 0.5 }, { n: 'E5', d: 0.5 }, { n: 'G5', d: 0.5 }, { n: 'C6', d: 0.5 },
      { n: 'G5', d: 0.5 }, { n: 'E5', d: 0.5 }, { n: 'C5', d: 1 },
      { n: 'A4', d: 0.5 }, { n: 'C5', d: 0.5 }, { n: 'E5', d: 0.5 }, { n: 'A5', d: 0.5 },
      { n: 'E5', d: 0.5 }, { n: 'C5', d: 0.5 }, { n: 'A4', d: 1 }
    ]
  },
  grulla: {
    bpm: 85,
    loop: true,
    notes: [
      { n: 'C4', d: 2 }, { n: 'D4', d: 1 }, { n: 'E4', d: 1 }, { n: 'G4', d: 2 }, { n: 'A4', d: 2 },
      { n: 'C5', d: 2 }, { n: 'A4', d: 1 }, { n: 'G4', d: 1 }, { n: 'E4', d: 4 },
      { n: 'D4', d: 2 }, { n: 'C4', d: 2 }, { n: 'A3', d: 2 }, { n: 'C4', d: 4 }
    ]
  },
  boss: {
    bpm: 110,
    loop: true,
    notes: [
      { n: 'D4', d: 1 }, { n: 'F4', d: 1 }, { n: 'A4', d: 2 }, { n: 'C5', d: 2 },
      { n: 'B4', d: 1 }, { n: 'A4', d: 1 }, { n: 'G4', d: 2 }, { n: 'F4', d: 2 },
      { n: 'E4', d: 1 }, { n: 'G4', d: 1 }, { n: 'B4', d: 2 }, { n: 'A4', d: 2 },
      { n: 'G4', d: 1 }, { n: 'A4', d: 1 }, { n: 'B4', d: 1 }, { n: 'C5', d: 1 },
      { n: 'D5', d: 2 }, { n: 'A4', d: 2 },
    ],
  },

  finale: {
    bpm: 75,
    loop: true,
    notes: [
      { n: 'C4', d: 2 }, { n: 'E4', d: 2 }, { n: 'G4', d: 2 }, { n: 'C5', d: 3 },
      { n: 'B4', d: 1 }, { n: 'A4', d: 2 }, { n: 'G4', d: 2 },
      { n: 'F4', d: 2 }, { n: 'A4', d: 2 }, { n: 'C5', d: 2 }, { n: 'E5', d: 3 },
      { n: 'D5', d: 1 }, { n: 'C5', d: 2 }, { n: 'G4', d: 2 },
    ],
  },
  system: {
    bpm: 180,
    loop: true,
    notes: [
      // Ba-na-na ba-na-na ba-na-na ter-ra-cot-ta
      { n: 'E4', d: 0.5 }, { n: 'E4', d: 0.5 }, { n: 'G4', d: 0.5 },
      { n: 'E4', d: 0.5 }, { n: 'E4', d: 0.5 }, { n: 'G4', d: 0.5 },
      { n: 'E4', d: 0.5 }, { n: 'E4', d: 0.5 }, { n: 'G4', d: 0.5 },
      { n: 'A4', d: 0.5 }, { n: 'A#4', d: 0.5 }, { n: 'A4', d: 0.5 },
      
      { n: 'E4', d: 0.5 }, { n: 'E4', d: 0.5 }, { n: 'G4', d: 0.5 },
      { n: 'E4', d: 0.5 }, { n: 'E4', d: 0.5 }, { n: 'G4', d: 0.5 },
      { n: 'E4', d: 0.5 }, { n: 'E4', d: 0.5 }, { n: 'G4', d: 0.5 },
      { n: 'D4', d: 0.5 }, { n: 'C4', d: 0.5 }, { n: 'B3', d: 0.5 },
    ],
  },
};

class AudioEngine {
  constructor() {
    this.ctx = null;
    this.masterGain = null;
    this.currentMelody = null;
    this.melodyTimeout = null;
    this.isPlaying = false;
    this.initialized = false;
    this.muted = false;
    this.activeOscillators = [];
  }

  init() {
    if (this.initialized) return;
    try {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.value = 0.15;
      this.masterGain.connect(this.ctx.destination);
      this.initialized = true;
    } catch (e) {
      console.warn('Web Audio API not supported');
    }
  }

  resume() {
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  _playNote(freq, startTime, duration, type = 'square', isMelody = false) {
    if (!this.ctx || this.muted) return;
    const osc = this.ctx.createOscillator();
    const noteGain = this.ctx.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    noteGain.gain.setValueAtTime(0.3, startTime);
    noteGain.gain.exponentialRampToValueAtTime(0.01, startTime + duration * 0.9);
    osc.connect(noteGain);
    noteGain.connect(this.masterGain);
    osc.start(startTime);
    osc.stop(startTime + duration);
    
    if (isMelody) {
      this.activeOscillators.push(osc);
      osc.onended = () => {
        const idx = this.activeOscillators.indexOf(osc);
        if (idx > -1) this.activeOscillators.splice(idx, 1);
      };
    }
  }

  playMelody(name) {
    if (!this.initialized) this.init();
    this.stopMelody();
    const melody = MELODIES[name];
    if (!melody || !this.ctx) return;
    this.isPlaying = true;
    this.currentMelody = name;
    this.resume();
    this._scheduleMelody(melody);
  }

  _scheduleMelody(melody) {
    const beatDuration = 60 / melody.bpm;
    let time = this.ctx.currentTime + 0.1;
    for (const note of melody.notes) {
      const freq = NOTE_FREQS[note.n];
      const dur = note.d * beatDuration;
      if (freq) this._playNote(freq, time, dur, 'square', true);
      time += dur;
    }
    const totalDuration = melody.notes.reduce((s, n) => s + n.d, 0) * beatDuration;
    if (melody.loop && this.isPlaying) {
      this.melodyTimeout = setTimeout(() => {
        if (this.isPlaying && this.currentMelody) {
          this._scheduleMelody(melody);
        }
      }, totalDuration * 1000);
    }
  }

  stopMelody() {
    this.isPlaying = false;
    this.currentMelody = null;
    if (this.melodyTimeout) {
      clearTimeout(this.melodyTimeout);
      this.melodyTimeout = null;
    }
    this.activeOscillators.forEach(osc => {
      try { 
        osc.stop(); 
        osc.disconnect(); 
      } catch(e) {}
    });
    this.activeOscillators = [];
  }

  // Sound Effects
  playSfx(type) {
    if (!this.initialized) this.init();
    if (!this.ctx || this.muted) return;
    this.resume();
    const now = this.ctx.currentTime;
    switch (type) {
      case 'click':
        this._playNote(800, now, 0.05, 'square');
        break;
      case 'typewriter':
        this._playNote(600 + Math.random() * 200, now, 0.03, 'square');
        break;
      case 'fanfare':
        this._playNote(NOTE_FREQS.C5, now, 0.15, 'square');
        this._playNote(NOTE_FREQS.E5, now + 0.15, 0.15, 'square');
        this._playNote(NOTE_FREQS.G5, now + 0.3, 0.15, 'square');
        this._playNote(NOTE_FREQS.C6, now + 0.45, 0.4, 'square');
        break;
      case 'join':
        this._playNote(NOTE_FREQS.G4, now, 0.12, 'square');
        this._playNote(NOTE_FREQS.B4, now + 0.12, 0.12, 'square');
        this._playNote(NOTE_FREQS.D5, now + 0.24, 0.12, 'square');
        this._playNote(NOTE_FREQS.G5, now + 0.36, 0.3, 'square');
        break;
      case 'select':
        this._playNote(NOTE_FREQS.E5, now, 0.08, 'square');
        this._playNote(NOTE_FREQS.G5, now + 0.1, 0.15, 'square');
        break;
      case 'reveal':
        for (let i = 0; i < 8; i++) {
          const freq = NOTE_FREQS.C4 * Math.pow(2, i / 4);
          this._playNote(freq, now + i * 0.1, 0.2, 'sine');
        }
        break;
      case 'celebration':
        const celebNotes = ['C5','E5','G5','C6','G5','E5','C5','E5','G5','C6'];
        celebNotes.forEach((n, i) => {
          this._playNote(NOTE_FREQS[n], now + i * 0.12, 0.15, 'square');
        });
        break;
    }
  }

  toggleMute() {
    this.muted = !this.muted;
    if (this.masterGain) {
      this.masterGain.gain.value = this.muted ? 0 : 0.15;
    }
    return this.muted;
  }

  fadeOut(duration = 1) {
    if (!this.masterGain) return;
    this.masterGain.gain.linearRampToValueAtTime(0, this.ctx.currentTime + duration);
    setTimeout(() => {
      this.stopMelody();
      this.masterGain.gain.value = this.muted ? 0 : 0.15;
    }, duration * 1000);
  }
}

export const audio = new AudioEngine();
