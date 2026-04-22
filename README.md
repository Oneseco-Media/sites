# Sites — Webpack Starter Template

A minimal webpack starter template for building web applications. Includes a development server with hot reloading, a production build pipeline, Sass support, ESLint, Prettier, Jest testing, and a GitHub Actions CI/CD pipeline.

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm start
   ```
   Opens the app in your default browser and reloads automatically on file changes.

## Scripts

| Script | Description |
|---|---|
| `npm start` | Start the webpack dev server |
| `npm run build` | Build for production (outputs to `dist/`) |
| `npm test` | Run the Jest test suite |
| `npm run lint` | Lint JS files with ESLint |
| `npm run lint:fix` | Auto-fix ESLint issues |
| `npm run format` | Format all source files with Prettier |
| `npm run format:check` | Check formatting without writing |
| `npm run deploy` | Deploy `dist/` to GitHub Pages |

## Project Structure

```
├── css/
│   ├── normalize.css       # CSS reset
│   ├── style.css           # Compiled CSS (do not edit directly)
│   └── style.scss          # Main Sass stylesheet (edit this)
├── js/
│   ├── __tests__/          # Jest tests
│   │   └── app.test.js
│   ├── vendor/             # Third-party scripts (not linted)
│   └── app.js              # Application entry point
├── img/                    # Images
├── .github/
│   └── workflows/
│       └── ci.yml          # GitHub Actions CI/CD pipeline
├── index.html
├── webpack.common.js       # Shared webpack config
├── webpack.config.dev.js   # Development config
└── webpack.config.prod.js  # Production config
```

## Features

- **Counter** — Increment, decrement, and reset a counter.
- **Dark Mode** — Toggle dark mode with persistent `localStorage` preference.

## Testing (Jest)

Tests live in `js/__tests__/`. Run them with:

```bash
npm test
```

Example test (from `js/__tests__/app.test.js`):
```js
import { createCounter } from '../app';

test('increments the counter', () => {
  const counter = createCounter();
  counter.increment();
  expect(counter.getValue()).toBe(1);
});
```

## Linting (ESLint)

ESLint is configured via `eslint.config.mjs` using the flat config format (ESLint v10+).

```bash
npm run lint        # Check for issues
npm run lint:fix    # Auto-fix issues
```

## Formatting (Prettier)

Prettier is configured via `.prettierrc`. Files excluded from formatting are listed in `.prettierignore`.

```bash
npm run format        # Format all source files
npm run format:check  # Check without writing changes
```

## Sass / CSS Preprocessor

Styles are written in [Sass (SCSS)](https://sass-lang.com/) in `css/style.scss`. Webpack compiles them automatically via `sass-loader`.

In development, styles are injected via `style-loader`. In production, they are extracted to a `.css` file using `mini-css-extract-plugin`.

## CI/CD Pipeline (GitHub Actions)

The workflow at `.github/workflows/ci.yml` runs on every push and pull request to `main`/`master`:

| Job | Trigger | Description |
|---|---|---|
| **Test** | Push / PR | Runs `npm test` |
| **Lint** | Push / PR | Runs ESLint and Prettier check |
| **Build** | After test & lint pass | Runs `npm run build`, uploads `dist/` artifact |
| **Deploy** | Push to `main`/`master` only | Deploys to GitHub Pages via `gh-pages` |

## Next Steps

- Add more UI components and feature modules.
- Expand test coverage for new features.
- Add TypeScript support.
- Configure Dependabot for automated dependency updates.
 