
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
      <input id="telegramFileUrl" type="url" placeholder="https://example.com/file.pdf" />
      <button id="shareTelegram">Share URL via Telegram</button>
      <p id="shareStatus" aria-live="polite"></p>
    </div>
  `;
  document.body.appendChild(app);

  // Add button click handler
  document.getElementById('clickMe').addEventListener('click', () => {
    alert('Button clicked!');
  });

  document.getElementById('shareTelegram').addEventListener('click', () => {
    const fileUrl = document.getElementById('telegramFileUrl').value.trim();
    const shareStatus = document.getElementById('shareStatus');

    if (!fileUrl) {
      shareStatus.textContent = 'Please enter a public file URL.';
      return;
    }

    try {
      const parsedUrl = new URL(fileUrl);
      if (!['http:', 'https:'].includes(parsedUrl.protocol)) {
        throw new Error('Only HTTP and HTTPS URLs are supported.');
      }

      telegramFileshare.share({ fileUrl });
      shareStatus.textContent = 'Telegram share window opened.';
    } catch (error) {
      console.error(error);
      shareStatus.textContent = 'Unable to create Telegram share link. Please verify the URL.';
    }
  });
};

document.addEventListener('DOMContentLoaded', createApp);
