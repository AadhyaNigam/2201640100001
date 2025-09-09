import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

export default function UrlForm({ onAdd }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onAdd(input);
      setInput("");
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 2 }}>
      <TextField
        label="Enter URL"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained">
        Shorten
      </Button>
    </Box>
  );
}
