// Converti depuis fcbussigny-nouveau/404.html (structure identique) par build_bussigny_next.py
import type { Metadata } from "next";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: { absolute: "Page introuvable | FC Bussigny" },
  description: "Page introuvable.",
  openGraph: { title: "Page introuvable | FC Bussigny", description: "Page introuvable.", type: "website" },
};

const PATH = "/404/";

export default function NotFound() {
  return (
    <>
      <Header path={PATH} />
      <Menu path={PATH} />
      <main id="contenu" className="relative z-10 min-h-dvh bg-background-primary">
        {" "}
        <div className="container py-5xl text-center flex flex-col items-center gap-xl">
          {" "}
          <span className="typography-overline-1 fcb-kicker">Erreur 404</span>{" "}
          <h1 className="typography-headline-1 flex flex-wrap justify-center gap-x-2">
            <div className="flex overflow-y-hidden">
              <div className="animate-reveal-text-vertical inline-block fcb-anim" style={{ animationDelay: "120ms" }}>
                Hors-jeu
              </div>
            </div>
            <div className="flex overflow-y-hidden">
              <div className="animate-reveal-text-vertical inline-block fcb-anim" style={{ animationDelay: "165ms" }}>
                !
              </div>
            </div>
            <div className="flex overflow-y-hidden">
              <div className="animate-reveal-text-vertical inline-block fcb-anim" style={{ animationDelay: "210ms" }}>
                Page
              </div>
            </div>
            <div className="flex overflow-y-hidden">
              <div className="animate-reveal-text-vertical inline-block fcb-anim" style={{ animationDelay: "255ms" }}>
                introuvable
              </div>
            </div>
          </h1>{" "}
          <p className="typography-paragraph text-content-secondary">
            La page que vous cherchez n’existe pas ou a été déplacée.
          </p>{" "}
          <a
            className="flex items-center justify-center duration-150 ease-in-out cursor-pointer bg-background-brand-jaune hover:bg-background-brand-jaune-hover typography-button-1 h-12 px-xl gap-sm fcb-btn "
            href="/"
          >
            Retour à l’accueil
            <svg aria-hidden="true" className="inline h-6 w-6">
              <use href="/assets/icons.svg#chevron-right"></use>
            </svg>
          </a>{" "}
        </div>{" "}
      </main>
      <Footer />
    </>
  );
}
