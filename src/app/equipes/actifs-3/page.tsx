// Converti depuis fcbussigny-nouveau/equipes/actifs-3/index.html (structure identique) par build_bussigny_next.py
import type { Metadata } from "next";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import Sponsors from "@/components/Sponsors";
import Socials from "@/components/Socials";

export const metadata: Metadata = {
  title: { absolute: "Actifs 3 | FC Bussigny" },
  description:
    "Troisième équipe d’actifs du FC Bussigny, les Actifs 3 complètent l’effectif adulte du club. Portés par un esprit de cohésion fort, ils défendent eux aussi",
  openGraph: {
    title: "Actifs 3 | FC Bussigny",
    description:
      "Troisième équipe d’actifs du FC Bussigny, les Actifs 3 complètent l’effectif adulte du club. Portés par un esprit de cohésion fort, ils défendent eux aussi",
    type: "website",
    images: ["/assets/img/bandeau-actifs-3-921.webp"],
  },
};

const PATH = "/equipes/actifs-3/";

export default function EquipesActifs3Page() {
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
              src="/assets/img/bandeau-actifs-3-800.webp"
              srcSet="/assets/img/bandeau-actifs-3-800.webp 800w"
              sizes="100vw"
              width="921"
              height="389"
              decoding="async"
              style={{ objectPosition: "center 22%" }}
            />
          </div>{" "}
          <div className="fcb-banner-shade"></div>{" "}
          <div className="gap-sm absolute inset-0 z-20 container mx-auto flex flex-col items-center justify-center text-center">
            {" "}
            <span className="typography-overline-1 fcb-kicker opacity-0 animate-fade-in fcb-anim">Actifs</span>{" "}
            <h1 className="text-dark-content-primary typography-headline-1 flex flex-wrap justify-center gap-x-2 fcb-banner-title">
              <div className="flex overflow-y-hidden">
                <div className="animate-reveal-text-vertical inline-block fcb-anim" style={{ animationDelay: "120ms" }}>
                  Actifs
                </div>
              </div>
              <div className="flex overflow-y-hidden">
                <div className="animate-reveal-text-vertical inline-block fcb-anim" style={{ animationDelay: "165ms" }}>
                  3
                </div>
              </div>
            </h1>{" "}
          </div>{" "}
        </div>
        <div className="mb-2xl lg:mb-3xl relative container">
          <span className="text-content-primary typography-subheading-2 flex items-center gap-2">
            <span className="fcb-disc"></span>Actifs · ACVF
          </span>
        </div>
        <section className="module-rich-text-generic-advanced-block">
          <div className="mb-lg lg:mb-16 block container">
            <div className="richtext sm:mx-auto sm:max-w-[752px] lg:max-w-[1096px] opacity-0 animate-slide-in-fade-up fcb-anim">
              <strong className="font-bold">Actifs 3.</strong> Troisième équipe d’actifs du FC Bussigny, les Actifs 3
              complètent l’effectif adulte du club. Portés par un esprit de cohésion fort, ils défendent eux aussi
              fièrement les couleurs bussignoises sur les terrains vaudois.
            </div>
          </div>
        </section>{" "}
        <section className="module-hub-block" style={{ scrollMarginTop: "90px" }}>
          {" "}
          <div className="mb-lg lg:mb-16 gap-2xl pb-xl grid items-center md:grid-cols-2 md:gap-28 md:pb-0 container">
            {" "}
            <div className="flex flex-col md:order-first opacity-0 animate-slide-in-fade-up fcb-anim">
              {" "}
              <h3 className="typography-headline-3">Le plaisir de jouer ensemble</h3>{" "}
              <div className="typography-paragraph text-content-secondary mt-sm md:mt-xl">
                <p className="typography-paragraph mb-4 md:mb-6 [&amp;:only-of-type]:mb-0 md:[&amp;:only-of-type]:mb-0 [&amp;:last-of-type]:mb-0 md:[&amp;:last-of-type]:mb-0">
                  Au FC Bussigny, chaque équipe compte. Les Actifs 3 permettent à tous les joueurs adultes de vivre leur
                  passion en compétition, dans une ambiance conviviale et chaleureuse, à l’image des valeurs de notre
                  club.
                </p>
                <p className="typography-paragraph mb-4 md:mb-6 [&amp;:only-of-type]:mb-0 md:[&amp;:only-of-type]:mb-0 [&amp;:last-of-type]:mb-0 md:[&amp;:last-of-type]:mb-0">
                  Envie de rejoindre le groupe ? Remplissez le formulaire d’inscription joueur, nous vous recontacterons
                  rapidement.
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
                    src="/assets/img/actifs-3-0-436.webp"
                    srcSet="/assets/img/actifs-3-0-436.webp 436w"
                    sizes="(min-width:64rem) 45vw, 100vw"
                    width="436"
                    height="355"
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
                  « Venez vivre l’intensité. Venez porter l’équipe. Venez à domicile ! »
                </p>{" "}
                <footer className="text-content-secondary">
                  <cite className="typography-body-6 not-italic">FC Bussigny</cite>
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
