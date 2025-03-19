
# Webpack Configuration Guide

## Current Setup

This template uses a split webpack configuration:

- `webpack.common.js`: Shared configuration
- `webpack.config.dev.js`: Development-specific settings
- `webpack.config.prod.js`: Production optimizations

## Adding Features

### 1. CSS/SASS Processing

Install required packages:
```bash
npm install --save-dev css-loader style-loader sass sass-loader
```

Add to webpack.common.js:
```javascript
module: {
  rules: [{
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader']
  }]
}
```

### 2. Asset Handling

For images and fonts:
```javascript
module: {
  rules: [{
    test: /\.(png|svg|jpg|jpeg|gif)$/i,
    type: 'asset/resource'
  }]
}
```

### 3. Code Splitting

In webpack.common.js:
```javascript
optimization: {
  splitChunks: {
    chunks: 'all'
  }
}
```

### 4. Environment Variables

Create `.env` files and use:
```javascript
const Dotenv = require('dotenv-webpack');

plugins: [
  new Dotenv()
]
```

## Production Optimizations

Current optimizations include:
- Minification
- Asset copying
- HTML template processing

Additional optimizations can be added in webpack.config.prod.js.
