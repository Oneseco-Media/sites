
import TelegramFileshareModule from './modules/telegramFileshare';

const createApp = () => {
  const telegramFileshare = new TelegramFileshareModule();
  const app = document.createElement('div');
  app.id = 'app';
  app.innerHTML = `
    <h1>Welcome to My App</h1>
    <div class="content">
      <p>This is a webpack-powered application</p>
      <button id="clickMe">Click Me!</button>
      <button id="shareTelegram">Share URL via Telegram</button>
    </div>
  `;
  document.body.appendChild(app);

  // Add button click handler
  document.getElementById('clickMe').addEventListener('click', () => {
    alert('Button clicked!');
  });

  document.getElementById('shareTelegram').addEventListener('click', () => {
    const fileUrl = window.prompt('Enter a public http/https file URL to share on Telegram:');
    if (!fileUrl) {
      return;
    }

    try {
      telegramFileshare.share({ fileUrl: fileUrl.trim() });
    } catch (error) {
      console.error(error);
      alert('Unable to create Telegram share link. Please verify the URL.');
    }
  });
};

document.addEventListener('DOMContentLoaded', createApp);
