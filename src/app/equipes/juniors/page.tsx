// Converti depuis fcbussigny-nouveau/equipes/juniors/index.html (structure identique) par build_bussigny_next.py
import type { Metadata } from "next";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import Sponsors from "@/components/Sponsors";
import Socials from "@/components/Socials";

export const metadata: Metadata = {
  title: { absolute: "Juniors | FC Bussigny" },
  description: "Juniors B à F et école de foot du FC Bussigny.",
  openGraph: {
    title: "Juniors | FC Bussigny",
    description: "Juniors B à F et école de foot du FC Bussigny.",
    type: "website",
  },
};

const PATH = "/equipes/juniors/";

export default function EquipesJuniorsPage() {
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
              src="/assets/img/bandeau-juniors-1600.webp"
              srcSet="/assets/img/bandeau-juniors-800.webp 800w, /assets/img/bandeau-juniors-1600.webp 1600w"
              sizes="100vw"
              width="1870"
              height="875"
              decoding="async"
              style={{ objectPosition: "center 40%" }}
            />
          </div>{" "}
          <div className="fcb-banner-shade"></div>{" "}
          <div className="gap-sm absolute inset-0 z-20 container mx-auto flex flex-col items-center justify-center text-center">
            {" "}
            <span className="typography-overline-1 fcb-kicker opacity-0 animate-fade-in fcb-anim">Formation</span>{" "}
            <h1 className="text-dark-content-primary typography-headline-1 flex flex-wrap justify-center gap-x-2 fcb-banner-title">
              <div className="flex overflow-y-hidden">
                <div className="animate-reveal-text-vertical inline-block fcb-anim" style={{ animationDelay: "120ms" }}>
                  Juniors
                </div>
              </div>
            </h1>{" "}
          </div>{" "}
        </div>
        <section className="module-rich-text-generic-advanced-block">
          <div className="mb-lg lg:mb-16 block container">
            <div className="richtext sm:mx-auto sm:max-w-[752px] lg:max-w-[1096px] opacity-0 animate-slide-in-fade-up fcb-anim">
              <strong className="font-bold">La formation au cœur du club.</strong> Le FC Bussigny compte environ 290
              juniors, dont des juniors féminines. De l’école de foot aux Juniors B, nos jeunes se forment dans un
              environnement propice à leur croissance, tant sportive qu’humaine.
              <p className="typography-paragraph mb-4 md:mb-6 [&amp;:only-of-type]:mb-0 md:[&amp;:only-of-type]:mb-0 [&amp;:last-of-type]:mb-0 md:[&amp;:last-of-type]:mb-0">
                Le FC Bussigny ne se limite pas seulement à l’action sur le terrain : le club est engagé dans le
                développement des jeunes talents, avec le soutien du Club des 200.
              </p>
            </div>
          </div>
        </section>
        <section className="container mb-2xl lg:mb-4xl">
          <div className="grid grid-cols-12 gap-x-md md:gap-2xl gap-y-2xl">
            {" "}
            <div
              id="juniors-b"
              className="col-span-12 md:col-span-6 lg:col-span-4 group relative flex flex-col opacity-0 animate-slide-in-fade-up fcb-anim"
              style={{ animationDelay: "calc(0 * 70ms)", scrollMarginTop: "90px" }}
            >
              {" "}
              <div className="clip-corner overflow-hidden fcb-hover-zoom">
                <div className="relative aspect-video overflow-hidden ">
                  <div className="relative h-full w-full">
                    <div className="absolute flex h-full w-full items-center justify-center bg-background-secondary"></div>
                    <img
                      alt=""
                      className="fcb-cover duration-medium-1 ease-standard scale-100 transition-all group-hover:scale-105"
                      src="/assets/img/junior-juniors-b-1280.webp"
                      srcSet="/assets/img/junior-juniors-b-640.webp 640w, /assets/img/junior-juniors-b-1280.webp 1280w"
                      sizes="(min-width:64rem) 30vw, 100vw"
                      width="1792"
                      height="839"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              </div>{" "}
              <div className="gap-sm pt-md flex items-center justify-between">
                {" "}
                <div>
                  <span className="typography-overline-2 block text-content-secondary">Juniors</span>
                  <h3 className="typography-title-4 mt-xs">Juniors B</h3>
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div
              id="juniors-c"
              className="col-span-12 md:col-span-6 lg:col-span-4 group relative flex flex-col opacity-0 animate-slide-in-fade-up fcb-anim"
              style={{ animationDelay: "calc(1 * 70ms)", scrollMarginTop: "90px" }}
            >
              {" "}
              <div className="clip-corner overflow-hidden fcb-hover-zoom">
                <div className="relative aspect-video overflow-hidden ">
                  <div className="relative h-full w-full">
                    <div className="absolute flex h-full w-full items-center justify-center bg-background-secondary"></div>
                    <img
                      alt=""
                      className="fcb-cover duration-medium-1 ease-standard scale-100 transition-all group-hover:scale-105"
                      src="/assets/img/junior-juniors-c-1280.webp"
                      srcSet="/assets/img/junior-juniors-c-640.webp 640w, /assets/img/junior-juniors-c-1280.webp 1280w"
                      sizes="(min-width:64rem) 30vw, 100vw"
                      width="1870"
                      height="875"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              </div>{" "}
              <div className="gap-sm pt-md flex items-center justify-between">
                {" "}
                <div>
                  <span className="typography-overline-2 block text-content-secondary">Juniors</span>
                  <h3 className="typography-title-4 mt-xs">Juniors C</h3>
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div
              id="juniors-d1"
              className="col-span-12 md:col-span-6 lg:col-span-4 group relative flex flex-col opacity-0 animate-slide-in-fade-up fcb-anim"
              style={{ animationDelay: "calc(2 * 70ms)", scrollMarginTop: "90px" }}
            >
              {" "}
              <div className="clip-corner overflow-hidden fcb-hover-zoom">
                <div className="relative aspect-video overflow-hidden fcb-junior-noimg ">
                  <img
                    alt=""
                    className=""
                    src="/assets/img/ecusson-480.webp"
                    srcSet="/assets/img/ecusson-480.webp 480w"
                    sizes="200px"
                    width="1073"
                    height="1330"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>{" "}
              <div className="gap-sm pt-md flex items-center justify-between">
                {" "}
                <div>
                  <span className="typography-overline-2 block text-content-secondary">Juniors</span>
                  <h3 className="typography-title-4 mt-xs">Juniors D1</h3>
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div
              id="juniors-d2"
              className="col-span-12 md:col-span-6 lg:col-span-4 group relative flex flex-col opacity-0 animate-slide-in-fade-up fcb-anim"
              style={{ animationDelay: "calc(0 * 70ms)", scrollMarginTop: "90px" }}
            >
              {" "}
              <div className="clip-corner overflow-hidden fcb-hover-zoom">
                <div className="relative aspect-video overflow-hidden ">
                  <div className="relative h-full w-full">
                    <div className="absolute flex h-full w-full items-center justify-center bg-background-secondary"></div>
                    <img
                      alt=""
                      className="fcb-cover duration-medium-1 ease-standard scale-100 transition-all group-hover:scale-105"
                      src="/assets/img/junior-juniors-d2-1280.webp"
                      srcSet="/assets/img/junior-juniors-d2-640.webp 640w, /assets/img/junior-juniors-d2-1280.webp 1280w"
                      sizes="(min-width:64rem) 30vw, 100vw"
                      width="1424"
                      height="667"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              </div>{" "}
              <div className="gap-sm pt-md flex items-center justify-between">
                {" "}
                <div>
                  <span className="typography-overline-2 block text-content-secondary">Juniors</span>
                  <h3 className="typography-title-4 mt-xs">Juniors D2</h3>
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div
              id="juniors-e1"
              className="col-span-12 md:col-span-6 lg:col-span-4 group relative flex flex-col opacity-0 animate-slide-in-fade-up fcb-anim"
              style={{ animationDelay: "calc(1 * 70ms)", scrollMarginTop: "90px" }}
            >
              {" "}
              <div className="clip-corner overflow-hidden fcb-hover-zoom">
                <div className="relative aspect-video overflow-hidden ">
                  <div className="relative h-full w-full">
                    <div className="absolute flex h-full w-full items-center justify-center bg-background-secondary"></div>
                    <img
                      alt=""
                      className="fcb-cover duration-medium-1 ease-standard scale-100 transition-all group-hover:scale-105"
                      src="/assets/img/junior-juniors-e1-640.webp"
                      srcSet="/assets/img/junior-juniors-e1-640.webp 640w"
                      sizes="(min-width:64rem) 30vw, 100vw"
                      width="1024"
                      height="479"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              </div>{" "}
              <div className="gap-sm pt-md flex items-center justify-between">
                {" "}
                <div>
                  <span className="typography-overline-2 block text-content-secondary">Juniors</span>
                  <h3 className="typography-title-4 mt-xs">Juniors E1</h3>
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div
              id="juniors-e2"
              className="col-span-12 md:col-span-6 lg:col-span-4 group relative flex flex-col opacity-0 animate-slide-in-fade-up fcb-anim"
              style={{ animationDelay: "calc(2 * 70ms)", scrollMarginTop: "90px" }}
            >
              {" "}
              <div className="clip-corner overflow-hidden fcb-hover-zoom">
                <div className="relative aspect-video overflow-hidden ">
                  <div className="relative h-full w-full">
                    <div className="absolute flex h-full w-full items-center justify-center bg-background-secondary"></div>
                    <img
                      alt=""
                      className="fcb-cover duration-medium-1 ease-standard scale-100 transition-all group-hover:scale-105"
                      src="/assets/img/junior-juniors-e2-1280.webp"
                      srcSet="/assets/img/junior-juniors-e2-640.webp 640w, /assets/img/junior-juniors-e2-1280.webp 1280w"
                      sizes="(min-width:64rem) 30vw, 100vw"
                      width="1534"
                      height="718"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              </div>{" "}
              <div className="gap-sm pt-md flex items-center justify-between">
                {" "}
                <div>
                  <span className="typography-overline-2 block text-content-secondary">Juniors</span>
                  <h3 className="typography-title-4 mt-xs">Juniors E2</h3>
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div
              id="juniors-f1"
              className="col-span-12 md:col-span-6 lg:col-span-4 group relative flex flex-col opacity-0 animate-slide-in-fade-up fcb-anim"
              style={{ animationDelay: "calc(0 * 70ms)", scrollMarginTop: "90px" }}
            >
              {" "}
              <div className="clip-corner overflow-hidden fcb-hover-zoom">
                <div className="relative aspect-video overflow-hidden ">
                  <div className="relative h-full w-full">
                    <div className="absolute flex h-full w-full items-center justify-center bg-background-secondary"></div>
                    <img
                      alt=""
                      className="fcb-cover duration-medium-1 ease-standard scale-100 transition-all group-hover:scale-105"
                      src="/assets/img/junior-juniors-f1-1280.webp"
                      srcSet="/assets/img/junior-juniors-f1-640.webp 640w, /assets/img/junior-juniors-f1-1280.webp 1280w"
                      sizes="(min-width:64rem) 30vw, 100vw"
                      width="1534"
                      height="718"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              </div>{" "}
              <div className="gap-sm pt-md flex items-center justify-between">
                {" "}
                <div>
                  <span className="typography-overline-2 block text-content-secondary">Juniors</span>
                  <h3 className="typography-title-4 mt-xs">Juniors F1</h3>
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div
              id="juniors-f2"
              className="col-span-12 md:col-span-6 lg:col-span-4 group relative flex flex-col opacity-0 animate-slide-in-fade-up fcb-anim"
              style={{ animationDelay: "calc(1 * 70ms)", scrollMarginTop: "90px" }}
            >
              {" "}
              <div className="clip-corner overflow-hidden fcb-hover-zoom">
                <div className="relative aspect-video overflow-hidden ">
                  <div className="relative h-full w-full">
                    <div className="absolute flex h-full w-full items-center justify-center bg-background-secondary"></div>
                    <img
                      alt=""
                      className="fcb-cover duration-medium-1 ease-standard scale-100 transition-all group-hover:scale-105"
                      src="/assets/img/junior-juniors-f2-1280.webp"
                      srcSet="/assets/img/junior-juniors-f2-640.webp 640w, /assets/img/junior-juniors-f2-1280.webp 1280w"
                      sizes="(min-width:64rem) 30vw, 100vw"
                      width="1374"
                      height="643"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              </div>{" "}
              <div className="gap-sm pt-md flex items-center justify-between">
                {" "}
                <div>
                  <span className="typography-overline-2 block text-content-secondary">Juniors</span>
                  <h3 className="typography-title-4 mt-xs">Juniors F2</h3>
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div
              id="juniors-f3"
              className="col-span-12 md:col-span-6 lg:col-span-4 group relative flex flex-col opacity-0 animate-slide-in-fade-up fcb-anim"
              style={{ animationDelay: "calc(2 * 70ms)", scrollMarginTop: "90px" }}
            >
              {" "}
              <div className="clip-corner overflow-hidden fcb-hover-zoom">
                <div className="relative aspect-video overflow-hidden fcb-junior-noimg ">
                  <img
                    alt=""
                    className=""
                    src="/assets/img/ecusson-480.webp"
                    srcSet="/assets/img/ecusson-480.webp 480w"
                    sizes="200px"
                    width="1073"
                    height="1330"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>{" "}
              <div className="gap-sm pt-md flex items-center justify-between">
                {" "}
                <div>
                  <span className="typography-overline-2 block text-content-secondary">Juniors</span>
                  <h3 className="typography-title-4 mt-xs">Juniors F3</h3>
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div
              id="ecole-de-foot"
              className="col-span-12 md:col-span-6 lg:col-span-4 group relative flex flex-col opacity-0 animate-slide-in-fade-up fcb-anim"
              style={{ animationDelay: "calc(0 * 70ms)", scrollMarginTop: "90px" }}
            >
              {" "}
              <div className="clip-corner overflow-hidden fcb-hover-zoom">
                <div className="relative aspect-video overflow-hidden fcb-junior-noimg alt">
                  <img
                    alt=""
                    className=""
                    src="/assets/img/ecusson-480.webp"
                    srcSet="/assets/img/ecusson-480.webp 480w"
                    sizes="200px"
                    width="1073"
                    height="1330"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>{" "}
              <div className="gap-sm pt-md flex items-center justify-between">
                {" "}
                <div>
                  <span className="typography-overline-2 block text-content-secondary">Juniors</span>
                  <h3 className="typography-title-4 mt-xs">École de foot</h3>
                </div>{" "}
              </div>{" "}
            </div>
          </div>
        </section>{" "}
        <section className="module-banner-block">
          <div className="mb-0 py-2xl md:py-4xl relative container">
            {" "}
            <div className="clip-corner relative mx-auto flex w-full flex-col items-center justify-center overflow-hidden md:min-h-[488px] md:flex-row fcb-yellow-bg">
              {" "}
              <img
                alt=""
                className="absolute inset-0 z-0 h-full w-full object-cover"
                src="/assets/img/banniere-stock_kids-438.webp"
                srcSet="/assets/img/banniere-stock_kids-438.webp 438w"
                sizes="100vw"
                width="438"
                height="355"
                loading="lazy"
                decoding="async"
                style={{ opacity: ".16", mixBlendMode: "multiply" }}
              />{" "}
              <div className="md:pl-3xl lg:pl-club-padding z-20 flex h-full w-full flex-col items-center justify-between px-4 md:flex-row">
                {" "}
                <div className="gap-xl flex w-full flex-col justify-center pt-8 md:max-w-100 md:pt-0 opacity-0 animate-slide-in-fade-up fcb-anim">
                  {" "}
                  <h3 className="typography-title-2">Journées tests</h3>{" "}
                  <p className="typography-body-3 md:pr-xl">
                    Nous organisons régulièrement des journées afin de sélectionner nos futurs joueurs et futures
                    joueuses juniors, toutes catégories.
                  </p>{" "}
                  <div className="flex flex-row gap-4">
                    <a
                      className="flex items-center justify-center duration-150 ease-in-out cursor-pointer typography-button-1 h-12 px-xl gap-sm fcb-btn fcb-btn-dark "
                      href="/content/journees-tests/"
                    >
                      En savoir plus
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
        <Sponsors />
        <Socials />{" "}
      </main>
      <Footer />
    </>
  );
}
