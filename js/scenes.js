// ============================================
// GAME SCENES — All scene definitions
// ============================================

import { CONFIG, getLayoutScale } from './config.js';
import { audio } from './audio.js';
import { particles } from './particles.js';
import { dialogue } from './dialogue.js';
import { renderSprite } from './sprites.js';
import { HEROES, ALLIES, ENEMY_SPRITES } from './characters.js';
import { STORY } from './story.js';
import { battleEngine } from './battle.js';

// ---- HELPERS ----

function wait(ms) {
  return new Promise(r => setTimeout(r, ms));
}

function fadeIn(el, ms = 600) {
  el.style.opacity = '0';
  el.style.transition = `opacity ${ms}ms ease`;
  requestAnimationFrame(() => { el.style.opacity = '1'; });
  return wait(ms);
}

function fadeOut(el, ms = 600) {
  el.style.transition = `opacity ${ms}ms ease`;
  el.style.opacity = '0';
  return wait(ms);
}

function createEl(tag, className, text) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text) el.textContent = text;
  return el;
}

// ---- TITLE SCENE ----

export class TitleScene {
  constructor(game) { this.game = game; }

  async enter(container) {
    container.innerHTML = '';
    container.className = 'scene scene-title';

    const content = createEl('div', 'title-content');
    content.innerHTML = `
      <div class="title-stars" aria-hidden="true"></div>
      <div class="title-main">
        <h1 class="title-names">Fantasy Life</h1>
        <div class="title-game">La aventura de Gastón y Viviana</div>
      </div>
      <div class="title-prompt blink">▼ Presiona A para comenzar ▼</div>
    `;
    container.appendChild(content);

    audio.playMelody('title');
    particles.emitContinuous('stars', 2000);
    await fadeIn(container, 600);

    // Wait for A button (dialogue click handler)
    await new Promise(resolve => {
      const handler = () => {
        document.getElementById('game-container').removeEventListener('click', handler);
        document.removeEventListener('keydown', keyHandler);
        // Request fullscreen on user interaction to hide address bar on mobile
        const docEl = document.documentElement;
        if (docEl.requestFullscreen) {
          docEl.requestFullscreen().catch(() => {});
        } else if (docEl.webkitRequestFullscreen) { /* Safari */
          docEl.webkitRequestFullscreen().catch(() => {});
        }
        resolve();
      };
      const keyHandler = (e) => {
        if (e.key === 'Enter' || e.key === ' ') handler();
      };
      document.getElementById('game-container').addEventListener('click', handler);
      document.addEventListener('keydown', keyHandler);
      // Also the A button triggers this via the click on game-container
      document.getElementById('btn-a').addEventListener('click', handler, { once: true });
    });

    particles.clear();
    audio.playSfx('select');
  }
}

// ---- CHARACTER SELECT SCENE ----

export class SelectScene {
  constructor(game) { this.game = game; }

  async enter(container) {
    container.innerHTML = '';
    container.className = 'scene scene-select';

    const heading = createEl('h2', 'select-heading', '⚔️ Elige tu Héroe ⚔️');
    container.appendChild(heading);

    const grid = createEl('div', 'select-grid');

    const selectedPromise = new Promise((resolve) => {
      HEROES.forEach((hero, index) => {
        const card = createEl('div', 'hero-card');
        card.dataset.index = index;

        // Sprite or Image
        const spriteWrap = createEl('div', 'hero-sprite');
        if (hero.imageUrl) {
          const img = createEl('img');
          img.src = hero.imageUrl;
          img.style.width = '95px';
          img.style.height = 'auto';
          img.style.imageRendering = 'pixelated';
          if (hero.scale) img.style.transform = `scale(${hero.scale})`;
          spriteWrap.appendChild(img);
        } else if (hero.sprite) {
          const canvas = renderSprite(hero.sprite.idle, hero.sprite.palette, 5.5);
          spriteWrap.appendChild(canvas);
        }
        card.appendChild(spriteWrap);

        // Info
        const info = createEl('div', 'hero-info');
        info.innerHTML = `
          <div class="hero-name" style="color:${hero.color}">${hero.emoji} ${hero.name}</div>
          <div class="hero-class">${hero.className}</div>
          <div class="hero-desc">${hero.description}</div>
        `;
        card.appendChild(info);

        // Stats
        const stats = createEl('div', 'hero-stats');
        for (const [stat, val] of Object.entries(hero.stats)) {
          const bar = createEl('div', 'stat-row');
          bar.innerHTML = `
            <span class="stat-name">${stat}</span>
            <div class="stat-bar"><div class="stat-fill" style="width:${val * 10}%;background:${hero.color}"></div></div>
          `;
          stats.appendChild(bar);
        }
        card.appendChild(stats);

        card.addEventListener('click', () => {
          audio.playSfx('fanfare');
          grid.querySelectorAll('.hero-card').forEach(c => c.classList.remove('selected'));
          card.classList.add('selected');
          resolve(index);
        });

        grid.appendChild(card);
      });
    });

    container.appendChild(grid);
    await fadeIn(container, 600);

    const heroIndex = await selectedPromise;
    this.game.selectHero(heroIndex);

    // Show selection animation
    const overlay = createEl('div', 'selection-overlay');
    const hero = HEROES[heroIndex];
    overlay.innerHTML = `
      <div class="selection-announcement">
        <div class="selection-sprite"></div>
        <div class="selection-text">
          <div class="selection-label">Tu héroe:</div>
          <div class="selection-name" style="color:${hero.color}">${hero.emoji} ${hero.name}</div>
          <div class="selection-class">${hero.className}</div>
        </div>
      </div>
    `;
    const spriteEl = overlay.querySelector('.selection-sprite');
    if (hero.imageUrl) {
      const img = createEl('img');
      img.src = hero.imageUrl;
      img.style.width = '140px';
      img.style.height = 'auto';
      img.style.imageRendering = 'pixelated';
      spriteEl.appendChild(img);
    } else if (hero.sprite) {
      spriteEl.appendChild(renderSprite(hero.sprite.idle, hero.sprite.palette, 4.5));
    }
    container.appendChild(overlay);
    await fadeIn(overlay, 500);
    await wait(2000);
    await fadeOut(overlay, 500);
  }
}

// ---- CHAPTER SCENE ----

export class ChapterScene {
  constructor(game, chapterIndex) {
    this.game = game;
    this.chapterIndex = chapterIndex;
    this.chapter = STORY.chapters[chapterIndex];
  }

  async enter(container) {
    container.innerHTML = '';
    container.className = 'scene';

    // ---- TITLE CARD ----
    const titleCard = createEl('div', 'chapter-title-card');
    titleCard.innerHTML = `
      <div class="chapter-number">Capítulo ${this.chapter.num}</div>
      <div class="chapter-name">${this.chapter.title}</div>
    `;
    container.appendChild(titleCard);

    audio.fadeOut(0.5);
    await wait(600);
    await fadeIn(titleCard, 800);
    await wait(2000);
    await fadeOut(titleCard, 800);
    titleCard.remove();

    // ---- SCENE SETUP ----
    container.classList.add(this.chapter.bgClass);
    audio.playMelody('exploration');

    // Scenery
    const scenery = createEl('div', 'chapter-scenery');
    container.appendChild(scenery);

    // Party display
    const partyArea = createEl('div', 'chapter-party');
    const hero = this.game.state.hero;
    
    // Build unified list of active party members
    const allAvailable = [];
    if (hero) allAvailable.push(hero);
    if (this.game.state.party) allAvailable.push(...this.game.state.party);
    
    // Sort according to target cinematic order:
    // Margarita (reflected), Viviana (no reflected), Gastón (reflected), Valentina (no reflected), Gatos (end)
    const orderMap = {
      'gatos': 0,
      'margarita': 1,
      'novia': 2,
      'novio': 3,
      'valentina': 4
    };
    
    const activeMembers = allAvailable.filter(m => m && m.id).sort((a, b) => {
      const orderA = orderMap[a.id] !== undefined ? orderMap[a.id] : 99;
      const orderB = orderMap[b.id] !== undefined ? orderMap[b.id] : 99;
      return orderA - orderB;
    });

    const layoutScale = getLayoutScale();

    // Dynamic height and scale factor based on the number of active party members:
    let maxHeight = 200;
    let vhHeight = 22;
    let canvasFactor = 5;
    
    if (activeMembers.length === 1) {
      maxHeight = 240;
      vhHeight = 26;
      canvasFactor = 6.2;
    } else if (activeMembers.length === 2) {
      maxHeight = 200;
      vhHeight = 22;
      canvasFactor = 5;
    } else if (activeMembers.length === 3) {
      maxHeight = 160;
      vhHeight = 18;
      canvasFactor = 4;
    } else if (activeMembers.length >= 4) {
      maxHeight = 120;
      vhHeight = 14;
      canvasFactor = 3;
    }

    maxHeight = Math.round(maxHeight * layoutScale);
    vhHeight = vhHeight * layoutScale;
    canvasFactor = canvasFactor * layoutScale;

    for (const member of activeMembers) {
      const memberDiv = createEl('div', 'party-member-scene');
      
      // Determine reflection scaling:
      // Gastón and Valentina are reflected (-1). Viviana and Margarita are not (1). Gatos default to 1.
      let scaleX = 1;
      if (member.id === 'valentina' || member.id === 'novio') {
        scaleX = -1;
      }
      
      const baseScale = member.scale || 1;
      const transformStr = `scale(${baseScale * scaleX}, ${baseScale})`;
      
      if (member.imageUrl) {
        const img = createEl('img');
        img.src = member.imageUrl + '?v=53';
        img.style.height = `clamp(80px, ${vhHeight}vh, ${maxHeight}px)`;
        img.style.maxHeight = `${maxHeight}px`;
        img.style.width = 'auto';
        img.style.imageRendering = 'pixelated';
        img.style.filter = 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))';
        img.style.transformOrigin = 'bottom center';
        img.style.transform = transformStr;
        memberDiv.appendChild(img);
      } else if (member.sprite) {
        const memberSprite = renderSprite(member.sprite.idle, member.sprite.palette, canvasFactor);
        memberSprite.style.transform = transformStr;
        memberDiv.appendChild(memberSprite);
      }
      partyArea.appendChild(memberDiv);
    }
    container.appendChild(partyArea);

    // Particles
    particles.emitContinuous(this.chapter.particleType, 600);

    await fadeIn(container, 500);
    await wait(500);

    // ---- EVENT IMAGE ----
    let eventImageEl = null;
    if (this.chapter.image) {
      eventImageEl = createEl('img', 'chapter-event-image');
      eventImageEl.src = this.chapter.image + '?v=53';
      eventImageEl.style.position = 'absolute';
      eventImageEl.style.top = '10%';
      eventImageEl.style.left = '15%';
      eventImageEl.style.width = 'clamp(100px, 20vmin, 180px)';
      eventImageEl.style.objectFit = 'contain';
      eventImageEl.style.zIndex = '15';
      eventImageEl.style.animation = 'ally-float 4s infinite ease-in-out';
      eventImageEl.style.filter = 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.4))';
      container.appendChild(eventImageEl);
      await fadeIn(eventImageEl, 800);

      // Re-position party to look like a battle encounter
      partyArea.style.left = 'auto';
      partyArea.style.right = '5%';
      partyArea.style.transform = 'none';
      partyArea.style.flexDirection = 'row-reverse';
      
      // Make all characters face left (towards the enemy)
      const divs = partyArea.querySelectorAll('.party-member-scene');
      divs.forEach((div, idx) => {
        const imgEl = div.querySelector('img, canvas');
        if (imgEl) {
          const member = activeMembers[idx];
          if (member) {
            const baseScale = member.scale || 1;
            imgEl.style.transform = `scale(${-baseScale}, ${baseScale})`;
          }
        }
      });
    }

    // ---- INTRO DIALOGUES ----
    if (this.chapter.introDialogues && this.chapter.introDialogues.length > 0) {
      await dialogue.show(this.chapter.introDialogues);
      await wait(300);
    }

    // ---- BATTLE PHASE ----
    if (this.chapter.enemy && this.chapter.battleScript && this.chapter.battleScript.length > 0) {
      // Hide party during battle (they're represented by battle-player entity)
      await fadeOut(partyArea, 300);
      partyArea.style.display = 'none';

      // Play battle specific track
      if (this.chapter.melody) {
        audio.playMelody(this.chapter.melody);
      }

      // Run the battle
      await battleEngine.start(container, this.chapter, hero, this.game.state.party);

      // Resume exploration music
      audio.playMelody('exploration');

      // Show party again after battle
      partyArea.style.display = '';
      await fadeIn(partyArea, 300);
    }

    // ---- RESOLUTION DIALOGUES ----
    if (this.chapter.resolutionDialogues && this.chapter.resolutionDialogues.length > 0) {
      if (this.chapter.num === 11) {
        // Show first 4 dialogues (up to: "De sus ramas bajó flotando el regalo final.")
        const firstDialogues = this.chapter.resolutionDialogues.slice(0, 4);
        await dialogue.show(firstDialogues);
        await wait(200);

        // Transition music
        audio.fadeOut(0.5);
        await wait(600);
        audio.playSfx('reveal');
        audio.playMelody('finale');

        // Emit beautiful sparkles and hearts
        particles.clear();
        particles.emitContinuous('sparkle', 150);
        particles.emitContinuous('hearts', 250);

        // Show rings overlay in center of screen
        const ringsOverlay = createEl('div', 'rings-overlay');
        ringsOverlay.innerHTML = `<img src="assets/anillos.png" class="rings-image-reveal">`;
        container.appendChild(ringsOverlay);
        await fadeIn(ringsOverlay, 1500);
        await wait(1000);

        // Show the final dialogue: "¡LOS ANILLOS FUERON OBTENIDOS!"
        await dialogue.show([this.chapter.resolutionDialogues[4]]);
        await wait(300);

        // Dismiss the rings presentation
        await fadeOut(ringsOverlay, 800);
        ringsOverlay.remove();
        particles.clear();
      } else {
        await dialogue.show(this.chapter.resolutionDialogues);
        await wait(300);
      }
    }

    // ---- ALLY JOIN ----
    if (this.chapter.allyIndex !== null && this.chapter.allyIndex !== undefined) {
      let newAlly;

      if (this.chapter.allyIndex === 'other_hero') {
        // The hero that was NOT selected
        const otherIndex = this.game.state.hero.id === HEROES[0].id ? 1 : 0;
        newAlly = HEROES[otherIndex];
      } else {
        newAlly = ALLIES[this.chapter.allyIndex];
      }

      if (newAlly) {
        this.game.addPartyMember(newAlly);

        // Ally join animation
        audio.playSfx('join');
        const joinBanner = createEl('div', 'join-banner');
        joinBanner.innerHTML = `
          <div class="join-sprite"></div>
          <div class="join-text">
            <div class="join-label">¡Nuevo miembro!</div>
            <div class="join-name" style="color:${newAlly.color}">${newAlly.emoji} ${newAlly.name}</div>
            <div class="join-class">${newAlly.className}</div>
            <div class="join-message">${this.chapter.allyJoinMessage || newAlly.joinMessage || '¡Se une a la party!'}</div>
          </div>
        `;

        const joinSpriteEl = joinBanner.querySelector('.join-sprite');
        if (newAlly.imageUrl) {
          const img = createEl('img');
          img.src = newAlly.imageUrl;
          img.style.width = '140px';
          img.style.height = 'auto';
          img.style.imageRendering = 'pixelated';
          joinSpriteEl.appendChild(img);
        } else if (newAlly.sprite) {
          joinSpriteEl.appendChild(renderSprite(newAlly.sprite.idle, newAlly.sprite.palette, 6));
        }

        container.appendChild(joinBanner);
        await fadeIn(joinBanner, 500);

        if (this.chapter.allyDialogues) {
          await dialogue.show(this.chapter.allyDialogues);
        }

        await wait(1000);
        await fadeOut(joinBanner, 500);
        joinBanner.remove();
      }
    }

    particles.clear();
  }
}

// ---- FINALE SCENE ----

export class FinaleScene {
  constructor(game) { this.game = game; }

  async enter(container) {
    container.innerHTML = '';
    container.className = 'scene scene-finale bg-jardin';

    // Title card for Chapter 5 / Final
    const titleCard = createEl('div', 'chapter-title-card');
    titleCard.innerHTML = `
      <div class="chapter-number">Capítulo Final</div>
      <div class="chapter-name">El Jardín Japonés</div>
    `;
    container.appendChild(titleCard);

    audio.fadeOut(0.5);
    await wait(600);
    await fadeIn(titleCard, 800);
    await wait(2000);
    await fadeOut(titleCard, 800);
    titleCard.remove();

    // Show full party
    const partyArea = createEl('div', 'finale-party');
    const familiaImg = createEl('img');
    familiaImg.src = 'assets/familia.png?v=44';
    familiaImg.style.height = 'clamp(120px, 40vh, 350px)';
    familiaImg.style.maxHeight = '350px';
    familiaImg.style.width = 'auto';
    familiaImg.style.imageRendering = 'pixelated';
    familiaImg.style.filter = 'drop-shadow(0 2px 10px rgba(0,0,0,0.5))';
    partyArea.appendChild(familiaImg);
    container.appendChild(partyArea);

    audio.playMelody('finale');
    await fadeIn(container, 800);
    await wait(500);

    await dialogue.show(STORY.finaleDialogues);
    await wait(500);

    // ---- CEREZO BOSS via Battle Engine ----
    const cerezoBoss = STORY.chapters[STORY.chapters.length - 1]; // Last chapter = boss
    if (cerezoBoss && cerezoBoss.enemy) {
      await fadeOut(partyArea, 500);
      partyArea.style.display = 'none';

      // Intro dialogue for boss
      if (cerezoBoss.introDialogues) {
        await dialogue.show(cerezoBoss.introDialogues);
      }

      // Run boss battle
      await battleEngine.start(container, cerezoBoss, this.game.state.hero, this.game.state.party);

      // Resolution
      if (cerezoBoss.resolutionDialogues) {
        await dialogue.show(cerezoBoss.resolutionDialogues);
      }
    }

    particles.clear();

    // ---- THE BIG REVEAL ----
    audio.playSfx('reveal');
    particles.emit('confetti');

    const reveal = createEl('div', 'reveal-container');
    reveal.innerHTML = `
      <div class="reveal-announcement">¡ESTÁS INVITADO/A!</div>
    `;
    container.appendChild(reveal);
    await fadeIn(reveal, 800);
    await wait(2000);

    await fadeOut(reveal, 500);
    reveal.remove();

    audio.playSfx('celebration');
    particles.emitContinuous('hearts', 300);
    particles.emit('confetti');

    // Wedding invitation card
    const invitation = createEl('div', 'invitation-card');
    invitation.innerHTML = `
      <div class="inv-ornament">✦ ✦ ✦</div>
      <div class="inv-label">Celebramos el amor de</div>
      <div class="inv-names">${CONFIG.couple.name1}<br><span class="inv-and">&</span><br>${CONFIG.couple.name2}</div>
      <div class="inv-divider">─── ♡ ───</div>
      <div class="inv-details">
        <div class="inv-detail"><span class="inv-icon">📅</span> ${CONFIG.wedding.date}</div>
        <div class="inv-detail"><span class="inv-icon">🕐</span> ${CONFIG.wedding.time}</div>
        <div class="inv-detail"><span class="inv-icon">📍</span> ${CONFIG.wedding.venue}</div>
        <div class="inv-detail-address">${CONFIG.wedding.address}</div>
        <div class="inv-detail"><span class="inv-icon">👔</span> ${CONFIG.wedding.dressCode}</div>
      </div>
      <div class="inv-divider">─── ♡ ───</div>
      <div class="inv-ceremony">${CONFIG.wedding.ceremony}</div>
      <button id="btn-gifts" class="inv-gifts-btn">🎁 Sugerencia de Regalos</button>
    `;
    container.appendChild(invitation);
    await fadeIn(invitation, 1000);

    // Wire up gifts button click listener
    const btnGifts = document.getElementById('btn-gifts');
    const giftsOverlay = document.getElementById('gifts-overlay');
    const btnCloseGifts = document.getElementById('btn-close-gifts');

    if (btnGifts && giftsOverlay && btnCloseGifts) {
      btnGifts.addEventListener('click', (e) => {
        e.stopPropagation();
        giftsOverlay.classList.remove('hidden');
        giftsOverlay.classList.add('visible');
      });

      btnCloseGifts.addEventListener('click', (e) => {
        e.stopPropagation();
        giftsOverlay.classList.remove('visible');
        giftsOverlay.classList.add('hidden');
      });
    }

    // Wait for A to continue
    await dialogue.showText('▼ Presiona A para continuar ▼');
  }
}

// ---- RSVP SCENE ----

export class RsvpScene {
  constructor(game) { this.game = game; }

  async enter(container) {
    container.innerHTML = '';
    container.className = 'scene scene-rsvp';

    particles.clear();
    particles.emitContinuous('hearts', 800);

    const content = createEl('div', 'rsvp-content');
    content.innerHTML = `
      <div class="rsvp-question">¿Nos acompañás en<br>esta aventura?</div>
      <div class="rsvp-party-emoji">🎉</div>
      <div class="rsvp-buttons">
        ${CONFIG.rsvp.enabled ? `<a href="${CONFIG.rsvp.url}" target="_blank" class="rsvp-btn rsvp-yes" id="rsvp-yes">${CONFIG.rsvp.buttonText}</a>` : ''}
        <button class="rsvp-btn rsvp-replay" id="rsvp-replay">🎮 Jugar de nuevo</button>
      </div>
      <div class="rsvp-footer">
        <div class="rsvp-names">${CONFIG.couple.name1} & ${CONFIG.couple.name2}</div>
        <div class="rsvp-date">${CONFIG.wedding.date}</div>
      </div>
    `;
    container.appendChild(content);
    await fadeIn(content, 800);

    return new Promise((resolve) => {
      const replayBtn = document.getElementById('rsvp-replay');
      if (replayBtn) {
        replayBtn.addEventListener('click', () => {
          particles.clear();
          audio.stopMelody();
          resolve('replay');
        });
      }
      const yesBtn = document.getElementById('rsvp-yes');
      if (yesBtn) {
        yesBtn.addEventListener('click', () => {
          audio.playSfx('celebration');
          particles.emit('confetti');
        });
      }
    });
  }
}
