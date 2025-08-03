import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "./i18n";
import gsap from "gsap";
// ---- FIX IS HERE ----
// Import ScrollTrigger and ScrollSmoother from their specific paths
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { BrowserRouter } from "react-router-dom";

// 2. Register BOTH plugins with GSAP
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
