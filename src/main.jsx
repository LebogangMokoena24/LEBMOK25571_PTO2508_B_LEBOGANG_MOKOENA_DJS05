import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

/**
 * Application entry point.
 *
 * Wraps the entire app in `BrowserRouter` so that routing features
 * (Routes, Route, Link, useParams, useNavigate, etc.) are available
 * throughout the component tree via React Router's context.
 */
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
