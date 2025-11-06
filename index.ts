// import * as express from "express";
// import * as path from "path";
import express = require('express');
import path = require('path');

const app = express();
const port = parseInt(process.env.PORT) || (process.argv[3] as unknown as number) || 3000;

const viewsDirs = [
  path.join(__dirname, 'views'),
  path.join(process.cwd(), 'views'),
];
const staticDirs = [
  path.join(__dirname, 'public'),
  path.join(process.cwd(), 'public'),
];

staticDirs.forEach((dir) => app.use(express.static(dir)));
app.set('views', viewsDirs).set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/api', (req, res) => {
  res.json({ msg: 'Helloo world' });
});

// Export app for serverless (Vercel) and start server locally
export default app;

if (!process.env.VERCEL) {
  app.listen(port, () => {
    console.log(`🚀 Server listening on http://localhost:${port}`);
  });
}
