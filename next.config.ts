import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Site entièrement statique : `next build` produit le dossier `out/`
  // (déployable tel quel sur GitHub Pages, Vercel, Netlify, un hébergement mutualisé…).
  output: "export",
  // URLs en `/dossier/` comme sur le site d'origine (`/equipes/actifs-1/`).
  trailingSlash: true,
  // Les images sont déjà optimisées à la source (WebP en plusieurs largeurs, voir public/assets/img)
  // et servies via <img srcset> ; l'optimiseur de next/image n'est pas disponible en export statique.
  images: { unoptimized: true },
  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;
