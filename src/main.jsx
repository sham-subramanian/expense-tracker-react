// main.jsx — React entry point
// Replaces the <script> tags in the original HTML files
// React mounts the entire app into a single <div id="root"> in index.html

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
