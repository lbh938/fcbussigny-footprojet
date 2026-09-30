// Converti depuis fcbussigny-nouveau/le-club/a-propos/index.html (structure identique) par build_bussigny_next.py
import type { Metadata } from "next";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import Sponsors from "@/components/Sponsors";
import Socials from "@/components/Socials";

export const metadata: Metadata = {
  title: { absolute: "À propos | FC Bussigny" },
  description: "Le Football-Club de Bussigny, fondé en 1945 : qui sommes-nous ?",
  openGraph: {
    title: "À propos | FC Bussigny",
    description: "Le Football-Club de Bussigny, fondé en 1945 : qui sommes-nous ?",
    type: "website",
  },
};

const PATH = "/le-club/a-propos/";

export default function LeClubAProposPage() {
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
              src="/assets/img/bandeau-propos-800.webp"
              srcSet="/assets/img/bandeau-propos-800.webp 800w"
              sizes="100vw"
              width="1066"
              height="674"
              decoding="async"
              style={{ objectPosition: "center" }}
            />
          </div>{" "}
          <div className="fcb-banner-shade"></div>{" "}
          <div className="gap-sm absolute inset-0 z-20 container mx-auto flex flex-col items-center justify-center text-center">
            {" "}
            <span className="typography-overline-1 fcb-kicker opacity-0 animate-fade-in fcb-anim">
              Qui sommes-nous ?
            </span>{" "}
            <h1 className="text-dark-content-primary typography-headline-1 flex flex-wrap justify-center gap-x-2 fcb-banner-title">
              <div className="flex overflow-y-hidden">
                <div className="animate-reveal-text-vertical inline-block fcb-anim" style={{ animationDelay: "120ms" }}>
                  À
                </div>
              </div>
              <div className="flex overflow-y-hidden">
                <div className="animate-reveal-text-vertical inline-block fcb-anim" style={{ animationDelay: "165ms" }}>
                  propos
                </div>
              </div>
            </h1>{" "}
          </div>{" "}
        </div>
        <section className="module-rich-text-generic-advanced-block">
          <div className="mb-lg lg:mb-16 block container">
            <div className="richtext sm:mx-auto sm:max-w-[752px] lg:max-w-[1096px] opacity-0 animate-slide-in-fade-up fcb-anim">
              <strong className="font-bold">
                Le Football Club de Bussigny incarne l’esprit du football local dans notre commune.
              </strong>{" "}
              Depuis sa fondation en 1945, le club a été le foyer de nombreux passionnés du ballon rond, unissant la
              communauté autour de leur amour pour le jeu.
            </div>
          </div>
        </section>
        <section className="bg-dark-background-primary mb-2xl lg:mb-4xl">
          <div className="container py-2xl md:py-4xl">
            <div className="fcb-stats opacity-0 animate-fade-in fcb-anim">
              <div className="fcb-stat">
                <b>1945</b>
                <span>Année de fondation</span>
              </div>
              <div className="fcb-stat">
                <b>290</b>
                <span>Juniors</span>
              </div>
              <div className="fcb-stat">
                <b>150+</b>
                <span>Actifs</span>
              </div>
              <div className="fcb-stat">
                <b>2</b>
                <span>Sites : les Isles et les Rueyres</span>
              </div>
            </div>
          </div>
        </section>{" "}
        <section className="module-hub-block" style={{ scrollMarginTop: "90px" }}>
          {" "}
          <div className="mb-lg lg:mb-16 gap-2xl pb-xl grid items-center md:grid-cols-2 md:gap-28 md:pb-0 container">
            {" "}
            <div className="flex flex-col md:order-first opacity-0 animate-slide-in-fade-up fcb-anim">
              {" "}
              <h3 className="typography-headline-3">Plus qu’un club</h3>{" "}
              <div className="typography-paragraph text-content-secondary mt-sm md:mt-xl">
                <p className="typography-paragraph mb-4 md:mb-6 [&amp;:only-of-type]:mb-0 md:[&amp;:only-of-type]:mb-0 [&amp;:last-of-type]:mb-0 md:[&amp;:last-of-type]:mb-0">
                  Le FC Bussigny ne se limite pas seulement à l’action sur le terrain. En plus de ses équipes
                  compétitives, le club est engagé dans le développement des jeunes talents, offrant un environnement
                  propice à leur croissance tant sportive qu’humaine.
                </p>
                <p className="typography-paragraph mb-4 md:mb-6 [&amp;:only-of-type]:mb-0 md:[&amp;:only-of-type]:mb-0 [&amp;:last-of-type]:mb-0 md:[&amp;:last-of-type]:mb-0">
                  Actuellement, le FC Bussigny regroupe une école de foot, plus de 20 équipes de juniors, 2 équipes de
                  féminines juniores et 4 équipes d’adultes actives.
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
                    src="/assets/img/apropos-club-1280.webp"
                    srcSet="/assets/img/apropos-club-640.webp 640w, /assets/img/apropos-club-1280.webp 1280w"
                    sizes="(min-width:64rem) 45vw, 100vw"
                    width="1534"
                    height="718"
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
              <h3 className="typography-headline-3">Une passion partagée</h3>{" "}
              <div className="typography-paragraph text-content-secondary mt-sm md:mt-xl">
                <p className="typography-paragraph mb-4 md:mb-6 [&amp;:only-of-type]:mb-0 md:[&amp;:only-of-type]:mb-0 [&amp;:last-of-type]:mb-0 md:[&amp;:last-of-type]:mb-0">
                  Chaque saison, les supporters se rassemblent pour encourager leurs équipes, créant une ambiance
                  électrique qui fait vibrer les terrains de foot de la commune et transcende les résultats du match.
                </p>
                <p className="typography-paragraph mb-4 md:mb-6 [&amp;:only-of-type]:mb-0 md:[&amp;:only-of-type]:mb-0 [&amp;:last-of-type]:mb-0 md:[&amp;:last-of-type]:mb-0">
                  Cette passion pour le football dépasse les limites du terrain, le club étant également impliqué dans
                  diverses activités communautaires, renforçant ainsi les liens entre les habitants de Bussigny.
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
                    src="/assets/img/apropos-passion-1280.webp"
                    srcSet="/assets/img/apropos-passion-640.webp 640w, /assets/img/apropos-passion-1280.webp 1280w"
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
                  « Le FC Bussigny est bien plus qu’un simple club de football. C’est un symbole de fierté pour la
                  région, un catalyseur de passion et d’unité, et un foyer pour tous ceux qui partagent la même passion
                  pour le beau jeu. »
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
        </section>{" "}
        <section className="module-hub-block" style={{ scrollMarginTop: "90px" }}>
          {" "}
          <div className="mb-0 gap-2xl pb-xl grid items-center md:grid-cols-2 md:gap-28 md:pb-0 container">
            {" "}
            <div className="flex flex-col md:order-first opacity-0 animate-slide-in-fade-up fcb-anim">
              {" "}
              <h3 className="typography-headline-3">Nous trouver</h3>{" "}
              <div className="typography-paragraph text-content-secondary mt-sm md:mt-xl">
                <p className="typography-paragraph mb-4 md:mb-6 [&amp;:only-of-type]:mb-0 md:[&amp;:only-of-type]:mb-0 [&amp;:last-of-type]:mb-0 md:[&amp;:last-of-type]:mb-0">
                  Nos équipes s’entraînent et jouent sur le <strong>terrain des Isles</strong> et au{" "}
                  <strong>complexe des Rueyres</strong>, à Bussigny.
                </p>
                <p className="typography-paragraph mb-4 md:mb-6 [&amp;:only-of-type]:mb-0 md:[&amp;:only-of-type]:mb-0 [&amp;:last-of-type]:mb-0 md:[&amp;:last-of-type]:mb-0">
                  FC Bussigny · Case Postale 45 · 1030 Bussigny ·{" "}
                  <a className="fcb-link" href="mailto:info@fcbussigny.ch">
                    info@fcbussigny.ch
                  </a>
                </p>
              </div>{" "}
              <a className="typography-button-1 text-content-primary mt-sm md:mt-xl flex items-center" href="/contact/">
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
                    src="/assets/img/apropos-trouver-1280.webp"
                    srcSet="/assets/img/apropos-trouver-640.webp 640w, /assets/img/apropos-trouver-1280.webp 1280w"
                    sizes="(min-width:64rem) 45vw, 100vw"
                    width="1459"
                    height="745"
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
