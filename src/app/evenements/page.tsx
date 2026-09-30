// Converti depuis fcbussigny-nouveau/evenements/index.html (structure identique) par build_bussigny_next.py
import type { Metadata } from "next";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import Sponsors from "@/components/Sponsors";
import Socials from "@/components/Socials";

export const metadata: Metadata = {
  title: { absolute: "Événements | FC Bussigny" },
  description: "Soirées, ventes de produits du terroir et journées tests du FC Bussigny.",
  openGraph: {
    title: "Événements | FC Bussigny",
    description: "Soirées, ventes de produits du terroir et journées tests du FC Bussigny.",
    type: "website",
  },
};

const PATH = "/evenements/";

export default function EvenementsPage() {
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
              src="/assets/img/bandeau-v-nements-1600.webp"
              srcSet="/assets/img/bandeau-v-nements-800.webp 800w, /assets/img/bandeau-v-nements-1600.webp 1600w"
              sizes="100vw"
              width="1920"
              height="560"
              decoding="async"
              style={{ objectPosition: "center" }}
            />
          </div>{" "}
          <div className="fcb-banner-shade"></div>{" "}
          <div className="gap-sm absolute inset-0 z-20 container mx-auto flex flex-col items-center justify-center text-center">
            {" "}
            <span className="typography-overline-1 fcb-kicker opacity-0 animate-fade-in fcb-anim">
              Vie du club
            </span>{" "}
            <h1 className="text-dark-content-primary typography-headline-1 flex flex-wrap justify-center gap-x-2 fcb-banner-title">
              <div className="flex overflow-y-hidden">
                <div className="animate-reveal-text-vertical inline-block fcb-anim" style={{ animationDelay: "120ms" }}>
                  Événements
                </div>
              </div>
            </h1>{" "}
          </div>{" "}
        </div>
        <section className="module-rich-text-generic-advanced-block">
          <div className="mb-lg lg:mb-16 block container">
            <div className="richtext sm:mx-auto sm:max-w-[752px] lg:max-w-[1096px] opacity-0 animate-slide-in-fade-up fcb-anim">
              <strong className="font-bold">La vie du club, au-delà du terrain.</strong> Chaque saison, nous organisons
              plusieurs événements, repas, tournois et ventes de produits du terroir. Autant d’occasions de se retrouver
              et de soutenir le FC Bussigny.
            </div>
          </div>
        </section>{" "}
        <section className="module-hub-block" style={{ scrollMarginTop: "90px" }}>
          {" "}
          <div className="mb-lg lg:mb-16 gap-2xl pb-xl grid items-center md:grid-cols-2 md:gap-28 md:pb-0 container">
            {" "}
            <div className="flex flex-col md:order-first opacity-0 animate-slide-in-fade-up fcb-anim">
              {" "}
              <h3 className="typography-headline-3">Soirée Disco 2026</h3>{" "}
              <div className="typography-paragraph text-content-secondary mt-sm md:mt-xl">
                <p className="typography-paragraph mb-4 md:mb-6 [&amp;:only-of-type]:mb-0 md:[&amp;:only-of-type]:mb-0 [&amp;:last-of-type]:mb-0 md:[&amp;:last-of-type]:mb-0">
                  Découvrez notre dernière soirée disco du 7 mars 2026 à la grande salle de Bussigny : apéritif, repas,
                  animations, tombola, DJ et Blind Test !
                </p>
              </div>{" "}
              <a
                className="typography-button-1 text-content-primary mt-sm md:mt-xl flex items-center"
                href="/content/soiree-disco-2026/"
              >
                Découvrir
                <svg aria-hidden="true" className="inline h-4 w-4">
                  <use href="/assets/icons.svg#chevron-right"></use>
                </svg>
              </a>{" "}
            </div>{" "}
            <div className="aspect-3-2 md:clip-left relative order-first overflow-hidden opacity-0 animate-fade-in fcb-anim">
              <div className="relative aspect-3-2 h-full w-full overflow-hidden fcb-contain ">
                <img
                  alt=""
                  className="duration-medium-1 ease-standard scale-100 transition-all group-hover:scale-105"
                  src="/assets/img/evt-disco-640.webp"
                  srcSet="/assets/img/evt-disco-640.webp 640w"
                  sizes="(min-width:64rem) 45vw, 100vw"
                  width="948"
                  height="918"
                  loading="lazy"
                  decoding="async"
                />
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
              <h3 className="typography-headline-3">Fondue, raclette &amp; huîtres</h3>{" "}
              <div className="typography-paragraph text-content-secondary mt-sm md:mt-xl">
                <p className="typography-paragraph mb-4 md:mb-6 [&amp;:only-of-type]:mb-0 md:[&amp;:only-of-type]:mb-0 [&amp;:last-of-type]:mb-0 md:[&amp;:last-of-type]:mb-0">
                  Soutenez le club en achetant des produits du terroir : la Fondue du Coq, la Raclette du Coq et les
                  huîtres bretonnes.
                </p>
              </div>{" "}
              <a
                className="typography-button-1 text-content-primary mt-sm md:mt-xl flex items-center"
                href="/content/fondue-raclette-huitres/"
              >
                Découvrir
                <svg aria-hidden="true" className="inline h-4 w-4">
                  <use href="/assets/icons.svg#chevron-right"></use>
                </svg>
              </a>{" "}
            </div>{" "}
            <div className="aspect-3-2 md:clip-left relative order-first overflow-hidden opacity-0 animate-fade-in fcb-anim">
              <div className="relative aspect-3-2 h-full w-full overflow-hidden fcb-contain ">
                <img
                  alt=""
                  className="duration-medium-1 ease-standard scale-100 transition-all group-hover:scale-105"
                  src="/assets/img/evt-terroir-429.webp"
                  srcSet="/assets/img/evt-terroir-429.webp 429w"
                  sizes="(min-width:64rem) 45vw, 100vw"
                  width="429"
                  height="522"
                  loading="lazy"
                  decoding="async"
                />
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
              <h3 className="typography-headline-3">Journées tests</h3>{" "}
              <div className="typography-paragraph text-content-secondary mt-sm md:mt-xl">
                <p className="typography-paragraph mb-4 md:mb-6 [&amp;:only-of-type]:mb-0 md:[&amp;:only-of-type]:mb-0 [&amp;:last-of-type]:mb-0 md:[&amp;:last-of-type]:mb-0">
                  Nous organisons régulièrement des journées afin de sélectionner nos futurs joueurs et futures joueuses
                  juniors, toutes catégories.
                </p>
              </div>{" "}
              <a
                className="typography-button-1 text-content-primary mt-sm md:mt-xl flex items-center"
                href="/content/journees-tests/"
              >
                Découvrir
                <svg aria-hidden="true" className="inline h-4 w-4">
                  <use href="/assets/icons.svg#chevron-right"></use>
                </svg>
              </a>{" "}
            </div>{" "}
            <div className="aspect-3-2 md:clip-left relative order-first overflow-hidden opacity-0 animate-fade-in fcb-anim">
              <div className="relative aspect-3-2 h-full w-full overflow-hidden ">
                <div className="relative h-full w-full">
                  <div className="absolute flex h-full w-full items-center justify-center bg-background-secondary"></div>
                  <img
                    alt=""
                    className="fcb-cover"
                    src="/assets/img/evt-tests-436.webp"
                    srcSet="/assets/img/evt-tests-436.webp 436w"
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
        <section className="module-hub-block" style={{ scrollMarginTop: "90px" }}>
          {" "}
          <div className="mb-0 gap-2xl pb-xl grid items-center md:grid-cols-2 md:gap-28 md:pb-0 container">
            {" "}
            <div className="flex flex-col md:order-first opacity-0 animate-slide-in-fade-up fcb-anim">
              {" "}
              <h3 className="typography-headline-3">Bénévoles</h3>{" "}
              <div className="typography-paragraph text-content-secondary mt-sm md:mt-xl">
                <p className="typography-paragraph mb-4 md:mb-6 [&amp;:only-of-type]:mb-0 md:[&amp;:only-of-type]:mb-0 [&amp;:last-of-type]:mb-0 md:[&amp;:last-of-type]:mb-0">
                  Vous souhaitez faire partie d’un comité d’organisation, apporter une aide spécifique ou tout
                  simplement aider selon les besoins ? Contactez-nous, nous nous ferons un plaisir de vous donner plus
                  d’informations.
                </p>
              </div>{" "}
              <a
                className="typography-button-1 text-content-primary mt-sm md:mt-xl flex items-center"
                href="/contact/#informations"
              >
                Nous contacter
                <svg aria-hidden="true" className="inline h-4 w-4">
                  <use href="/assets/icons.svg#chevron-right"></use>
                </svg>
              </a>{" "}
            </div>{" "}
            <div className="aspect-3-2 md:clip-left relative order-first overflow-hidden opacity-0 animate-fade-in fcb-anim">
              <div className="relative aspect-3-2 h-full w-full overflow-hidden ">
                <div className="relative h-full w-full">
                  <div className="absolute flex h-full w-full items-center justify-center bg-background-secondary"></div>
                  <img
                    alt=""
                    className="fcb-cover"
                    src="/assets/img/evt-benevoles-1280.webp"
                    srcSet="/assets/img/evt-benevoles-640.webp 640w, /assets/img/evt-benevoles-1280.webp 1280w"
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
        </section>
        <div className="h-2xl md:h-4xl"></div> <Sponsors />
        <Socials />{" "}
      </main>
      <Footer />
    </>
  );
}
