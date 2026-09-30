// Converti depuis fcbussigny-nouveau/content/partenariat-decathlon/index.html (structure identique) par build_bussigny_next.py
import type { Metadata } from "next";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import Sponsors from "@/components/Sponsors";
import Socials from "@/components/Socials";

export const metadata: Metadata = {
  title: { absolute: "S’équiper aux couleurs du FC Bussigny avec Décathlon | FC Bussigny" },
  description:
    "Lorsque joueurs et entraîneurs portent les mêmes couleurs et arborent le même emblème, cela renforce le sentiment d’appartenance à une véritable communauté.",
  openGraph: {
    title: "S’équiper aux couleurs du FC Bussigny avec Décathlon | FC Bussigny",
    description:
      "Lorsque joueurs et entraîneurs portent les mêmes couleurs et arborent le même emblème, cela renforce le sentiment d’appartenance à une véritable communauté.",
    type: "website",
    images: ["/assets/img/article-partenariat-decathlon-436.webp"],
  },
};

const PATH = "/content/partenariat-decathlon/";

export default function ContentPartenariatDecathlonPage() {
  return (
    <>
      <Header path={PATH} />
      <Menu path={PATH} />
      <main id="contenu" className="relative z-10 min-h-dvh bg-background-primary">
        {" "}
        <div className="overflow-x-clip">
          <div className="container">
            {" "}
            <div className="pt-2xl lg:pt-4xl lg:gap-2xl grid grid-cols-1 gap-4 sm:gap-10 md:grid-cols-8 lg:grid-cols-12">
              {" "}
              <div className="col-span-1 md:col-span-5 lg:col-span-7">
                {" "}
                <div className="mb-2xl">
                  {" "}
                  <h1 className="typography-headline-1 mb-lg lg:pt-0 opacity-0 animate-slide-in-fade-up fcb-anim">
                    S’équiper aux couleurs du FC Bussigny avec Décathlon
                  </h1>{" "}
                  <div className="typography-overline-2 text-content-secondary gap-sm flex items-center">
                    <a className="uppercase hover:text-content-primary" href="/actualite/">
                      Partenaires
                    </a>
                  </div>{" "}
                </div>{" "}
                <div className="mb-2xl md:mb-3xl block md:hidden">
                  <div className="relative">
                    <div className="aspect-16-9 relative h-full w-full">
                      <img
                        alt="S’équiper aux couleurs du FC Bussigny avec Décathlon"
                        className="w-full object-cover fcb-cover"
                        src="/assets/img/article-partenariat-decathlon-436.webp"
                        srcSet="/assets/img/article-partenariat-decathlon-436.webp 436w"
                        sizes="(min-width:64rem) 40vw, 100vw"
                        width="436"
                        height="355"
                        decoding="async"
                      />
                    </div>
                  </div>
                </div>{" "}
                <div className="typography-paragraph-intro sm:mb-2xl mb-10">
                  Lorsque joueurs et entraîneurs portent les mêmes couleurs et arborent le même emblème, cela renforce
                  le sentiment d’appartenance à une véritable communauté.
                </div>{" "}
                <section className="module-rich-text-generic-advanced-block">
                  <div className="mb-lg lg:mb-16 block">
                    <div className="richtext">
                      <p className="typography-paragraph mb-4 md:mb-6 [&amp;:only-of-type]:mb-0 md:[&amp;:only-of-type]:mb-0 [&amp;:last-of-type]:mb-0 md:[&amp;:last-of-type]:mb-0">
                        Un partenariat avec <strong>Décathlon</strong> est en cours afin de vous apporter les meilleures
                        offres en termes de rapport qualité-prix pour vous équiper aux couleurs du FC Bussigny.
                      </p>
                      <p className="typography-paragraph mb-4 md:mb-6 [&amp;:only-of-type]:mb-0 md:[&amp;:only-of-type]:mb-0 [&amp;:last-of-type]:mb-0 md:[&amp;:last-of-type]:mb-0">
                        En attendant, veuillez contacter votre entraîneur ou envoyer votre demande par e-mail pour toute
                        demande d’équipement.
                      </p>
                      <div className="mt-2xl">
                        <a
                          className="flex items-center justify-center duration-150 ease-in-out cursor-pointer bg-background-brand-jaune hover:bg-background-brand-jaune-hover typography-button-1 h-12 px-xl gap-sm fcb-btn "
                          href="/partenaires/equipements/"
                        >
                          Voir les équipements
                          <svg aria-hidden="true" className="inline h-6 w-6">
                            <use href="/assets/icons.svg#chevron-right"></use>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </section>{" "}
              </div>{" "}
              <div className="lg:ml-2xl md:col-span-3 lg:col-span-5">
                {" "}
                <div className="sm:mb-3xl hidden md:block md:sticky" style={{ top: "90px" }}>
                  {" "}
                  <div className="relative opacity-0 animate-fade-in fcb-anim">
                    <div className="aspect-16-9 relative relative h-full w-full" style={{}}>
                      <img
                        alt="S’équiper aux couleurs du FC Bussigny avec Décathlon"
                        className="w-full object-cover fcb-cover"
                        src="/assets/img/article-partenariat-decathlon-436.webp"
                        srcSet="/assets/img/article-partenariat-decathlon-436.webp 436w"
                        sizes="(min-width:64rem) 40vw, 100vw"
                        width="436"
                        height="355"
                        decoding="async"
                      />
                    </div>
                  </div>{" "}
                  <div className="mb-2xl mt-2xl">
                    <hr className="mb-2xl border-border-secondary" />
                    <h3 className="typography-headline-3 pb-lg text-inherit">Dans cet article</h3>{" "}
                    <div className="pb-md mt-lg gap-sm flex flex-wrap text-content-primary">
                      <span className="typography-overline-1 p-sm flex-shrink-0 whitespace-nowrap bg-background-secondary">
                        Équipements
                      </span>
                      <span className="typography-overline-1 p-sm flex-shrink-0 whitespace-nowrap bg-background-secondary">
                        Décathlon
                      </span>
                    </div>
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>
        </div>{" "}
        <section className="module-content-carousel-block">
          <div className="overflow-hidden">
            <div className="py-2xl md:py-4xl container">
              {" "}
              <h2 className="typography-headline-3 mb-2xl text-content-primary">À lire aussi</h2>{" "}
              <div
                aria-roledescription="carousel"
                aria-label="À lire aussi"
                className="group/carousel relative"
                role="region"
                data-carousel=""
              >
                {" "}
                <div className="relative">
                  {" "}
                  <button
                    aria-label="Précédent"
                    className="disabled:text-content-disabled bg-background-secondary text-content-primary hover:bg-background-secondary-hover flex items-center justify-center absolute z-10 transition-opacity duration-300 ease-in-out h-12 w-12 cursor-pointer drop-shadow-carousel-nav fcb-car-btn top-1/2 -translate-y-1/2 left-0"
                    type="button"
                    data-prev=""
                  >
                    <svg aria-hidden="true" className="inline h-6 w-6">
                      <use href="/assets/icons.svg#chevron-left"></use>
                    </svg>
                  </button>{" "}
                  <button
                    aria-label="Suivant"
                    className="disabled:text-content-disabled bg-background-secondary text-content-primary hover:bg-background-secondary-hover flex items-center justify-center absolute z-10 transition-opacity duration-300 ease-in-out h-12 w-12 cursor-pointer drop-shadow-carousel-nav fcb-car-btn top-1/2 -translate-y-1/2 right-0"
                    type="button"
                    data-next=""
                  >
                    <svg aria-hidden="true" className="inline h-6 w-6">
                      <use href="/assets/icons.svg#chevron-right"></use>
                    </svg>
                  </button>{" "}
                  <div className="carousel-content fcb-bleed">
                    <div className="flex gap-md md:gap-2xl">
                      <div aria-roledescription="slide" className="min-w-0 shrink-0 grow-0" role="group">
                        {" "}
                        <div
                          className="group cursor-pointer relative flex flex-col text-content-primary w-[200px] md:w-[293px] opacity-0 animate-fade-in fcb-anim"
                          style={{ animationDelay: "calc(0 * 50ms)" }}
                        >
                          {" "}
                          <div className="relative aspect-video overflow-hidden fcb-contain ">
                            <img
                              alt=""
                              className="duration-medium-1 ease-standard scale-100 transition-all group-hover:scale-105"
                              src="/assets/img/actu-soiree-disco-2026-640.webp"
                              srcSet="/assets/img/actu-soiree-disco-2026-640.webp 640w"
                              sizes="(min-width:64rem) 293px, 200px"
                              width="948"
                              height="918"
                              loading="lazy"
                              decoding="async"
                            />
                          </div>{" "}
                          <div className="gap-sm pt-md flex flex-col">
                            {" "}
                            <div className="gap-xs flex h-5 items-center self-stretch">
                              <h3 className="typography-overline-2 block text-content-secondary">Événements</h3>
                            </div>{" "}
                            <a
                              className="static before:absolute before:inset-0 before:cursor-pointer typography-body-4-semibold gap-sm flex items-center"
                              href="/content/soiree-disco-2026/"
                            >
                              {" "}
                              <span className="[display:-webkit-box] overflow-hidden [-webkit-box-orient:vertical] [-webkit-line-clamp:3]">
                                Soirée Disco 2026 : retour sur la grande fête du FC Bussigny
                              </span>{" "}
                            </a>{" "}
                            <span className="typography-body-6 block text-content-secondary">7 mars 2026</span>{" "}
                          </div>{" "}
                        </div>
                      </div>
                      <div aria-roledescription="slide" className="min-w-0 shrink-0 grow-0" role="group">
                        {" "}
                        <div
                          className="group cursor-pointer relative flex flex-col text-content-primary w-[200px] md:w-[293px] opacity-0 animate-fade-in fcb-anim"
                          style={{ animationDelay: "calc(1 * 50ms)" }}
                        >
                          {" "}
                          <div className="relative aspect-video overflow-hidden fcb-contain ">
                            <img
                              alt=""
                              className="duration-medium-1 ease-standard scale-100 transition-all group-hover:scale-105"
                              src="/assets/img/actu-fondue-raclette-huitres-640.webp"
                              srcSet="/assets/img/actu-fondue-raclette-huitres-640.webp 640w"
                              sizes="(min-width:64rem) 293px, 200px"
                              width="1200"
                              height="1698"
                              loading="lazy"
                              decoding="async"
                            />
                          </div>{" "}
                          <div className="gap-sm pt-md flex flex-col">
                            {" "}
                            <div className="gap-xs flex h-5 items-center self-stretch">
                              <h3 className="typography-overline-2 block text-content-secondary">Terroir</h3>
                            </div>{" "}
                            <a
                              className="static before:absolute before:inset-0 before:cursor-pointer typography-body-4-semibold gap-sm flex items-center"
                              href="/content/fondue-raclette-huitres/"
                            >
                              {" "}
                              <span className="[display:-webkit-box] overflow-hidden [-webkit-box-orient:vertical] [-webkit-line-clamp:3]">
                                Fondue, raclette et huîtres : soutenez le FC Bussigny
                              </span>{" "}
                            </a>{" "}
                            <span className="typography-body-6 block text-content-secondary">
                              11 décembre 2025
                            </span>{" "}
                          </div>{" "}
                        </div>
                      </div>
                      <div aria-roledescription="slide" className="min-w-0 shrink-0 grow-0" role="group">
                        {" "}
                        <div
                          className="group cursor-pointer relative flex flex-col text-content-primary w-[200px] md:w-[293px] opacity-0 animate-fade-in fcb-anim"
                          style={{ animationDelay: "calc(2 * 50ms)" }}
                        >
                          {" "}
                          <div className="relative aspect-video overflow-hidden fcb-contain ">
                            <img
                              alt=""
                              className="duration-medium-1 ease-standard scale-100 transition-all group-hover:scale-105"
                              src="/assets/img/actu-la-fondue-du-coq-429.webp"
                              srcSet="/assets/img/actu-la-fondue-du-coq-429.webp 429w"
                              sizes="(min-width:64rem) 293px, 200px"
                              width="429"
                              height="522"
                              loading="lazy"
                              decoding="async"
                            />
                          </div>{" "}
                          <div className="gap-sm pt-md flex flex-col">
                            {" "}
                            <div className="gap-xs flex h-5 items-center self-stretch">
                              <h3 className="typography-overline-2 block text-content-secondary">Terroir</h3>
                            </div>{" "}
                            <a
                              className="static before:absolute before:inset-0 before:cursor-pointer typography-body-4-semibold gap-sm flex items-center"
                              href="/content/la-fondue-du-coq/"
                            >
                              {" "}
                              <span className="[display:-webkit-box] overflow-hidden [-webkit-box-orient:vertical] [-webkit-line-clamp:3]">
                                La Fondue du Coq : la fondue officielle du FC Bussigny
                              </span>{" "}
                            </a>{" "}
                          </div>{" "}
                        </div>
                      </div>
                      <div aria-roledescription="slide" className="min-w-0 shrink-0 grow-0" role="group">
                        {" "}
                        <div
                          className="group cursor-pointer relative flex flex-col text-content-primary w-[200px] md:w-[293px] opacity-0 animate-fade-in fcb-anim"
                          style={{ animationDelay: "calc(3 * 50ms)" }}
                        >
                          {" "}
                          <div className="relative aspect-video overflow-hidden fcb-contain ">
                            <img
                              alt=""
                              className="duration-medium-1 ease-standard scale-100 transition-all group-hover:scale-105"
                              src="/assets/img/actu-la-raclette-du-coq-554.webp"
                              srcSet="/assets/img/actu-la-raclette-du-coq-554.webp 554w"
                              sizes="(min-width:64rem) 293px, 200px"
                              width="554"
                              height="463"
                              loading="lazy"
                              decoding="async"
                            />
                          </div>{" "}
                          <div className="gap-sm pt-md flex flex-col">
                            {" "}
                            <div className="gap-xs flex h-5 items-center self-stretch">
                              <h3 className="typography-overline-2 block text-content-secondary">Terroir</h3>
                            </div>{" "}
                            <a
                              className="static before:absolute before:inset-0 before:cursor-pointer typography-body-4-semibold gap-sm flex items-center"
                              href="/content/la-raclette-du-coq/"
                            >
                              {" "}
                              <span className="[display:-webkit-box] overflow-hidden [-webkit-box-orient:vertical] [-webkit-line-clamp:3]">
                                La Raclette du Coq au Vacherin Fribourgeois AOP
                              </span>{" "}
                            </a>{" "}
                          </div>{" "}
                        </div>
                      </div>
                      <div aria-roledescription="slide" className="min-w-0 shrink-0 grow-0" role="group">
                        {" "}
                        <div
                          className="group cursor-pointer relative flex flex-col text-content-primary w-[200px] md:w-[293px] opacity-0 animate-fade-in fcb-anim"
                          style={{ animationDelay: "calc(4 * 50ms)" }}
                        >
                          {" "}
                          <div className="relative aspect-video overflow-hidden ">
                            <div className="relative h-full w-full">
                              <div className="absolute flex h-full w-full items-center justify-center bg-background-secondary"></div>
                              <img
                                alt=""
                                className="fcb-cover duration-medium-1 ease-standard scale-100 transition-all group-hover:scale-105"
                                src="/assets/img/actu-huitres-bretonnes-640.webp"
                                srcSet="/assets/img/actu-huitres-bretonnes-640.webp 640w"
                                sizes="(min-width:64rem) 293px, 200px"
                                width="672"
                                height="460"
                                loading="lazy"
                                decoding="async"
                              />
                            </div>
                          </div>{" "}
                          <div className="gap-sm pt-md flex flex-col">
                            {" "}
                            <div className="gap-xs flex h-5 items-center self-stretch">
                              <h3 className="typography-overline-2 block text-content-secondary">Terroir</h3>
                            </div>{" "}
                            <a
                              className="static before:absolute before:inset-0 before:cursor-pointer typography-body-4-semibold gap-sm flex items-center"
                              href="/content/huitres-bretonnes/"
                            >
                              {" "}
                              <span className="[display:-webkit-box] overflow-hidden [-webkit-box-orient:vertical] [-webkit-line-clamp:3]">
                                Des huîtres bretonnes fraîches pour soutenir le club
                              </span>{" "}
                            </a>{" "}
                          </div>{" "}
                        </div>
                      </div>
                      <div aria-roledescription="slide" className="min-w-0 shrink-0 grow-0" role="group">
                        {" "}
                        <div
                          className="group cursor-pointer relative flex flex-col text-content-primary w-[200px] md:w-[293px] opacity-0 animate-fade-in fcb-anim"
                          style={{ animationDelay: "calc(5 * 50ms)" }}
                        >
                          {" "}
                          <div className="relative aspect-video overflow-hidden ">
                            <div className="relative h-full w-full">
                              <div className="absolute flex h-full w-full items-center justify-center bg-background-secondary"></div>
                              <img
                                alt=""
                                className="fcb-cover duration-medium-1 ease-standard scale-100 transition-all group-hover:scale-105"
                                src="/assets/img/actu-journees-tests-436.webp"
                                srcSet="/assets/img/actu-journees-tests-436.webp 436w"
                                sizes="(min-width:64rem) 293px, 200px"
                                width="436"
                                height="355"
                                loading="lazy"
                                decoding="async"
                              />
                            </div>
                          </div>{" "}
                          <div className="gap-sm pt-md flex flex-col">
                            {" "}
                            <div className="gap-xs flex h-5 items-center self-stretch">
                              <h3 className="typography-overline-2 block text-content-secondary">Club</h3>
                            </div>{" "}
                            <a
                              className="static before:absolute before:inset-0 before:cursor-pointer typography-body-4-semibold gap-sm flex items-center"
                              href="/content/journees-tests/"
                            >
                              {" "}
                              <span className="[display:-webkit-box] overflow-hidden [-webkit-box-orient:vertical] [-webkit-line-clamp:3]">
                                Journées tests : futures joueuses et futurs joueurs
                              </span>{" "}
                            </a>{" "}
                          </div>{" "}
                        </div>
                      </div>
                      <div aria-roledescription="slide" className="min-w-0 shrink-0 grow-0" role="group">
                        {" "}
                        <div
                          className="group cursor-pointer relative flex flex-col text-content-primary w-[200px] md:w-[293px] opacity-0 animate-fade-in fcb-anim"
                          style={{ animationDelay: "calc(6 * 50ms)" }}
                        >
                          {" "}
                          <div className="relative aspect-video overflow-hidden fcb-contain ">
                            <img
                              alt=""
                              className="duration-medium-1 ease-standard scale-100 transition-all group-hover:scale-105"
                              src="/assets/img/actu-section-feminine-rejoins-notre-club-640.webp"
                              srcSet="/assets/img/actu-section-feminine-rejoins-notre-club-640.webp 640w"
                              sizes="(min-width:64rem) 293px, 200px"
                              width="1080"
                              height="1080"
                              loading="lazy"
                              decoding="async"
                            />
                          </div>{" "}
                          <div className="gap-sm pt-md flex flex-col">
                            {" "}
                            <div className="gap-xs flex h-5 items-center self-stretch">
                              <h3 className="typography-overline-2 block text-content-secondary">Féminin</h3>
                            </div>{" "}
                            <a
                              className="static before:absolute before:inset-0 before:cursor-pointer typography-body-4-semibold gap-sm flex items-center"
                              href="/content/section-feminine-rejoins-notre-club/"
                            >
                              {" "}
                              <span className="[display:-webkit-box] overflow-hidden [-webkit-box-orient:vertical] [-webkit-line-clamp:3]">
                                Le foot c’est aussi pour les filles : rejoins notre club !
                              </span>{" "}
                            </a>{" "}
                          </div>{" "}
                        </div>
                      </div>
                      <div aria-roledescription="slide" className="min-w-0 shrink-0 grow-0" role="group">
                        {" "}
                        <div
                          className="group cursor-pointer relative flex flex-col text-content-primary w-[200px] md:w-[293px] opacity-0 animate-fade-in fcb-anim"
                          style={{ animationDelay: "calc(7 * 50ms)" }}
                        >
                          {" "}
                          <div className="relative aspect-video overflow-hidden fcb-contain ">
                            <img
                              alt=""
                              className="duration-medium-1 ease-standard scale-100 transition-all group-hover:scale-105"
                              src="/assets/img/actu-club-des-200-460.webp"
                              srcSet="/assets/img/actu-club-des-200-460.webp 460w"
                              sizes="(min-width:64rem) 293px, 200px"
                              width="460"
                              height="700"
                              loading="lazy"
                              decoding="async"
                            />
                          </div>{" "}
                          <div className="gap-sm pt-md flex flex-col">
                            {" "}
                            <div className="gap-xs flex h-5 items-center self-stretch">
                              <h3 className="typography-overline-2 block text-content-secondary">Club</h3>
                            </div>{" "}
                            <a
                              className="static before:absolute before:inset-0 before:cursor-pointer typography-body-4-semibold gap-sm flex items-center"
                              href="/content/club-des-200/"
                            >
                              {" "}
                              <span className="[display:-webkit-box] overflow-hidden [-webkit-box-orient:vertical] [-webkit-line-clamp:3]">
                                Le Club des 200 soutient nos juniors : rejoignez-nous !
                              </span>{" "}
                            </a>{" "}
                          </div>{" "}
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                </div>{" "}
                <div className="relative h-1 w-24 self-center mt-2xl md:mt-3xl mx-auto bg-content-primary/10 fcb-progress-track">
                  {" "}
                  <div
                    aria-label="Progression du carrousel"
                    className="bg-content-primary absolute top-0 left-0 h-full fcb-progress"
                    role="progressbar"
                    style={{ width: "1rem", transform: "skew(-20deg)" }}
                  ></div>{" "}
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
