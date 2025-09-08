import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

export default function UrlCard({ data }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="body1">Original: {data.original}</Typography>
        <Typography variant="body2">Short: {data.short}</Typography>
        <Typography variant="caption" display="block">
          Expiry: {new Date(data.expiry).toLocaleString()}
        </Typography>
        <Typography variant="caption" display="block">
          Clicks: {data.clicks}
        </Typography>
      </CardContent>
    </Card>
  );
}