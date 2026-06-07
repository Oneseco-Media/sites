class TelegramFileshareModule {
  constructor(options = {}) {
    this.shareBaseUrl = options.shareBaseUrl || 'https://t.me/share/url';
  }

  createShareUrl({ fileUrl, fileName = '', caption = '' } = {}) {
    if (!fileUrl) {
      throw new Error('A file URL is required.');
    }

    const parsedUrl = new URL(fileUrl);
    if (!['http:', 'https:'].includes(parsedUrl.protocol)) {
      throw new Error('File URL must use http or https.');
    }

    const textParts = [fileName, caption].filter(Boolean);
    const query = new URLSearchParams({
      url: parsedUrl.toString(),
      text: textParts.join(' - ')
    });

    return `${this.shareBaseUrl}?${query.toString()}`;
  }

  share(payload) {
    const shareUrl = this.createShareUrl(payload);
    window.open(shareUrl, '_blank', 'noopener,noreferrer');
    return shareUrl;
  }
}

export default TelegramFileshareModule;
