import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function RedirectRouter() {
  const { id } = useParams();

  useEffect(() => {
    window.location.href = `/r/${id}`;
  }, [id]);

  return <p>Redirecting...</p>;
}
