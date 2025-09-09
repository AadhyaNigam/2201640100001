const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = 5000;
const ACCESS_CODE = "sAWTuR"; // access code requirement

app.use(cors());
app.use(express.json());

const urlsFile = path.join(__dirname, "urls.json");

// helper: load urls
function loadUrls() {
  if (!fs.existsSync(urlsFile)) return [];
  return JSON.parse(fs.readFileSync(urlsFile));
}

// helper: save urls
function saveUrls(urls) {
  fs.writeFileSync(urlsFile, JSON.stringify(urls, null, 2));
}

// shorten endpoint
app.post("/shorten", (req, res) => {
  const { url, accessCode } = req.body;

  if (accessCode !== ACCESS_CODE) {
    return res.status(403).json({ error: "Invalid access code" });
  }

  if (!url) {
    return res.status(400).json({ error: "URL is required" });
  }

  const urls = loadUrls();
  const shortCode = Math.random().toString(36).substring(2, 8);

  const newEntry = {
    shortCode,
    originalUrl: url,
    shortUrl: `http://localhost:${PORT}/${shortCode}`,
  };

  urls.push(newEntry);
  saveUrls(urls);

  res.json(newEntry);
});

// redirect endpoint
app.get("/:code", (req, res) => {
  const urls = loadUrls();
  const entry = urls.find((u) => u.shortCode === req.params.code);

  if (entry) {
    return res.redirect(entry.originalUrl);
  }

  res.status(404).send("URL not found");
});

// start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});