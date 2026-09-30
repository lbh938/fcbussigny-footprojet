// Converti depuis fcbussigny-nouveau/le-club/index.html (structure identique) par build_bussigny_next.py
import type { Metadata } from "next";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import Sponsors from "@/components/Sponsors";
import Socials from "@/components/Socials";

export const metadata: Metadata = {
  title: { absolute: "Le Club | FC Bussigny" },
  description: "Le FC Bussigny : à propos, comité, Club des 200 et avantages membres.",
  openGraph: {
    title: "Le Club | FC Bussigny",
    description: "Le FC Bussigny : à propos, comité, Club des 200 et avantages membres.",
    type: "website",
  },
};

const PATH = "/le-club/";

export default function LeClubPage() {
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
              src="/assets/img/bandeau-le-club-1600.webp"
              srcSet="/assets/img/bandeau-le-club-800.webp 800w, /assets/img/bandeau-le-club-1600.webp 1600w"
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
              Depuis 1945
            </span>{" "}
            <h1 className="text-dark-content-primary typography-headline-1 flex flex-wrap justify-center gap-x-2 fcb-banner-title">
              <div className="flex overflow-y-hidden">
                <div className="animate-reveal-text-vertical inline-block fcb-anim" style={{ animationDelay: "120ms" }}>
                  Le
                </div>
              </div>
              <div className="flex overflow-y-hidden">
                <div className="animate-reveal-text-vertical inline-block fcb-anim" style={{ animationDelay: "165ms" }}>
                  Club
                </div>
              </div>
            </h1>{" "}
          </div>{" "}
        </div>
        <section className="module-rich-text-generic-advanced-block">
          <div className="mb-lg lg:mb-16 block container">
            <div className="richtext sm:mx-auto sm:max-w-[752px] lg:max-w-[1096px] opacity-0 animate-slide-in-fade-up fcb-anim">
              <strong className="font-bold">Bienvenue dans l’univers du FC Bussigny.</strong> Découvrez les valeurs,
              l’organisation et les engagements qui façonnent l’identité de notre club. Du comité aux bénévoles, du Club
              des 200 à nos partenaires, plongez dans les coulisses du Football-Club de Bussigny.
            </div>
          </div>
        </section>{" "}
        <section className="module-hub-block" style={{ scrollMarginTop: "90px" }}>
          {" "}
          <div className="mb-lg lg:mb-16 gap-2xl pb-xl grid items-center md:grid-cols-2 md:gap-28 md:pb-0 container">
            {" "}
            <div className="flex flex-col md:order-first opacity-0 animate-slide-in-fade-up fcb-anim">
              {" "}
              <h3 className="typography-headline-3">À propos</h3>{" "}
              <div className="typography-paragraph text-content-secondary mt-sm md:mt-xl">
                <p className="typography-paragraph mb-4 md:mb-6 [&amp;:only-of-type]:mb-0 md:[&amp;:only-of-type]:mb-0 [&amp;:last-of-type]:mb-0 md:[&amp;:last-of-type]:mb-0">
                  Le Football Club de Bussigny incarne l’esprit du football local dans notre commune. Depuis sa
                  fondation en 1945, le club est le foyer de nombreux passionnés du ballon rond.
                </p>
              </div>{" "}
              <a
                className="typography-button-1 text-content-primary mt-sm md:mt-xl flex items-center"
                href="/le-club/a-propos/"
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
                    src="/assets/img/club-apropos-640.webp"
                    srcSet="/assets/img/club-apropos-640.webp 640w"
                    sizes="(min-width:64rem) 45vw, 100vw"
                    width="1066"
                    height="674"
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
              <h3 className="typography-headline-3">Comité</h3>{" "}
              <div className="typography-paragraph text-content-secondary mt-sm md:mt-xl">
                <p className="typography-paragraph mb-4 md:mb-6 [&amp;:only-of-type]:mb-0 md:[&amp;:only-of-type]:mb-0 [&amp;:last-of-type]:mb-0 md:[&amp;:last-of-type]:mb-0">
                  Présidence, direction technique, finances, sponsoring : découvrez celles et ceux qui font vivre le
                  club au quotidien.
                </p>
              </div>{" "}
              <a
                className="typography-button-1 text-content-primary mt-sm md:mt-xl flex items-center"
                href="/le-club/comite/"
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
                    src="/assets/img/club-comite-1280.webp"
                    srcSet="/assets/img/club-comite-640.webp 640w, /assets/img/club-comite-1280.webp 1280w"
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
        <section className="module-hub-block" style={{ scrollMarginTop: "90px" }}>
          {" "}
          <div className="mb-lg lg:mb-16 gap-2xl pb-xl grid items-center md:grid-cols-2 md:gap-28 md:pb-0 container">
            {" "}
            <div className="flex flex-col md:order-first opacity-0 animate-slide-in-fade-up fcb-anim">
              {" "}
              <h3 className="typography-headline-3">Club des 200</h3>{" "}
              <div className="typography-paragraph text-content-secondary mt-sm md:mt-xl">
                <p className="typography-paragraph mb-4 md:mb-6 [&amp;:only-of-type]:mb-0 md:[&amp;:only-of-type]:mb-0 [&amp;:last-of-type]:mb-0 md:[&amp;:last-of-type]:mb-0">
                  Une entité indépendante qui soutient les juniors du club dans leurs différents projets.
                </p>
              </div>{" "}
              <a
                className="typography-button-1 text-content-primary mt-sm md:mt-xl flex items-center"
                href="/le-club/club-des-200/"
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
                  src="/assets/img/club-200-460.webp"
                  srcSet="/assets/img/club-200-460.webp 460w"
                  sizes="(min-width:64rem) 45vw, 100vw"
                  width="460"
                  height="700"
                  loading="lazy"
                  decoding="async"
                />
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
              <h3 className="typography-headline-3">Avantages membres</h3>{" "}
              <div className="typography-paragraph text-content-secondary mt-sm md:mt-xl">
                <p className="typography-paragraph mb-4 md:mb-6 [&amp;:only-of-type]:mb-0 md:[&amp;:only-of-type]:mb-0 [&amp;:last-of-type]:mb-0 md:[&amp;:last-of-type]:mb-0">
                  Les avantages de la carte de membre du FC Bussigny auprès de nos sponsors.
                </p>
              </div>{" "}
              <a
                className="typography-button-1 text-content-primary mt-sm md:mt-xl flex items-center"
                href="/le-club/avantages-membres/"
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
                    src="/assets/img/club-avantages-1280.webp"
                    srcSet="/assets/img/club-avantages-640.webp 640w, /assets/img/club-avantages-1280.webp 1280w"
                    sizes="(min-width:64rem) 45vw, 100vw"
                    width="1920"
                    height="498"
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
