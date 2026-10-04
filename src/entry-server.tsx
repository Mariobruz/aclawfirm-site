import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "./App";
import { BASE, type PageBody } from "./lib/site";

export function render(url: string, body: PageBody | null): string {
  return renderToString(
    <StaticRouter location={url} basename={BASE.replace(/\/$/, "") || undefined}>
      <App body={body} />
    </StaticRouter>,
  );
}
