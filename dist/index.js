"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import * as express from "express";
// import * as path from "path";
var express = require("express");
var path = require("path");
var app = express();
var port = parseInt(process.env.PORT) || process.argv[3] || 3000;
// Serve static files from public folder
// Set view engine to EJS
app
    .use(express.static(path.join(process.cwd(), 'public')))
    .set('views', path.join(process.cwd(), 'views'))
    .set('view engine', 'ejs');
// Routes
app.get('/', function (req, res) {
    res.render('index');
});
app.get('/api', function (req, res) {
    res.json({ msg: 'Helloo world' });
});
// Start server
app.listen(port, function () {
    console.log("\uD83D\uDE80 Server listening on http://localhost:".concat(port));
});
//# sourceMappingURL=index.js.map