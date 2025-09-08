import React from "react";
import { Grid, TextField } from "@mui/material";

export default function UrlForm({ entry, index, handleChange }) {
  return (
    <Grid container spacing={2} style={{ marginBottom: "1rem" }}>
      <Grid item xs={12} md={5}>
        <TextField
          label="Long URL"
          fullWidth
          value={entry.longUrl}
          onChange={(e) => handleChange(index, "longUrl", e.target.value)}
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <TextField
          label="Validity (minutes)"
          type="number"
          fullWidth
          value={entry.validity}
          onChange={(e) => handleChange(index, "validity", e.target.value)}
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <TextField
          label="Preferred Shortcode"
          fullWidth
          value={entry.shortcode}
          onChange={(e) => handleChange(index, "shortcode", e.target.value)}
        />
      </Grid>
    </Grid>
  );
}