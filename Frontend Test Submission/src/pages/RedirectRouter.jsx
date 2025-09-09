import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function RedirectRouter() {
  const { id } = useParams();

  useEffect(() => {
    window.location.href = `http://localhost:5000/${id}`;
  }, [id]);

  return <h2>Redirecting...</h2>;
}

export default RedirectRouter;
