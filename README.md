# FC Bussigny — site Next.js

Site du FC Bussigny, converti depuis l'ancien site statique en application
**Next.js 16 (App Router, TypeScript, React 19)** exportée en site statique — **fichier par fichier, structure intacte** :
chaque page HTML devient `src/app/<même chemin>/page.tsx` avec le même balisage (JSX).

## Démarrer

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # export statique dans out/
npm run lint
npm run typecheck
```

## Organisation

```
src/app/                  28 pages + not-found.tsx (= 404.html), même arborescence que le site statique
src/components/           Header (accueil / standard), Menu, Footer, Sponsors, Socials — blocs identiques sur toutes les pages
src/lib/active.ts         lien actif (aria-current), même règle que le générateur d'origine
public/                   assets/ (CSS, polices, images, icônes, fcb.js), docs/ (PDF), favicons — repris tels quels
```

- Liens `<a>` classiques (rechargement complet) et `fcb.js` chargé après hydratation : même comportement que le site statique
  (menu, en-tête au défilement, carrousels, onglets, filtres, formulaires).
- Le projet Next.js est désormais la seule source du site : les modifications se font directement dans `src/`.
