// Vercel serverless function handler
// Import required modules directly to ensure they're bundled
const express = require('express');
const path = require('path');
const ejs = require('ejs'); // Explicitly require ejs

const app = express();

// For Vercel, views should be relative to the built file location
// Try multiple paths to find views directory
const viewsDirs = [
  path.join(__dirname, '../dist/views'),
  path.join(__dirname, '../views'),
  path.join(process.cwd(), 'dist/views'),
  path.join(process.cwd(), 'views'),
];

// Set view engine - ejs is now explicitly required above
app.set('views', viewsDirs);
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
  console.log('Index page called');
  res.render('index');
  console.log('Index page rendered');
});

app.get('/api', (req, res) => {
  console.log('API call initiated');
  res.json({ msg: 'Helloo world' });
  console.log('API call completed');
});

// Export the app for Vercel
module.exports = app;
