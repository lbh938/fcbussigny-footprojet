/**
 * Lien actif (aria-current="page"), même règle que le générateur du site statique (build_bussigny.py) :
 * l'accueil n'est actif que sur l'accueil ; sinon la première partie du chemin doit correspondre.
 */
export function isActive(path: string, href: string): "page" | undefined {
  if (href === "/") return path === "/" ? "page" : undefined;
  const section = (p: string) => p.split("/").filter(Boolean)[0] ?? "";
  return section(href) === section(path) ? "page" : undefined;
}
