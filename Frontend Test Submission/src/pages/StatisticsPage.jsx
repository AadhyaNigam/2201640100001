import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { logger } from "logging-middleware"; // ✅ import logger

export default function StatisticsPage() {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    logger("StatisticsPage loaded");

    // Fake stats for demo (replace with backend later)
    const fakeStats = [
      { url: "https://google.com", clicks: 12 },
      { url: "https://openai.com", clicks: 8 },
      { url: "https://github.com", clicks: 20 },
    ];

    setStats(fakeStats);
    logger(`Loaded ${fakeStats.length} stats records`);
  }, []);

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          URL Statistics
        </Typography>
        {stats.length === 0 ? (
          <Typography color="text.secondary">
            No statistics available yet.
          </Typography>
        ) : (
          <ul>
            {stats.map((item, idx) => (
              <li key={idx}>
                <strong>{item.url}</strong> — {item.clicks} clicks
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}
