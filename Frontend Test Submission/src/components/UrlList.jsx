import React from "react";
import { List, ListItem, ListItemText, Link } from "@mui/material";

export default function UrlList({ urls }) {
  return (
    <List>
      {urls.map((u) => (
        <ListItem key={u.id}>
          <ListItemText
            primary={
              <Link href={u.shortUrl} target="_blank" rel="noopener noreferrer">
                {u.shortUrl}
              </Link>
            }
            secondary={u.originalUrl}
          />
        </ListItem>
      ))}
    </List>
  );
}
