// ============================================
// BATTLE ENGINE — Scripted turn-based battles
// ============================================

import { audio } from './audio.js';
import { dialogue } from './dialogue.js';
import { renderSprite } from './sprites.js';
import { ENEMY_SPRITES } from './characters.js';

function createEl(tag, className, text) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text) el.textContent = text;
  return el;
}

function wait(ms) { return new Promise(r => setTimeout(r, ms)); }

class BattleEngine {
  constructor() {
    this.isActive = false;
    this.currentTurn = 0;
    this.levelData = null;
    this.resolve = null;
  }

  /**
   * Start a scripted battle. Returns a Promise that resolves when the battle ends.
   * @param {HTMLElement} container - The scene container to render into
   * @param {Object} chapter - The chapter data with enemy and battleScript
   * @param {Object} hero - The hero object with sprite data
   * @param {Array} party - Array of party member objects
   */
  start(container, chapter, hero, party) {
    return new Promise((resolve) => {
      this.resolve = resolve;
      this.isActive = true;
      this.levelData = chapter;
      this.currentTurn = 0;
      this.hero = hero;
      this.party = party;
      this.lastAttackerId = null;

      const enemy = chapter.enemy;
      this.enemyHP = enemy.hp;
      this.enemyMaxHP = enemy.maxHp;

      this.renderBattleScreen(container, enemy, hero, party);
      this.runNextTurn();
    });
  }

  renderBattleScreen(container, enemy, hero, party) {
    // Clear and set up battle area
    const battleArea = createEl('div', 'battle-area');

    // Enemy entity
    const enemyEntity = createEl('div', 'battle-entity battle-enemy battle-floating');
    enemyEntity.id = 'battle-enemy-entity';

    const enemySpriteWrap = createEl('div', 'battle-sprite');
    const spriteData = ENEMY_SPRITES[enemy.spriteId];
    if (enemy.imageUrl) {
      const img = createEl('img', 'battle-image');
      if (enemy.id === 'cerezo') {
        img.classList.add('cerezo-boss');
      }
      img.src = enemy.imageUrl + '?v=38';
      // Use height instead of width for enemy
      img.style.height = 'clamp(80px, 22vh, 180px)';
      img.style.maxHeight = '180px';
      img.style.width = 'auto';
      img.style.transformOrigin = 'bottom center';
      if (enemy.flip) {
        img.style.transform = 'scaleX(-1)';
      }
      enemySpriteWrap.appendChild(img);
    } else if (spriteData) {
      const canvas = renderSprite(spriteData.idle, spriteData.palette, 3.6);
      enemySpriteWrap.appendChild(canvas);
    } else {
      // Use placeholder
      const ph = createEl('div', `placeholder-sprite ph-${enemy.spriteId}`);
      ph.textContent = enemy.emoji;
      enemySpriteWrap.appendChild(ph);
    }
    enemyEntity.appendChild(enemySpriteWrap);

    const enemyName = createEl('div', 'battle-entity-name');
    enemyName.textContent = `${enemy.emoji} ${enemy.name}`;
    enemyName.style.color = enemy.color;
    enemyEntity.appendChild(enemyName);

    const enemyHPBar = createEl('div', 'hp-bar-wrap');
    const enemyHPFill = createEl('div', 'hp-bar-fill');
    enemyHPFill.id = 'enemy-hp-fill';
    enemyHPFill.style.width = '100%';
    enemyHPBar.appendChild(enemyHPFill);
    enemyEntity.appendChild(enemyHPBar);

    battleArea.appendChild(enemyEntity);

    // Player entity
    const playerEntity = createEl('div', 'battle-entity battle-player');
    playerEntity.id = 'battle-player-entity';

    const playerSpriteWrap = createEl('div', 'battle-sprite-group');
    playerSpriteWrap.style.display = 'flex';
    playerSpriteWrap.style.gap = '4px';
    playerSpriteWrap.style.alignItems = 'flex-end';

    // Hero
    const heroWrap = createEl('div', 'battle-sprite');
    if (hero && hero.imageUrl) {
      const img = createEl('img', 'battle-image');
      img.src = hero.imageUrl + '?v=38';
      // Use height instead of width so aspect ratio doesn't distort relative sizes
      img.style.height = 'clamp(70px, 18vh, 150px)';
      img.style.maxHeight = '150px';
      img.style.width = 'auto';
      img.style.transformOrigin = 'bottom center';
      const hScale = hero.scale || 1;
      img.style.transform = `scale(${-hScale}, ${hScale})`;
      heroWrap.appendChild(img);
    } else if (hero && hero.sprite) {
      const canvas = renderSprite(hero.sprite.idle, hero.sprite.palette, 3);
      heroWrap.appendChild(canvas);
    } else {
      const ph = createEl('div', 'placeholder-sprite ph-player');
      ph.textContent = '⚔️';
      heroWrap.appendChild(ph);
    }
    const heroNameEl = createEl('div', 'sprite-name');
    heroNameEl.textContent = hero.name;
    heroNameEl.style.fontSize = '13px';
    heroNameEl.style.fontWeight = 'bold';
    heroNameEl.style.marginTop = '4px';
    heroNameEl.style.textAlign = 'center';
    heroNameEl.style.color = '#fff';
    heroNameEl.style.textShadow = '0 0 4px #000, 0 0 4px #000, 0 0 2px #000';
    heroWrap.appendChild(heroNameEl);
    
    heroWrap.style.display = 'flex';
    heroWrap.style.flexDirection = 'column';
    heroWrap.style.alignItems = 'center';
    
    playerSpriteWrap.appendChild(heroWrap);

    // Party members
    party.forEach(member => {
      const memWrap = createEl('div', 'battle-sprite');
      memWrap.style.transformOrigin = 'bottom';
      if (member.imageUrl) {
        const img = createEl('img', 'battle-image');
        img.src = member.imageUrl + '?v=38';
        img.style.height = 'clamp(70px, 18vh, 150px)';
        img.style.maxHeight = '150px';
        img.style.width = 'auto';
        img.style.transformOrigin = 'bottom center';
        const mScale = member.scale || 1;
        img.style.transform = `scale(${-mScale}, ${mScale})`;
        memWrap.appendChild(img);
      } else if (member.sprite) {
        const canvas = renderSprite(member.sprite.idle, member.sprite.palette, 5);
        memWrap.appendChild(canvas);
      } else {
        const ph = createEl('div', 'placeholder-sprite ph-player');
        ph.textContent = member.emoji;
        memWrap.appendChild(ph);
      }
      
      const memNameEl = createEl('div', 'sprite-name');
      memNameEl.textContent = member.name;
      memNameEl.style.fontSize = '13px';
      memNameEl.style.fontWeight = 'bold';
      memNameEl.style.marginTop = '4px';
      memNameEl.style.textAlign = 'center';
      memNameEl.style.color = '#fff';
      memNameEl.style.textShadow = '0 0 4px #000, 0 0 4px #000, 0 0 2px #000';
      memWrap.appendChild(memNameEl);
      
      memWrap.style.display = 'flex';
      memWrap.style.flexDirection = 'column';
      memWrap.style.alignItems = 'center';
      memWrap.style.justifyContent = 'flex-end';
      
      playerSpriteWrap.appendChild(memWrap);
    });

    playerEntity.appendChild(playerSpriteWrap);

    // We removed the single overarching name label.
    // Instead, each sprite now has its own name label underneath it.

    battleArea.appendChild(playerEntity);
    container.appendChild(battleArea);

    this.battleArea = battleArea;
  }

  async runNextTurn() {
    const script = this.levelData.battleScript;

    if (this.currentTurn >= script.length) {
      // Battle over — enemy defeated
      await this.endBattle();
      return;
    }

    const turnData = script[this.currentTurn];

    // Show turn text via dialogue
    let msg = turnData.text;
    let actor = this.hero;

    if (turnData.turn === 'player') {
      const activeParty = [this.hero, ...this.party].filter(Boolean);
      let availableAttackers = activeParty.filter(m => m.id !== this.lastAttackerId);
      if (availableAttackers.length === 0) availableAttackers = activeParty;
      actor = availableAttackers[Math.floor(Math.random() * availableAttackers.length)];
      this.lastAttackerId = actor.id;

      if (typeof msg === 'object') {
        if (msg[actor.id]) {
          msg = msg[actor.id];
        } else if (actor.attackMessages && actor.attackMessages.length > 0) {
          msg = actor.attackMessages[Math.floor(Math.random() * actor.attackMessages.length)];
        } else {
          msg = msg[this.hero.id] || Object.values(msg)[0];
        }
      }
      
      if (typeof msg === 'string') {
        msg = msg.replace(/\{name\}/g, actor.name).replace(/\{hero\}/g, actor.name);
      }
    } else {
      if (typeof msg === 'object') {
        msg = msg[this.hero.id] || msg.default || Object.values(msg)[0];
      } else if (typeof msg === 'string') {
        msg = msg.replace(/\{hero\}/g, this.hero.name);
      }
    }
    await dialogue.showText(msg);

    // Apply damage
    if (turnData.turn === 'player') {
      if (this.levelData.enemy && this.levelData.enemy.id === 'cerezo') {
        this.shootHeart();
        await wait(500);
      }
      this.enemyHP = Math.max(0, this.enemyHP - turnData.damage);
      this.updateHP('enemy');
      this.flashEntity('battle-enemy-entity');
    } else {
      // Player takes damage (scripted, no actual HP tracking)
      this.flashEntity('battle-player-entity');
    }

    await wait(500);
    this.currentTurn++;
    this.runNextTurn();
  }

  updateHP(who) {
    if (who === 'enemy') {
      const pct = Math.max(0, (this.enemyHP / this.enemyMaxHP) * 100);
      const fill = document.getElementById('enemy-hp-fill');
      if (fill) fill.style.width = `${pct}%`;
    }
  }

  shootHeart() {
    const playerEl = document.getElementById('battle-player-entity');
    const enemyEl = document.getElementById('battle-enemy-entity');
    if (!playerEl || !enemyEl || !this.battleArea) return;
    
    const heart = createEl('div', 'battle-heart', '❤️');
    heart.style.position = 'absolute';
    heart.style.fontSize = '32px';
    heart.style.zIndex = '100';
    heart.style.pointerEvents = 'none';
    heart.style.filter = 'drop-shadow(0 0 10px rgba(232,67,147,0.8))';
    
    const pRect = playerEl.getBoundingClientRect();
    const eRect = enemyEl.getBoundingClientRect();
    const containerRect = this.battleArea.getBoundingClientRect();
    
    const startX = pRect.left + pRect.width / 2 - containerRect.left - 16;
    const startY = pRect.top + pRect.height / 2 - containerRect.top - 16;
    const endX = eRect.left + eRect.width / 2 - containerRect.left - 16;
    const endY = eRect.top + eRect.height / 2 - containerRect.top - 16;
    
    heart.style.left = `${startX}px`;
    heart.style.top = `${startY}px`;
    heart.style.transition = 'all 0.5s ease-in-out';
    
    this.battleArea.appendChild(heart);
    
    // trigger reflow
    void heart.offsetWidth;
    
    heart.style.left = `${endX}px`;
    heart.style.top = `${endY}px`;
    heart.style.transform = 'scale(2.5)';
    heart.style.opacity = '0';
    
    setTimeout(() => {
      if (heart.parentNode) heart.remove();
    }, 500);
  }

  flashEntity(entityId) {
    const el = document.getElementById(entityId);
    if (!el) return;
    el.classList.remove('battle-floating');
    el.classList.add('battle-hit');
    setTimeout(() => {
      el.classList.remove('battle-hit');
      el.classList.add('battle-floating');
    }, 500);
  }

  async endBattle() {
    this.isActive = false;

    // Enemy defeat animation
    const enemyEl = document.getElementById('battle-enemy-entity');
    if (enemyEl) {
      if (this.levelData.enemy.id !== 'cerezo') {
        enemyEl.classList.remove('battle-floating');
        enemyEl.classList.add('battle-defeat');
      } else {
        // Cerezo is moved (conmovido), add a gentle floating animation instead
        enemyEl.style.animation = 'ally-float 3s infinite ease-in-out';
        enemyEl.style.filter = 'drop-shadow(0 0 30px rgba(253, 121, 168, 0.8))';
      }
    }

    audio.playSfx('fanfare');
    const defeatText = this.levelData.enemy.defeatText || `¡${this.levelData.enemy.name} fue derrotado!`;
    await dialogue.showText(defeatText);

    await wait(600);

    // Clean up battle area
    if (this.battleArea) {
      this.battleArea.remove();
      this.battleArea = null;
    }

    if (this.resolve) this.resolve();
  }
}

export const battleEngine = new BattleEngine();
