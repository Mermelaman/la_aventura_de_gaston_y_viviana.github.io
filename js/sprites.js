// ============================================
// PIXEL ART SPRITE RENDERER
// Renders characters from compact template strings
// ============================================

/**
 * Creates a canvas element with a pixel art sprite.
 * @param {string} template - Multi-line string where each char maps to a palette color
 * @param {Object} palette - Map of char to hex color. '.' = transparent
 * @param {number} scale - Pixel scale (each template pixel = scale×scale real pixels)
 * @returns {HTMLCanvasElement}
 */
export function renderSprite(template, palette, scale = 4) {
  let rows;
  if (Array.isArray(template)) {
    rows = template.map(r => r.trim());
  } else {
    rows = template.trim().split('\n').map(r => r.trim());
  }
  const h = rows.length;
  const w = Math.max(...rows.map(r => r.length));
  const canvas = document.createElement('canvas');
  canvas.width = w * scale;
  canvas.height = h * scale;
  const ctx = canvas.getContext('2d');
  ctx.imageSmoothingEnabled = false;

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < rows[y].length; x++) {
      const ch = rows[y][x];
      if (ch === '.' || ch === ' ') continue;
      const color = palette[ch];
      if (!color) continue;
      ctx.fillStyle = color;
      ctx.fillRect(x * scale, y * scale, scale, scale);
    }
  }

  canvas.style.imageRendering = 'pixelated';
  canvas.className = 'sprite-canvas';
  return canvas;
}

/**
 * Creates an animated sprite that cycles between frames
 */
export function createAnimatedSprite(frames, palette, scale = 4, intervalMs = 500) {
  const canvases = frames.map(f => renderSprite(f, palette, scale));
  const container = document.createElement('div');
  container.className = 'animated-sprite';
  canvases.forEach((c, i) => {
    c.style.display = i === 0 ? 'block' : 'none';
    c.style.position = i === 0 ? 'relative' : 'absolute';
    if (i > 0) {
      c.style.top = '0';
      c.style.left = '0';
    }
    container.appendChild(c);
  });
  container.style.position = 'relative';
  container.style.display = 'inline-block';

  let current = 0;
  const interval = setInterval(() => {
    canvases[current].style.display = 'none';
    current = (current + 1) % canvases.length;
    canvases[current].style.display = 'block';
  }, intervalMs);

  container._stopAnimation = () => clearInterval(interval);
  return container;
}
