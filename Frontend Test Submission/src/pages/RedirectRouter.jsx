import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { logger, auth } from "logging-middleware"; // ✅ fixed import

export default function RedirectRouter() {
  const { shortId } = useParams();

  useEffect(() => {
    try {
      // Fake user (normally from auth provider)
      const user = { token: "demo-token" };

      auth(user); // Validate user
      logger(`RedirectRouter accessed with ID: ${shortId}`);

      // Fake redirect (replace with backend call)
      const originalUrl = "https://example.com";
      logger(`Redirecting to: ${originalUrl}`);
      window.location.href = originalUrl;
    } catch (error) {
      logger(`Auth failed: ${error.message}`);
    }
  }, [shortId]);

  return <p>Redirecting...</p>;
}
