export function saveUrl(shortCode, longUrl) {
  const urls = JSON.parse(localStorage.getItem("urls") || "{}");
  urls[shortCode] = longUrl;
  localStorage.setItem("urls", JSON.stringify(urls));
}

export function getUrl(shortCode) {
  const urls = JSON.parse(localStorage.getItem("urls") || "{}");
  return urls[shortCode] || null;
}

export function getAllUrls() {
  return JSON.parse(localStorage.getItem("urls") || "{}");
}