import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "./App";
import type { PageBody } from "./lib/site";

export function render(url: string, body: PageBody | null): string {
  return renderToString(
    <StaticRouter location={url}>
      <App body={body} />
    </StaticRouter>,
  );
}
