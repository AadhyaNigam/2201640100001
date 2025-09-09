const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = 5000;
const ACCESS_CODE = "sAWTuR"; // required access code

app.use(cors());
app.use(express.json());

const urlsFile = path.join(__dirname, "urls.json");

// Helper to load URLs
function loadUrls() {
  if (!fs.existsSync(urlsFile)) return [];
  return JSON.parse(fs.readFileSync(urlsFile, "utf-8"));
}

// Helper to save URLs
function saveUrls(urls) {
  fs.writeFileSync(urlsFile, JSON.stringify(urls, null, 2));
}

// Shorten URL endpoint
app.post("/shorten", (req, res) => {
  const { url, code } = req.body;

  if (code !== ACCESS_CODE) {
    return res.status(403).json({ error: "Invalid access code" });
  }

  if (!url) {
    return res.status(400).json({ error: "URL is required" });
  }

  const urls = loadUrls();
  const id = Math.random().toString(36).substring(2, 8);
  const shortUrl = `http://localhost:${PORT}/${id}`;

  urls.push({ id, url });
  saveUrls(urls);

  res.json({ shortUrl });
});

// Redirect endpoint
app.get("/:id", (req, res) => {
  const { id } = req.params;
  const urls = loadUrls();
  const found = urls.find((u) => u.id === id);

  if (found) {
    res.redirect(found.url);
  } else {
    res.status(404).send("Shortened URL not found.");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
