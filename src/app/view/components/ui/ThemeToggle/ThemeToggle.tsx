import { useState, useEffect } from "react";
import "./theme-toggle.css";

type Theme = 'dark' | 'rain' | 'snow';

const createRainEffect = () => {
  const canvas = document.createElement('canvas');
  canvas.className = 'theme-effect-canvas';
  canvas.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 9999;
  `;
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  if (!ctx) {
    canvas.remove();
    return;
  }
  let animationFrame = 0;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const drops: Array<{ x: number; y: number; length: number; speed: number }> = [];

  // Create drops
  for (let i = 0; i < 100; i++) {
    drops.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      length: Math.random() * 20 + 10,
      speed: Math.random() * 3 + 2
    });
  }

  const animateRain = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = 'rgba(174, 194, 224, 0.5)';
    ctx.lineWidth = 1;
    ctx.lineCap = 'round';

    drops.forEach(drop => {
      ctx.beginPath();
      ctx.moveTo(drop.x, drop.y);
      ctx.lineTo(drop.x, drop.y + drop.length);
      ctx.stroke();

      drop.y += drop.speed;

      if (drop.y > canvas.height) {
        drop.y = -drop.length;
        drop.x = Math.random() * canvas.width;
      }
    });

    animationFrame = requestAnimationFrame(animateRain);
  };

  animateRain();

  // Resize handler
  const onResize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };
  window.addEventListener('resize', onResize);

  return () => {
    cancelAnimationFrame(animationFrame);
    window.removeEventListener('resize', onResize);
    canvas.remove();
  };
};

const createSnowEffect = () => {
  const canvas = document.createElement('canvas');
  canvas.className = 'theme-effect-canvas';
  canvas.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 9999;
  `;
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  if (!ctx) {
    canvas.remove();
    return;
  }
  let animationFrame = 0;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const snowflakes: Array<{
    x: number;
    y: number;
    radius: number;
    speed: number;
    wind: number;
  }> = [];

  // Create snowflakes
  for (let i = 0; i < 150; i++) {
    snowflakes.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      radius: Math.random() * 3 + 1,
      speed: Math.random() * 1 + 0.5,
      wind: Math.random() * 0.5 - 0.25
    });
  }

  const animateSnow = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';

    snowflakes.forEach(flake => {
      ctx.beginPath();
      ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
      ctx.fill();

      flake.y += flake.speed;
      flake.x += flake.wind;

      if (flake.y > canvas.height) {
        flake.y = -10;
        flake.x = Math.random() * canvas.width;
      }

      if (flake.x > canvas.width) {
        flake.x = 0;
      } else if (flake.x < 0) {
        flake.x = canvas.width;
      }
    });

    animationFrame = requestAnimationFrame(animateSnow);
  };

  animateSnow();

  // Resize handler
  const onResize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };
  window.addEventListener('resize', onResize);

  return () => {
    cancelAnimationFrame(animationFrame);
    window.removeEventListener('resize', onResize);
    canvas.remove();
  };
};


export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    return savedTheme === 'dark' || savedTheme === 'rain' || savedTheme === 'snow'
      ? savedTheme
      : 'snow';
  });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);

    if (theme === 'rain') return createRainEffect();
    if (theme === 'snow') return createSnowEffect();
  }, [theme]);

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    setIsOpen(false);
  };

  return (
    <div className="theme-toggle">
      <button
        className="theme-toggle-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle theme menu"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="5"/>
          <line x1="12" y1="1" x2="12" y2="3"/>
          <line x1="12" y1="21" x2="12" y2="23"/>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
          <line x1="1" y1="12" x2="3" y2="12"/>
          <line x1="21" y1="12" x2="23" y2="12"/>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
        </svg>
      </button>

      {isOpen && (
        <div className="theme-menu">
          <button
            className={`theme-option ${theme === 'dark' ? 'active' : ''}`}
            onClick={() => handleThemeChange('dark')}
          >
            <span className="theme-icon">🌙</span>
            <span className="theme-label">Dark</span>
          </button>

          {/* <button
            className={`theme-option ${theme === 'light' ? 'active' : ''}`}
            onClick={() => handleThemeChange('light')}
          >
            <span className="theme-icon">☀️</span>
            <span className="theme-label">Light</span>
          </button> */}

          <button
            className={`theme-option ${theme === 'rain' ? 'active' : ''}`}
            onClick={() => handleThemeChange('rain')}
          >
            <span className="theme-icon">🌧️</span>
            <span className="theme-label">Rain</span>
          </button>

          <button
            className={`theme-option ${theme === 'snow' ? 'active' : ''}`}
            onClick={() => handleThemeChange('snow')}
          >
            <span className="theme-icon">❄️</span>
            <span className="theme-label">Snow</span>
          </button>
        </div>
      )}
    </div>
  );
}
