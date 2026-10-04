import { byPath, splitPath, stripBase, type PageBody } from "@/lib/site";

const loaders = import.meta.glob<PageBody>("../content/body/*/*.json", { import: "default" });

/** Loads the body (HTML + countries) of the page at the given URL pathname, if any. */
export async function loadBodyFor(pathname: string): Promise<PageBody | null> {
  const { lang, path } = splitPath(stripBase(pathname));
  const page = byPath.get(path);
  if (!page) return null;
  const load = loaders[`../content/body/${lang}/${page.id}.json`];
  return load ? load() : null;
}
