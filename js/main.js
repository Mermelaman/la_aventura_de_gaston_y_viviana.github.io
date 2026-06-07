// ============================================
// MAIN — Game Engine & Entry Point
// ============================================

import { audio } from './audio.js';
import { particles } from './particles.js';
import { dialogue } from './dialogue.js';
import { battleEngine } from './battle.js';
import { HEROES, ALLIES } from './characters.js';
import { STORY } from './story.js';
import { CONFIG } from './config.js';
import { renderSprite } from './sprites.js';
import {
  TitleScene,
  SelectScene,
  ChapterScene,
  FinaleScene,
  RsvpScene,
} from './scenes.js';

class Game {
  constructor() {
    this.state = {
      hero: null,
      party: [],
      currentScene: null,
    };
    this.container = null;
    this.partyHud = null;
  }

  init() {
    this.container = document.getElementById('scene-container');
    this.partyHud = document.getElementById('party-hud');
    dialogue.init();
    particles.init();

    // ---- BUTTON A INPUT ----
    const btnA = document.getElementById('btn-a');
    const handleA = () => {
      if (dialogue.isActive()) {
        dialogue.handleClick();
      }
    };

    // Button click
    btnA.addEventListener('click', (e) => {
      e.preventDefault();
      handleA();
    });

    // Keyboard: Enter or Space
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleA();
        // Visual feedback on button
        btnA.classList.add('pressed');
        setTimeout(() => btnA.classList.remove('pressed'), 100);
      }
    });

    // Also allow tapping the game screen to advance dialogue
    document.getElementById('game-container').addEventListener('click', (e) => {
      if (dialogue.isActive()) {
        e.stopPropagation();
        handleA();
      }
    });

    this.start();
  }

  selectHero(index) {
    this.state.hero = { ...HEROES[index] };
    this.updatePartyHud();
  }

  addPartyMember(ally) {
    this.state.party.push({ ...ally });
    this.updatePartyHud();
  }

  updatePartyHud() {
    if (!this.partyHud) return;
    this.partyHud.innerHTML = '';

    const members = [];
    if (this.state.hero) members.push(this.state.hero);
    members.push(...this.state.party);

    if (members.length === 0) {
      this.partyHud.style.display = 'none';
      return;
    }

    this.partyHud.style.display = 'flex';
    members.forEach(m => {
      const slot = document.createElement('div');
      slot.className = 'hud-slot';
      slot.innerHTML = `
        <span class="hud-emoji">${m.emoji}</span>
        <span class="hud-name">${m.name}</span>
      `;
      slot.style.borderColor = m.color;
      this.partyHud.appendChild(slot);
    });
  }

  async transition(ms = 600) {
    const overlay = document.getElementById('transition-overlay');
    overlay.style.transition = `opacity ${ms}ms ease`;
    overlay.style.opacity = '1';
    overlay.style.pointerEvents = 'all';
    await new Promise(r => setTimeout(r, ms));
    overlay.style.opacity = '0';
    overlay.style.pointerEvents = 'none';
  }

  async start() {
    // ---- TITLE ----
    const titleScene = new TitleScene(this);
    await titleScene.enter(this.container);
    await this.transition();

    await this.runGame();
  }

  async runGame() {
    // ---- CHARACTER SELECT ----
    const selectScene = new SelectScene(this);
    await selectScene.enter(this.container);
    await this.transition();

    // ---- CHAPTERS ----
    const chapters = STORY.chapters;
    for (let i = 0; i < chapters.length; i++) {
      const chapter = new ChapterScene(this, i);
      await chapter.enter(this.container);
      await this.transition();
    }

    // ---- FINALE ----
    const finaleScene = new FinaleScene(this);
    await finaleScene.enter(this.container);
    await this.transition();

    // ---- RSVP ----
    const rsvpScene = new RsvpScene(this);
    const result = await rsvpScene.enter(this.container);

    if (result === 'replay') {
      this.state = { hero: null, party: [], currentScene: null };
      this.updatePartyHud();
      await this.transition();
      await this.start();
    }
  }
}

// ---- BOOT ----
window.addEventListener('DOMContentLoaded', () => {
  const game = new Game();
  game.init();
});
