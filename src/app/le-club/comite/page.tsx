// Converti depuis fcbussigny-nouveau/le-club/comite/index.html (structure identique) par build_bussigny_next.py
import type { Metadata } from "next";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import Sponsors from "@/components/Sponsors";
import Socials from "@/components/Socials";

export const metadata: Metadata = {
  title: { absolute: "Comité | FC Bussigny" },
  description: "Le comité du FC Bussigny et les documents officiels du club.",
  openGraph: {
    title: "Comité | FC Bussigny",
    description: "Le comité du FC Bussigny et les documents officiels du club.",
    type: "website",
  },
};

const PATH = "/le-club/comite/";

export default function LeClubComitePage() {
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
              src="/assets/img/bandeau-comit-1600.webp"
              srcSet="/assets/img/bandeau-comit-800.webp 800w, /assets/img/bandeau-comit-1600.webp 1600w"
              sizes="100vw"
              width="1760"
              height="410"
              decoding="async"
              style={{ objectPosition: "center" }}
            />
          </div>{" "}
          <div className="fcb-banner-shade"></div>{" "}
          <div className="gap-sm absolute inset-0 z-20 container mx-auto flex flex-col items-center justify-center text-center">
            {" "}
            <span className="typography-overline-1 fcb-kicker opacity-0 animate-fade-in fcb-anim">Le Club</span>{" "}
            <h1 className="text-dark-content-primary typography-headline-1 flex flex-wrap justify-center gap-x-2 fcb-banner-title">
              <div className="flex overflow-y-hidden">
                <div className="animate-reveal-text-vertical inline-block fcb-anim" style={{ animationDelay: "120ms" }}>
                  Comité
                </div>
              </div>
            </h1>{" "}
          </div>{" "}
        </div>
        <section className="container mb-2xl lg:mb-4xl">
          <div className="overflow-hidden">
            <div className="gap-sm flex items-baseline opacity-0 animate-reveal-text-vertical fcb-anim">
              <h2 className="typography-headline-3 text-content-primary">Le comité du FC Bussigny</h2>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-md md:gap-2xl mt-2xl">
            {" "}
            <div
              className="col-span-12 sm:col-span-6 lg:col-span-3 opacity-0 animate-slide-in-fade-up fcb-anim"
              style={{ animationDelay: "calc(0 * 80ms)" }}
            >
              {" "}
              <div className="clip-corner fcb-member">
                {" "}
                <img
                  alt=""
                  className="fcb-member-wm"
                  src="/assets/brand/ecusson-480.png"
                  loading="lazy"
                  width="385"
                  height="480"
                />{" "}
                <span className="fcb-initials">MP</span> <h3 className="typography-title-4">Mickaël Prince</h3>{" "}
                <ul>
                  <li>Président</li>
                  <li>Directeur technique adultes</li>
                  <li>Responsable matériel</li>
                </ul>{" "}
                <a
                  className="typography-button-2 mt-lg flex items-center gap-xs"
                  style={{ color: "var(--fcb-yellow)" }}
                  href="mailto:info@fcbussigny.ch?subject=À l’attention de Mickaël Prince"
                >
                  Contact
                  <svg aria-hidden="true" className="inline h-4 w-4">
                    <use href="/assets/icons.svg#chevron-right"></use>
                  </svg>
                </a>{" "}
              </div>{" "}
            </div>{" "}
            <div
              className="col-span-12 sm:col-span-6 lg:col-span-3 opacity-0 animate-slide-in-fade-up fcb-anim"
              style={{ animationDelay: "calc(1 * 80ms)" }}
            >
              {" "}
              <div className="clip-corner fcb-member">
                {" "}
                <img
                  alt=""
                  className="fcb-member-wm"
                  src="/assets/brand/ecusson-480.png"
                  loading="lazy"
                  width="385"
                  height="480"
                />{" "}
                <span className="fcb-initials">MG</span> <h3 className="typography-title-4">Martial Guillemer</h3>{" "}
                <ul>
                  <li>Vice-président</li>
                  <li>Directeur technique juniors</li>
                  <li>Responsable infrastructure</li>
                </ul>{" "}
                <a
                  className="typography-button-2 mt-lg flex items-center gap-xs"
                  style={{ color: "var(--fcb-yellow)" }}
                  href="mailto:info@fcbussigny.ch?subject=À l’attention de Martial Guillemer"
                >
                  Contact
                  <svg aria-hidden="true" className="inline h-4 w-4">
                    <use href="/assets/icons.svg#chevron-right"></use>
                  </svg>
                </a>{" "}
              </div>{" "}
            </div>{" "}
            <div
              className="col-span-12 sm:col-span-6 lg:col-span-3 opacity-0 animate-slide-in-fade-up fcb-anim"
              style={{ animationDelay: "calc(2 * 80ms)" }}
            >
              {" "}
              <div className="clip-corner fcb-member">
                {" "}
                <img
                  alt=""
                  className="fcb-member-wm"
                  src="/assets/brand/ecusson-480.png"
                  loading="lazy"
                  width="385"
                  height="480"
                />{" "}
                <span className="fcb-initials">LD</span> <h3 className="typography-title-4">Lucas Di Lallo</h3>{" "}
                <ul>
                  <li>Trésorier</li>
                  <li>Responsable discipline &amp; fair-play</li>
                  <li>Responsable buvette</li>
                </ul>{" "}
                <a
                  className="typography-button-2 mt-lg flex items-center gap-xs"
                  style={{ color: "var(--fcb-yellow)" }}
                  href="mailto:info@fcbussigny.ch?subject=À l’attention de Lucas Di Lallo"
                >
                  Contact
                  <svg aria-hidden="true" className="inline h-4 w-4">
                    <use href="/assets/icons.svg#chevron-right"></use>
                  </svg>
                </a>{" "}
              </div>{" "}
            </div>{" "}
            <div
              className="col-span-12 sm:col-span-6 lg:col-span-3 opacity-0 animate-slide-in-fade-up fcb-anim"
              style={{ animationDelay: "calc(3 * 80ms)" }}
            >
              {" "}
              <div className="clip-corner fcb-member">
                {" "}
                <img
                  alt=""
                  className="fcb-member-wm"
                  src="/assets/brand/ecusson-480.png"
                  loading="lazy"
                  width="385"
                  height="480"
                />{" "}
                <span className="fcb-initials">FB</span> <h3 className="typography-title-4">Fred Bédouet</h3>{" "}
                <ul>
                  <li>Sponsoring &amp; partenariat</li>
                  <li>Communication &amp; événements</li>
                </ul>{" "}
                <a
                  className="typography-button-2 mt-lg flex items-center gap-xs"
                  style={{ color: "var(--fcb-yellow)" }}
                  href="mailto:info@fcbussigny.ch?subject=À l’attention de Fred Bédouet"
                >
                  Contact
                  <svg aria-hidden="true" className="inline h-4 w-4">
                    <use href="/assets/icons.svg#chevron-right"></use>
                  </svg>
                </a>{" "}
              </div>{" "}
            </div>
          </div>
        </section>{" "}
        <section className="module-hub-block" style={{ scrollMarginTop: "90px" }}>
          {" "}
          <div className="mb-lg lg:mb-16 gap-2xl pb-xl grid items-center md:grid-cols-2 md:gap-28 md:pb-0 container">
            {" "}
            <div className="flex flex-col md:order-first opacity-0 animate-slide-in-fade-up fcb-anim">
              {" "}
              <h3 className="typography-headline-3">Postes à pourvoir : bénévoles</h3>{" "}
              <div className="typography-paragraph text-content-secondary mt-sm md:mt-xl">
                <p className="typography-paragraph mb-4 md:mb-6 [&amp;:only-of-type]:mb-0 md:[&amp;:only-of-type]:mb-0 [&amp;:last-of-type]:mb-0 md:[&amp;:last-of-type]:mb-0">
                  Pour toutes nos manifestations. Chaque saison, nous organisons plusieurs événements, repas, tournois,
                  etc.
                </p>
                <p className="typography-paragraph mb-4 md:mb-6 [&amp;:only-of-type]:mb-0 md:[&amp;:only-of-type]:mb-0 [&amp;:last-of-type]:mb-0 md:[&amp;:last-of-type]:mb-0">
                  Si vous souhaitez faire partie d’un comité d’organisation, apporter une aide spécifique ou tout
                  simplement aider selon les besoins, contactez-nous ! Nous nous ferons un plaisir de vous donner plus
                  d’informations.
                </p>
              </div>{" "}
              <a
                className="typography-button-1 text-content-primary mt-sm md:mt-xl flex items-center"
                href="/contact/#informations"
              >
                Contact
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
                    src="/assets/img/comite-benevoles-1280.webp"
                    srcSet="/assets/img/comite-benevoles-640.webp 640w, /assets/img/comite-benevoles-1280.webp 1280w"
                    sizes="(min-width:64rem) 45vw, 100vw"
                    width="1920"
                    height="560"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>{" "}
          </div>{" "}
        </section>
        <section className="container mb-2xl lg:mb-4xl" id="documents">
          <div className="overflow-hidden">
            <div className="gap-sm flex items-baseline opacity-0 animate-reveal-text-vertical fcb-anim">
              <h2 className="typography-headline-3 text-content-primary">Documents</h2>
            </div>
          </div>
          <div className="mt-2xl">
            <div className="grid gap-md md:grid-cols-2">
              <a className="fcb-doc" href="/docs/charte-fc-bussigny.pdf" target="_blank" rel="noopener">
                <span className="fcb-doc-ico">PDF</span>
                <span className="typography-body-4-semibold">
                  Charte du club<small>PDF · 130 Ko</small>
                </span>
                <span className="ml-auto">
                  <svg aria-hidden="true" className="inline h-6 w-6">
                    <use href="/assets/icons.svg#chevron-right"></use>
                  </svg>
                </span>
              </a>
              <a className="fcb-doc" href="/docs/statuts-fc-bussigny.pdf" target="_blank" rel="noopener">
                <span className="fcb-doc-ico">PDF</span>
                <span className="typography-body-4-semibold">
                  Statuts<small>PDF · 244 Ko</small>
                </span>
                <span className="ml-auto">
                  <svg aria-hidden="true" className="inline h-6 w-6">
                    <use href="/assets/icons.svg#chevron-right"></use>
                  </svg>
                </span>
              </a>
              <a className="fcb-doc" href="/docs/pv-assemblee-generale-2018.pdf" target="_blank" rel="noopener">
                <span className="fcb-doc-ico">PDF</span>
                <span className="typography-body-4-semibold">
                  PV AG 2018<small>PDF · 305 Ko</small>
                </span>
                <span className="ml-auto">
                  <svg aria-hidden="true" className="inline h-6 w-6">
                    <use href="/assets/icons.svg#chevron-right"></use>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </section>{" "}
        <Sponsors />
        <Socials />{" "}
      </main>
      <Footer />
    </>
  );
}
