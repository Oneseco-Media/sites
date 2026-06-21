const createApp = () => {
  const app = document.createElement('div');
  app.id = 'app';
  app.innerHTML = `
    <header>
      <h1>Oneseco Media</h1>
      <p class="tagline">Where ideas ship at the speed of thought.</p>
    </header>
    
    <main>
      <section id="portal">
        <h2>Product Portal</h2>
        <div class="grid">
          <div class="card">
            <h3>Mindbridge App</h3>
            <p>A sophisticated AI-powered mental wellness and connection platform. It fosters self-reflection and deepens relationships through daily heartfelt questions, interactive digital spaces, and gamified personal growth experiences.</p>
            <a href="https://github.com/Oneseco-Media/mindbridge-app" class="btn">View Project</a>
          </div>
          <div class="card">
            <h3>Oneseco Media Store</h3>
            <p>Our premier digital storefront showcasing the agency's latest innovations. Built with cutting-edge technologies like Next.js, it provides a seamless experience for exploring and acquiring our custom digital products and tools.</p>
            <a href="https://github.com/Oneseco-Media/nextjs-store" class="btn">Shop Now</a>
          </div>
        </div>
      </section>

      <section id="latest-activity">
        <h2>Latest Activity</h2>
        <div class="activity-item">
          <h3>onesecoRSS</h3>
          <p>A high-performance RSS feed management and syndication tool designed for the modern web.</p>
          <a href="https://github.com/Oneseco-Media/onesecoRSS">Check it out on GitHub</a>
        </div>
      </section>
    </main>
    
    <footer>
      <p>&copy; 2024 Oneseco Media. All rights reserved.</p>
    </footer>
  `;
  document.body.appendChild(app);
};

document.addEventListener('DOMContentLoaded', createApp);
