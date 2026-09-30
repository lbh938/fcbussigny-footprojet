// Converti depuis fcbussigny-nouveau/partenaires/equipements/index.html (structure identique) par build_bussigny_next.py
import type { Metadata } from "next";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import Sponsors from "@/components/Sponsors";
import Socials from "@/components/Socials";

export const metadata: Metadata = {
  title: { absolute: "Équipements | FC Bussigny" },
  description: "S’équiper aux couleurs du FC Bussigny avec Décathlon.",
  openGraph: {
    title: "Équipements | FC Bussigny",
    description: "S’équiper aux couleurs du FC Bussigny avec Décathlon.",
    type: "website",
  },
};

const PATH = "/partenaires/equipements/";

export default function PartenairesEquipementsPage() {
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
              src="/assets/img/bandeau-quipements-436.webp"
              srcSet="/assets/img/bandeau-quipements-436.webp 436w"
              sizes="100vw"
              width="436"
              height="355"
              decoding="async"
              style={{ objectPosition: "center" }}
            />
          </div>{" "}
          <div className="fcb-banner-shade"></div>{" "}
          <div className="gap-sm absolute inset-0 z-20 container mx-auto flex flex-col items-center justify-center text-center">
            {" "}
            <span className="typography-overline-1 fcb-kicker opacity-0 animate-fade-in fcb-anim">
              Partenariat Décathlon
            </span>{" "}
            <h1 className="text-dark-content-primary typography-headline-1 flex flex-wrap justify-center gap-x-2 fcb-banner-title">
              <div className="flex overflow-y-hidden">
                <div className="animate-reveal-text-vertical inline-block fcb-anim" style={{ animationDelay: "120ms" }}>
                  Équipements
                </div>
              </div>
            </h1>{" "}
          </div>{" "}
        </div>
        <section className="module-rich-text-generic-advanced-block">
          <div className="mb-lg lg:mb-16 block container">
            <div className="richtext sm:mx-auto sm:max-w-[752px] lg:max-w-[1096px] opacity-0 animate-slide-in-fade-up fcb-anim">
              <strong className="font-bold">S’équiper aux couleurs du FC Bussigny.</strong> Lorsque joueurs et
              entraîneurs portent les mêmes couleurs et arborent le même emblème, cela renforce le sentiment
              d’appartenance à une véritable communauté.
              <p className="typography-paragraph mb-4 md:mb-6 [&amp;:only-of-type]:mb-0 md:[&amp;:only-of-type]:mb-0 [&amp;:last-of-type]:mb-0 md:[&amp;:last-of-type]:mb-0">
                Un partenariat avec <strong>Décathlon</strong> est actuellement en cours afin de vous apporter les
                meilleures offres en termes de rapport qualité-prix pour vous équiper aux couleurs du FC Bussigny.
              </p>
              <p className="typography-paragraph mb-4 md:mb-6 [&amp;:only-of-type]:mb-0 md:[&amp;:only-of-type]:mb-0 [&amp;:last-of-type]:mb-0 md:[&amp;:last-of-type]:mb-0">
                En attendant, veuillez contacter votre entraîneur ou{" "}
                <a className="fcb-link" href="mailto:info@fcbussigny.ch?subject=%C3%89quipements">
                  envoyer votre demande par e-mail
                </a>{" "}
                pour toute demande.
              </p>
            </div>
          </div>
        </section>
        <section className="container mb-2xl lg:mb-4xl">
          <div className="grid grid-cols-12 gap-md md:gap-2xl">
            {" "}
            <div
              className="col-span-6 md:col-span-3 opacity-0 animate-slide-in-fade-up fcb-anim"
              style={{ animationDelay: "calc(0 * 70ms)" }}
            >
              {" "}
              <div
                className="group clip-corner relative overflow-hidden aspect-[3/4] fcb-hover-zoom"
                style={{ aspectRatio: "3/4" }}
              >
                {" "}
                <img
                  alt="Juniors"
                  className="fcb-cover"
                  src="/assets/img/equipement-stock_kids-438.webp"
                  srcSet="/assets/img/equipement-stock_kids-438.webp 438w"
                  sizes="(min-width:64rem) 23vw, 50vw"
                  width="438"
                  height="355"
                  loading="lazy"
                  decoding="async"
                />{" "}
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background: "linear-gradient(0deg, rgb(var(--noir-profond)) 0%, rgba(var(--noir-profond), 0) 65%)",
                  }}
                ></div>{" "}
                <h3 className="typography-title-3 text-dark-content-primary absolute left-0 bottom-0 p-lg">
                  Juniors
                </h3>{" "}
              </div>{" "}
            </div>{" "}
            <div
              className="col-span-6 md:col-span-3 opacity-0 animate-slide-in-fade-up fcb-anim"
              style={{ animationDelay: "calc(1 * 70ms)" }}
            >
              {" "}
              <div
                className="group clip-corner relative overflow-hidden aspect-[3/4] fcb-hover-zoom"
                style={{ aspectRatio: "3/4" }}
              >
                {" "}
                <img
                  alt="Actifs"
                  className="fcb-cover"
                  src="/assets/img/equipement-stock_actifs-436.webp"
                  srcSet="/assets/img/equipement-stock_actifs-436.webp 436w"
                  sizes="(min-width:64rem) 23vw, 50vw"
                  width="436"
                  height="355"
                  loading="lazy"
                  decoding="async"
                />{" "}
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background: "linear-gradient(0deg, rgb(var(--noir-profond)) 0%, rgba(var(--noir-profond), 0) 65%)",
                  }}
                ></div>{" "}
                <h3 className="typography-title-3 text-dark-content-primary absolute left-0 bottom-0 p-lg">
                  Actifs
                </h3>{" "}
              </div>{" "}
            </div>{" "}
            <div
              className="col-span-6 md:col-span-3 opacity-0 animate-slide-in-fade-up fcb-anim"
              style={{ animationDelay: "calc(2 * 70ms)" }}
            >
              {" "}
              <div
                className="group clip-corner relative overflow-hidden aspect-[3/4] fcb-hover-zoom"
                style={{ aspectRatio: "3/4" }}
              >
                {" "}
                <img
                  alt="Entraîneur"
                  className="fcb-cover"
                  src="/assets/img/equipement-stock_coach-436.webp"
                  srcSet="/assets/img/equipement-stock_coach-436.webp 436w"
                  sizes="(min-width:64rem) 23vw, 50vw"
                  width="436"
                  height="355"
                  loading="lazy"
                  decoding="async"
                />{" "}
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background: "linear-gradient(0deg, rgb(var(--noir-profond)) 0%, rgba(var(--noir-profond), 0) 65%)",
                  }}
                ></div>{" "}
                <h3 className="typography-title-3 text-dark-content-primary absolute left-0 bottom-0 p-lg">
                  Entraîneur
                </h3>{" "}
              </div>{" "}
            </div>{" "}
            <div
              className="col-span-6 md:col-span-3 opacity-0 animate-slide-in-fade-up fcb-anim"
              style={{ animationDelay: "calc(3 * 70ms)" }}
            >
              {" "}
              <div
                className="group clip-corner relative overflow-hidden aspect-[3/4] fcb-hover-zoom"
                style={{ aspectRatio: "3/4" }}
              >
                {" "}
                <img
                  alt="Féminine"
                  className="fcb-cover"
                  src="/assets/img/equipement-stock_girl-436.webp"
                  srcSet="/assets/img/equipement-stock_girl-436.webp 436w"
                  sizes="(min-width:64rem) 23vw, 50vw"
                  width="436"
                  height="355"
                  loading="lazy"
                  decoding="async"
                />{" "}
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background: "linear-gradient(0deg, rgb(var(--noir-profond)) 0%, rgba(var(--noir-profond), 0) 65%)",
                  }}
                ></div>{" "}
                <h3 className="typography-title-3 text-dark-content-primary absolute left-0 bottom-0 p-lg">
                  Féminine
                </h3>{" "}
              </div>{" "}
            </div>
          </div>
          <div className="mt-2xl md:mt-3xl">
            <div className="grid gap-md md:grid-cols-2">
              <a className="fcb-doc" href="/docs/catalogue-decathlon-clubs.pdf" target="_blank" rel="noopener">
                <span className="fcb-doc-ico">PDF</span>
                <span className="typography-body-4-semibold">
                  Catalogue Décathlon – collection clubs<small>PDF · 25.3 Mo</small>
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
