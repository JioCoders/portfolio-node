// import * as express from "express";
// import * as path from "path";
import express = require('express');
import path = require('path');

const app = express();
const port = parseInt(process.env.PORT) || (process.argv[3] as unknown as number) || 3000;

// For Vercel, views should be relative to the built file location
const viewsDirs = [
  path.join(__dirname, 'views'),
  path.join(process.cwd(), 'views'),
  path.join(process.cwd(), 'dist', 'views'),
];

// Only use express.static locally, Vercel serves static files automatically
if (!process.env.VERCEL && !process.env.VERCEL_ENV) {
  const staticDirs = [
    path.join(__dirname, 'public'),
    path.join(process.cwd(), 'public'),
  ];
  staticDirs.forEach((dir) => app.use(express.static(dir)));
}

// Set view engine - ensure ejs is available
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

// Export app for serverless (Vercel) and start server locally
// Use CommonJS export for Vercel compatibility
export = app;

if (!process.env.VERCEL && !process.env.VERCEL_ENV) {
  app.listen(port, () => {
    console.log(`🚀 Server listening on http://localhost:${port}`);
  });
}
