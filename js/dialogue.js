// ============================================
// DIALOGUE SYSTEM — Typewriter text with portraits
// ============================================

import { audio } from './audio.js';

class DialogueSystem {
  constructor() {
    this.box = null;
    this.nameEl = null;
    this.textEl = null;
    this.portraitEl = null;
    this.indicatorEl = null;
    this.queue = [];
    this.isTyping = false;
    this.currentText = '';
    this.currentIndex = 0;
    this.typeInterval = null;
    this.onComplete = null;
    this.skipRequested = false;
    this.speed = 35; // ms per character
  }

  init() {
    this.box = document.getElementById('dialogue-box');
    this.nameEl = document.getElementById('dialogue-name');
    this.textEl = document.getElementById('dialogue-text');
    this.portraitEl = document.getElementById('dialogue-portrait');
    this.indicatorEl = document.getElementById('dialogue-indicator');
  }

  /**
   * Show a sequence of dialogues.
   * @param {Array} dialogues - [{name, text, portrait?, color?}, ...]
   * @returns {Promise} resolves when all dialogues are dismissed
   */
  show(dialogues) {
    return new Promise((resolve) => {
      if (!this.box) this.init();
      this.queue = [...dialogues];
      this.onComplete = resolve;
      this._showNext();
    });
  }

  /**
   * Show a single line of text (narrator/system style)
   */
  showText(text) {
    return this.show([{ name: '', text, portrait: null }]);
  }

  _showNext() {
    if (this.queue.length === 0) {
      this.hide();
      if (this.onComplete) this.onComplete();
      return;
    }

    const entry = this.queue.shift();
    this.box.classList.remove('hidden');
    this.box.classList.add('visible');

    // Set name
    if (entry.name) {
      this.nameEl.textContent = entry.name;
      this.nameEl.style.color = entry.color || '#ffeaa7';
      this.nameEl.style.display = 'block';
    } else {
      this.nameEl.style.display = 'none';
    }

    // Set text color
    this.textEl.style.color = entry.textColor || 'var(--text)';

    // Set portrait
    if (entry.portrait) {
      this.portraitEl.innerHTML = '';
      if (typeof entry.portrait === 'string') {
        this.portraitEl.textContent = entry.portrait;
        this.portraitEl.style.fontSize = '32px';
      } else {
        this.portraitEl.appendChild(entry.portrait);
      }
      this.portraitEl.style.display = 'flex';
    } else {
      this.portraitEl.style.display = 'none';
    }

    // Start typewriter
    this.indicatorEl.style.opacity = '0';
    this.currentText = entry.text;
    this.currentIndex = 0;
    this.textEl.textContent = '';
    this.isTyping = true;
    this.skipRequested = false;

    this._typeNext();
  }

  _typeNext() {
    try {
      if (this.skipRequested) {
        this.textEl.textContent = this.currentText;
        this.isTyping = false;
        this.indicatorEl.style.opacity = '1';
        return;
      }

      if (this.currentText && this.currentIndex < this.currentText.length) {
        const char = this.currentText[this.currentIndex];
        this.textEl.textContent += char;
        this.currentIndex++;

        // Play typewriter sound for non-space characters
        if (char !== ' ' && this.currentIndex % 2 === 0) {
          try { audio.playSfx('typewriter'); } catch(e){}
        }

        // Slightly longer pause for punctuation
        const delay = '.!?,:;'.includes(char) ? this.speed * 4 : this.speed;
        this.typeInterval = setTimeout(() => this._typeNext(), delay);
      } else {
        this.isTyping = false;
        this.indicatorEl.style.opacity = '1';
      }
    } catch(err) {
      console.error('Dialogue error:', err);
      this.isTyping = false;
      this.indicatorEl.style.opacity = '1';
      if (this.currentText) this.textEl.textContent = this.currentText;
    }
  }

  handleClick() {
    if (this.isTyping) {
      // Skip to end of current text
      this.skipRequested = true;
      if (this.typeInterval) clearTimeout(this.typeInterval);
      this._typeNext();
    } else {
      // Advance to next dialogue
      audio.playSfx('click');
      this._showNext();
    }
  }

  hide() {
    if (this.box) {
      this.box.classList.remove('visible');
      this.box.classList.add('hidden');
    }
    if (this.typeInterval) clearTimeout(this.typeInterval);
    this.isTyping = false;
  }

  isActive() {
    return this.box && this.box.classList.contains('visible');
  }
}

export const dialogue = new DialogueSystem();
