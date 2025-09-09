const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = 5000;

const urlsFile = path.join(__dirname, "urls.json");

app.use(cors());
app.use(express.json());

app.post("/shorten", (req, res) => {
  const { url, accessCode } = req.body;

  if (accessCode !== "sAWTuR") {
    return res.status(403).json({ error: "Invalid access code" });
  }

  if (!url) {
    return res.status(400).json({ error: "URL is required" });
  }

  let urls = [];
  if (fs.existsSync(urlsFile)) {
    try {
      urls = JSON.parse(fs.readFileSync(urlsFile, "utf8"));
    } catch {
      urls = [];
    }
  }

  const shortId = Math.random().toString(36).substr(2, 6);
  const shortUrl = `http://localhost:3000/${shortId}`;

  urls.push({ id: shortId, url, shortUrl });
  fs.writeFileSync(urlsFile, JSON.stringify(urls, null, 2));

  res.json({ shortUrl });
});

app.get("/:id", (req, res) => {
  if (!fs.existsSync(urlsFile)) {
    return res.status(404).send("URL not found");
  }

  const urls = JSON.parse(fs.readFileSync(urlsFile, "utf8") || "[]");
  const found = urls.find((u) => u.id === req.params.id);

  if (found) {
    res.redirect(found.url);
  } else {
    res.status(404).send("URL not found");
  }
});

app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});
