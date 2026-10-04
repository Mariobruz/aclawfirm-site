import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import { loadBodyFor } from "./lib/body";
import { BASE, byPath, splitPath, stripBase } from "./lib/site";

async function start() {
  const body = await loadBodyFor(window.location.pathname);
  const app = (
    <StrictMode>
      <BrowserRouter basename={BASE.replace(/\/$/, "") || undefined}>
        <App body={body} />
      </BrowserRouter>
    </StrictMode>
  );
  const root = document.getElementById("root")!;
  const { path } = splitPath(stripBase(window.location.pathname));
  // The 404 page is prerendered once (in Italian): render it fresh instead of hydrating.
  const prerendered = path === "/" || byPath.has(path);
  if (root.hasChildNodes() && prerendered) hydrateRoot(root, app);
  else {
    root.replaceChildren();
    createRoot(root).render(app);
  }
}

void start();
