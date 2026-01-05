
const createApp = () => {
  const app = document.createElement('div');
  app.id = 'app';
  app.innerHTML = `
    <h1>Welcome to My App</h1>
    <div class="content">
      <p>This is a webpack-powered application</p>
      <button id="clickMe">Click Me!</button>
    </div>
  `;
  document.body.appendChild(app);

  // Add button click handler
  document.getElementById('clickMe').addEventListener('click', () => {
    alert('Button clicked!');
  });
};

document.addEventListener('DOMContentLoaded', createApp);
