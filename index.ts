// import * as express from "express";
// import * as path from "path";
import express = require('express');
import path = require('path');

const app = express();
const port = parseInt(process.env.PORT) || process.argv[3] || 3000;

// Serve static files from public folder
// Set view engine to EJS
app
  .use(express.static(path.join(process.cwd(), 'public')))
  .set('views', path.join(process.cwd(), 'views'))
  .set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/api', (req, res) => {
  res.json({ msg: 'Helloo world' });
});

// Start server
app.listen(port, () => {
  console.log(`🚀 Server listening on http://localhost:${port}`);
});
