/* ========================================
   CANVAS — Hero cell-to-neuron visualization
   ======================================== */

class HeroCanvas {
  constructor(canvasEl) {
    this.canvas = canvasEl;
    this.ctx = canvasEl.getContext('2d');
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.time = 0;
    this.scrollY = 0;
    this.isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.particles = [];
    this.neurons = [];
    this.connections = [];
    this.animId = null;

    this.resize();
    this.init();
    this.bindEvents();

    if (!this.isReducedMotion) {
      this.animate();
    } else {
      this.drawStatic();
    }
  }

  resize() {
    const rect = this.canvas.parentElement.getBoundingClientRect();
    this.width = rect.width;
    this.height = rect.height;
    this.canvas.width = this.width * this.dpr;
    this.canvas.height = this.height * this.dpr;
    this.canvas.style.width = this.width + 'px';
    this.canvas.style.height = this.height + 'px';
    this.ctx.scale(this.dpr, this.dpr);
    this.cx = this.width / 2;
    this.cy = this.height / 2;
  }

  init() {
    // Generate cell-like particles (left side)
    this.particles = [];
    const numParticles = Math.min(40, Math.floor(this.width * this.height / 5000));
    for (let i = 0; i < numParticles; i++) {
      this.particles.push({
        x: Math.random() * this.width * 0.5,
        y: Math.random() * this.height,
        radius: 3 + Math.random() * 12,
        opacity: 0.08 + Math.random() * 0.15,
        speed: 0.1 + Math.random() * 0.3,
        phase: Math.random() * Math.PI * 2,
        type: Math.random() > 0.6 ? 'organelle' : 'cell',
        color: Math.random() > 0.5 ? '#2D5F3A' : '#8BA888',
      });
    }

    // Generate neuron nodes (right side)
    this.neurons = [];
    const numNeurons = Math.min(25, Math.floor(this.width * this.height / 8000));
    for (let i = 0; i < numNeurons; i++) {
      this.neurons.push({
        x: this.width * 0.45 + Math.random() * this.width * 0.55,
        y: Math.random() * this.height,
        radius: 2 + Math.random() * 5,
        opacity: 0.15 + Math.random() * 0.3,
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: 0.5 + Math.random() * 1.5,
        color: Math.random() > 0.4 ? '#2A3A5C' : '#3D5280',
      });
    }

    // Generate connections between nearby neurons
    this.connections = [];
    for (let i = 0; i < this.neurons.length; i++) {
      for (let j = i + 1; j < this.neurons.length; j++) {
        const dx = this.neurons[i].x - this.neurons[j].x;
        const dy = this.neurons[i].y - this.neurons[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < this.width * 0.2) {
          this.connections.push({
            from: i,
            to: j,
            opacity: Math.max(0.03, 0.12 - dist / (this.width * 2)),
            pulsePhase: Math.random() * Math.PI * 2,
          });
        }
      }
    }
  }

  bindEvents() {
    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        this.resize();
        this.init();
        if (this.isReducedMotion) this.drawStatic();
      }, 200);
    });

    window.addEventListener('scroll', () => {
      this.scrollY = window.scrollY;
    }, { passive: true });
  }

  getThemeColors() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    return {
      cellPrimary: isDark ? '#4A9B5E' : '#2D5F3A',
      cellSecondary: isDark ? '#7BA878' : '#8BA888',
      neuroPrimary: isDark ? '#5B7AB8' : '#2A3A5C',
      neuroSecondary: isDark ? '#7090D0' : '#3D5280',
      connectionColor: isDark ? '#5B7AB8' : '#2A3A5C',
      membraneColor: isDark ? 'rgba(74, 155, 94, 0.06)' : 'rgba(45, 95, 58, 0.04)',
    };
  }

  drawCell(x, y, radius, opacity, type, color) {
    const ctx = this.ctx;
    const colors = this.getThemeColors();

    if (type === 'cell') {
      // Cell membrane
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fillStyle = this.hexToRgba(color === '#2D5F3A' ? colors.cellPrimary : colors.cellSecondary, opacity * 0.3);
      ctx.fill();

      // Cell border
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.strokeStyle = this.hexToRgba(color === '#2D5F3A' ? colors.cellPrimary : colors.cellSecondary, opacity * 0.6);
      ctx.lineWidth = 1;
      ctx.stroke();

      // Nucleus
      if (radius > 6) {
        ctx.beginPath();
        ctx.arc(x, y, radius * 0.35, 0, Math.PI * 2);
        ctx.fillStyle = this.hexToRgba(colors.cellPrimary, opacity * 0.5);
        ctx.fill();
      }
    } else {
      // Organelle — small irregular shape
      ctx.beginPath();
      const sides = 5 + Math.floor(Math.random() * 3);
      for (let k = 0; k < sides; k++) {
        const angle = (k / sides) * Math.PI * 2;
        const r = radius * (0.7 + Math.random() * 0.3);
        const px = x + Math.cos(angle) * r;
        const py = y + Math.sin(angle) * r;
        if (k === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.fillStyle = this.hexToRgba(colors.cellSecondary, opacity * 0.25);
      ctx.fill();
    }
  }

  drawNeuron(neuron, t) {
    const ctx = this.ctx;
    const colors = this.getThemeColors();
    const pulse = Math.sin(t * neuron.pulseSpeed + neuron.pulsePhase) * 0.5 + 0.5;
    const r = neuron.radius * (0.9 + pulse * 0.2);
    const alpha = neuron.opacity * (0.7 + pulse * 0.3);

    // Glow
    ctx.beginPath();
    ctx.arc(neuron.x, neuron.y, r * 2.5, 0, Math.PI * 2);
    ctx.fillStyle = this.hexToRgba(colors.neuroPrimary, alpha * 0.08);
    ctx.fill();

    // Body
    ctx.beginPath();
    ctx.arc(neuron.x, neuron.y, r, 0, Math.PI * 2);
    ctx.fillStyle = this.hexToRgba(neuron.color === '#2A3A5C' ? colors.neuroPrimary : colors.neuroSecondary, alpha);
    ctx.fill();
  }

  drawConnection(conn, t) {
    const ctx = this.ctx;
    const colors = this.getThemeColors();
    const from = this.neurons[conn.from];
    const to = this.neurons[conn.to];
    const pulse = Math.sin(t * 1.5 + conn.pulsePhase) * 0.5 + 0.5;

    ctx.beginPath();
    // Slight curve using quadratic bezier
    const mx = (from.x + to.x) / 2 + (Math.sin(t + conn.pulsePhase) * 10);
    const my = (from.y + to.y) / 2 + (Math.cos(t + conn.pulsePhase) * 10);
    ctx.moveTo(from.x, from.y);
    ctx.quadraticCurveTo(mx, my, to.x, to.y);
    ctx.strokeStyle = this.hexToRgba(colors.connectionColor, conn.opacity * (0.5 + pulse * 0.5));
    ctx.lineWidth = 0.5 + pulse * 0.5;
    ctx.stroke();

    // Traveling pulse dot
    const progress = (t * 0.3 + conn.pulsePhase) % 1;
    const px = from.x + (to.x - from.x) * progress;
    const py = from.y + (to.y - from.y) * progress;
    ctx.beginPath();
    ctx.arc(px, py, 1.5, 0, Math.PI * 2);
    ctx.fillStyle = this.hexToRgba(colors.neuroSecondary, conn.opacity * pulse);
    ctx.fill();
  }

  drawTransitionZone() {
    const ctx = this.ctx;
    const colors = this.getThemeColors();

    // Gradient transition in the middle
    const grad = ctx.createLinearGradient(this.width * 0.35, 0, this.width * 0.55, 0);
    grad.addColorStop(0, this.hexToRgba(colors.cellPrimary, 0.02));
    grad.addColorStop(0.5, this.hexToRgba(colors.cellPrimary, 0.04));
    grad.addColorStop(1, this.hexToRgba(colors.neuroPrimary, 0.02));

    ctx.fillStyle = grad;
    ctx.fillRect(this.width * 0.35, 0, this.width * 0.2, this.height);
  }

  draw(t) {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.width, this.height);

    const parallax = this.scrollY * 0.1;

    // Transition zone
    this.drawTransitionZone();

    // Draw cells
    for (const p of this.particles) {
      const x = p.x + Math.sin(t * p.speed + p.phase) * 6;
      const y = p.y + Math.cos(t * p.speed * 0.7 + p.phase) * 4 - parallax * 0.3;
      this.drawCell(x, y, p.radius, p.opacity, p.type, p.color);
    }

    // Draw connections
    for (const conn of this.connections) {
      this.drawConnection(conn, t);
    }

    // Draw neurons
    for (const neuron of this.neurons) {
      const offsetY = -parallax * 0.15;
      const originalY = neuron.y;
      neuron.y += offsetY;
      this.drawNeuron(neuron, t);
      neuron.y = originalY;
    }
  }

  drawStatic() {
    this.draw(0);
  }

  animate() {
    this.time += 0.008;
    this.draw(this.time);
    this.animId = requestAnimationFrame(() => this.animate());
  }

  destroy() {
    if (this.animId) cancelAnimationFrame(this.animId);
  }

  hexToRgba(hex, alpha) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
}

// Neuron background for neuroscience section
class NeuroBackground {
  constructor(canvasEl) {
    this.canvas = canvasEl;
    this.ctx = canvasEl.getContext('2d');
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.time = 0;
    this.isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.nodes = [];
    this.edges = [];
    this.animId = null;
    this.isVisible = false;

    this.resize();
    this.init();
    this.bindEvents();

    if (this.isReducedMotion) {
      this.drawStatic();
    }
  }

  resize() {
    const rect = this.canvas.parentElement.getBoundingClientRect();
    this.width = rect.width;
    this.height = rect.height;
    this.canvas.width = this.width * this.dpr;
    this.canvas.height = this.height * this.dpr;
    this.canvas.style.width = '100%';
    this.canvas.style.height = '100%';
    this.ctx.scale(this.dpr, this.dpr);
  }

  init() {
    this.nodes = [];
    const count = Math.min(60, Math.floor(this.width * this.height / 6000));
    for (let i = 0; i < count; i++) {
      this.nodes.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        radius: 1.5 + Math.random() * 3,
        phase: Math.random() * Math.PI * 2,
        speed: 0.3 + Math.random() * 0.8,
      });
    }

    this.edges = [];
    for (let i = 0; i < this.nodes.length; i++) {
      for (let j = i + 1; j < this.nodes.length; j++) {
        const dx = this.nodes[i].x - this.nodes[j].x;
        const dy = this.nodes[i].y - this.nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < this.width * 0.15) {
          this.edges.push({ from: i, to: j, dist });
        }
      }
    }
  }

  bindEvents() {
    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        this.resize();
        this.init();
        if (this.isReducedMotion) this.drawStatic();
      }, 200);
    });
  }

  startAnimation() {
    if (this.isVisible || this.isReducedMotion) return;
    this.isVisible = true;
    this.animate();
  }

  stopAnimation() {
    this.isVisible = false;
    if (this.animId) {
      cancelAnimationFrame(this.animId);
      this.animId = null;
    }
  }

  draw(t) {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.width, this.height);

    // Edges
    for (const edge of this.edges) {
      const a = this.nodes[edge.from];
      const b = this.nodes[edge.to];
      const pulse = Math.sin(t * 1.2 + a.phase) * 0.5 + 0.5;
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.strokeStyle = `rgba(255, 255, 255, ${0.03 + pulse * 0.04})`;
      ctx.lineWidth = 0.5;
      ctx.stroke();
    }

    // Nodes
    for (const node of this.nodes) {
      const pulse = Math.sin(t * node.speed + node.phase) * 0.5 + 0.5;
      const r = node.radius * (0.8 + pulse * 0.4);

      // Glow
      ctx.beginPath();
      ctx.arc(node.x, node.y, r * 3, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(212, 149, 106, ${0.02 + pulse * 0.02})`;
      ctx.fill();

      // Node
      ctx.beginPath();
      ctx.arc(node.x, node.y, r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${0.1 + pulse * 0.15})`;
      ctx.fill();
    }
  }

  drawStatic() {
    this.draw(0);
  }

  animate() {
    if (!this.isVisible) return;
    this.time += 0.006;
    this.draw(this.time);
    this.animId = requestAnimationFrame(() => this.animate());
  }

  destroy() {
    this.stopAnimation();
  }
}

// Project card mini visualizations
class ProjectVisual {
  constructor(canvasEl, type) {
    this.canvas = canvasEl;
    this.ctx = canvasEl.getContext('2d');
    this.type = type;
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);

    this.resize();
    this.draw();

    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        this.resize();
        this.draw();
      }, 200);
    });
  }

  resize() {
    const rect = this.canvas.parentElement.getBoundingClientRect();
    this.width = rect.width;
    this.height = rect.height;
    this.canvas.width = this.width * this.dpr;
    this.canvas.height = this.height * this.dpr;
    this.canvas.style.width = '100%';
    this.canvas.style.height = '100%';
    this.ctx.scale(this.dpr, this.dpr);
  }

  draw() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    switch (this.type) {
      case 'scratch': this.drawScratch(isDark); break;
      case 'metagenomics': this.drawMetagenomics(isDark); break;
      case 'plant': this.drawPlant(isDark); break;
      case 'eggplant': this.drawEggplant(isDark); break;
    }
  }

  drawScratch(isDark) {
    const ctx = this.ctx;
    const w = this.width;
    const h = this.height;
    const primary = isDark ? '#4A9B5E' : '#2D5F3A';
    const secondary = isDark ? '#7BA878' : '#8BA888';
    const bg = isDark ? '#1C1C1A' : '#F3F0EB';

    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, w, h);

    // Grid lines (microscope grid)
    ctx.strokeStyle = isDark ? 'rgba(74, 155, 94, 0.08)' : 'rgba(45, 95, 58, 0.06)';
    ctx.lineWidth = 0.5;
    for (let x = 0; x < w; x += 20) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
    }
    for (let y = 0; y < h; y += 20) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }

    // Cells migrating toward center (wound healing)
    const gap = w * 0.15;
    const centerX = w / 2;

    // Left cell mass
    for (let i = 0; i < 30; i++) {
      const x = Math.random() * (centerX - gap);
      const y = Math.random() * h;
      const r = 4 + Math.random() * 8;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fillStyle = this.hexToRgba(primary, 0.1 + Math.random() * 0.15);
      ctx.fill();
      ctx.strokeStyle = this.hexToRgba(primary, 0.2);
      ctx.lineWidth = 0.5;
      ctx.stroke();
    }

    // Right cell mass
    for (let i = 0; i < 30; i++) {
      const x = centerX + gap + Math.random() * (centerX - gap);
      const y = Math.random() * h;
      const r = 4 + Math.random() * 8;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fillStyle = this.hexToRgba(secondary, 0.1 + Math.random() * 0.15);
      ctx.fill();
      ctx.strokeStyle = this.hexToRgba(secondary, 0.2);
      ctx.lineWidth = 0.5;
      ctx.stroke();
    }

    // Wound gap lines
    ctx.setLineDash([4, 4]);
    ctx.strokeStyle = this.hexToRgba(isDark ? '#D4956A' : '#B8764E', 0.3);
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(centerX - gap, 0);
    ctx.lineTo(centerX - gap, h);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(centerX + gap, 0);
    ctx.lineTo(centerX + gap, h);
    ctx.stroke();
    ctx.setLineDash([]);
  }

  drawMetagenomics(isDark) {
    const ctx = this.ctx;
    const w = this.width;
    const h = this.height;
    const primary = isDark ? '#4A9B5E' : '#2D5F3A';
    const secondary = isDark ? '#7BA878' : '#8BA888';
    const accent = isDark ? '#D4956A' : '#B8764E';
    const bg = isDark ? '#1C1C1A' : '#F3F0EB';

    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, w, h);

    // Microbial community network
    const nodes = [];
    const numNodes = 20;
    for (let i = 0; i < numNodes; i++) {
      nodes.push({
        x: w * 0.15 + Math.random() * w * 0.7,
        y: h * 0.15 + Math.random() * h * 0.7,
        r: 3 + Math.random() * 10,
        color: [primary, secondary, accent][Math.floor(Math.random() * 3)],
      });
    }

    // Connections
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.strokeStyle = this.hexToRgba(primary, 0.08);
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    // Nodes
    for (const node of nodes) {
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
      ctx.fillStyle = this.hexToRgba(node.color, 0.15);
      ctx.fill();
      ctx.strokeStyle = this.hexToRgba(node.color, 0.3);
      ctx.lineWidth = 0.5;
      ctx.stroke();
    }
  }

  drawPlant(isDark) {
    const ctx = this.ctx;
    const w = this.width;
    const h = this.height;
    const primary = isDark ? '#4A9B5E' : '#2D5F3A';
    const secondary = isDark ? '#7BA878' : '#8BA888';
    const bg = isDark ? '#1C1C1A' : '#F3F0EB';
    const soilColor = isDark ? '#3A3020' : '#C4A87A';

    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, w, h);

    // Soil layer
    ctx.fillStyle = this.hexToRgba(soilColor, 0.15);
    ctx.fillRect(0, h * 0.6, w, h * 0.4);

    // Soil dots (microbes)
    for (let i = 0; i < 50; i++) {
      const x = Math.random() * w;
      const y = h * 0.62 + Math.random() * h * 0.35;
      const r = 1 + Math.random() * 2;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fillStyle = this.hexToRgba(primary, 0.1 + Math.random() * 0.1);
      ctx.fill();
    }

    // Root system
    this.drawBranch(ctx, w / 2, h * 0.6, Math.PI / 2, 60, 4, primary, secondary);

    // Stem
    ctx.beginPath();
    ctx.moveTo(w / 2, h * 0.6);
    ctx.lineTo(w / 2, h * 0.2);
    ctx.strokeStyle = this.hexToRgba(primary, 0.3);
    ctx.lineWidth = 2;
    ctx.stroke();

    // Leaves
    for (let i = 0; i < 3; i++) {
      const ly = h * 0.25 + i * h * 0.12;
      const side = i % 2 === 0 ? 1 : -1;
      ctx.beginPath();
      ctx.ellipse(w / 2 + side * 18, ly, 14, 6, side * 0.3, 0, Math.PI * 2);
      ctx.fillStyle = this.hexToRgba(secondary, 0.2);
      ctx.fill();
      ctx.strokeStyle = this.hexToRgba(primary, 0.2);
      ctx.lineWidth = 0.5;
      ctx.stroke();
    }
  }

  drawBranch(ctx, x, y, angle, length, depth, primary, secondary) {
    if (depth <= 0 || length < 5) return;

    const endX = x + Math.cos(angle) * length;
    const endY = y + Math.sin(angle) * length;

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(endX, endY);
    ctx.strokeStyle = this.hexToRgba(secondary, 0.1 + depth * 0.03);
    ctx.lineWidth = depth * 0.3;
    ctx.stroke();

    this.drawBranch(ctx, endX, endY, angle + 0.5 + Math.random() * 0.3, length * 0.65, depth - 1, primary, secondary);
    this.drawBranch(ctx, endX, endY, angle - 0.5 - Math.random() * 0.3, length * 0.65, depth - 1, primary, secondary);
  }

  drawEggplant(isDark) {
    const ctx = this.ctx;
    const w = this.width;
    const h = this.height;
    const primary = isDark ? '#4A9B5E' : '#2D5F3A';
    const secondary = isDark ? '#7BA878' : '#8BA888';
    const accent = isDark ? '#D4956A' : '#B8764E';
    const bg = isDark ? '#1C1C1A' : '#F3F0EB';

    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, w, h);

    // Tissue culture vessels (petri dishes)
    const dishes = [
      { x: w * 0.3, y: h * 0.4, r: 40 },
      { x: w * 0.65, y: h * 0.35, r: 35 },
      { x: w * 0.5, y: h * 0.65, r: 38 },
    ];

    for (const dish of dishes) {
      // Dish outline
      ctx.beginPath();
      ctx.arc(dish.x, dish.y, dish.r, 0, Math.PI * 2);
      ctx.strokeStyle = this.hexToRgba(primary, 0.15);
      ctx.lineWidth = 1;
      ctx.stroke();

      // Media
      ctx.beginPath();
      ctx.arc(dish.x, dish.y, dish.r - 3, 0, Math.PI * 2);
      ctx.fillStyle = this.hexToRgba(secondary, 0.06);
      ctx.fill();

      // Explants / shoots
      for (let i = 0; i < 4; i++) {
        const angle = (i / 4) * Math.PI * 2 + 0.5;
        const ex = dish.x + Math.cos(angle) * dish.r * 0.4;
        const ey = dish.y + Math.sin(angle) * dish.r * 0.4;

        // Small shoot
        ctx.beginPath();
        ctx.moveTo(ex, ey);
        ctx.lineTo(ex + Math.cos(angle - Math.PI / 2) * 8, ey - 10);
        ctx.strokeStyle = this.hexToRgba(primary, 0.25);
        ctx.lineWidth = 1;
        ctx.stroke();

        // Leaf
        ctx.beginPath();
        ctx.ellipse(ex + Math.cos(angle - Math.PI / 2) * 8, ey - 12, 4, 2, 0.3, 0, Math.PI * 2);
        ctx.fillStyle = this.hexToRgba(secondary, 0.2);
        ctx.fill();
      }
    }

    // Arrows showing regeneration flow
    ctx.setLineDash([3, 3]);
    ctx.strokeStyle = this.hexToRgba(accent, 0.2);
    ctx.lineWidth = 0.5;
    ctx.beginPath();
    ctx.moveTo(dishes[0].x + dishes[0].r + 10, dishes[0].y);
    ctx.lineTo(dishes[1].x - dishes[1].r - 10, dishes[1].y);
    ctx.stroke();
    ctx.setLineDash([]);
  }

  hexToRgba(hex, alpha) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
}
