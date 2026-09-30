// Converti depuis fcbussigny-nouveau/equipes/actifs-1/index.html (structure identique) par build_bussigny_next.py
import type { Metadata } from "next";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import Sponsors from "@/components/Sponsors";
import Socials from "@/components/Socials";

export const metadata: Metadata = {
  title: { absolute: "Actifs 1 | FC Bussigny" },
  description:
    "L’équipe fanion du FC Bussigny, notre équipe d’Actifs 1, représente le club au plus haut niveau de nos trois équipes d’actifs. Portée par un groupe de joue",
  openGraph: {
    title: "Actifs 1 | FC Bussigny",
    description:
      "L’équipe fanion du FC Bussigny, notre équipe d’Actifs 1, représente le club au plus haut niveau de nos trois équipes d’actifs. Portée par un groupe de joue",
    type: "website",
    images: ["/assets/img/bandeau-actifs-1-1280.webp"],
  },
};

const PATH = "/equipes/actifs-1/";

export default function EquipesActifs1Page() {
  return (
    <>
      <Header path={PATH} />
      <Menu path={PATH} />
      <main id="contenu" className="relative z-10 min-h-dvh bg-background-primary">
        {" "}
        <div className="mb-0 mb-2xl lg:mb-4xl relative h-[220px] md:h-[360px] bg-dark-background-primary overflow-hidden">
          {" "}
          <div className="relative h-full w-full hero-image animate-hero-image fcb-anim">
            <img
              alt=""
              className="fcb-cover"
              src="/assets/img/bandeau-actifs-1-1600.webp"
              srcSet="/assets/img/bandeau-actifs-1-800.webp 800w, /assets/img/bandeau-actifs-1-1600.webp 1600w"
              sizes="100vw"
              width="1960"
              height="800"
              decoding="async"
              style={{ objectPosition: "center 22%" }}
            />
          </div>{" "}
          <div className="fcb-banner-shade"></div>{" "}
          <div className="gap-sm absolute inset-0 z-20 container mx-auto flex flex-col items-center justify-center text-center">
            {" "}
            <span className="typography-overline-1 fcb-kicker opacity-0 animate-fade-in fcb-anim">
              Équipe fanion
            </span>{" "}
            <h1 className="text-dark-content-primary typography-headline-1 flex flex-wrap justify-center gap-x-2 fcb-banner-title">
              <div className="flex overflow-y-hidden">
                <div className="animate-reveal-text-vertical inline-block fcb-anim" style={{ animationDelay: "120ms" }}>
                  Actifs
                </div>
              </div>
              <div className="flex overflow-y-hidden">
                <div className="animate-reveal-text-vertical inline-block fcb-anim" style={{ animationDelay: "165ms" }}>
                  1
                </div>
              </div>
            </h1>{" "}
          </div>{" "}
        </div>
        <div className="mb-2xl lg:mb-3xl relative container">
          <span className="text-content-primary typography-subheading-2 flex items-center gap-2">
            <span className="fcb-disc"></span>4e ligue · ACVF
          </span>
        </div>
        <section className="module-rich-text-generic-advanced-block">
          <div className="mb-lg lg:mb-16 block container">
            <div className="richtext sm:mx-auto sm:max-w-[752px] lg:max-w-[1096px] opacity-0 animate-slide-in-fade-up fcb-anim">
              <strong className="font-bold">Actifs 1.</strong> L’équipe fanion du FC Bussigny, notre équipe d’Actifs 1,
              représente le club au plus haut niveau de nos trois équipes d’actifs. Portée par un groupe de joueurs
              motivés et un esprit de cohésion fort, elle porte fièrement les couleurs bussignoises chaque week-end sur
              les terrains vaudois.
            </div>
          </div>
        </section>{" "}
        <section className="module-hub-block" style={{ scrollMarginTop: "90px" }}>
          {" "}
          <div className="mb-lg lg:mb-16 gap-2xl pb-xl grid items-center md:grid-cols-2 md:gap-28 md:pb-0 container">
            {" "}
            <div className="flex flex-col md:order-first opacity-0 animate-slide-in-fade-up fcb-anim">
              {" "}
              <h3 className="typography-headline-3">L’exigence au service de la victoire</h3>{" "}
              <div className="typography-paragraph text-content-secondary mt-sm md:mt-xl">
                <p className="typography-paragraph mb-4 md:mb-6 [&amp;:only-of-type]:mb-0 md:[&amp;:only-of-type]:mb-0 [&amp;:last-of-type]:mb-0 md:[&amp;:last-of-type]:mb-0">
                  Encadrée par un staff technique exigeant, notre équipe principale travaille chaque semaine à
                  l’entraînement pour progresser collectivement et individuellement, avec pour objectif de viser le haut
                  du classement et de faire vivre de belles émotions à son public.
                </p>
                <p className="typography-paragraph mb-4 md:mb-6 [&amp;:only-of-type]:mb-0 md:[&amp;:only-of-type]:mb-0 [&amp;:last-of-type]:mb-0 md:[&amp;:last-of-type]:mb-0">
                  Venez nombreux soutenir nos Actifs 1 lors de leurs matchs à domicile : les rencontres se jouent dans
                  une ambiance conviviale et chaleureuse, à l’image des valeurs de notre club !
                </p>
              </div>{" "}
            </div>{" "}
            <div className="aspect-3-2 md:clip-left relative order-first overflow-hidden opacity-0 animate-fade-in fcb-anim">
              <div className="relative aspect-3-2 h-full w-full overflow-hidden ">
                <div className="relative h-full w-full">
                  <div className="absolute flex h-full w-full items-center justify-center bg-background-secondary"></div>
                  <img
                    alt=""
                    className="fcb-cover"
                    src="/assets/img/actifs-1-0-1920.webp"
                    srcSet="/assets/img/actifs-1-0-640.webp 640w, /assets/img/actifs-1-0-1280.webp 1280w, /assets/img/actifs-1-0-1920.webp 1920w"
                    sizes="(min-width:64rem) 45vw, 100vw"
                    width="1960"
                    height="918"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <section className="module-hub-block" style={{ scrollMarginTop: "90px" }}>
          {" "}
          <div className="mb-lg lg:mb-16 gap-2xl pb-xl grid items-center md:grid-cols-2 md:gap-28 md:pb-0 container">
            {" "}
            <div className="flex flex-col md:order-first opacity-0 animate-slide-in-fade-up fcb-anim">
              {" "}
              <h3 className="typography-headline-3">Viser haut</h3>{" "}
              <div className="typography-paragraph text-content-secondary mt-sm md:mt-xl">
                <p className="typography-paragraph mb-4 md:mb-6 [&amp;:only-of-type]:mb-0 md:[&amp;:only-of-type]:mb-0 [&amp;:last-of-type]:mb-0 md:[&amp;:last-of-type]:mb-0">
                  Notre équipe fanion évolue en <strong>4e ligue</strong> et affiche une ambition claire : viser haut et
                  faire briller les couleurs de Bussigny. Intensité à l’entraînement, exigence tactique et soif de
                  progression sont les maîtres-mots d’un groupe qui ne fait jamais les choses à moitié.
                </p>
                <p className="typography-paragraph mb-4 md:mb-6 [&amp;:only-of-type]:mb-0 md:[&amp;:only-of-type]:mb-0 [&amp;:last-of-type]:mb-0 md:[&amp;:last-of-type]:mb-0">
                  Venez vibrer avec nous lors des matchs à domicile ! Ambiance électrique, supporters passionnés et
                  esprit bussignois garanti.
                </p>
              </div>{" "}
            </div>{" "}
            <div className="aspect-3-2 md:clip-left relative order-first overflow-hidden opacity-0 animate-fade-in fcb-anim">
              <div className="relative aspect-3-2 h-full w-full overflow-hidden ">
                <div className="relative h-full w-full">
                  <div className="absolute flex h-full w-full items-center justify-center bg-background-secondary"></div>
                  <img
                    alt=""
                    className="fcb-cover"
                    src="/assets/img/actifs-1-1-1280.webp"
                    srcSet="/assets/img/actifs-1-1-640.webp 640w, /assets/img/actifs-1-1-1280.webp 1280w"
                    sizes="(min-width:64rem) 45vw, 100vw"
                    width="1760"
                    height="410"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <section className="module-quote-block">
          <div className="mb-lg lg:mb-16 py-xl px-2xl md:px-md lg:py-2xl sm:mx-auto lg:px-0">
            {" "}
            <div className="bg-background-secondary p-lg mt-lg relative container mb-10 sm:mx-auto sm:max-w-[752px] lg:max-w-[1096px] opacity-0 animate-fade-in fcb-anim">
              {" "}
              <blockquote className="relative text-center">
                <p className="typography-body-3-semibold mb-lg">
                  « Chaque entraînement compte. Chaque match compte. Notre équipe fanion se bat pour une seule chose :
                  porter haut les couleurs de Bussigny. »
                </p>{" "}
                <footer className="text-content-secondary">
                  <cite className="typography-body-6 not-italic">Actifs 1 – FC Bussigny</cite>
                </footer>
              </blockquote>{" "}
              <div className="absolute -right-2 -bottom-9 md:-right-4">
                <svg aria-hidden="true" className="inline stroke-content-brand-jaune h-16 w-13">
                  <use href="/assets/icons.svg#quotes"></use>
                </svg>
              </div>{" "}
            </div>
          </div>
        </section>
        <div className="container mb-2xl lg:mb-4xl flex flex-wrap gap-md justify-center">
          <a
            className="flex items-center justify-center duration-150 ease-in-out cursor-pointer bg-background-brand-jaune hover:bg-background-brand-jaune-hover typography-button-1 h-12 px-xl gap-sm fcb-btn "
            href="/contact/#inscription"
          >
            Inscription joueur
            <svg aria-hidden="true" className="inline h-6 w-6">
              <use href="/assets/icons.svg#chevron-right"></use>
            </svg>
          </a>
          <a
            className="flex items-center justify-center duration-150 ease-in-out cursor-pointer typography-button-1 h-12 px-xl gap-sm fcb-btn fcb-btn-dark "
            href="/equipes/"
          >
            Toutes les équipes
            <svg aria-hidden="true" className="inline h-6 w-6">
              <use href="/assets/icons.svg#chevron-right"></use>
            </svg>
          </a>
        </div>{" "}
        <Sponsors />
        <Socials />{" "}
      </main>
      <Footer />
    </>
  );
}
