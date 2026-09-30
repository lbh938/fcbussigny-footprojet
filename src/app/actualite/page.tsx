// Converti depuis fcbussigny-nouveau/actualite/index.html (structure identique) par build_bussigny_next.py
import type { Metadata } from "next";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import Sponsors from "@/components/Sponsors";
import Socials from "@/components/Socials";

export const metadata: Metadata = {
  title: { absolute: "Actualités | FC Bussigny" },
  description: "Toute l’actualité du FC Bussigny : événements, vie du club, produits du terroir, section féminine.",
  openGraph: {
    title: "Actualités | FC Bussigny",
    description: "Toute l’actualité du FC Bussigny : événements, vie du club, produits du terroir, section féminine.",
    type: "website",
  },
};

const PATH = "/actualite/";

export default function ActualitePage() {
  return (
    <>
      <Header path={PATH} />
      <Menu path={PATH} />
      <main id="contenu" className="relative z-10 min-h-dvh bg-background-primary">
        {" "}
        <div className="pt-2xl md:pt-3xl container pb-2xl md:pb-4xl">
          {" "}
          <h1 className="typography-headline-1 text-content-primary mb-2xl md:mb-3xl flex flex-wrap gap-x-2">
            <div className="flex overflow-y-hidden">
              <div className="animate-reveal-text-vertical inline-block fcb-anim" style={{ animationDelay: "120ms" }}>
                Toute
              </div>
            </div>
            <div className="flex overflow-y-hidden">
              <div className="animate-reveal-text-vertical inline-block fcb-anim" style={{ animationDelay: "165ms" }}>
                l’actualité
              </div>
            </div>
          </h1>{" "}
          <div className="gap-sm py-xl flex flex-wrap md:pt-0 md:pb-3xl">
            <button
              className="typography-overline-1 flex shrink-0 cursor-pointer items-center justify-start transition-colors duration-200 p-sm duration-medium-1 hover:bg-background-secondary-selected hover:text-content-primary-inverse bg-background-secondary text-content-primary fcb-chip"
              type="button"
              data-filter="all"
              aria-pressed="true"
            >
              Toutes les actualités
            </button>
            <button
              className="typography-overline-1 flex shrink-0 cursor-pointer items-center justify-start transition-colors duration-200 p-sm duration-medium-1 hover:bg-background-secondary-selected hover:text-content-primary-inverse bg-background-secondary text-content-primary fcb-chip"
              type="button"
              data-filter="Événements"
              aria-pressed="false"
            >
              Événements
            </button>
            <button
              className="typography-overline-1 flex shrink-0 cursor-pointer items-center justify-start transition-colors duration-200 p-sm duration-medium-1 hover:bg-background-secondary-selected hover:text-content-primary-inverse bg-background-secondary text-content-primary fcb-chip"
              type="button"
              data-filter="Terroir"
              aria-pressed="false"
            >
              Terroir
            </button>
            <button
              className="typography-overline-1 flex shrink-0 cursor-pointer items-center justify-start transition-colors duration-200 p-sm duration-medium-1 hover:bg-background-secondary-selected hover:text-content-primary-inverse bg-background-secondary text-content-primary fcb-chip"
              type="button"
              data-filter="Club"
              aria-pressed="false"
            >
              Club
            </button>
            <button
              className="typography-overline-1 flex shrink-0 cursor-pointer items-center justify-start transition-colors duration-200 p-sm duration-medium-1 hover:bg-background-secondary-selected hover:text-content-primary-inverse bg-background-secondary text-content-primary fcb-chip"
              type="button"
              data-filter="Féminin"
              aria-pressed="false"
            >
              Féminin
            </button>
            <button
              className="typography-overline-1 flex shrink-0 cursor-pointer items-center justify-start transition-colors duration-200 p-sm duration-medium-1 hover:bg-background-secondary-selected hover:text-content-primary-inverse bg-background-secondary text-content-primary fcb-chip"
              type="button"
              data-filter="Partenaires"
              aria-pressed="false"
            >
              Partenaires
            </button>
          </div>{" "}
          <div className="gap-x-md md:gap-2xl gap-y-lg grid grid-cols-12" data-news-grid="">
            <div
              className="col-span-6 md:col-span-3 fcb-anim animate-fade-in opacity-0"
              data-cat="Événements"
              style={{ animationDelay: "calc(0 * 40ms)" }}
            >
              {" "}
              <div
                className="group cursor-pointer relative flex flex-col text-content-primary  "
                style={{ animationDelay: "calc(0 * 60ms)" }}
              >
                {" "}
                <div className="relative aspect-video overflow-hidden fcb-contain ">
                  <img
                    alt=""
                    className="duration-medium-1 ease-standard scale-100 transition-all group-hover:scale-105"
                    src="/assets/img/actu-soiree-disco-2026-640.webp"
                    srcSet="/assets/img/actu-soiree-disco-2026-640.webp 640w"
                    sizes="(min-width:64rem) 25vw, 50vw"
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
                  <time className="typography-body-6 block text-content-secondary" dateTime="2026-03-07">
                    7 mars 2026
                  </time>{" "}
                </div>{" "}
              </div>
            </div>
            <div
              className="col-span-6 md:col-span-3 fcb-anim animate-fade-in opacity-0"
              data-cat="Terroir"
              style={{ animationDelay: "calc(1 * 40ms)" }}
            >
              {" "}
              <div
                className="group cursor-pointer relative flex flex-col text-content-primary  "
                style={{ animationDelay: "calc(0 * 60ms)" }}
              >
                {" "}
                <div className="relative aspect-video overflow-hidden fcb-contain ">
                  <img
                    alt=""
                    className="duration-medium-1 ease-standard scale-100 transition-all group-hover:scale-105"
                    src="/assets/img/actu-fondue-raclette-huitres-640.webp"
                    srcSet="/assets/img/actu-fondue-raclette-huitres-640.webp 640w"
                    sizes="(min-width:64rem) 25vw, 50vw"
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
                  <time className="typography-body-6 block text-content-secondary" dateTime="2025-12-11">
                    11 décembre 2025
                  </time>{" "}
                </div>{" "}
              </div>
            </div>
            <div
              className="col-span-6 md:col-span-3 fcb-anim animate-fade-in opacity-0"
              data-cat="Terroir"
              style={{ animationDelay: "calc(2 * 40ms)" }}
            >
              {" "}
              <div
                className="group cursor-pointer relative flex flex-col text-content-primary  "
                style={{ animationDelay: "calc(0 * 60ms)" }}
              >
                {" "}
                <div className="relative aspect-video overflow-hidden fcb-contain ">
                  <img
                    alt=""
                    className="duration-medium-1 ease-standard scale-100 transition-all group-hover:scale-105"
                    src="/assets/img/actu-la-fondue-du-coq-429.webp"
                    srcSet="/assets/img/actu-la-fondue-du-coq-429.webp 429w"
                    sizes="(min-width:64rem) 25vw, 50vw"
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
            <div
              className="col-span-6 md:col-span-3 fcb-anim animate-fade-in opacity-0"
              data-cat="Terroir"
              style={{ animationDelay: "calc(3 * 40ms)" }}
            >
              {" "}
              <div
                className="group cursor-pointer relative flex flex-col text-content-primary  "
                style={{ animationDelay: "calc(0 * 60ms)" }}
              >
                {" "}
                <div className="relative aspect-video overflow-hidden fcb-contain ">
                  <img
                    alt=""
                    className="duration-medium-1 ease-standard scale-100 transition-all group-hover:scale-105"
                    src="/assets/img/actu-la-raclette-du-coq-554.webp"
                    srcSet="/assets/img/actu-la-raclette-du-coq-554.webp 554w"
                    sizes="(min-width:64rem) 25vw, 50vw"
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
            <div
              className="col-span-6 md:col-span-3 fcb-anim animate-fade-in opacity-0"
              data-cat="Terroir"
              style={{ animationDelay: "calc(4 * 40ms)" }}
            >
              {" "}
              <div
                className="group cursor-pointer relative flex flex-col text-content-primary  "
                style={{ animationDelay: "calc(0 * 60ms)" }}
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
                      sizes="(min-width:64rem) 25vw, 50vw"
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
            <div
              className="col-span-6 md:col-span-3 fcb-anim animate-fade-in opacity-0"
              data-cat="Club"
              style={{ animationDelay: "calc(5 * 40ms)" }}
            >
              {" "}
              <div
                className="group cursor-pointer relative flex flex-col text-content-primary  "
                style={{ animationDelay: "calc(0 * 60ms)" }}
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
                      sizes="(min-width:64rem) 25vw, 50vw"
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
            <div
              className="col-span-6 md:col-span-3 fcb-anim animate-fade-in opacity-0"
              data-cat="Féminin"
              style={{ animationDelay: "calc(6 * 40ms)" }}
            >
              {" "}
              <div
                className="group cursor-pointer relative flex flex-col text-content-primary  "
                style={{ animationDelay: "calc(0 * 60ms)" }}
              >
                {" "}
                <div className="relative aspect-video overflow-hidden fcb-contain ">
                  <img
                    alt=""
                    className="duration-medium-1 ease-standard scale-100 transition-all group-hover:scale-105"
                    src="/assets/img/actu-section-feminine-rejoins-notre-club-640.webp"
                    srcSet="/assets/img/actu-section-feminine-rejoins-notre-club-640.webp 640w"
                    sizes="(min-width:64rem) 25vw, 50vw"
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
            <div
              className="col-span-6 md:col-span-3 fcb-anim animate-fade-in opacity-0"
              data-cat="Partenaires"
              style={{ animationDelay: "calc(7 * 40ms)" }}
            >
              {" "}
              <div
                className="group cursor-pointer relative flex flex-col text-content-primary  "
                style={{ animationDelay: "calc(0 * 60ms)" }}
              >
                {" "}
                <div className="relative aspect-video overflow-hidden ">
                  <div className="relative h-full w-full">
                    <div className="absolute flex h-full w-full items-center justify-center bg-background-secondary"></div>
                    <img
                      alt=""
                      className="fcb-cover duration-medium-1 ease-standard scale-100 transition-all group-hover:scale-105"
                      src="/assets/img/actu-partenariat-decathlon-436.webp"
                      srcSet="/assets/img/actu-partenariat-decathlon-436.webp 436w"
                      sizes="(min-width:64rem) 25vw, 50vw"
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
                    <h3 className="typography-overline-2 block text-content-secondary">Partenaires</h3>
                  </div>{" "}
                  <a
                    className="static before:absolute before:inset-0 before:cursor-pointer typography-body-4-semibold gap-sm flex items-center"
                    href="/content/partenariat-decathlon/"
                  >
                    {" "}
                    <span className="[display:-webkit-box] overflow-hidden [-webkit-box-orient:vertical] [-webkit-line-clamp:3]">
                      S’équiper aux couleurs du FC Bussigny avec Décathlon
                    </span>{" "}
                  </a>{" "}
                </div>{" "}
              </div>
            </div>
            <div
              className="col-span-6 md:col-span-3 fcb-anim animate-fade-in opacity-0"
              data-cat="Club"
              style={{ animationDelay: "calc(8 * 40ms)" }}
            >
              {" "}
              <div
                className="group cursor-pointer relative flex flex-col text-content-primary  "
                style={{ animationDelay: "calc(0 * 60ms)" }}
              >
                {" "}
                <div className="relative aspect-video overflow-hidden fcb-contain ">
                  <img
                    alt=""
                    className="duration-medium-1 ease-standard scale-100 transition-all group-hover:scale-105"
                    src="/assets/img/actu-club-des-200-460.webp"
                    srcSet="/assets/img/actu-club-des-200-460.webp 460w"
                    sizes="(min-width:64rem) 25vw, 50vw"
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
          </div>{" "}
        </div>{" "}
        <Sponsors />
        <Socials />{" "}
      </main>
      <Footer />
    </>
  );
}
