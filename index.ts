import * as express from "express";
import * as path from "path";

const app = express();
const port = parseInt(process.env.PORT) || process.argv[3] || 8080;

// Serve static files from public folder
// Set view engine to EJS
app
  .use(express.static(path.join(__dirname, "public")))
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "ejs");

// Routes
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/api", (req, res) => {
  res.json({ msg: "Helloo world" });
});

// Start server
app.listen(port, () => {
  console.log(`🚀 Server listening on http://localhost:${port}`);
});
