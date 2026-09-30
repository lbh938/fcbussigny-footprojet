// Converti depuis fcbussigny-nouveau/equipes/section-feminine/index.html (structure identique) par build_bussigny_next.py
import type { Metadata } from "next";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import Sponsors from "@/components/Sponsors";
import Socials from "@/components/Socials";

export const metadata: Metadata = {
  title: { absolute: "Section féminine | FC Bussigny" },
  description: "Développement du football féminin au FC Bussigny.",
  openGraph: {
    title: "Section féminine | FC Bussigny",
    description: "Développement du football féminin au FC Bussigny.",
    type: "website",
  },
};

const PATH = "/equipes/section-feminine/";

export default function EquipesSectionFemininePage() {
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
              src="/assets/img/bandeau-section-f-minine-1600.webp"
              srcSet="/assets/img/bandeau-section-f-minine-800.webp 800w, /assets/img/bandeau-section-f-minine-1600.webp 1600w"
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
              Football féminin
            </span>{" "}
            <h1 className="text-dark-content-primary typography-headline-1 flex flex-wrap justify-center gap-x-2 fcb-banner-title">
              <div className="flex overflow-y-hidden">
                <div className="animate-reveal-text-vertical inline-block fcb-anim" style={{ animationDelay: "120ms" }}>
                  Section
                </div>
              </div>
              <div className="flex overflow-y-hidden">
                <div className="animate-reveal-text-vertical inline-block fcb-anim" style={{ animationDelay: "165ms" }}>
                  féminine
                </div>
              </div>
            </h1>{" "}
          </div>{" "}
        </div>
        <section className="module-rich-text-generic-advanced-block">
          <div className="mb-lg lg:mb-16 block container">
            <div className="richtext sm:mx-auto sm:max-w-[752px] lg:max-w-[1096px] opacity-0 animate-slide-in-fade-up fcb-anim">
              <strong className="font-bold">Développement du football féminin au FC Bussigny.</strong> Le FC Bussigny
              affirme avec conviction son engagement en faveur du développement du football féminin. Notre volonté est
              claire : offrir aux filles et aux jeunes femmes la même passion, les mêmes opportunités et les mêmes
              ambitions que leurs homologues masculins.
            </div>
          </div>
        </section>{" "}
        <section className="module-hub-block" style={{ scrollMarginTop: "90px" }}>
          {" "}
          <div className="mb-lg lg:mb-16 gap-2xl pb-xl grid items-center md:grid-cols-2 md:gap-28 md:pb-0 container">
            {" "}
            <div className="flex flex-col md:order-first opacity-0 animate-slide-in-fade-up fcb-anim">
              {" "}
              <h3 className="typography-headline-3">Équipe FF 15</h3>{" "}
              <div className="typography-paragraph text-content-secondary mt-sm md:mt-xl">
                <p className="typography-paragraph mb-4 md:mb-6 [&amp;:only-of-type]:mb-0 md:[&amp;:only-of-type]:mb-0 [&amp;:last-of-type]:mb-0 md:[&amp;:last-of-type]:mb-0">
                  Une section féminine en pleine croissance : notre club accueille des joueuses dès l’âge de 8 ans, quel
                  que soit leur niveau.
                </p>
                <p className="typography-paragraph mb-4 md:mb-6 [&amp;:only-of-type]:mb-0 md:[&amp;:only-of-type]:mb-0 [&amp;:last-of-type]:mb-0 md:[&amp;:last-of-type]:mb-0">
                  Encadrées par des entraîneurs formés et engagés, nos équipes féminines évoluent dans un environnement
                  où la progression, le respect et l’esprit d’équipe sont au cœur de chaque entraînement et de chaque
                  match.
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
                    src="/assets/img/ff15-1920.webp"
                    srcSet="/assets/img/ff15-640.webp 640w, /assets/img/ff15-1280.webp 1280w, /assets/img/ff15-1920.webp 1920w"
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
              <h3 className="typography-headline-3">Un projet ambitieux</h3>{" "}
              <div className="typography-paragraph text-content-secondary mt-sm md:mt-xl">
                <ul className="fcb-list">
                  <li>Des équipes dynamiques, adaptées à tous les niveaux.</li>
                  <li>
                    Un projet sportif ambitieux, basé sur le développement technique, l’engagement collectif et le
                    plaisir du jeu.
                  </li>
                  <li>Une vision inclusive, pour permettre aux filles de s’épanouir pleinement au sein du club.</li>
                </ul>
              </div>{" "}
            </div>{" "}
            <div className="aspect-3-2 md:clip-left relative order-first overflow-hidden opacity-0 animate-fade-in fcb-anim">
              <div className="relative aspect-3-2 h-full w-full overflow-hidden ">
                <div className="relative h-full w-full">
                  <div className="absolute flex h-full w-full items-center justify-center bg-background-secondary"></div>
                  <img
                    alt=""
                    className="fcb-cover"
                    src="/assets/img/ff-projet-436.webp"
                    srcSet="/assets/img/ff-projet-436.webp 436w"
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
          <div className="mb-lg lg:mb-16 gap-2xl pb-xl grid items-center md:grid-cols-2 md:gap-28 md:pb-0 container">
            {" "}
            <div className="flex flex-col md:order-first opacity-0 animate-slide-in-fade-up fcb-anim">
              {" "}
              <h3 className="typography-headline-3">La mixité, une valeur essentielle</h3>{" "}
              <div className="typography-paragraph text-content-secondary mt-sm md:mt-xl">
                <p className="typography-paragraph mb-4 md:mb-6 [&amp;:only-of-type]:mb-0 md:[&amp;:only-of-type]:mb-0 [&amp;:last-of-type]:mb-0 md:[&amp;:last-of-type]:mb-0">
                  Au FC Bussigny, nous croyons en la force de la mixité. Filles et garçons partagent les terrains, les
                  entraînements et les mêmes objectifs.
                </p>
                <p className="typography-paragraph mb-4 md:mb-6 [&amp;:only-of-type]:mb-0 md:[&amp;:only-of-type]:mb-0 [&amp;:last-of-type]:mb-0 md:[&amp;:last-of-type]:mb-0">
                  Cette approche favorise le respect, la solidarité et une ouverture d’esprit essentielle à la formation
                  de jeunes sportifs complets et équilibrés.
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
                    src="/assets/img/ff-mixite-438.webp"
                    srcSet="/assets/img/ff-mixite-438.webp 438w"
                    sizes="(min-width:64rem) 45vw, 100vw"
                    width="438"
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
              <h3 className="typography-headline-3">Rejoignez l’aventure</h3>{" "}
              <div className="typography-paragraph text-content-secondary mt-sm md:mt-xl">
                <p className="typography-paragraph mb-4 md:mb-6 [&amp;:only-of-type]:mb-0 md:[&amp;:only-of-type]:mb-0 [&amp;:last-of-type]:mb-0 md:[&amp;:last-of-type]:mb-0">
                  Que vous soyez débutante ou déjà expérimentée, notre club vous ouvre ses portes. Nous sommes fiers de
                  construire chaque jour un football plus accessible, plus inclusif et plus ambitieux.
                </p>
                <p className="typography-paragraph mb-4 md:mb-6 [&amp;:only-of-type]:mb-0 md:[&amp;:only-of-type]:mb-0 [&amp;:last-of-type]:mb-0 md:[&amp;:last-of-type]:mb-0">
                  Intéressée à nous rejoindre ou à en savoir plus ?
                </p>
              </div>{" "}
              <a
                className="typography-button-1 text-content-primary mt-sm md:mt-xl flex items-center"
                href="/contact/#inscription"
              >
                Contactez-nous
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
                  src="/assets/img/ff-rejoindre-640.webp"
                  srcSet="/assets/img/ff-rejoindre-640.webp 640w"
                  sizes="(min-width:64rem) 45vw, 100vw"
                  width="1080"
                  height="1080"
                  loading="lazy"
                  decoding="async"
                />
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
