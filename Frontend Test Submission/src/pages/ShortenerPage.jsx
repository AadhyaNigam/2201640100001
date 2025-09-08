import React, { useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import UrlForm from "../components/UrlForm";
import { logger } from "logging-middleware"; // ✅ fixed import

export default function ShortenerPage() {
  const [shortUrl, setShortUrl] = useState("");

  // Use logger when the page loads
  React.useEffect(() => {
    logger("ShortenerPage loaded");
  }, []);

  const handleShorten = (url) => {
    // Example shortener logic (fake for now)
    const newShort = `http://short.ly/${Math.random().toString(36).substring(7)}`;
    setShortUrl(newShort);

    // Log the event
    logger(`URL shortened: ${url} → ${newShort}`);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          URL Shortener
        </Typography>
        <UrlForm onShorten={handleShorten} />
        {shortUrl && (
          <Typography color="primary" sx={{ mt: 2 }}>
            Shortened URL: <a href={shortUrl}>{shortUrl}</a>
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}