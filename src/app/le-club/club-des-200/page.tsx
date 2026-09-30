// Converti depuis fcbussigny-nouveau/le-club/club-des-200/index.html (structure identique) par build_bussigny_next.py
import type { Metadata } from "next";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import Sponsors from "@/components/Sponsors";
import Socials from "@/components/Socials";

export const metadata: Metadata = {
  title: { absolute: "Club des 200 | FC Bussigny" },
  description: "Le Club des 200 soutient les juniors du FC Bussigny.",
  openGraph: {
    title: "Club des 200 | FC Bussigny",
    description: "Le Club des 200 soutient les juniors du FC Bussigny.",
    type: "website",
  },
};

const PATH = "/le-club/club-des-200/";

export default function LeClubClubDes200Page() {
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
              src="/assets/img/bandeau-club-des-200-1600.webp"
              srcSet="/assets/img/bandeau-club-des-200-800.webp 800w, /assets/img/bandeau-club-des-200-1600.webp 1600w"
              sizes="100vw"
              width="1792"
              height="839"
              decoding="async"
              style={{ objectPosition: "center" }}
            />
          </div>{" "}
          <div className="fcb-banner-shade"></div>{" "}
          <div className="gap-sm absolute inset-0 z-20 container mx-auto flex flex-col items-center justify-center text-center">
            {" "}
            <span className="typography-overline-1 fcb-kicker opacity-0 animate-fade-in fcb-anim">
              Rejoignez-nous !
            </span>{" "}
            <h1 className="text-dark-content-primary typography-headline-1 flex flex-wrap justify-center gap-x-2 fcb-banner-title">
              <div className="flex overflow-y-hidden">
                <div className="animate-reveal-text-vertical inline-block fcb-anim" style={{ animationDelay: "120ms" }}>
                  Club
                </div>
              </div>
              <div className="flex overflow-y-hidden">
                <div className="animate-reveal-text-vertical inline-block fcb-anim" style={{ animationDelay: "165ms" }}>
                  des
                </div>
              </div>
              <div className="flex overflow-y-hidden">
                <div className="animate-reveal-text-vertical inline-block fcb-anim" style={{ animationDelay: "210ms" }}>
                  200
                </div>
              </div>
            </h1>{" "}
          </div>{" "}
        </div>{" "}
        <section className="module-hub-block" style={{ scrollMarginTop: "90px" }}>
          {" "}
          <div className="mb-lg lg:mb-16 gap-2xl pb-xl grid items-center md:grid-cols-2 md:gap-28 md:pb-0 container">
            {" "}
            <div className="flex flex-col md:order-first opacity-0 animate-slide-in-fade-up fcb-anim">
              {" "}
              <h3 className="typography-headline-3">Soutenir nos juniors</h3>{" "}
              <div className="typography-paragraph text-content-secondary mt-sm md:mt-xl">
                <p className="typography-paragraph mb-4 md:mb-6 [&amp;:only-of-type]:mb-0 md:[&amp;:only-of-type]:mb-0 [&amp;:last-of-type]:mb-0 md:[&amp;:last-of-type]:mb-0">
                  Le Club des 200 du FC Bussigny est une entité indépendante qui s’occupe de soutenir les juniors du
                  club dans leurs différents projets, par exemple :
                </p>
                <ul className="fcb-list">
                  <li>Achat de matériel d’entraînement</li>
                  <li>Achat d’équipements</li>
                  <li>Participation à un tournoi en Suisse ou à l’étranger</li>
                  <li>Noël des Juniors</li>
                </ul>
                <p className="typography-paragraph mb-4 md:mb-6 [&amp;:only-of-type]:mb-0 md:[&amp;:only-of-type]:mb-0 [&amp;:last-of-type]:mb-0 md:[&amp;:last-of-type]:mb-0">
                  Rejoignez le Club des 200 et participez activement à la vie du club !
                </p>
              </div>{" "}
            </div>{" "}
            <div className="aspect-3-2 md:clip-left relative order-first overflow-hidden opacity-0 animate-fade-in fcb-anim">
              <div className="relative aspect-3-2 h-full w-full overflow-hidden fcb-contain ">
                <img
                  alt=""
                  className="duration-medium-1 ease-standard scale-100 transition-all group-hover:scale-105"
                  src="/assets/img/c200-460.webp"
                  srcSet="/assets/img/c200-460.webp 460w"
                  sizes="(min-width:64rem) 45vw, 100vw"
                  width="460"
                  height="700"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>{" "}
          </div>{" "}
        </section>
        <section className="container mb-2xl lg:mb-4xl">
          <div className="overflow-hidden">
            <div className="gap-sm flex items-baseline opacity-0 animate-reveal-text-vertical fcb-anim">
              <h2 className="typography-headline-3 text-content-primary">Inscription</h2>
            </div>
          </div>
          <p className="typography-paragraph text-content-secondary mt-lg mb-2xl">
            Téléchargez les documents ci-dessous, puis transmettez votre fiche d’inscription par e-mail à{" "}
            <a className="fcb-link" href="mailto:info@fcbussigny.ch?subject=Club%20des%20200">
              info@fcbussigny.ch
            </a>
            .
          </p>
          <div className="grid gap-md md:grid-cols-2">
            <a className="fcb-doc" href="/docs/club-des-200-fiche-inscription.pdf" target="_blank" rel="noopener">
              <span className="fcb-doc-ico">PDF</span>
              <span className="typography-body-4-semibold">
                Fiche d’inscription<small>PDF · 299 Ko</small>
              </span>
              <span className="ml-auto">
                <svg aria-hidden="true" className="inline h-6 w-6">
                  <use href="/assets/icons.svg#chevron-right"></use>
                </svg>
              </span>
            </a>
            <a className="fcb-doc" href="/docs/club-des-200-bulletin-versement.pdf" target="_blank" rel="noopener">
              <span className="fcb-doc-ico">PDF</span>
              <span className="typography-body-4-semibold">
                Bulletin de versement<small>PDF · 356 Ko</small>
              </span>
              <span className="ml-auto">
                <svg aria-hidden="true" className="inline h-6 w-6">
                  <use href="/assets/icons.svg#chevron-right"></use>
                </svg>
              </span>
            </a>
            <a className="fcb-doc" href="/docs/club-des-200-statuts.pdf" target="_blank" rel="noopener">
              <span className="fcb-doc-ico">PDF</span>
              <span className="typography-body-4-semibold">
                Statuts du Club des 200<small>PDF · 491 Ko</small>
              </span>
              <span className="ml-auto">
                <svg aria-hidden="true" className="inline h-6 w-6">
                  <use href="/assets/icons.svg#chevron-right"></use>
                </svg>
              </span>
            </a>
          </div>
          <div className="mt-2xl">
            <a
              className="flex items-center justify-center duration-150 ease-in-out cursor-pointer bg-background-brand-jaune hover:bg-background-brand-jaune-hover typography-button-1 h-12 px-xl gap-sm fcb-btn "
              href="mailto:info@fcbussigny.ch?subject=Inscription%20Club%20des%20200"
            >
              Envoyer ma fiche par e-mail
              <svg aria-hidden="true" className="inline h-6 w-6">
                <use href="/assets/icons.svg#chevron-right"></use>
              </svg>
            </a>
          </div>
        </section>{" "}
        <Sponsors />
        <Socials />{" "}
      </main>
      <Footer />
    </>
  );
}
