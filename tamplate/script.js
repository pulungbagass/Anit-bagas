/* =========================================
   BIRTHDAY SCREEN — animations
   Fungsi startFireworks() & createConfetti()
   sengaja dibuat global supaya bisa dipanggil
   dari script lain (misal script password).
========================================= */

const BIRTHDAY_COLORS = ['#f4c869', '#ff9ecb', '#c9aaff', '#fdf6ec'];

// ===== Ambient fireflies (jalan terus, halus) =====
function initBirthdayFireflies() {
  const container = document.getElementById('fireflies');
  if (!container) return;

  const FIREFLY_COUNT = 14;

  for (let i = 0; i < FIREFLY_COUNT; i++) {
    const f = document.createElement('div');
    f.classList.add('birthday-firefly');

    const size = Math.random() * 4 + 2; // 2px - 6px
    const left = Math.random() * 100; // vw
    const duration = Math.random() * 10 + 10; // 10s - 20s
    const delay = Math.random() * 15;
    const driftX = (Math.random() * 80 - 40) + 'px';
    const maxOpacity = (Math.random() * 0.4 + 0.3).toFixed(2);
    const color = BIRTHDAY_COLORS[Math.floor(Math.random() * BIRTHDAY_COLORS.length)];

    f.style.width = size + 'px';
    f.style.height = size + 'px';
    f.style.left = left + 'vw';
    f.style.background = color;
    f.style.boxShadow = `0 0 ${size * 2}px ${color}`;
    f.style.setProperty('--drift-x', driftX);
    f.style.setProperty('--max-opacity', maxOpacity);
    f.style.animationDuration = `${duration}s, ${duration}s`;
    f.style.animationDelay = `${delay}s, ${delay}s`;

    container.appendChild(f);
  }
}

// ===== Fireworks (dipanggil saat password benar) =====
function startFireworks() {
  const container = document.getElementById('fireworks');
  if (!container) return;

  const BURST_COUNT = 6;

  for (let i = 0; i < BURST_COUNT; i++) {
    setTimeout(() => {
      const firework = document.createElement('div');
      firework.classList.add('birthday-firework');

      const left = Math.random() * 80 + 10; // 10% - 90%
      const top = Math.random() * 50 + 10; // 10% - 60%
      const color = BIRTHDAY_COLORS[Math.floor(Math.random() * BIRTHDAY_COLORS.length)];

      firework.style.left = left + '%';
      firework.style.top = top + '%';
      firework.style.background = color;
      firework.style.boxShadow = `0 0 20px ${color}`;

      container.appendChild(firework);

      setTimeout(() => firework.remove(), 1000);
    }, i * 300);
  }
}

// ===== Confetti (dipanggil saat password benar) =====
function createConfetti() {
  const container = document.getElementById('confettiContainer');
  if (!container) return;

  const CONFETTI_COUNT = 16;

  for (let i = 0; i < CONFETTI_COUNT; i++) {
    setTimeout(() => {
      const c = document.createElement('div');
      c.classList.add('birthday-confetti');

      const left = Math.random() * 100;
      const color = BIRTHDAY_COLORS[Math.floor(Math.random() * BIRTHDAY_COLORS.length)];
      const duration = Math.random() * 1.5 + 3; // 3s - 4.5s

      c.style.left = left + 'vw';
      c.style.background = color;
      c.style.animationDuration = duration + 's';
      c.style.transform = `rotate(${Math.random() * 360}deg)`;

      container.appendChild(c);

      setTimeout(() => c.remove(), duration * 1000 + 200);
    }, i * 90); // staggered, biar gak heboh
  }
}

// Fireflies langsung jalan begitu DOM siap (ambient, gak nunggu password)
document.addEventListener('DOMContentLoaded', initBirthdayFireflies);
