// Vercel serverless function handler
// Import the Express app from the built dist folder
const path = require('path');

// Ensure we can find the dist folder
const appPath = path.join(__dirname, '../dist/index.js');
const app = require(appPath);

module.exports = app;

