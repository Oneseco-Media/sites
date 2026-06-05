
import TelegramFileshareModule from './modules/telegramFileshare';

const createApp = () => {
  const telegramFileshare = new TelegramFileshareModule();
  const app = document.createElement('div');
  app.id = 'app';
  app.innerHTML = `
    <h1>Oneseco-IO Telegram Fileshare</h1>
    <div class="content">
      <p>Share a file URL quickly through Telegram.</p>
      <input id="fileName" type="text" placeholder="File name (optional)" />
      <input id="fileUrl" type="url" placeholder="https://example.com/file.pdf" required />
      <input id="caption" type="text" placeholder="Caption (optional)" />
      <button id="shareFile">Share via Telegram</button>
      <p id="shareStatus" aria-live="polite"></p>
    </div>
  `;
  document.body.appendChild(app);

  document.getElementById('shareFile').addEventListener('click', () => {
    const fileName = document.getElementById('fileName').value.trim();
    const fileUrl = document.getElementById('fileUrl').value.trim();
    const caption = document.getElementById('caption').value.trim();
    const status = document.getElementById('shareStatus');

    try {
      telegramFileshare.share({ fileUrl, fileName, caption });
      status.textContent = 'Telegram share window opened.';
    } catch (error) {
      console.error(error);
      status.textContent = 'Unable to create Telegram share link. Please verify the file URL.';
    }
  });
};

document.addEventListener('DOMContentLoaded', createApp);
