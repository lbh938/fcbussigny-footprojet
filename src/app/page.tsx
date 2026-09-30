// Converti depuis fcbussigny-nouveau/index.html (structure identique) par build_bussigny_next.py
import type { Metadata } from "next";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import Sponsors from "@/components/Sponsors";
import Socials from "@/components/Socials";

export const metadata: Metadata = {
  title: { absolute: "FC Bussigny | Site officiel du Football-Club de Bussigny" },
  description:
    "Site officiel du FC Bussigny, club de football fondé en 1945 à Bussigny : équipes, actualités, événements et vie du club.",
  openGraph: {
    title: "FC Bussigny | Site officiel du Football-Club de Bussigny",
    description:
      "Site officiel du FC Bussigny, club de football fondé en 1945 à Bussigny : équipes, actualités, événements et vie du club.",
    type: "website",
    images: ["/assets/img/hero-actifs-1-1600.webp"],
  },
};

const PATH = "/";

export default function HomePage() {
  return (
    <>
      <Header path={PATH} home />
      <Menu path={PATH} />
      <main id="contenu" className="relative z-10 min-h-dvh bg-background-primary">
        {" "}
        <section className="module-homepage-hero bg-dark-background-primary flex flex-col justify-end overflow-hidden">
          {" "}
          <div className="2xl:aspect-hero-desktop relative flex min-h-[31.5rem] overflow-hidden sm:min-h-[45.9375rem]">
            {" "}
            <div className="hero-image animate-hero-image aspect-hero-mobile absolute inset-0 block h-full w-full lg:hidden">
              {" "}
              <img
                alt="Équipe des Actifs du FC Bussigny"
                className="h-full w-full object-cover object-top fcb-cover"
                src="/assets/img/hero-actifs-1-mobile-1280.webp"
                srcSet="/assets/img/hero-actifs-1-mobile-800.webp 800w, /assets/img/hero-actifs-1-mobile-1280.webp 1280w"
                sizes="100vw"
                width="1960"
                height="918"
                decoding="async"
              />{" "}
            </div>{" "}
            <div className="hero-image animate-hero-image aspect-hero-desktop absolute inset-0 hidden h-full w-full lg:block">
              {" "}
              <img
                alt="Actifs 1 du FC Bussigny"
                className="h-full w-full object-cover fcb-cover"
                src="/assets/img/hero-actifs-1-1600.webp"
                srcSet="/assets/img/hero-actifs-1-960.webp 960w, /assets/img/hero-actifs-1-1600.webp 1600w"
                sizes="100vw"
                width="1960"
                height="800"
                decoding="async"
                style={{ objectPosition: "center 35%" }}
              />{" "}
            </div>{" "}
            <div className="homepageHero-gradient relative flex-1">
              {" "}
              <div className="pb-2xl lg:pb-club-padding col-span-8 container grid h-full grid-cols-12 items-end">
                {" "}
                <div className="text-content-primary-inverse group col-span-12 md:col-span-8 lg:col-span-7">
                  {" "}
                  <div className="group relative cursor-pointer">
                    {" "}
                    <span className="typography-overline-1 fcb-kicker mb-lg opacity-0 animate-fade-in fcb-anim">
                      Football-Club de Bussigny · depuis 1945
                    </span>{" "}
                    <a
                      className="static before:absolute before:inset-0 before:cursor-pointer"
                      href="/le-club/a-propos/"
                    >
                      {" "}
                      <h1 className="flex max-w-[calc(100vw-var(--spacing-2xl))] flex-wrap gap-x-2 typography-headline-1-hero mb-xl mt-lg">
                        <div className="flex overflow-y-hidden">
                          <div
                            className="animate-reveal-text-vertical inline-block fcb-anim"
                            style={{ animationDelay: "120ms" }}
                          >
                            Bienvenue
                          </div>
                        </div>
                        <div className="flex overflow-y-hidden">
                          <div
                            className="animate-reveal-text-vertical inline-block fcb-anim"
                            style={{ animationDelay: "165ms" }}
                          >
                            sur
                          </div>
                        </div>
                        <div className="flex overflow-y-hidden">
                          <div
                            className="animate-reveal-text-vertical inline-block fcb-anim"
                            style={{ animationDelay: "210ms" }}
                          >
                            le
                          </div>
                        </div>
                        <div className="flex overflow-y-hidden">
                          <div
                            className="animate-reveal-text-vertical inline-block fcb-anim"
                            style={{ animationDelay: "255ms" }}
                          >
                            site
                          </div>
                        </div>
                        <div className="flex overflow-y-hidden">
                          <div
                            className="animate-reveal-text-vertical inline-block fcb-anim"
                            style={{ animationDelay: "300ms" }}
                          >
                            officiel
                          </div>
                        </div>
                        <div className="flex overflow-y-hidden">
                          <div
                            className="animate-reveal-text-vertical inline-block fcb-anim"
                            style={{ animationDelay: "345ms" }}
                          >
                            du
                          </div>
                        </div>
                        <div className="flex overflow-y-hidden">
                          <div
                            className="animate-reveal-text-vertical inline-block fcb-anim"
                            style={{ animationDelay: "390ms" }}
                          >
                            FC
                          </div>
                        </div>
                        <div className="flex overflow-y-hidden">
                          <div
                            className="animate-reveal-text-vertical inline-block fcb-anim"
                            style={{ animationDelay: "435ms" }}
                          >
                            Bussigny
                          </div>
                        </div>
                      </h1>{" "}
                      <div className="typography-button-1 text-dark-content-secondary group-hover:text-dark-content-primary gap-xs duration-medium-3 flex items-center leading-none transition-colors">
                        <span>Découvrir le club</span>
                        <svg aria-hidden="true" className="block h-4 w-4">
                          <use href="/assets/icons.svg#chevron-right"></use>
                        </svg>
                      </div>{" "}
                    </a>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="bg-dark-background-primary relative flex min-h-[20.875rem] md:min-h-[21.375rem] overflow-hidden">
            {" "}
            <div className="py-xl container">
              {" "}
              <h2 className="typography-headline-3 text-content-primary-inverse relative mb-10">Nos équipes</h2>{" "}
              <div
                aria-roledescription="carousel"
                aria-label="Nos équipes"
                className="group/carousel relative fcb-dark"
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
                          className="opacity-0 animate-slide-in-fade-left fcb-anim"
                          style={{ animationDelay: "calc(0 * 70ms)" }}
                        >
                          {" "}
                          <div className="group relative cursor-pointer">
                            {" "}
                            <div className="clip-corner duration-medium-1 p-lg lg:p-xl relative flex w-[220px] flex-col overflow-hidden md:w-[293px] fcb-teamcard">
                              {" "}
                              <img
                                alt=""
                                className="fcb-wm"
                                src="/assets/brand/ecusson-192.png"
                                width="154"
                                height="192"
                                loading="lazy"
                              />{" "}
                              <div className="gap-lg flex h-full flex-col justify-between">
                                {" "}
                                <div className="typography-overline-2 gap-sm flex items-center">
                                  {" "}
                                  <span className="px-xs pt-0.75 pb-0.5 uppercase fcb-tag">Actifs</span>{" "}
                                  <span className="mt-0.5 leading-none">4e ligue</span>{" "}
                                </div>{" "}
                                <div className="gap-lg flex flex-col">
                                  {" "}
                                  <a
                                    className="static before:absolute before:inset-0 before:cursor-pointer typography-title-4 relative flex h-8 items-center leading-none"
                                    href="/equipes/actifs-1/"
                                  >
                                    Actifs 1
                                  </a>{" "}
                                  <div className="typography-button-2 flex items-center gap-xs">
                                    Voir l’équipe{" "}
                                    <svg aria-hidden="true" className="inline h-4 w-4">
                                      <use href="/assets/icons.svg#chevron-right"></use>
                                    </svg>
                                  </div>{" "}
                                </div>{" "}
                              </div>{" "}
                            </div>{" "}
                          </div>{" "}
                        </div>
                      </div>
                      <div aria-roledescription="slide" className="min-w-0 shrink-0 grow-0" role="group">
                        {" "}
                        <div
                          className="opacity-0 animate-slide-in-fade-left fcb-anim"
                          style={{ animationDelay: "calc(1 * 70ms)" }}
                        >
                          {" "}
                          <div className="group relative cursor-pointer">
                            {" "}
                            <div className="clip-corner duration-medium-1 p-lg lg:p-xl relative flex w-[220px] flex-col overflow-hidden md:w-[293px] fcb-teamcard">
                              {" "}
                              <img
                                alt=""
                                className="fcb-wm"
                                src="/assets/brand/ecusson-192.png"
                                width="154"
                                height="192"
                                loading="lazy"
                              />{" "}
                              <div className="gap-lg flex h-full flex-col justify-between">
                                {" "}
                                <div className="typography-overline-2 gap-sm flex items-center">
                                  {" "}
                                  <span className="px-xs pt-0.75 pb-0.5 uppercase fcb-tag">Actifs</span>{" "}
                                  <span className="mt-0.5 leading-none">5e ligue</span>{" "}
                                </div>{" "}
                                <div className="gap-lg flex flex-col">
                                  {" "}
                                  <a
                                    className="static before:absolute before:inset-0 before:cursor-pointer typography-title-4 relative flex h-8 items-center leading-none"
                                    href="/equipes/actifs-2/"
                                  >
                                    Actifs 2
                                  </a>{" "}
                                  <div className="typography-button-2 flex items-center gap-xs">
                                    Voir l’équipe{" "}
                                    <svg aria-hidden="true" className="inline h-4 w-4">
                                      <use href="/assets/icons.svg#chevron-right"></use>
                                    </svg>
                                  </div>{" "}
                                </div>{" "}
                              </div>{" "}
                            </div>{" "}
                          </div>{" "}
                        </div>
                      </div>
                      <div aria-roledescription="slide" className="min-w-0 shrink-0 grow-0" role="group">
                        {" "}
                        <div
                          className="opacity-0 animate-slide-in-fade-left fcb-anim"
                          style={{ animationDelay: "calc(2 * 70ms)" }}
                        >
                          {" "}
                          <div className="group relative cursor-pointer">
                            {" "}
                            <div className="clip-corner duration-medium-1 p-lg lg:p-xl relative flex w-[220px] flex-col overflow-hidden md:w-[293px] fcb-teamcard">
                              {" "}
                              <img
                                alt=""
                                className="fcb-wm"
                                src="/assets/brand/ecusson-192.png"
                                width="154"
                                height="192"
                                loading="lazy"
                              />{" "}
                              <div className="gap-lg flex h-full flex-col justify-between">
                                {" "}
                                <div className="typography-overline-2 gap-sm flex items-center">
                                  {" "}
                                  <span className="px-xs pt-0.75 pb-0.5 uppercase fcb-tag">Actifs</span>{" "}
                                  <span className="mt-0.5 leading-none">Actifs</span>{" "}
                                </div>{" "}
                                <div className="gap-lg flex flex-col">
                                  {" "}
                                  <a
                                    className="static before:absolute before:inset-0 before:cursor-pointer typography-title-4 relative flex h-8 items-center leading-none"
                                    href="/equipes/actifs-3/"
                                  >
                                    Actifs 3
                                  </a>{" "}
                                  <div className="typography-button-2 flex items-center gap-xs">
                                    Voir l’équipe{" "}
                                    <svg aria-hidden="true" className="inline h-4 w-4">
                                      <use href="/assets/icons.svg#chevron-right"></use>
                                    </svg>
                                  </div>{" "}
                                </div>{" "}
                              </div>{" "}
                            </div>{" "}
                          </div>{" "}
                        </div>
                      </div>
                      <div aria-roledescription="slide" className="min-w-0 shrink-0 grow-0" role="group">
                        {" "}
                        <div
                          className="opacity-0 animate-slide-in-fade-left fcb-anim"
                          style={{ animationDelay: "calc(3 * 70ms)" }}
                        >
                          {" "}
                          <div className="group relative cursor-pointer">
                            {" "}
                            <div className="clip-corner duration-medium-1 p-lg lg:p-xl relative flex w-[220px] flex-col overflow-hidden md:w-[293px] fcb-teamcard">
                              {" "}
                              <img
                                alt=""
                                className="fcb-wm"
                                src="/assets/brand/ecusson-192.png"
                                width="154"
                                height="192"
                                loading="lazy"
                              />{" "}
                              <div className="gap-lg flex h-full flex-col justify-between">
                                {" "}
                                <div className="typography-overline-2 gap-sm flex items-center">
                                  {" "}
                                  <span className="px-xs pt-0.75 pb-0.5 uppercase fcb-tag">Seniors</span>{" "}
                                  <span className="mt-0.5 leading-none">Seniors +30</span>{" "}
                                </div>{" "}
                                <div className="gap-lg flex flex-col">
                                  {" "}
                                  <a
                                    className="static before:absolute before:inset-0 before:cursor-pointer typography-title-4 relative flex h-8 items-center leading-none"
                                    href="/equipes/seniors/#seniors-30"
                                  >
                                    Seniors +30
                                  </a>{" "}
                                  <div className="typography-button-2 flex items-center gap-xs">
                                    Voir l’équipe{" "}
                                    <svg aria-hidden="true" className="inline h-4 w-4">
                                      <use href="/assets/icons.svg#chevron-right"></use>
                                    </svg>
                                  </div>{" "}
                                </div>{" "}
                              </div>{" "}
                            </div>{" "}
                          </div>{" "}
                        </div>
                      </div>
                      <div aria-roledescription="slide" className="min-w-0 shrink-0 grow-0" role="group">
                        {" "}
                        <div
                          className="opacity-0 animate-slide-in-fade-left fcb-anim"
                          style={{ animationDelay: "calc(4 * 70ms)" }}
                        >
                          {" "}
                          <div className="group relative cursor-pointer">
                            {" "}
                            <div className="clip-corner duration-medium-1 p-lg lg:p-xl relative flex w-[220px] flex-col overflow-hidden md:w-[293px] fcb-teamcard">
                              {" "}
                              <img
                                alt=""
                                className="fcb-wm"
                                src="/assets/brand/ecusson-192.png"
                                width="154"
                                height="192"
                                loading="lazy"
                              />{" "}
                              <div className="gap-lg flex h-full flex-col justify-between">
                                {" "}
                                <div className="typography-overline-2 gap-sm flex items-center">
                                  {" "}
                                  <span className="px-xs pt-0.75 pb-0.5 uppercase fcb-tag">Seniors</span>{" "}
                                  <span className="mt-0.5 leading-none">Seniors +40</span>{" "}
                                </div>{" "}
                                <div className="gap-lg flex flex-col">
                                  {" "}
                                  <a
                                    className="static before:absolute before:inset-0 before:cursor-pointer typography-title-4 relative flex h-8 items-center leading-none"
                                    href="/equipes/seniors/#seniors-40"
                                  >
                                    Seniors +40
                                  </a>{" "}
                                  <div className="typography-button-2 flex items-center gap-xs">
                                    Voir l’équipe{" "}
                                    <svg aria-hidden="true" className="inline h-4 w-4">
                                      <use href="/assets/icons.svg#chevron-right"></use>
                                    </svg>
                                  </div>{" "}
                                </div>{" "}
                              </div>{" "}
                            </div>{" "}
                          </div>{" "}
                        </div>
                      </div>
                      <div aria-roledescription="slide" className="min-w-0 shrink-0 grow-0" role="group">
                        {" "}
                        <div
                          className="opacity-0 animate-slide-in-fade-left fcb-anim"
                          style={{ animationDelay: "calc(5 * 70ms)" }}
                        >
                          {" "}
                          <div className="group relative cursor-pointer">
                            {" "}
                            <div className="clip-corner duration-medium-1 p-lg lg:p-xl relative flex w-[220px] flex-col overflow-hidden md:w-[293px] fcb-teamcard">
                              {" "}
                              <img
                                alt=""
                                className="fcb-wm"
                                src="/assets/brand/ecusson-192.png"
                                width="154"
                                height="192"
                                loading="lazy"
                              />{" "}
                              <div className="gap-lg flex h-full flex-col justify-between">
                                {" "}
                                <div className="typography-overline-2 gap-sm flex items-center">
                                  {" "}
                                  <span className="px-xs pt-0.75 pb-0.5 uppercase fcb-tag">Féminin</span>{" "}
                                  <span className="mt-0.5 leading-none">Section féminine</span>{" "}
                                </div>{" "}
                                <div className="gap-lg flex flex-col">
                                  {" "}
                                  <a
                                    className="static before:absolute before:inset-0 before:cursor-pointer typography-title-4 relative flex h-8 items-center leading-none"
                                    href="/equipes/section-feminine/"
                                  >
                                    FF 15
                                  </a>{" "}
                                  <div className="typography-button-2 flex items-center gap-xs">
                                    Voir l’équipe{" "}
                                    <svg aria-hidden="true" className="inline h-4 w-4">
                                      <use href="/assets/icons.svg#chevron-right"></use>
                                    </svg>
                                  </div>{" "}
                                </div>{" "}
                              </div>{" "}
                            </div>{" "}
                          </div>{" "}
                        </div>
                      </div>
                      <div aria-roledescription="slide" className="min-w-0 shrink-0 grow-0" role="group">
                        {" "}
                        <div
                          className="opacity-0 animate-slide-in-fade-left fcb-anim"
                          style={{ animationDelay: "calc(6 * 70ms)" }}
                        >
                          {" "}
                          <div className="group relative cursor-pointer">
                            {" "}
                            <div className="clip-corner duration-medium-1 p-lg lg:p-xl relative flex w-[220px] flex-col overflow-hidden md:w-[293px] fcb-teamcard">
                              {" "}
                              <img
                                alt=""
                                className="fcb-wm"
                                src="/assets/brand/ecusson-192.png"
                                width="154"
                                height="192"
                                loading="lazy"
                              />{" "}
                              <div className="gap-lg flex h-full flex-col justify-between">
                                {" "}
                                <div className="typography-overline-2 gap-sm flex items-center">
                                  {" "}
                                  <span className="px-xs pt-0.75 pb-0.5 uppercase fcb-tag">Juniors</span>{" "}
                                  <span className="mt-0.5 leading-none">Juniors</span>{" "}
                                </div>{" "}
                                <div className="gap-lg flex flex-col">
                                  {" "}
                                  <a
                                    className="static before:absolute before:inset-0 before:cursor-pointer typography-title-4 relative flex h-8 items-center leading-none"
                                    href="/equipes/juniors/#juniors-b"
                                  >
                                    Juniors B
                                  </a>{" "}
                                  <div className="typography-button-2 flex items-center gap-xs">
                                    Voir l’équipe{" "}
                                    <svg aria-hidden="true" className="inline h-4 w-4">
                                      <use href="/assets/icons.svg#chevron-right"></use>
                                    </svg>
                                  </div>{" "}
                                </div>{" "}
                              </div>{" "}
                            </div>{" "}
                          </div>{" "}
                        </div>
                      </div>
                      <div aria-roledescription="slide" className="min-w-0 shrink-0 grow-0" role="group">
                        {" "}
                        <div
                          className="opacity-0 animate-slide-in-fade-left fcb-anim"
                          style={{ animationDelay: "calc(7 * 70ms)" }}
                        >
                          {" "}
                          <div className="group relative cursor-pointer">
                            {" "}
                            <div className="clip-corner duration-medium-1 p-lg lg:p-xl relative flex w-[220px] flex-col overflow-hidden md:w-[293px] fcb-teamcard">
                              {" "}
                              <img
                                alt=""
                                className="fcb-wm"
                                src="/assets/brand/ecusson-192.png"
                                width="154"
                                height="192"
                                loading="lazy"
                              />{" "}
                              <div className="gap-lg flex h-full flex-col justify-between">
                                {" "}
                                <div className="typography-overline-2 gap-sm flex items-center">
                                  {" "}
                                  <span className="px-xs pt-0.75 pb-0.5 uppercase fcb-tag">Juniors</span>{" "}
                                  <span className="mt-0.5 leading-none">Juniors</span>{" "}
                                </div>{" "}
                                <div className="gap-lg flex flex-col">
                                  {" "}
                                  <a
                                    className="static before:absolute before:inset-0 before:cursor-pointer typography-title-4 relative flex h-8 items-center leading-none"
                                    href="/equipes/juniors/#juniors-c"
                                  >
                                    Juniors C
                                  </a>{" "}
                                  <div className="typography-button-2 flex items-center gap-xs">
                                    Voir l’équipe{" "}
                                    <svg aria-hidden="true" className="inline h-4 w-4">
                                      <use href="/assets/icons.svg#chevron-right"></use>
                                    </svg>
                                  </div>{" "}
                                </div>{" "}
                              </div>{" "}
                            </div>{" "}
                          </div>{" "}
                        </div>
                      </div>
                      <div aria-roledescription="slide" className="min-w-0 shrink-0 grow-0" role="group">
                        {" "}
                        <div
                          className="opacity-0 animate-slide-in-fade-left fcb-anim"
                          style={{ animationDelay: "calc(8 * 70ms)" }}
                        >
                          {" "}
                          <div className="group relative cursor-pointer">
                            {" "}
                            <div className="clip-corner duration-medium-1 p-lg lg:p-xl relative flex w-[220px] flex-col overflow-hidden md:w-[293px] fcb-teamcard">
                              {" "}
                              <img
                                alt=""
                                className="fcb-wm"
                                src="/assets/brand/ecusson-192.png"
                                width="154"
                                height="192"
                                loading="lazy"
                              />{" "}
                              <div className="gap-lg flex h-full flex-col justify-between">
                                {" "}
                                <div className="typography-overline-2 gap-sm flex items-center">
                                  {" "}
                                  <span className="px-xs pt-0.75 pb-0.5 uppercase fcb-tag">Juniors</span>{" "}
                                  <span className="mt-0.5 leading-none">D1 · D2</span>{" "}
                                </div>{" "}
                                <div className="gap-lg flex flex-col">
                                  {" "}
                                  <a
                                    className="static before:absolute before:inset-0 before:cursor-pointer typography-title-4 relative flex h-8 items-center leading-none"
                                    href="/equipes/juniors/#juniors-d1"
                                  >
                                    Juniors D
                                  </a>{" "}
                                  <div className="typography-button-2 flex items-center gap-xs">
                                    Voir l’équipe{" "}
                                    <svg aria-hidden="true" className="inline h-4 w-4">
                                      <use href="/assets/icons.svg#chevron-right"></use>
                                    </svg>
                                  </div>{" "}
                                </div>{" "}
                              </div>{" "}
                            </div>{" "}
                          </div>{" "}
                        </div>
                      </div>
                      <div aria-roledescription="slide" className="min-w-0 shrink-0 grow-0" role="group">
                        {" "}
                        <div
                          className="opacity-0 animate-slide-in-fade-left fcb-anim"
                          style={{ animationDelay: "calc(9 * 70ms)" }}
                        >
                          {" "}
                          <div className="group relative cursor-pointer">
                            {" "}
                            <div className="clip-corner duration-medium-1 p-lg lg:p-xl relative flex w-[220px] flex-col overflow-hidden md:w-[293px] fcb-teamcard">
                              {" "}
                              <img
                                alt=""
                                className="fcb-wm"
                                src="/assets/brand/ecusson-192.png"
                                width="154"
                                height="192"
                                loading="lazy"
                              />{" "}
                              <div className="gap-lg flex h-full flex-col justify-between">
                                {" "}
                                <div className="typography-overline-2 gap-sm flex items-center">
                                  {" "}
                                  <span className="px-xs pt-0.75 pb-0.5 uppercase fcb-tag">Juniors</span>{" "}
                                  <span className="mt-0.5 leading-none">E1 · E2</span>{" "}
                                </div>{" "}
                                <div className="gap-lg flex flex-col">
                                  {" "}
                                  <a
                                    className="static before:absolute before:inset-0 before:cursor-pointer typography-title-4 relative flex h-8 items-center leading-none"
                                    href="/equipes/juniors/#juniors-e1"
                                  >
                                    Juniors E
                                  </a>{" "}
                                  <div className="typography-button-2 flex items-center gap-xs">
                                    Voir l’équipe{" "}
                                    <svg aria-hidden="true" className="inline h-4 w-4">
                                      <use href="/assets/icons.svg#chevron-right"></use>
                                    </svg>
                                  </div>{" "}
                                </div>{" "}
                              </div>{" "}
                            </div>{" "}
                          </div>{" "}
                        </div>
                      </div>
                      <div aria-roledescription="slide" className="min-w-0 shrink-0 grow-0" role="group">
                        {" "}
                        <div
                          className="opacity-0 animate-slide-in-fade-left fcb-anim"
                          style={{ animationDelay: "calc(10 * 70ms)" }}
                        >
                          {" "}
                          <div className="group relative cursor-pointer">
                            {" "}
                            <div className="clip-corner duration-medium-1 p-lg lg:p-xl relative flex w-[220px] flex-col overflow-hidden md:w-[293px] fcb-teamcard">
                              {" "}
                              <img
                                alt=""
                                className="fcb-wm"
                                src="/assets/brand/ecusson-192.png"
                                width="154"
                                height="192"
                                loading="lazy"
                              />{" "}
                              <div className="gap-lg flex h-full flex-col justify-between">
                                {" "}
                                <div className="typography-overline-2 gap-sm flex items-center">
                                  {" "}
                                  <span className="px-xs pt-0.75 pb-0.5 uppercase fcb-tag">Juniors</span>{" "}
                                  <span className="mt-0.5 leading-none">F1 · F2 · F3</span>{" "}
                                </div>{" "}
                                <div className="gap-lg flex flex-col">
                                  {" "}
                                  <a
                                    className="static before:absolute before:inset-0 before:cursor-pointer typography-title-4 relative flex h-8 items-center leading-none"
                                    href="/equipes/juniors/#juniors-f1"
                                  >
                                    Juniors F
                                  </a>{" "}
                                  <div className="typography-button-2 flex items-center gap-xs">
                                    Voir l’équipe{" "}
                                    <svg aria-hidden="true" className="inline h-4 w-4">
                                      <use href="/assets/icons.svg#chevron-right"></use>
                                    </svg>
                                  </div>{" "}
                                </div>{" "}
                              </div>{" "}
                            </div>{" "}
                          </div>{" "}
                        </div>
                      </div>
                      <div aria-roledescription="slide" className="min-w-0 shrink-0 grow-0" role="group">
                        {" "}
                        <div
                          className="opacity-0 animate-slide-in-fade-left fcb-anim"
                          style={{ animationDelay: "calc(11 * 70ms)" }}
                        >
                          {" "}
                          <div className="group relative cursor-pointer">
                            {" "}
                            <div className="clip-corner duration-medium-1 p-lg lg:p-xl relative flex w-[220px] flex-col overflow-hidden md:w-[293px] fcb-teamcard">
                              {" "}
                              <img
                                alt=""
                                className="fcb-wm"
                                src="/assets/brand/ecusson-192.png"
                                width="154"
                                height="192"
                                loading="lazy"
                              />{" "}
                              <div className="gap-lg flex h-full flex-col justify-between">
                                {" "}
                                <div className="typography-overline-2 gap-sm flex items-center">
                                  {" "}
                                  <span className="px-xs pt-0.75 pb-0.5 uppercase fcb-tag">Juniors</span>{" "}
                                  <span className="mt-0.5 leading-none">Dès 5 ans</span>{" "}
                                </div>{" "}
                                <div className="gap-lg flex flex-col">
                                  {" "}
                                  <a
                                    className="static before:absolute before:inset-0 before:cursor-pointer typography-title-4 relative flex h-8 items-center leading-none"
                                    href="/equipes/juniors/#ecole-de-foot"
                                  >
                                    École de foot
                                  </a>{" "}
                                  <div className="typography-button-2 flex items-center gap-xs">
                                    Voir l’équipe{" "}
                                    <svg aria-hidden="true" className="inline h-4 w-4">
                                      <use href="/assets/icons.svg#chevron-right"></use>
                                    </svg>
                                  </div>{" "}
                                </div>{" "}
                              </div>{" "}
                            </div>{" "}
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
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <section className="module-news-article-block">
          {" "}
          <div className="mb-0 py-2xl md:py-4xl container">
            {" "}
            <div className="overflow-hidden">
              <div className="gap-sm flex items-baseline opacity-0 animate-reveal-text-vertical fcb-anim">
                <h2 className="typography-headline-3 text-content-primary">Actualité</h2>
                <div className="hidden items-center gap-4 md:flex">
                  <span className="typography-button-1 text-content-secondary">/</span>
                  <a
                    className="typography-button-1 duration-medium-1 flex items-center transition-colors text-content-secondary hover:text-content-primary"
                    href="/actualite/"
                  >
                    Voir tout
                    <svg aria-hidden="true" className="inline h-4 w-4">
                      <use href="/assets/icons.svg#chevron-right"></use>
                    </svg>
                  </a>
                </div>
              </div>
            </div>{" "}
            <div className="mt-2xl md:mt-10">
              {" "}
              <div className="gap-y-2xl md:gap-x-2xl grid grid-cols-12">
                {" "}
                <div className="col-span-12 md:col-span-6">
                  {" "}
                  <div className="top-0 md:sticky fcb-sticky">
                    {" "}
                    <div className="group relative cursor-pointer">
                      {" "}
                      <div className="relative opacity-0 animate-fade-in fcb-anim">
                        {" "}
                        <div className="relative h-full w-full overflow-hidden object-cover">
                          <div className="aspect-square h-full w-full animate-image-scale-in fcb-anim">
                            <div className="relative h-full w-full">
                              <img
                                alt=""
                                className="fcb-cover duration-medium-1 ease-standard scale-100 transition-all group-hover:scale-105"
                                src="/assets/img/actu-soiree-disco-2026-carre-1280.webp"
                                srcSet="/assets/img/actu-soiree-disco-2026-carre-640.webp 640w, /assets/img/actu-soiree-disco-2026-carre-1280.webp 1280w"
                                sizes="(min-width:64rem) 50vw, 100vw"
                                width="1920"
                                height="560"
                                loading="lazy"
                                decoding="async"
                              />
                            </div>
                          </div>
                        </div>{" "}
                        <div
                          className="absolute inset-0 h-full w-full"
                          style={{
                            background:
                              "linear-gradient(0deg, rgb(var(--noir-profond)) 0%, rgba(var(--noir-profond), 0) 75%)",
                          }}
                        ></div>{" "}
                        <div className="p-lg md:p-2xl absolute inset-0 flex w-full flex-col items-start justify-end">
                          {" "}
                          <div>
                            <span className="typography-overline-2 mb-sm fcb-kicker">Événements</span>
                          </div>{" "}
                          <a
                            className="static before:absolute before:inset-0 before:cursor-pointer mb-sm flex-col items-center overflow-hidden mt-md"
                            href="/content/soiree-disco-2026/"
                          >
                            {" "}
                            <h3 className="typography-title-3 text-content-primary-inverse opacity-0 animate-reveal-text-vertical fcb-anim">
                              Soirée Disco 2026 : retour sur la grande fête du FC Bussigny
                            </h3>{" "}
                          </a>{" "}
                          <time
                            className="typography-body-6 text-dark-content-secondary mb-xl block"
                            dateTime="2026-03-07"
                          >
                            7 mars 2026
                          </time>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>
                </div>{" "}
                <div className="col-span-12 md:col-span-6">
                  <div className="gap-x-md gap-y-2xl md:gap-2xl grid grid-cols-12">
                    <div className="col-span-6">
                      {" "}
                      <div
                        className="group cursor-pointer relative flex flex-col text-content-primary  opacity-0 animate-slide-in-fade-up fcb-anim"
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
                    <div className="col-span-6">
                      {" "}
                      <div
                        className="group cursor-pointer relative flex flex-col text-content-primary  opacity-0 animate-slide-in-fade-up fcb-anim"
                        style={{ animationDelay: "calc(1 * 60ms)" }}
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
                    <div className="col-span-6">
                      {" "}
                      <div
                        className="group cursor-pointer relative flex flex-col text-content-primary  opacity-0 animate-slide-in-fade-up fcb-anim"
                        style={{ animationDelay: "calc(2 * 60ms)" }}
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
                    <div className="col-span-6">
                      {" "}
                      <div
                        className="group cursor-pointer relative flex flex-col text-content-primary  opacity-0 animate-slide-in-fade-up fcb-anim"
                        style={{ animationDelay: "calc(3 * 60ms)" }}
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
                    <div className="col-span-6">
                      {" "}
                      <div
                        className="group cursor-pointer relative flex flex-col text-content-primary  opacity-0 animate-slide-in-fade-up fcb-anim"
                        style={{ animationDelay: "calc(4 * 60ms)" }}
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
                    <div className="col-span-6">
                      {" "}
                      <div
                        className="group cursor-pointer relative flex flex-col text-content-primary  opacity-0 animate-slide-in-fade-up fcb-anim"
                        style={{ animationDelay: "calc(5 * 60ms)" }}
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
                  </div>
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="mt-2xl flex items-center justify-center md:hidden">
              {" "}
              <a
                className="typography-button-1 text-content-secondary py-2xl flex items-center gap-0.5"
                href="/actualite/"
              >
                Voir tout
                <svg aria-hidden="true" className="inline h-4 w-4">
                  <use href="/assets/icons.svg#chevron-right"></use>
                </svg>
              </a>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <section className="module-content-carousel-block">
          {" "}
          <div className="overflow-hidden">
            <div className="py-2xl md:py-4xl container">
              {" "}
              <h2 className="typography-headline-3 mb-2xl text-content-primary">Nos équipes en images</h2>{" "}
              <div
                aria-roledescription="carousel"
                aria-label="Nos équipes en images"
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
                          <div className="relative aspect-video overflow-hidden ">
                            <div className="relative h-full w-full">
                              <div className="absolute flex h-full w-full items-center justify-center bg-background-secondary"></div>
                              <img
                                alt=""
                                className="fcb-cover duration-medium-1 ease-standard scale-100 transition-all group-hover:scale-105"
                                src="/assets/img/equipe-actifs1-1920.webp"
                                srcSet="/assets/img/equipe-actifs1-640.webp 640w, /assets/img/equipe-actifs1-1280.webp 1280w, /assets/img/equipe-actifs1-1920.webp 1920w"
                                sizes="(min-width:64rem) 293px, 200px"
                                width="1960"
                                height="918"
                                loading="lazy"
                                decoding="async"
                              />
                            </div>
                          </div>{" "}
                          <div className="gap-sm pt-md flex flex-col">
                            {" "}
                            <div className="gap-xs flex h-5 items-center self-stretch">
                              <h3 className="typography-overline-2 block text-content-secondary">Actifs · 4e ligue</h3>
                            </div>{" "}
                            <a
                              className="static before:absolute before:inset-0 before:cursor-pointer typography-body-4-semibold gap-sm flex items-center"
                              href="/equipes/actifs-1/"
                            >
                              {" "}
                              <span className="[display:-webkit-box] overflow-hidden [-webkit-box-orient:vertical] [-webkit-line-clamp:3]">
                                Actifs 1
                              </span>{" "}
                            </a>{" "}
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
                          <div className="relative aspect-video overflow-hidden ">
                            <div className="relative h-full w-full">
                              <div className="absolute flex h-full w-full items-center justify-center bg-background-secondary"></div>
                              <img
                                alt=""
                                className="fcb-cover duration-medium-1 ease-standard scale-100 transition-all group-hover:scale-105"
                                src="/assets/img/equipe-actifs2-1920.webp"
                                srcSet="/assets/img/equipe-actifs2-640.webp 640w, /assets/img/equipe-actifs2-1280.webp 1280w, /assets/img/equipe-actifs2-1920.webp 1920w"
                                sizes="(min-width:64rem) 293px, 200px"
                                width="1960"
                                height="922"
                                loading="lazy"
                                decoding="async"
                              />
                            </div>
                          </div>{" "}
                          <div className="gap-sm pt-md flex flex-col">
                            {" "}
                            <div className="gap-xs flex h-5 items-center self-stretch">
                              <h3 className="typography-overline-2 block text-content-secondary">Actifs · 5e ligue</h3>
                            </div>{" "}
                            <a
                              className="static before:absolute before:inset-0 before:cursor-pointer typography-body-4-semibold gap-sm flex items-center"
                              href="/equipes/actifs-2/"
                            >
                              {" "}
                              <span className="[display:-webkit-box] overflow-hidden [-webkit-box-orient:vertical] [-webkit-line-clamp:3]">
                                Actifs 2
                              </span>{" "}
                            </a>{" "}
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
                          <div className="relative aspect-video overflow-hidden ">
                            <div className="relative h-full w-full">
                              <div className="absolute flex h-full w-full items-center justify-center bg-background-secondary"></div>
                              <img
                                alt=""
                                className="fcb-cover duration-medium-1 ease-standard scale-100 transition-all group-hover:scale-105"
                                src="/assets/img/equipe-seniors30-1280.webp"
                                srcSet="/assets/img/equipe-seniors30-640.webp 640w, /assets/img/equipe-seniors30-1280.webp 1280w"
                                sizes="(min-width:64rem) 293px, 200px"
                                width="1880"
                                height="880"
                                loading="lazy"
                                decoding="async"
                              />
                            </div>
                          </div>{" "}
                          <div className="gap-sm pt-md flex flex-col">
                            {" "}
                            <div className="gap-xs flex h-5 items-center self-stretch">
                              <h3 className="typography-overline-2 block text-content-secondary">Seniors</h3>
                            </div>{" "}
                            <a
                              className="static before:absolute before:inset-0 before:cursor-pointer typography-body-4-semibold gap-sm flex items-center"
                              href="/equipes/seniors/#seniors-30"
                            >
                              {" "}
                              <span className="[display:-webkit-box] overflow-hidden [-webkit-box-orient:vertical] [-webkit-line-clamp:3]">
                                Seniors +30
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
                          <div className="relative aspect-video overflow-hidden ">
                            <div className="relative h-full w-full">
                              <div className="absolute flex h-full w-full items-center justify-center bg-background-secondary"></div>
                              <img
                                alt=""
                                className="fcb-cover duration-medium-1 ease-standard scale-100 transition-all group-hover:scale-105"
                                src="/assets/img/equipe-feminines-1920.webp"
                                srcSet="/assets/img/equipe-feminines-640.webp 640w, /assets/img/equipe-feminines-1280.webp 1280w, /assets/img/equipe-feminines-1920.webp 1920w"
                                sizes="(min-width:64rem) 293px, 200px"
                                width="1960"
                                height="918"
                                loading="lazy"
                                decoding="async"
                              />
                            </div>
                          </div>{" "}
                          <div className="gap-sm pt-md flex flex-col">
                            {" "}
                            <div className="gap-xs flex h-5 items-center self-stretch">
                              <h3 className="typography-overline-2 block text-content-secondary">Section féminine</h3>
                            </div>{" "}
                            <a
                              className="static before:absolute before:inset-0 before:cursor-pointer typography-body-4-semibold gap-sm flex items-center"
                              href="/equipes/section-feminine/"
                            >
                              {" "}
                              <span className="[display:-webkit-box] overflow-hidden [-webkit-box-orient:vertical] [-webkit-line-clamp:3]">
                                Équipe FF 15
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
                                src="/assets/img/equipe-jun_b-1280.webp"
                                srcSet="/assets/img/equipe-jun_b-640.webp 640w, /assets/img/equipe-jun_b-1280.webp 1280w"
                                sizes="(min-width:64rem) 293px, 200px"
                                width="1792"
                                height="839"
                                loading="lazy"
                                decoding="async"
                              />
                            </div>
                          </div>{" "}
                          <div className="gap-sm pt-md flex flex-col">
                            {" "}
                            <div className="gap-xs flex h-5 items-center self-stretch">
                              <h3 className="typography-overline-2 block text-content-secondary">Juniors</h3>
                            </div>{" "}
                            <a
                              className="static before:absolute before:inset-0 before:cursor-pointer typography-body-4-semibold gap-sm flex items-center"
                              href="/equipes/juniors/#juniors-b"
                            >
                              {" "}
                              <span className="[display:-webkit-box] overflow-hidden [-webkit-box-orient:vertical] [-webkit-line-clamp:3]">
                                Juniors B
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
                                src="/assets/img/equipe-jun_c-1280.webp"
                                srcSet="/assets/img/equipe-jun_c-640.webp 640w, /assets/img/equipe-jun_c-1280.webp 1280w"
                                sizes="(min-width:64rem) 293px, 200px"
                                width="1870"
                                height="875"
                                loading="lazy"
                                decoding="async"
                              />
                            </div>
                          </div>{" "}
                          <div className="gap-sm pt-md flex flex-col">
                            {" "}
                            <div className="gap-xs flex h-5 items-center self-stretch">
                              <h3 className="typography-overline-2 block text-content-secondary">Juniors</h3>
                            </div>{" "}
                            <a
                              className="static before:absolute before:inset-0 before:cursor-pointer typography-body-4-semibold gap-sm flex items-center"
                              href="/equipes/juniors/#juniors-c"
                            >
                              {" "}
                              <span className="[display:-webkit-box] overflow-hidden [-webkit-box-orient:vertical] [-webkit-line-clamp:3]">
                                Juniors C
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
                          <div className="relative aspect-video overflow-hidden ">
                            <div className="relative h-full w-full">
                              <div className="absolute flex h-full w-full items-center justify-center bg-background-secondary"></div>
                              <img
                                alt=""
                                className="fcb-cover duration-medium-1 ease-standard scale-100 transition-all group-hover:scale-105"
                                src="/assets/img/equipe-jun_d2-1280.webp"
                                srcSet="/assets/img/equipe-jun_d2-640.webp 640w, /assets/img/equipe-jun_d2-1280.webp 1280w"
                                sizes="(min-width:64rem) 293px, 200px"
                                width="1424"
                                height="667"
                                loading="lazy"
                                decoding="async"
                              />
                            </div>
                          </div>{" "}
                          <div className="gap-sm pt-md flex flex-col">
                            {" "}
                            <div className="gap-xs flex h-5 items-center self-stretch">
                              <h3 className="typography-overline-2 block text-content-secondary">Juniors</h3>
                            </div>{" "}
                            <a
                              className="static before:absolute before:inset-0 before:cursor-pointer typography-body-4-semibold gap-sm flex items-center"
                              href="/equipes/juniors/#juniors-d2"
                            >
                              {" "}
                              <span className="[display:-webkit-box] overflow-hidden [-webkit-box-orient:vertical] [-webkit-line-clamp:3]">
                                Juniors D2
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
                          <div className="relative aspect-video overflow-hidden ">
                            <div className="relative h-full w-full">
                              <div className="absolute flex h-full w-full items-center justify-center bg-background-secondary"></div>
                              <img
                                alt=""
                                className="fcb-cover duration-medium-1 ease-standard scale-100 transition-all group-hover:scale-105"
                                src="/assets/img/equipe-jun_e1-640.webp"
                                srcSet="/assets/img/equipe-jun_e1-640.webp 640w"
                                sizes="(min-width:64rem) 293px, 200px"
                                width="1024"
                                height="479"
                                loading="lazy"
                                decoding="async"
                              />
                            </div>
                          </div>{" "}
                          <div className="gap-sm pt-md flex flex-col">
                            {" "}
                            <div className="gap-xs flex h-5 items-center self-stretch">
                              <h3 className="typography-overline-2 block text-content-secondary">Juniors</h3>
                            </div>{" "}
                            <a
                              className="static before:absolute before:inset-0 before:cursor-pointer typography-body-4-semibold gap-sm flex items-center"
                              href="/equipes/juniors/#juniors-e1"
                            >
                              {" "}
                              <span className="[display:-webkit-box] overflow-hidden [-webkit-box-orient:vertical] [-webkit-line-clamp:3]">
                                Juniors E1
                              </span>{" "}
                            </a>{" "}
                          </div>{" "}
                        </div>
                      </div>
                      <div aria-roledescription="slide" className="min-w-0 shrink-0 grow-0" role="group">
                        {" "}
                        <div
                          className="group cursor-pointer relative flex flex-col text-content-primary w-[200px] md:w-[293px] opacity-0 animate-fade-in fcb-anim"
                          style={{ animationDelay: "calc(8 * 50ms)" }}
                        >
                          {" "}
                          <div className="relative aspect-video overflow-hidden ">
                            <div className="relative h-full w-full">
                              <div className="absolute flex h-full w-full items-center justify-center bg-background-secondary"></div>
                              <img
                                alt=""
                                className="fcb-cover duration-medium-1 ease-standard scale-100 transition-all group-hover:scale-105"
                                src="/assets/img/equipe-jun_e2-1280.webp"
                                srcSet="/assets/img/equipe-jun_e2-640.webp 640w, /assets/img/equipe-jun_e2-1280.webp 1280w"
                                sizes="(min-width:64rem) 293px, 200px"
                                width="1534"
                                height="718"
                                loading="lazy"
                                decoding="async"
                              />
                            </div>
                          </div>{" "}
                          <div className="gap-sm pt-md flex flex-col">
                            {" "}
                            <div className="gap-xs flex h-5 items-center self-stretch">
                              <h3 className="typography-overline-2 block text-content-secondary">Juniors</h3>
                            </div>{" "}
                            <a
                              className="static before:absolute before:inset-0 before:cursor-pointer typography-body-4-semibold gap-sm flex items-center"
                              href="/equipes/juniors/#juniors-e2"
                            >
                              {" "}
                              <span className="[display:-webkit-box] overflow-hidden [-webkit-box-orient:vertical] [-webkit-line-clamp:3]">
                                Juniors E2
                              </span>{" "}
                            </a>{" "}
                          </div>{" "}
                        </div>
                      </div>
                      <div aria-roledescription="slide" className="min-w-0 shrink-0 grow-0" role="group">
                        {" "}
                        <div
                          className="group cursor-pointer relative flex flex-col text-content-primary w-[200px] md:w-[293px] opacity-0 animate-fade-in fcb-anim"
                          style={{ animationDelay: "calc(9 * 50ms)" }}
                        >
                          {" "}
                          <div className="relative aspect-video overflow-hidden ">
                            <div className="relative h-full w-full">
                              <div className="absolute flex h-full w-full items-center justify-center bg-background-secondary"></div>
                              <img
                                alt=""
                                className="fcb-cover duration-medium-1 ease-standard scale-100 transition-all group-hover:scale-105"
                                src="/assets/img/equipe-jun_f1-1280.webp"
                                srcSet="/assets/img/equipe-jun_f1-640.webp 640w, /assets/img/equipe-jun_f1-1280.webp 1280w"
                                sizes="(min-width:64rem) 293px, 200px"
                                width="1534"
                                height="718"
                                loading="lazy"
                                decoding="async"
                              />
                            </div>
                          </div>{" "}
                          <div className="gap-sm pt-md flex flex-col">
                            {" "}
                            <div className="gap-xs flex h-5 items-center self-stretch">
                              <h3 className="typography-overline-2 block text-content-secondary">Juniors</h3>
                            </div>{" "}
                            <a
                              className="static before:absolute before:inset-0 before:cursor-pointer typography-body-4-semibold gap-sm flex items-center"
                              href="/equipes/juniors/#juniors-f1"
                            >
                              {" "}
                              <span className="[display:-webkit-box] overflow-hidden [-webkit-box-orient:vertical] [-webkit-line-clamp:3]">
                                Juniors F1
                              </span>{" "}
                            </a>{" "}
                          </div>{" "}
                        </div>
                      </div>
                      <div aria-roledescription="slide" className="min-w-0 shrink-0 grow-0" role="group">
                        {" "}
                        <div
                          className="group cursor-pointer relative flex flex-col text-content-primary w-[200px] md:w-[293px] opacity-0 animate-fade-in fcb-anim"
                          style={{ animationDelay: "calc(10 * 50ms)" }}
                        >
                          {" "}
                          <div className="relative aspect-video overflow-hidden ">
                            <div className="relative h-full w-full">
                              <div className="absolute flex h-full w-full items-center justify-center bg-background-secondary"></div>
                              <img
                                alt=""
                                className="fcb-cover duration-medium-1 ease-standard scale-100 transition-all group-hover:scale-105"
                                src="/assets/img/equipe-jun_f2-1280.webp"
                                srcSet="/assets/img/equipe-jun_f2-640.webp 640w, /assets/img/equipe-jun_f2-1280.webp 1280w"
                                sizes="(min-width:64rem) 293px, 200px"
                                width="1374"
                                height="643"
                                loading="lazy"
                                decoding="async"
                              />
                            </div>
                          </div>{" "}
                          <div className="gap-sm pt-md flex flex-col">
                            {" "}
                            <div className="gap-xs flex h-5 items-center self-stretch">
                              <h3 className="typography-overline-2 block text-content-secondary">Juniors</h3>
                            </div>{" "}
                            <a
                              className="static before:absolute before:inset-0 before:cursor-pointer typography-body-4-semibold gap-sm flex items-center"
                              href="/equipes/juniors/#juniors-f2"
                            >
                              {" "}
                              <span className="[display:-webkit-box] overflow-hidden [-webkit-box-orient:vertical] [-webkit-line-clamp:3]">
                                Juniors F2
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
          </div>{" "}
        </section>{" "}
        <section className="module-merchandising-banner-block">
          {" "}
          <div className="mb-lg lg:mb-16 relative overflow-hidden">
            {" "}
            <div className="relative bg-white">
              {" "}
              <div className="py-2xl md:py-4xl relative z-10 container flex flex-col gap-8 md:gap-24">
                {" "}
                <div className="gap-lg flex flex-col md:flex-row md:items-start md:justify-between">
                  {" "}
                  <div className="md:gap-sm gap-lg flex flex-col opacity-0 animate-slide-in-fade-up fcb-anim">
                    {" "}
                    <h2 className="typography-headline-2 text-content-primary">Les produits du Coq</h2>{" "}
                    <div className="typography-body-4 text-content-secondary">
                      <p className="typography-paragraph mb-4 md:mb-6 [&amp;:only-of-type]:mb-0 md:[&amp;:only-of-type]:mb-0 [&amp;:last-of-type]:mb-0 md:[&amp;:last-of-type]:mb-0">
                        Fondue, raclette et huîtres : régalez-vous et soutenez le club
                      </p>
                    </div>{" "}
                  </div>{" "}
                  <a
                    className="flex items-center justify-center duration-150 ease-in-out cursor-pointer bg-background-brand-jaune hover:bg-background-brand-jaune-hover typography-button-1 h-12 px-xl gap-sm fcb-btn hidden md:flex"
                    href="/content/fondue-raclette-huitres/"
                  >
                    Commander
                    <svg aria-hidden="true" className="inline h-6 w-6">
                      <use href="/assets/icons.svg#chevron-right"></use>
                    </svg>
                  </a>{" "}
                </div>{" "}
                <div className="md:hidden">
                  {" "}
                  <div
                    aria-roledescription="carousel"
                    aria-label="Produits du Coq"
                    className="group/carousel relative"
                    role="region"
                    data-carousel=""
                  >
                    {" "}
                    <div className="relative">
                      {" "}
                      <button
                        aria-label="Précédent"
                        className="disabled:text-content-disabled bg-background-secondary text-content-primary hover:bg-background-secondary-hover flex items-center justify-center absolute z-10 transition-opacity duration-300 ease-in-out h-12 w-12 cursor-pointer drop-shadow-carousel-nav fcb-car-btn top-[40%] left-0"
                        type="button"
                        data-prev=""
                      >
                        <svg aria-hidden="true" className="inline h-6 w-6">
                          <use href="/assets/icons.svg#chevron-left"></use>
                        </svg>
                      </button>{" "}
                      <button
                        aria-label="Suivant"
                        className="disabled:text-content-disabled bg-background-secondary text-content-primary hover:bg-background-secondary-hover flex items-center justify-center absolute z-10 transition-opacity duration-300 ease-in-out h-12 w-12 cursor-pointer drop-shadow-carousel-nav fcb-car-btn top-[40%] right-0"
                        type="button"
                        data-next=""
                      >
                        <svg aria-hidden="true" className="inline h-6 w-6">
                          <use href="/assets/icons.svg#chevron-right"></use>
                        </svg>
                      </button>{" "}
                      <div className="carousel-content fcb-bleed">
                        <div className="flex gap-3 md:gap-8">
                          <div
                            aria-roledescription="slide"
                            className="min-w-0 shrink-0 grow-0 basis-[85%]"
                            role="group"
                          >
                            {" "}
                            <div
                              className="group relative cursor-pointer flex w-full flex-col opacity-0 animate-slide-in-fade-up fcb-anim"
                              style={{ animationDelay: "calc(0 * 70ms)" }}
                            >
                              {" "}
                              <div className="clip-corner relative aspect-square w-full overflow-hidden fcb-contain">
                                <img
                                  alt="La Fondue du Coq"
                                  className="duration-medium-1 ease-standard transition-all group-hover:scale-105"
                                  src="/assets/img/boutique-fondue-429.webp"
                                  srcSet="/assets/img/boutique-fondue-429.webp 429w"
                                  sizes="(min-width:64rem) 23vw, 85vw"
                                  width="429"
                                  height="522"
                                  loading="lazy"
                                  decoding="async"
                                />
                              </div>{" "}
                              <div className="gap-md mt-md flex flex-col">
                                {" "}
                                <span className="typography-overline-2 uppercase text-content-secondary">
                                  Fondue · 400 g · CHF 15.–
                                </span>{" "}
                                <div className="overflow-hidden">
                                  <p className="typography-body-3-semibold min-h-9 truncate text-base text-content-primary">
                                    La Fondue du Coq
                                  </p>
                                </div>{" "}
                              </div>{" "}
                              <a
                                aria-label="La Fondue du Coq"
                                className="before:absolute before:inset-0 before:cursor-pointer absolute inset-0 z-10"
                                href="/content/la-fondue-du-coq/"
                              >
                                <span className="sr-only">La Fondue du Coq</span>
                              </a>{" "}
                            </div>
                          </div>
                          <div
                            aria-roledescription="slide"
                            className="min-w-0 shrink-0 grow-0 basis-[85%]"
                            role="group"
                          >
                            {" "}
                            <div
                              className="group relative cursor-pointer flex w-full flex-col opacity-0 animate-slide-in-fade-up fcb-anim"
                              style={{ animationDelay: "calc(1 * 70ms)" }}
                            >
                              {" "}
                              <div className="clip-corner relative aspect-square w-full overflow-hidden fcb-contain">
                                <img
                                  alt="La Raclette du Coq"
                                  className="duration-medium-1 ease-standard transition-all group-hover:scale-105"
                                  src="/assets/img/boutique-raclette2-535.webp"
                                  srcSet="/assets/img/boutique-raclette2-535.webp 535w"
                                  sizes="(min-width:64rem) 23vw, 85vw"
                                  width="535"
                                  height="414"
                                  loading="lazy"
                                  decoding="async"
                                />
                              </div>{" "}
                              <div className="gap-md mt-md flex flex-col">
                                {" "}
                                <span className="typography-overline-2 uppercase text-content-secondary">
                                  Raclette · 400 g · CHF 15.–
                                </span>{" "}
                                <div className="overflow-hidden">
                                  <p className="typography-body-3-semibold min-h-9 truncate text-base text-content-primary">
                                    La Raclette du Coq
                                  </p>
                                </div>{" "}
                              </div>{" "}
                              <a
                                aria-label="La Raclette du Coq"
                                className="before:absolute before:inset-0 before:cursor-pointer absolute inset-0 z-10"
                                href="/content/la-raclette-du-coq/"
                              >
                                <span className="sr-only">La Raclette du Coq</span>
                              </a>{" "}
                            </div>
                          </div>
                          <div
                            aria-roledescription="slide"
                            className="min-w-0 shrink-0 grow-0 basis-[85%]"
                            role="group"
                          >
                            {" "}
                            <div
                              className="group relative cursor-pointer flex w-full flex-col opacity-0 animate-slide-in-fade-up fcb-anim"
                              style={{ animationDelay: "calc(2 * 70ms)" }}
                            >
                              {" "}
                              <div className="clip-corner relative aspect-square w-full overflow-hidden bg-background-secondary">
                                <img
                                  alt="Huîtres bretonnes"
                                  className="duration-medium-1 ease-standard transition-all group-hover:scale-105 fcb-cover"
                                  src="/assets/img/boutique-huitres-640.webp"
                                  srcSet="/assets/img/boutique-huitres-640.webp 640w"
                                  sizes="(min-width:64rem) 23vw, 85vw"
                                  width="672"
                                  height="460"
                                  loading="lazy"
                                  decoding="async"
                                />
                              </div>{" "}
                              <div className="gap-md mt-md flex flex-col">
                                {" "}
                                <span className="typography-overline-2 uppercase text-content-secondary">
                                  Bourriche de 24 pièces
                                </span>{" "}
                                <div className="overflow-hidden">
                                  <p className="typography-body-3-semibold min-h-9 truncate text-base text-content-primary">
                                    Huîtres bretonnes
                                  </p>
                                </div>{" "}
                              </div>{" "}
                              <a
                                aria-label="Huîtres bretonnes"
                                className="before:absolute before:inset-0 before:cursor-pointer absolute inset-0 z-10"
                                href="/content/huitres-bretonnes/"
                              >
                                <span className="sr-only">Huîtres bretonnes</span>
                              </a>{" "}
                            </div>
                          </div>
                          <div
                            aria-roledescription="slide"
                            className="min-w-0 shrink-0 grow-0 basis-[85%]"
                            role="group"
                          >
                            {" "}
                            <div
                              className="group relative cursor-pointer flex w-full flex-col opacity-0 animate-slide-in-fade-up fcb-anim"
                              style={{ animationDelay: "calc(3 * 70ms)" }}
                            >
                              {" "}
                              <div className="clip-corner relative aspect-square w-full overflow-hidden fcb-contain">
                                <img
                                  alt="Bon de commande"
                                  className="duration-medium-1 ease-standard transition-all group-hover:scale-105"
                                  src="/assets/img/boutique-flyer_terroir-1080.webp"
                                  srcSet="/assets/img/boutique-flyer_terroir-640.webp 640w, /assets/img/boutique-flyer_terroir-1080.webp 1080w"
                                  sizes="(min-width:64rem) 23vw, 85vw"
                                  width="1200"
                                  height="1698"
                                  loading="lazy"
                                  decoding="async"
                                />
                              </div>{" "}
                              <div className="gap-md mt-md flex flex-col">
                                {" "}
                                <span className="typography-overline-2 uppercase text-content-secondary">
                                  Fondue · Raclette · Huîtres
                                </span>{" "}
                                <div className="overflow-hidden">
                                  <p className="typography-body-3-semibold min-h-9 truncate text-base text-content-primary">
                                    Bon de commande
                                  </p>
                                </div>{" "}
                              </div>{" "}
                              <a
                                aria-label="Bon de commande"
                                className="before:absolute before:inset-0 before:cursor-pointer absolute inset-0 z-10"
                                href="/content/fondue-raclette-huitres/"
                              >
                                <span className="sr-only">Bon de commande</span>
                              </a>{" "}
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
                  <div className="mt-2xl flex justify-center">
                    <a
                      className="flex items-center justify-center duration-150 ease-in-out cursor-pointer bg-background-brand-jaune hover:bg-background-brand-jaune-hover typography-button-1 h-12 px-xl gap-sm fcb-btn "
                      href="/content/fondue-raclette-huitres/"
                    >
                      Commander
                      <svg aria-hidden="true" className="inline h-6 w-6">
                        <use href="/assets/icons.svg#chevron-right"></use>
                      </svg>
                    </a>
                  </div>
                </div>{" "}
                <div className="hidden md:grid md:grid-cols-4 gap-8">
                  {" "}
                  <div
                    className="group relative cursor-pointer flex w-full flex-col opacity-0 animate-slide-in-fade-up fcb-anim"
                    style={{ animationDelay: "calc(0 * 70ms)" }}
                  >
                    {" "}
                    <div className="clip-corner relative aspect-square w-full overflow-hidden fcb-contain">
                      <img
                        alt="La Fondue du Coq"
                        className="duration-medium-1 ease-standard transition-all group-hover:scale-105"
                        src="/assets/img/boutique-fondue-429.webp"
                        srcSet="/assets/img/boutique-fondue-429.webp 429w"
                        sizes="(min-width:64rem) 23vw, 85vw"
                        width="429"
                        height="522"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>{" "}
                    <div className="gap-md mt-md flex flex-col">
                      {" "}
                      <span className="typography-overline-2 uppercase text-content-secondary">
                        Fondue · 400 g · CHF 15.–
                      </span>{" "}
                      <div className="overflow-hidden">
                        <p className="typography-body-3-semibold min-h-9 truncate text-base text-content-primary">
                          La Fondue du Coq
                        </p>
                      </div>{" "}
                    </div>{" "}
                    <a
                      aria-label="La Fondue du Coq"
                      className="before:absolute before:inset-0 before:cursor-pointer absolute inset-0 z-10"
                      href="/content/la-fondue-du-coq/"
                    >
                      <span className="sr-only">La Fondue du Coq</span>
                    </a>{" "}
                  </div>{" "}
                  <div
                    className="group relative cursor-pointer flex w-full flex-col opacity-0 animate-slide-in-fade-up fcb-anim"
                    style={{ animationDelay: "calc(1 * 70ms)" }}
                  >
                    {" "}
                    <div className="clip-corner relative aspect-square w-full overflow-hidden fcb-contain">
                      <img
                        alt="La Raclette du Coq"
                        className="duration-medium-1 ease-standard transition-all group-hover:scale-105"
                        src="/assets/img/boutique-raclette2-535.webp"
                        srcSet="/assets/img/boutique-raclette2-535.webp 535w"
                        sizes="(min-width:64rem) 23vw, 85vw"
                        width="535"
                        height="414"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>{" "}
                    <div className="gap-md mt-md flex flex-col">
                      {" "}
                      <span className="typography-overline-2 uppercase text-content-secondary">
                        Raclette · 400 g · CHF 15.–
                      </span>{" "}
                      <div className="overflow-hidden">
                        <p className="typography-body-3-semibold min-h-9 truncate text-base text-content-primary">
                          La Raclette du Coq
                        </p>
                      </div>{" "}
                    </div>{" "}
                    <a
                      aria-label="La Raclette du Coq"
                      className="before:absolute before:inset-0 before:cursor-pointer absolute inset-0 z-10"
                      href="/content/la-raclette-du-coq/"
                    >
                      <span className="sr-only">La Raclette du Coq</span>
                    </a>{" "}
                  </div>{" "}
                  <div
                    className="group relative cursor-pointer flex w-full flex-col opacity-0 animate-slide-in-fade-up fcb-anim"
                    style={{ animationDelay: "calc(2 * 70ms)" }}
                  >
                    {" "}
                    <div className="clip-corner relative aspect-square w-full overflow-hidden bg-background-secondary">
                      <img
                        alt="Huîtres bretonnes"
                        className="duration-medium-1 ease-standard transition-all group-hover:scale-105 fcb-cover"
                        src="/assets/img/boutique-huitres-640.webp"
                        srcSet="/assets/img/boutique-huitres-640.webp 640w"
                        sizes="(min-width:64rem) 23vw, 85vw"
                        width="672"
                        height="460"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>{" "}
                    <div className="gap-md mt-md flex flex-col">
                      {" "}
                      <span className="typography-overline-2 uppercase text-content-secondary">
                        Bourriche de 24 pièces
                      </span>{" "}
                      <div className="overflow-hidden">
                        <p className="typography-body-3-semibold min-h-9 truncate text-base text-content-primary">
                          Huîtres bretonnes
                        </p>
                      </div>{" "}
                    </div>{" "}
                    <a
                      aria-label="Huîtres bretonnes"
                      className="before:absolute before:inset-0 before:cursor-pointer absolute inset-0 z-10"
                      href="/content/huitres-bretonnes/"
                    >
                      <span className="sr-only">Huîtres bretonnes</span>
                    </a>{" "}
                  </div>{" "}
                  <div
                    className="group relative cursor-pointer flex w-full flex-col opacity-0 animate-slide-in-fade-up fcb-anim"
                    style={{ animationDelay: "calc(3 * 70ms)" }}
                  >
                    {" "}
                    <div className="clip-corner relative aspect-square w-full overflow-hidden fcb-contain">
                      <img
                        alt="Bon de commande"
                        className="duration-medium-1 ease-standard transition-all group-hover:scale-105"
                        src="/assets/img/boutique-flyer_terroir-1080.webp"
                        srcSet="/assets/img/boutique-flyer_terroir-640.webp 640w, /assets/img/boutique-flyer_terroir-1080.webp 1080w"
                        sizes="(min-width:64rem) 23vw, 85vw"
                        width="1200"
                        height="1698"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>{" "}
                    <div className="gap-md mt-md flex flex-col">
                      {" "}
                      <span className="typography-overline-2 uppercase text-content-secondary">
                        Fondue · Raclette · Huîtres
                      </span>{" "}
                      <div className="overflow-hidden">
                        <p className="typography-body-3-semibold min-h-9 truncate text-base text-content-primary">
                          Bon de commande
                        </p>
                      </div>{" "}
                    </div>{" "}
                    <a
                      aria-label="Bon de commande"
                      className="before:absolute before:inset-0 before:cursor-pointer absolute inset-0 z-10"
                      href="/content/fondue-raclette-huitres/"
                    >
                      <span className="sr-only">Bon de commande</span>
                    </a>{" "}
                  </div>
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <section className="bg-dark-background-primary">
          {" "}
          <div className="container py-2xl md:py-4xl">
            {" "}
            <div className="fcb-stats opacity-0 animate-fade-in fcb-anim">
              {" "}
              <div className="fcb-stat">
                <b>1945</b>
                <span>Année de fondation</span>
              </div>{" "}
              <div className="fcb-stat">
                <b>290</b>
                <span>Juniors, filles et garçons</span>
              </div>{" "}
              <div className="fcb-stat">
                <b>150+</b>
                <span>Joueurs actifs</span>
              </div>{" "}
              <div className="fcb-stat">
                <b>20+</b>
                <span>Équipes juniors</span>
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <section className="module-mosaic-grid-block">
          {" "}
          <div className="mb-0 py-2xl md:py-4xl overflow-hidden container">
            {" "}
            <h2 className="typography-headline-3 text-content-primary mb-10">Jaune et Noir</h2>{" "}
            <div className="gap-2xl flex flex-col">
              {" "}
              <div className="md:hidden">
                {" "}
                <div
                  aria-roledescription="carousel"
                  aria-label="Jaune et Noir"
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
                      <div className="flex pr-xl gap-md">
                        <div
                          aria-roledescription="slide"
                          className="shrink-0 grow-0 h-[490px] max-w-full min-w-[328px] w-[85vw]"
                          role="group"
                        >
                          {" "}
                          <div className="group cursor-pointer clip-corner relative flex items-end overflow-hidden h-full fcb-hover-zoom">
                            {" "}
                            <div className="h-full w-full absolute">
                              <img
                                alt=""
                                className="fcb-cover"
                                src="/assets/img/mosaique-m-apropos-640.webp"
                                srcSet="/assets/img/mosaique-m-apropos-640.webp 640w"
                                sizes="(min-width:64rem) 33vw, 90vw"
                                width="1066"
                                height="674"
                                loading="lazy"
                                decoding="async"
                              />
                            </div>
                            <div
                              className="pointer-events-none absolute inset-x-0 bottom-0 h-full"
                              style={{
                                background:
                                  "linear-gradient(0deg, rgb(var(--noir-profond)) 0%, rgba(var(--noir-profond), 0) 75%)",
                              }}
                            ></div>{" "}
                            <div className="relative flex h-full w-full flex-col justify-end">
                              {" "}
                              <div className="relative transition-transform duration-300 md:translate-y-[calc(100%-67px)] md:group-hover:translate-y-0">
                                {" "}
                                <div className="px-xl pb-xl relative flex flex-col">
                                  {" "}
                                  <h2 className="typography-title-3 mb-lg text-dark-content-primary">À propos</h2>{" "}
                                  <div className="typography-body-5 text-dark-content-secondary max-w-[280px] transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100">
                                    <p className="typography-paragraph mb-4 md:mb-6 [&amp;:only-of-type]:mb-0 md:[&amp;:only-of-type]:mb-0 [&amp;:last-of-type]:mb-0 md:[&amp;:last-of-type]:mb-0">
                                      Fondé en 1945, le FC Bussigny rassemble joueurs, entraîneurs, bénévoles et
                                      supporters.
                                    </p>
                                  </div>{" "}
                                  <div
                                    className="typography-button-1 flex items-center transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100"
                                    style={{ color: "var(--fcb-yellow)" }}
                                  >
                                    Découvrir
                                    <svg aria-hidden="true" className="inline h-4 w-4">
                                      <use href="/assets/icons.svg#chevron-right"></use>
                                    </svg>
                                  </div>{" "}
                                </div>{" "}
                              </div>{" "}
                            </div>{" "}
                            <a
                              aria-label="À propos"
                              className="before:absolute before:inset-0 before:cursor-pointer absolute inset-0 z-10"
                              href="/le-club/a-propos/"
                            >
                              <span className="sr-only">À propos</span>
                            </a>{" "}
                          </div>
                        </div>
                        <div
                          aria-roledescription="slide"
                          className="shrink-0 grow-0 h-[490px] max-w-full min-w-[328px] w-[85vw]"
                          role="group"
                        >
                          {" "}
                          <div className="group cursor-pointer clip-corner relative flex items-end overflow-hidden h-full fcb-hover-zoom">
                            {" "}
                            <div className="h-full w-full absolute">
                              <img
                                alt=""
                                className="fcb-cover"
                                src="/assets/img/mosaique-m-cheer-1280.webp"
                                srcSet="/assets/img/mosaique-m-cheer-640.webp 640w, /assets/img/mosaique-m-cheer-1280.webp 1280w"
                                sizes="(min-width:64rem) 33vw, 90vw"
                                width="1760"
                                height="410"
                                loading="lazy"
                                decoding="async"
                              />
                            </div>
                            <div
                              className="pointer-events-none absolute inset-x-0 bottom-0 h-full"
                              style={{
                                background:
                                  "linear-gradient(0deg, rgb(var(--noir-profond)) 0%, rgba(var(--noir-profond), 0) 75%)",
                              }}
                            ></div>{" "}
                            <div className="relative flex h-full w-full flex-col justify-end">
                              {" "}
                              <div className="relative transition-transform duration-300 md:translate-y-[calc(100%-67px)] md:group-hover:translate-y-0">
                                {" "}
                                <div className="px-xl pb-xl relative flex flex-col">
                                  {" "}
                                  <h2 className="typography-title-3 mb-lg text-dark-content-primary">Comité</h2>{" "}
                                  <div className="typography-body-5 text-dark-content-secondary max-w-[280px] transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100">
                                    <p className="typography-paragraph mb-4 md:mb-6 [&amp;:only-of-type]:mb-0 md:[&amp;:only-of-type]:mb-0 [&amp;:last-of-type]:mb-0 md:[&amp;:last-of-type]:mb-0">
                                      Les femmes et les hommes qui font vivre le club au quotidien.
                                    </p>
                                  </div>{" "}
                                  <div
                                    className="typography-button-1 flex items-center transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100"
                                    style={{ color: "var(--fcb-yellow)" }}
                                  >
                                    Découvrir
                                    <svg aria-hidden="true" className="inline h-4 w-4">
                                      <use href="/assets/icons.svg#chevron-right"></use>
                                    </svg>
                                  </div>{" "}
                                </div>{" "}
                              </div>{" "}
                            </div>{" "}
                            <a
                              aria-label="Comité"
                              className="before:absolute before:inset-0 before:cursor-pointer absolute inset-0 z-10"
                              href="/le-club/comite/"
                            >
                              <span className="sr-only">Comité</span>
                            </a>{" "}
                          </div>
                        </div>
                        <div
                          aria-roledescription="slide"
                          className="shrink-0 grow-0 h-[490px] max-w-full min-w-[328px] w-[85vw]"
                          role="group"
                        >
                          {" "}
                          <div className="group cursor-pointer clip-corner relative flex items-end overflow-hidden h-full fcb-hover-zoom">
                            {" "}
                            <div className="h-full w-full absolute fcb-contain fcb-yellow">
                              <img
                                alt=""
                                className=""
                                src="/assets/img/mosaique-m-club200-460.webp"
                                srcSet="/assets/img/mosaique-m-club200-460.webp 460w"
                                sizes="(min-width:64rem) 33vw, 90vw"
                                width="460"
                                height="700"
                                loading="lazy"
                                decoding="async"
                              />
                            </div>
                            <div
                              className="pointer-events-none absolute inset-x-0 bottom-0 h-full"
                              style={{
                                background:
                                  "linear-gradient(0deg, rgb(var(--noir-profond)) 0%, rgba(var(--noir-profond), 0) 75%)",
                              }}
                            ></div>{" "}
                            <div className="relative flex h-full w-full flex-col justify-end">
                              {" "}
                              <div className="relative transition-transform duration-300 md:translate-y-[calc(100%-67px)] md:group-hover:translate-y-0">
                                {" "}
                                <div className="px-xl pb-xl relative flex flex-col">
                                  {" "}
                                  <h2 className="typography-title-3 mb-lg text-dark-content-primary">
                                    Club des 200
                                  </h2>{" "}
                                  <div className="typography-body-5 text-dark-content-secondary max-w-[280px] transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100">
                                    <p className="typography-paragraph mb-4 md:mb-6 [&amp;:only-of-type]:mb-0 md:[&amp;:only-of-type]:mb-0 [&amp;:last-of-type]:mb-0 md:[&amp;:last-of-type]:mb-0">
                                      Une entité indépendante qui soutient les projets de nos juniors.
                                    </p>
                                  </div>{" "}
                                  <div
                                    className="typography-button-1 flex items-center transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100"
                                    style={{ color: "var(--fcb-yellow)" }}
                                  >
                                    Découvrir
                                    <svg aria-hidden="true" className="inline h-4 w-4">
                                      <use href="/assets/icons.svg#chevron-right"></use>
                                    </svg>
                                  </div>{" "}
                                </div>{" "}
                              </div>{" "}
                            </div>{" "}
                            <a
                              aria-label="Club des 200"
                              className="before:absolute before:inset-0 before:cursor-pointer absolute inset-0 z-10"
                              href="/le-club/club-des-200/"
                            >
                              <span className="sr-only">Club des 200</span>
                            </a>{" "}
                          </div>
                        </div>
                        <div
                          aria-roledescription="slide"
                          className="shrink-0 grow-0 h-[490px] max-w-full min-w-[328px] w-[85vw]"
                          role="group"
                        >
                          {" "}
                          <div className="group cursor-pointer clip-corner relative flex items-end overflow-hidden h-full fcb-hover-zoom">
                            {" "}
                            <div className="h-full w-full absolute">
                              <img
                                alt=""
                                className="fcb-cover"
                                src="/assets/img/mosaique-m-celebration-1280.webp"
                                srcSet="/assets/img/mosaique-m-celebration-640.webp 640w, /assets/img/mosaique-m-celebration-1280.webp 1280w"
                                sizes="(min-width:64rem) 33vw, 90vw"
                                width="1920"
                                height="560"
                                loading="lazy"
                                decoding="async"
                              />
                            </div>
                            <div
                              className="pointer-events-none absolute inset-x-0 bottom-0 h-full"
                              style={{
                                background:
                                  "linear-gradient(0deg, rgb(var(--noir-profond)) 0%, rgba(var(--noir-profond), 0) 75%)",
                              }}
                            ></div>{" "}
                            <div className="relative flex h-full w-full flex-col justify-end">
                              {" "}
                              <div className="relative transition-transform duration-300 md:translate-y-[calc(100%-67px)] md:group-hover:translate-y-0">
                                {" "}
                                <div className="px-xl pb-xl relative flex flex-col">
                                  {" "}
                                  <h2 className="typography-title-3 mb-lg text-dark-content-primary">
                                    Sponsoring
                                  </h2>{" "}
                                  <div className="typography-body-5 text-dark-content-secondary max-w-[280px] transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100">
                                    <p className="typography-paragraph mb-4 md:mb-6 [&amp;:only-of-type]:mb-0 md:[&amp;:only-of-type]:mb-0 [&amp;:last-of-type]:mb-0 md:[&amp;:last-of-type]:mb-0">
                                      Associez votre entreprise aux couleurs jaune et noir.
                                    </p>
                                  </div>{" "}
                                  <div
                                    className="typography-button-1 flex items-center transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100"
                                    style={{ color: "var(--fcb-yellow)" }}
                                  >
                                    Découvrir
                                    <svg aria-hidden="true" className="inline h-4 w-4">
                                      <use href="/assets/icons.svg#chevron-right"></use>
                                    </svg>
                                  </div>{" "}
                                </div>{" "}
                              </div>{" "}
                            </div>{" "}
                            <a
                              aria-label="Sponsoring"
                              className="before:absolute before:inset-0 before:cursor-pointer absolute inset-0 z-10"
                              href="/partenaires/"
                            >
                              <span className="sr-only">Sponsoring</span>
                            </a>{" "}
                          </div>
                        </div>
                        <div
                          aria-roledescription="slide"
                          className="shrink-0 grow-0 h-[490px] max-w-full min-w-[328px] w-[85vw]"
                          role="group"
                        >
                          {" "}
                          <div className="group cursor-pointer clip-corner relative flex items-end overflow-hidden h-full fcb-hover-zoom">
                            {" "}
                            <div className="h-full w-full absolute">
                              <img
                                alt=""
                                className="fcb-cover"
                                src="/assets/img/mosaique-m-yellow_pattern-1280.webp"
                                srcSet="/assets/img/mosaique-m-yellow_pattern-640.webp 640w, /assets/img/mosaique-m-yellow_pattern-1280.webp 1280w"
                                sizes="(min-width:64rem) 33vw, 90vw"
                                width="1920"
                                height="498"
                                loading="lazy"
                                decoding="async"
                              />
                            </div>
                            <div
                              className="pointer-events-none absolute inset-x-0 bottom-0 h-full"
                              style={{
                                background:
                                  "linear-gradient(0deg, rgb(var(--noir-profond)) 0%, rgba(var(--noir-profond), 0) 75%)",
                              }}
                            ></div>{" "}
                            <div className="relative flex h-full w-full flex-col justify-end">
                              {" "}
                              <div className="relative transition-transform duration-300 md:translate-y-[calc(100%-67px)] md:group-hover:translate-y-0">
                                {" "}
                                <div className="px-xl pb-xl relative flex flex-col">
                                  {" "}
                                  <h2 className="typography-title-3 mb-lg text-dark-content-primary">
                                    Avantages membres
                                  </h2>{" "}
                                  <div className="typography-body-5 text-dark-content-secondary max-w-[280px] transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100">
                                    <p className="typography-paragraph mb-4 md:mb-6 [&amp;:only-of-type]:mb-0 md:[&amp;:only-of-type]:mb-0 [&amp;:last-of-type]:mb-0 md:[&amp;:last-of-type]:mb-0">
                                      Des réductions chez nos partenaires.
                                    </p>
                                  </div>{" "}
                                  <div
                                    className="typography-button-1 flex items-center transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100"
                                    style={{ color: "var(--fcb-yellow)" }}
                                  >
                                    Découvrir
                                    <svg aria-hidden="true" className="inline h-4 w-4">
                                      <use href="/assets/icons.svg#chevron-right"></use>
                                    </svg>
                                  </div>{" "}
                                </div>{" "}
                              </div>{" "}
                            </div>{" "}
                            <a
                              aria-label="Avantages membres"
                              className="before:absolute before:inset-0 before:cursor-pointer absolute inset-0 z-10"
                              href="/le-club/avantages-membres/"
                            >
                              <span className="sr-only">Avantages membres</span>
                            </a>{" "}
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
                </div>
              </div>{" "}
              <div className="gap-lg md:gap-2xl hidden h-[600px] grid-cols-12 grid-rows-2 md:grid">
                {" "}
                <div className="group cursor-pointer clip-corner relative flex items-end overflow-hidden col-span-12 md:col-span-4 row-span-2 fcb-hover-zoom">
                  {" "}
                  <div className="h-full w-full absolute">
                    <img
                      alt=""
                      className="fcb-cover"
                      src="/assets/img/mosaique-apropos-640.webp"
                      srcSet="/assets/img/mosaique-apropos-640.webp 640w"
                      sizes="(min-width:64rem) 33vw, 90vw"
                      width="1066"
                      height="674"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-full"
                    style={{
                      background:
                        "linear-gradient(0deg, rgb(var(--noir-profond)) 0%, rgba(var(--noir-profond), 0) 75%)",
                    }}
                  ></div>{" "}
                  <div className="relative flex h-full w-full flex-col justify-end">
                    {" "}
                    <div className="relative transition-transform duration-300 md:translate-y-[calc(100%-67px)] md:group-hover:translate-y-0">
                      {" "}
                      <div className="px-xl pb-xl relative flex flex-col">
                        {" "}
                        <h2 className="typography-title-3 mb-lg text-dark-content-primary">À propos</h2>{" "}
                        <div className="typography-body-5 text-dark-content-secondary max-w-[280px] transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100">
                          <p className="typography-paragraph mb-4 md:mb-6 [&amp;:only-of-type]:mb-0 md:[&amp;:only-of-type]:mb-0 [&amp;:last-of-type]:mb-0 md:[&amp;:last-of-type]:mb-0">
                            Fondé en 1945, le FC Bussigny rassemble joueurs, entraîneurs, bénévoles et supporters autour
                            de la même passion.
                          </p>
                        </div>{" "}
                        <div
                          className="typography-button-1 flex items-center transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100"
                          style={{ color: "var(--fcb-yellow)" }}
                        >
                          Découvrir
                          <svg aria-hidden="true" className="inline h-4 w-4">
                            <use href="/assets/icons.svg#chevron-right"></use>
                          </svg>
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                  <a
                    aria-label="À propos"
                    className="before:absolute before:inset-0 before:cursor-pointer absolute inset-0 z-10"
                    href="/le-club/a-propos/"
                  >
                    <span className="sr-only">À propos</span>
                  </a>{" "}
                </div>{" "}
                <div className="group cursor-pointer clip-corner relative flex items-end overflow-hidden col-span-12 row-span-1 md:col-span-4 fcb-hover-zoom">
                  {" "}
                  <div className="h-full w-full absolute">
                    <img
                      alt=""
                      className="fcb-cover"
                      src="/assets/img/mosaique-comite-1280.webp"
                      srcSet="/assets/img/mosaique-comite-640.webp 640w, /assets/img/mosaique-comite-1280.webp 1280w"
                      sizes="(min-width:64rem) 33vw, 90vw"
                      width="1760"
                      height="410"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-full"
                    style={{
                      background:
                        "linear-gradient(0deg, rgb(var(--noir-profond)) 0%, rgba(var(--noir-profond), 0) 75%)",
                    }}
                  ></div>{" "}
                  <div className="relative flex h-full w-full flex-col justify-end">
                    {" "}
                    <div className="relative transition-transform duration-300 md:translate-y-[calc(100%-67px)] md:group-hover:translate-y-0">
                      {" "}
                      <div className="px-xl pb-xl relative flex flex-col">
                        {" "}
                        <h2 className="typography-title-3 mb-lg text-dark-content-primary">Comité</h2>{" "}
                        <div className="typography-body-5 text-dark-content-secondary max-w-[280px] transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100">
                          <p className="typography-paragraph mb-4 md:mb-6 [&amp;:only-of-type]:mb-0 md:[&amp;:only-of-type]:mb-0 [&amp;:last-of-type]:mb-0 md:[&amp;:last-of-type]:mb-0">
                            Les femmes et les hommes qui font vivre le club au quotidien.
                          </p>
                        </div>{" "}
                        <div
                          className="typography-button-1 flex items-center transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100"
                          style={{ color: "var(--fcb-yellow)" }}
                        >
                          Découvrir
                          <svg aria-hidden="true" className="inline h-4 w-4">
                            <use href="/assets/icons.svg#chevron-right"></use>
                          </svg>
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                  <a
                    aria-label="Comité"
                    className="before:absolute before:inset-0 before:cursor-pointer absolute inset-0 z-10"
                    href="/le-club/comite/"
                  >
                    <span className="sr-only">Comité</span>
                  </a>{" "}
                </div>{" "}
                <div className="group cursor-pointer clip-corner relative flex items-end overflow-hidden col-span-12 row-span-1 md:col-span-4 fcb-hover-zoom">
                  {" "}
                  <div className="h-full w-full absolute fcb-contain fcb-yellow">
                    <img
                      alt=""
                      className=""
                      src="/assets/img/mosaique-club200-460.webp"
                      srcSet="/assets/img/mosaique-club200-460.webp 460w"
                      sizes="(min-width:64rem) 33vw, 90vw"
                      width="460"
                      height="700"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-full"
                    style={{
                      background:
                        "linear-gradient(0deg, rgb(var(--noir-profond)) 0%, rgba(var(--noir-profond), 0) 75%)",
                    }}
                  ></div>{" "}
                  <div className="relative flex h-full w-full flex-col justify-end">
                    {" "}
                    <div className="relative transition-transform duration-300 md:translate-y-[calc(100%-67px)] md:group-hover:translate-y-0">
                      {" "}
                      <div className="px-xl pb-xl relative flex flex-col">
                        {" "}
                        <h2 className="typography-title-3 mb-lg text-dark-content-primary">Club des 200</h2>{" "}
                        <div className="typography-body-5 text-dark-content-secondary max-w-[280px] transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100">
                          <p className="typography-paragraph mb-4 md:mb-6 [&amp;:only-of-type]:mb-0 md:[&amp;:only-of-type]:mb-0 [&amp;:last-of-type]:mb-0 md:[&amp;:last-of-type]:mb-0">
                            Une entité indépendante qui soutient les projets de nos juniors.
                          </p>
                        </div>{" "}
                        <div
                          className="typography-button-1 flex items-center transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100"
                          style={{ color: "var(--fcb-yellow)" }}
                        >
                          Découvrir
                          <svg aria-hidden="true" className="inline h-4 w-4">
                            <use href="/assets/icons.svg#chevron-right"></use>
                          </svg>
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                  <a
                    aria-label="Club des 200"
                    className="before:absolute before:inset-0 before:cursor-pointer absolute inset-0 z-10"
                    href="/le-club/club-des-200/"
                  >
                    <span className="sr-only">Club des 200</span>
                  </a>{" "}
                </div>{" "}
                <div className="group cursor-pointer clip-corner relative flex items-end overflow-hidden col-span-12 row-span-1 md:col-span-4 fcb-hover-zoom">
                  {" "}
                  <div className="h-full w-full absolute">
                    <img
                      alt=""
                      className="fcb-cover"
                      src="/assets/img/mosaique-sponsoring-1280.webp"
                      srcSet="/assets/img/mosaique-sponsoring-640.webp 640w, /assets/img/mosaique-sponsoring-1280.webp 1280w"
                      sizes="(min-width:64rem) 33vw, 90vw"
                      width="1920"
                      height="560"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-full"
                    style={{
                      background:
                        "linear-gradient(0deg, rgb(var(--noir-profond)) 0%, rgba(var(--noir-profond), 0) 75%)",
                    }}
                  ></div>{" "}
                  <div className="relative flex h-full w-full flex-col justify-end">
                    {" "}
                    <div className="relative transition-transform duration-300 md:translate-y-[calc(100%-67px)] md:group-hover:translate-y-0">
                      {" "}
                      <div className="px-xl pb-xl relative flex flex-col">
                        {" "}
                        <h2 className="typography-title-3 mb-lg text-dark-content-primary">Sponsoring</h2>{" "}
                        <div className="typography-body-5 text-dark-content-secondary max-w-[280px] transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100">
                          <p className="typography-paragraph mb-4 md:mb-6 [&amp;:only-of-type]:mb-0 md:[&amp;:only-of-type]:mb-0 [&amp;:last-of-type]:mb-0 md:[&amp;:last-of-type]:mb-0">
                            Associez votre entreprise aux couleurs jaune et noir.
                          </p>
                        </div>{" "}
                        <div
                          className="typography-button-1 flex items-center transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100"
                          style={{ color: "var(--fcb-yellow)" }}
                        >
                          Découvrir
                          <svg aria-hidden="true" className="inline h-4 w-4">
                            <use href="/assets/icons.svg#chevron-right"></use>
                          </svg>
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                  <a
                    aria-label="Sponsoring"
                    className="before:absolute before:inset-0 before:cursor-pointer absolute inset-0 z-10"
                    href="/partenaires/"
                  >
                    <span className="sr-only">Sponsoring</span>
                  </a>{" "}
                </div>{" "}
                <div className="group cursor-pointer clip-corner relative flex items-end overflow-hidden col-span-12 row-span-1 md:col-span-4 fcb-hover-zoom">
                  {" "}
                  <div className="h-full w-full absolute">
                    <img
                      alt=""
                      className="fcb-cover"
                      src="/assets/img/mosaique-avantages-1280.webp"
                      srcSet="/assets/img/mosaique-avantages-640.webp 640w, /assets/img/mosaique-avantages-1280.webp 1280w"
                      sizes="(min-width:64rem) 33vw, 90vw"
                      width="1920"
                      height="498"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-full"
                    style={{
                      background:
                        "linear-gradient(0deg, rgb(var(--noir-profond)) 0%, rgba(var(--noir-profond), 0) 75%)",
                    }}
                  ></div>{" "}
                  <div className="relative flex h-full w-full flex-col justify-end">
                    {" "}
                    <div className="relative transition-transform duration-300 md:translate-y-[calc(100%-67px)] md:group-hover:translate-y-0">
                      {" "}
                      <div className="px-xl pb-xl relative flex flex-col">
                        {" "}
                        <h2 className="typography-title-3 mb-lg text-dark-content-primary">Avantages membres</h2>{" "}
                        <div className="typography-body-5 text-dark-content-secondary max-w-[280px] transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100">
                          <p className="typography-paragraph mb-4 md:mb-6 [&amp;:only-of-type]:mb-0 md:[&amp;:only-of-type]:mb-0 [&amp;:last-of-type]:mb-0 md:[&amp;:last-of-type]:mb-0">
                            Des réductions chez nos partenaires sur présentation de la carte de membre.
                          </p>
                        </div>{" "}
                        <div
                          className="typography-button-1 flex items-center transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100"
                          style={{ color: "var(--fcb-yellow)" }}
                        >
                          Découvrir
                          <svg aria-hidden="true" className="inline h-4 w-4">
                            <use href="/assets/icons.svg#chevron-right"></use>
                          </svg>
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                  <a
                    aria-label="Avantages membres"
                    className="before:absolute before:inset-0 before:cursor-pointer absolute inset-0 z-10"
                    href="/le-club/avantages-membres/"
                  >
                    <span className="sr-only">Avantages membres</span>
                  </a>{" "}
                </div>
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <section className="module-banner-block">
          <div className="mb-0 py-2xl md:py-4xl relative container">
            {" "}
            <div className="clip-corner relative mx-auto flex w-full flex-col items-center justify-center overflow-hidden md:min-h-[488px] md:flex-row fcb-yellow-bg">
              {" "}
              <img
                alt=""
                className="absolute inset-0 z-0 h-full w-full object-cover"
                src="/assets/img/banniere-legs-1280.webp"
                srcSet="/assets/img/banniere-legs-1280.webp 1280w"
                sizes="100vw"
                width="1459"
                height="745"
                loading="lazy"
                decoding="async"
                style={{ opacity: ".16", mixBlendMode: "multiply" }}
              />{" "}
              <div className="md:pl-3xl lg:pl-club-padding z-20 flex h-full w-full flex-col items-center justify-between px-4 md:flex-row">
                {" "}
                <div className="gap-xl flex w-full flex-col justify-center pt-8 md:max-w-100 md:pt-0 opacity-0 animate-slide-in-fade-up fcb-anim">
                  {" "}
                  <h3 className="typography-title-2">Rejoins le FC Bussigny</h3>{" "}
                  <p className="typography-body-3 md:pr-xl">
                    Filles et garçons, débutants ou confirmés : nos journées tests et nos entraîneurs t’attendent.
                    Inscris-toi en quelques clics !
                  </p>{" "}
                  <div className="flex flex-row gap-4">
                    <a
                      className="flex items-center justify-center duration-150 ease-in-out cursor-pointer typography-button-1 h-12 px-xl gap-sm fcb-btn fcb-btn-dark "
                      href="/contact/#inscription"
                    >
                      Inscription joueur
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
