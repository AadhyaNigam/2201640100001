import React, { useState } from "react";

function ShortenerPage() {
  const [url, setUrl] = useState("");
  const [shortened, setShortened] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/shorten", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ url, accessCode: "sAWTuR" }),
});

      if (!response.ok) throw new Error("Could not shorten URL");

      const data = await response.json();
      setShortened([...shortened, { original: url, short: data.shortUrl }]);
      setUrl("");
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>URL Shortener Web App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          style={{ width: "400px", padding: "10px" }}
        />
        <button type="submit" style={{ marginLeft: "10px", padding: "10px" }}>
          Shorten
        </button>
      </form>

      <h2>Shortened Links</h2>
      <ul>
        {shortened.map((item, i) => (
          <li key={i}>
            Original: {item.original} <br />
            Short:{" "}
            <a href={item.short} target="_blank" rel="noreferrer">
              {item.short}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShortenerPage;
