import React, { useState } from "react";

function ShortenerPage() {
  const [url, setUrl] = useState("");
  const [shortUrls, setShortUrls] = useState([]);
  const ACCESS_CODE = "sAWTuR"; // 👈 access code

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/shorten", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, accessCode: ACCESS_CODE }),
      });

      if (!response.ok) {
        throw new Error("Failed to shorten URL");
      }

      const data = await response.json();
      setShortUrls([...shortUrls, data]);
      setUrl("");
    } catch (error) {
      console.error("Error:", error);
      alert("Error: Could not shorten URL");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h1>🔗 URL Shortener</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="url"
          placeholder="Enter URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
          style={{ width: "70%", padding: "10px" }}
        />
        <button type="submit" style={{ padding: "10px 20px", marginLeft: "10px" }}>
          Shorten
        </button>
      </form>

      <h2 style={{ marginTop: "20px" }}>Shortened Links</h2>
      <ul>
        {shortUrls.map((item, index) => (
          <li key={index}>
            <a href={item.shortUrl} target="_blank" rel="noreferrer">
              {item.shortUrl}
            </a>{" "}
            → {item.originalUrl}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShortenerPage;
