import '../css/style.scss';

export const createCounter = (initialValue = 0) => {
  let count = initialValue;

  const increment = () => ++count;
  const decrement = () => --count;
  const reset = () => {
    count = 0;
    return count;
  };
  const getValue = () => count;

  return { increment, decrement, reset, getValue };
};

export const toggleDarkMode = () => {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
  return isDark;
};

const createApp = () => {
  // Apply saved dark mode preference
  if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
  }

  const app = document.createElement('div');
  app.id = 'app';
  app.innerHTML = `
    <h1>Welcome to My App</h1>
    <div class="content">
      <p>This is a webpack-powered application with Sass, ESLint, Prettier, and Jest.</p>
      <button id="clickMe">Click Me!</button>
    </div>
    <div class="counter-section">
      <h2>Counter</h2>
      <div class="counter-display" id="counterDisplay">0</div>
      <div class="counter-buttons">
        <button id="decrement">−</button>
        <button id="increment">+</button>
        <button id="resetCounter" class="btn-danger">Reset</button>
      </div>
    </div>
  `;
  document.body.appendChild(app);

  // Dark mode toggle button
  const toggleBtn = document.createElement('button');
  toggleBtn.id = 'darkModeToggle';
  toggleBtn.textContent = '🌙 Dark Mode';
  document.body.appendChild(toggleBtn);

  // Button click handler
  document.getElementById('clickMe').addEventListener('click', () => {
    alert('Button clicked!');
  });

  // Counter logic
  const counter = createCounter();
  const display = document.getElementById('counterDisplay');

  document.getElementById('increment').addEventListener('click', () => {
    display.textContent = counter.increment();
  });

  document.getElementById('decrement').addEventListener('click', () => {
    display.textContent = counter.decrement();
  });

  document.getElementById('resetCounter').addEventListener('click', () => {
    display.textContent = counter.reset();
  });

  // Dark mode toggle
  toggleBtn.addEventListener('click', () => {
    const isDark = toggleDarkMode();
    toggleBtn.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
  });
};

document.addEventListener('DOMContentLoaded', createApp);
