// Converti depuis fcbussigny-nouveau/le-club/avantages-membres/index.html (structure identique) par build_bussigny_next.py
import type { Metadata } from "next";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import Sponsors from "@/components/Sponsors";
import Socials from "@/components/Socials";

export const metadata: Metadata = {
  title: { absolute: "Avantages membres | FC Bussigny" },
  description: "Les avantages de la carte de membre du FC Bussigny chez nos partenaires.",
  openGraph: {
    title: "Avantages membres | FC Bussigny",
    description: "Les avantages de la carte de membre du FC Bussigny chez nos partenaires.",
    type: "website",
  },
};

const PATH = "/le-club/avantages-membres/";

export default function LeClubAvantagesMembresPage() {
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
              src="/assets/img/bandeau-avantages-membres-1600.webp"
              srcSet="/assets/img/bandeau-avantages-membres-800.webp 800w, /assets/img/bandeau-avantages-membres-1600.webp 1600w"
              sizes="100vw"
              width="1920"
              height="498"
              decoding="async"
              style={{ objectPosition: "center" }}
            />
          </div>{" "}
          <div className="fcb-banner-shade"></div>{" "}
          <div className="gap-sm absolute inset-0 z-20 container mx-auto flex flex-col items-center justify-center text-center">
            {" "}
            <span className="typography-overline-1 fcb-kicker opacity-0 animate-fade-in fcb-anim">
              Carte de membre
            </span>{" "}
            <h1 className="text-dark-content-primary typography-headline-1 flex flex-wrap justify-center gap-x-2 fcb-banner-title">
              <div className="flex overflow-y-hidden">
                <div className="animate-reveal-text-vertical inline-block fcb-anim" style={{ animationDelay: "120ms" }}>
                  Avantages
                </div>
              </div>
              <div className="flex overflow-y-hidden">
                <div className="animate-reveal-text-vertical inline-block fcb-anim" style={{ animationDelay: "165ms" }}>
                  membres
                </div>
              </div>
            </h1>{" "}
          </div>{" "}
        </div>
        <section className="module-rich-text-generic-advanced-block">
          <div className="mb-lg lg:mb-16 block container">
            <div className="richtext sm:mx-auto sm:max-w-[752px] lg:max-w-[1096px] opacity-0 animate-slide-in-fade-up fcb-anim">
              <strong className="font-bold">
                Les avantages de la carte de membre du FC Bussigny auprès de nos sponsors.
              </strong>{" "}
              Présentez votre carte de membre chez nos partenaires et profitez de leurs offres exclusives.
            </div>
          </div>
        </section>
        <section className="container mb-2xl lg:mb-4xl">
          <div className="grid grid-cols-12 gap-md md:gap-2xl">
            {" "}
            <div
              className="col-span-12 md:col-span-4 opacity-0 animate-slide-in-fade-up fcb-anim"
              style={{ animationDelay: "calc(0 * 80ms)" }}
            >
              {" "}
              <div className="clip-corner fcb-perk h-full">
                {" "}
                <div className="fcb-perk-logo">
                  <img
                    alt="Carrosserie Niklaus SA"
                    className=""
                    src="/assets/img/avantage-logo_niklaus-480.webp"
                    srcSet="/assets/img/avantage-logo_niklaus-480.webp 480w"
                    sizes="300px"
                    width="660"
                    height="434"
                    loading="lazy"
                    decoding="async"
                  />
                </div>{" "}
                <div className="fcb-perk-offer typography-title-4">Voiture de prêt offerte + nettoyage gratuit</div>{" "}
                <div className="fcb-perk-body">
                  {" "}
                  <h3 className="typography-body-3-semibold">Carrosserie Niklaus SA</h3>{" "}
                  <p className="typography-body-5 text-content-secondary">
                    Pour chacune des réparations que vous effectuez à notre carrosserie sur votre véhicule, sur
                    présentation de votre carte de membre.
                  </p>{" "}
                  <address className="typography-body-5">
                    ZI du Moulin du Choc D<br />
                    1122 Romanel-sur-Morges
                    <br />
                    Tél.{" "}
                    <a className="fcb-link" href="tel:0218698103">
                      021 869 81 03
                    </a>
                  </address>{" "}
                  <a
                    className="typography-button-2 flex items-center gap-xs mt-auto"
                    href="https://www.carrosserie-niklaus.ch"
                    target="_blank"
                    rel="noopener"
                  >
                    Site web
                    <svg aria-hidden="true" className="inline h-4 w-4">
                      <use href="/assets/icons.svg#external-link"></use>
                    </svg>
                  </a>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div
              className="col-span-12 md:col-span-4 opacity-0 animate-slide-in-fade-up fcb-anim"
              style={{ animationDelay: "calc(1 * 80ms)" }}
            >
              {" "}
              <div className="clip-corner fcb-perk h-full">
                {" "}
                <div className="fcb-perk-logo">
                  <img
                    alt="Mérit’ta Coiffure &amp; Barbier"
                    className=""
                    src="/assets/img/avantage-logo_merita-480.webp"
                    srcSet="/assets/img/avantage-logo_merita-480.webp 480w"
                    sizes="300px"
                    width="699"
                    height="266"
                    loading="lazy"
                    decoding="async"
                  />
                </div>{" "}
                <div className="fcb-perk-offer typography-title-4">20% de rabais</div>{" "}
                <div className="fcb-perk-body">
                  {" "}
                  <h3 className="typography-body-3-semibold">Mérit’ta Coiffure &amp; Barbier</h3>{" "}
                  <p className="typography-body-5 text-content-secondary">
                    Pour chacune des coupes que vous effectuez à notre salon de coiffure, sur présentation de votre
                    carte de membre.
                  </p>{" "}
                  <address className="typography-body-5">
                    Rue de l’Industrie 3<br />
                    1030 Bussigny
                    <br />
                    Tél.{" "}
                    <a className="fcb-link" href="tel:0217030223">
                      021 703 02 23
                    </a>
                  </address>{" "}
                  <a
                    className="typography-button-2 flex items-center gap-xs mt-auto"
                    href="https://www.facebook.com/merittacoiffure"
                    target="_blank"
                    rel="noopener"
                  >
                    Site web
                    <svg aria-hidden="true" className="inline h-4 w-4">
                      <use href="/assets/icons.svg#external-link"></use>
                    </svg>
                  </a>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div
              className="col-span-12 md:col-span-4 opacity-0 animate-slide-in-fade-up fcb-anim"
              style={{ animationDelay: "calc(2 * 80ms)" }}
            >
              {" "}
              <div className="clip-corner fcb-perk h-full">
                {" "}
                <div className="fcb-perk-logo">
                  <img
                    alt="Vectur SA"
                    className=""
                    src="/assets/img/avantage-logo_vectur-210.webp"
                    srcSet="/assets/img/avantage-logo_vectur-210.webp 210w"
                    sizes="300px"
                    width="210"
                    height="42"
                    loading="lazy"
                    decoding="async"
                  />
                </div>{" "}
                <div className="fcb-perk-offer typography-title-4">5% de rabais sur toutes les prestations</div>{" "}
                <div className="fcb-perk-body">
                  {" "}
                  <h3 className="typography-body-3-semibold">Vectur SA</h3>{" "}
                  <p className="typography-body-5 text-content-secondary">
                    Pour chacune des prestations que vous effectuez, sur présentation de votre carte de membre.
                  </p>{" "}
                  <address className="typography-body-5">
                    Rue de l’Industrie 54
                    <br />
                    1030 Bussigny-près-Lausanne
                    <br />
                    Tél.{" "}
                    <a className="fcb-link" href="tel:0217022861">
                      021 702 28 61
                    </a>
                  </address>{" "}
                  <a
                    className="typography-button-2 flex items-center gap-xs mt-auto"
                    href="https://www.vectursa.ch"
                    target="_blank"
                    rel="noopener"
                  >
                    Site web
                    <svg aria-hidden="true" className="inline h-4 w-4">
                      <use href="/assets/icons.svg#external-link"></use>
                    </svg>
                  </a>{" "}
                </div>{" "}
              </div>{" "}
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
