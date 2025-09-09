import React, { useState } from "react";

function ShortenerPage() {
  const [inputUrl, setInputUrl] = useState("");
  const [shortenedUrls, setShortenedUrls] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/shorten", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        url: inputUrl,
        code: "sAWTuR" // sending access code
      }),
    });

    const data = await response.json();
    if (data.shortUrl) {
      setShortenedUrls([...shortenedUrls, data.shortUrl]);
      setInputUrl("");
    } else {
      alert(data.error || "Something went wrong");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          value={inputUrl}
          onChange={(e) => setInputUrl(e.target.value)}
          placeholder="Enter URL"
          style={{ padding: "0.5rem", width: "300px" }}
        />
        <button type="submit" style={{ padding: "0.5rem", marginLeft: "0.5rem" }}>
          Shorten
        </button>
      </form>

      <h3>Shortened URLs</h3>
      <ul>
        {shortenedUrls.map((url, idx) => (
          <li key={idx}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              {url}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShortenerPage;