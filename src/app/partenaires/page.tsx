// Converti depuis fcbussigny-nouveau/partenaires/index.html (structure identique) par build_bussigny_next.py
import type { Metadata } from "next";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import Sponsors from "@/components/Sponsors";
import Socials from "@/components/Socials";

export const metadata: Metadata = {
  title: { absolute: "Sponsoring | FC Bussigny" },
  description: "Sponsorisez le FC Bussigny et découvrez nos partenaires.",
  openGraph: {
    title: "Sponsoring | FC Bussigny",
    description: "Sponsorisez le FC Bussigny et découvrez nos partenaires.",
    type: "website",
  },
};

const PATH = "/partenaires/";

export default function PartenairesPage() {
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
              src="/assets/img/bandeau-sponsorisez-le-fc-bussigny-1600.webp"
              srcSet="/assets/img/bandeau-sponsorisez-le-fc-bussigny-800.webp 800w, /assets/img/bandeau-sponsorisez-le-fc-bussigny-1600.webp 1600w"
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
              Partenaires
            </span>{" "}
            <h1 className="text-dark-content-primary typography-headline-1 flex flex-wrap justify-center gap-x-2 fcb-banner-title">
              <div className="flex overflow-y-hidden">
                <div className="animate-reveal-text-vertical inline-block fcb-anim" style={{ animationDelay: "120ms" }}>
                  Sponsorisez
                </div>
              </div>
              <div className="flex overflow-y-hidden">
                <div className="animate-reveal-text-vertical inline-block fcb-anim" style={{ animationDelay: "165ms" }}>
                  le
                </div>
              </div>
              <div className="flex overflow-y-hidden">
                <div className="animate-reveal-text-vertical inline-block fcb-anim" style={{ animationDelay: "210ms" }}>
                  FC
                </div>
              </div>
              <div className="flex overflow-y-hidden">
                <div className="animate-reveal-text-vertical inline-block fcb-anim" style={{ animationDelay: "255ms" }}>
                  Bussigny
                </div>
              </div>
            </h1>{" "}
          </div>{" "}
        </div>
        <section className="module-rich-text-generic-advanced-block">
          <div className="mb-lg lg:mb-16 block container">
            <div className="richtext sm:mx-auto sm:max-w-[752px] lg:max-w-[1096px] opacity-0 animate-slide-in-fade-up fcb-anim">
              <strong className="font-bold">Depuis sa fondation en 1945</strong>, le Football Club de Bussigny s’engage
              à fournir annuellement les infrastructures et équipements essentiels à ses membres. Grâce à votre
              précieuse contribution, plus de 290 juniors et plus de 150 joueurs adultes peuvent pleinement vivre leur
              passion pour le football.
              <p className="typography-paragraph mb-4 md:mb-6 [&amp;:only-of-type]:mb-0 md:[&amp;:only-of-type]:mb-0 [&amp;:last-of-type]:mb-0 md:[&amp;:last-of-type]:mb-0">
                Au nom du club et de tous ses adhérents, nous exprimons notre profonde gratitude pour votre soutien
                continu !
              </p>
            </div>
          </div>
        </section>
        <section className="container mb-2xl lg:mb-4xl">
          <div className="overflow-hidden">
            <div className="gap-sm flex items-baseline opacity-0 animate-reveal-text-vertical fcb-anim">
              <h2 className="typography-headline-3 text-content-primary">Nos sponsors</h2>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-md md:gap-2xl mt-2xl">
            <div
              className="col-span-6 md:col-span-3 opacity-0 animate-fade-in fcb-anim"
              style={{ animationDelay: "calc(0 * 50ms)" }}
            >
              <div className="clip-corner fcb-partner">
                <img
                  alt="Garage P-A Keller"
                  className=""
                  src="/assets/img/partenaire-garage-p-a-keller-480.webp"
                  srcSet="/assets/img/partenaire-garage-p-a-keller-480.webp 480w"
                  sizes="240px"
                  width="588"
                  height="178"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <p className="typography-overline-2 text-content-secondary mt-sm">Garage P-A Keller</p>
            </div>
            <div
              className="col-span-6 md:col-span-3 opacity-0 animate-fade-in fcb-anim"
              style={{ animationDelay: "calc(1 * 50ms)" }}
            >
              <div className="clip-corner fcb-partner">
                <img
                  alt="Morina Toiture SA"
                  className=""
                  src="/assets/img/partenaire-morina-toiture-sa-480.webp"
                  srcSet="/assets/img/partenaire-morina-toiture-sa-480.webp 480w"
                  sizes="240px"
                  width="692"
                  height="76"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <p className="typography-overline-2 text-content-secondary mt-sm">Morina Toiture SA</p>
            </div>
            <div
              className="col-span-6 md:col-span-3 opacity-0 animate-fade-in fcb-anim"
              style={{ animationDelay: "calc(2 * 50ms)" }}
            >
              <div className="clip-corner fcb-partner">
                <img
                  alt="Groupe Sorge"
                  className=""
                  src="/assets/img/partenaire-groupe-sorge-424.webp"
                  srcSet="/assets/img/partenaire-groupe-sorge-424.webp 424w"
                  sizes="240px"
                  width="424"
                  height="140"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <p className="typography-overline-2 text-content-secondary mt-sm">Groupe Sorge</p>
            </div>
            <div
              className="col-span-6 md:col-span-3 opacity-0 animate-fade-in fcb-anim"
              style={{ animationDelay: "calc(3 * 50ms)" }}
            >
              <div className="clip-corner fcb-partner">
                <img
                  alt="Carrosserie Niklaus SA"
                  className=""
                  src="/assets/img/partenaire-carrosserie-niklaus-sa-480.webp"
                  srcSet="/assets/img/partenaire-carrosserie-niklaus-sa-480.webp 480w"
                  sizes="240px"
                  width="660"
                  height="434"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <p className="typography-overline-2 text-content-secondary mt-sm">Carrosserie Niklaus SA</p>
            </div>
            <div
              className="col-span-6 md:col-span-3 opacity-0 animate-fade-in fcb-anim"
              style={{ animationDelay: "calc(4 * 50ms)" }}
            >
              <div className="clip-corner fcb-partner">
                <img
                  alt="Mérit'ta Coiffure & Barbier"
                  className=""
                  src="/assets/img/partenaire-m-rit-ta-coiffure-barbier-480.webp"
                  srcSet="/assets/img/partenaire-m-rit-ta-coiffure-barbier-480.webp 480w"
                  sizes="240px"
                  width="699"
                  height="266"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <p className="typography-overline-2 text-content-secondary mt-sm">Mérit&#x27;ta Coiffure &amp; Barbier</p>
            </div>
            <div
              className="col-span-6 md:col-span-3 opacity-0 animate-fade-in fcb-anim"
              style={{ animationDelay: "calc(5 * 50ms)" }}
            >
              <div className="clip-corner fcb-partner">
                <img
                  alt="Vectur SA"
                  className=""
                  src="/assets/img/partenaire-vectur-sa-210.webp"
                  srcSet="/assets/img/partenaire-vectur-sa-210.webp 210w"
                  sizes="240px"
                  width="210"
                  height="42"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <p className="typography-overline-2 text-content-secondary mt-sm">Vectur SA</p>
            </div>
            <div
              className="col-span-6 md:col-span-3 opacity-0 animate-fade-in fcb-anim"
              style={{ animationDelay: "calc(6 * 50ms)" }}
            >
              <div className="clip-corner fcb-partner">
                <img
                  alt="LSL Concept"
                  className=""
                  src="/assets/img/partenaire-lsl-concept-480.webp"
                  srcSet="/assets/img/partenaire-lsl-concept-480.webp 480w"
                  sizes="240px"
                  width="2447"
                  height="337"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <p className="typography-overline-2 text-content-secondary mt-sm">LSL Concept</p>
            </div>
            <div
              className="col-span-6 md:col-span-3 opacity-0 animate-fade-in fcb-anim"
              style={{ animationDelay: "calc(7 * 50ms)" }}
            >
              <div className="clip-corner fcb-partner">
                <img
                  alt="Vacherin Fribourgeois"
                  className=""
                  src="/assets/img/partenaire-vacherin-fribourgeois-459.webp"
                  srcSet="/assets/img/partenaire-vacherin-fribourgeois-459.webp 459w"
                  sizes="240px"
                  width="459"
                  height="178"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <p className="typography-overline-2 text-content-secondary mt-sm">Vacherin Fribourgeois</p>
            </div>
          </div>
        </section>
        <div id="devenir-sponsor" style={{ scrollMarginTop: "80px" }}></div>{" "}
        <section className="module-banner-block">
          <div className="mb-0 py-2xl md:py-4xl relative container">
            {" "}
            <div className="clip-corner relative mx-auto flex w-full flex-col items-center justify-center overflow-hidden md:min-h-[488px] md:flex-row fcb-yellow-bg">
              {" "}
              <img
                alt=""
                className="absolute inset-0 z-0 h-full w-full object-cover"
                src="/assets/img/banniere-cheer-1280.webp"
                srcSet="/assets/img/banniere-cheer-1280.webp 1280w"
                sizes="100vw"
                width="1760"
                height="410"
                loading="lazy"
                decoding="async"
                style={{ opacity: ".16", mixBlendMode: "multiply" }}
              />{" "}
              <div className="md:pl-3xl lg:pl-club-padding z-20 flex h-full w-full flex-col items-center justify-between px-4 md:flex-row">
                {" "}
                <div className="gap-xl flex w-full flex-col justify-center pt-8 md:max-w-100 md:pt-0 opacity-0 animate-slide-in-fade-up fcb-anim">
                  {" "}
                  <h3 className="typography-title-2">Devenir sponsor</h3>{" "}
                  <p className="typography-body-3 md:pr-xl">
                    Associez votre entreprise à un club familial et formateur de la région. Visibilité, avantages pour
                    nos membres, événements : parlons-en !
                  </p>{" "}
                  <div className="flex flex-row gap-4">
                    <a
                      className="flex items-center justify-center duration-150 ease-in-out cursor-pointer typography-button-1 h-12 px-xl gap-sm fcb-btn fcb-btn-dark "
                      href="mailto:info@fcbussigny.ch?subject=Devenir%20sponsor%20du%20FC%20Bussigny"
                    >
                      Devenir sponsor
                      <svg aria-hidden="true" className="inline h-6 w-6">
                        <use href="/assets/icons.svg#chevron-right"></use>
                      </svg>
                    </a>
                  </div>{" "}
                </div>{" "}
                <div
                  className="md:right-3xl lg:right-5xl mt-11 md:absolute md:bottom-0 md:h-[90%] opacity-0 animate-slide-in-fade-up fcb-anim"
                  style={{ animationDelay: ".15s" }}
                >
                  {" "}
                  <img
                    alt=""
                    className="h-full w-full object-contain fcb-banner-players"
                    src="/assets/brand/ecusson-480.png"
                    width="385"
                    height="480"
                    loading="lazy"
                    style={{ maxHeight: "420px" }}
                  />{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>
        </section>{" "}
        <section className="module-hub-block" style={{ scrollMarginTop: "90px" }}>
          {" "}
          <div className="mb-0 gap-2xl pb-xl grid items-center md:grid-cols-2 md:gap-28 md:pb-0 container">
            {" "}
            <div className="flex flex-col md:order-first opacity-0 animate-slide-in-fade-up fcb-anim">
              {" "}
              <h3 className="typography-headline-3">Équipements</h3>{" "}
              <div className="typography-paragraph text-content-secondary mt-sm md:mt-xl">
                <p className="typography-paragraph mb-4 md:mb-6 [&amp;:only-of-type]:mb-0 md:[&amp;:only-of-type]:mb-0 [&amp;:last-of-type]:mb-0 md:[&amp;:last-of-type]:mb-0">
                  S’équiper aux couleurs du FC Bussigny : un partenariat est en cours avec Décathlon.
                </p>
              </div>{" "}
              <a
                className="typography-button-1 text-content-primary mt-sm md:mt-xl flex items-center"
                href="/partenaires/equipements/"
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
                    src="/assets/img/part-equip-436.webp"
                    srcSet="/assets/img/part-equip-436.webp 436w"
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
        </section>
        <div className="h-2xl md:h-4xl"></div> <Sponsors />
        <Socials />{" "}
      </main>
      <Footer />
    </>
  );
}
