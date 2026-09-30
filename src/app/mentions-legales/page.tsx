// Converti depuis fcbussigny-nouveau/mentions-legales/index.html (structure identique) par build_bussigny_next.py
import type { Metadata } from "next";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: { absolute: "Mentions légales | FC Bussigny" },
  description: "Mentions légales du site du FC Bussigny.",
  openGraph: {
    title: "Mentions légales | FC Bussigny",
    description: "Mentions légales du site du FC Bussigny.",
    type: "website",
  },
};

const PATH = "/mentions-legales/";

export default function MentionsLegalesPage() {
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
                Mentions
              </div>
            </div>
            <div className="flex overflow-y-hidden">
              <div className="animate-reveal-text-vertical inline-block fcb-anim" style={{ animationDelay: "165ms" }}>
                légales
              </div>
            </div>
          </h1>{" "}
          <div className="richtext sm:max-w-[752px]">
            <h3 className="typography-headline-3 mb-lg">Éditeur du site</h3>
            <p className="typography-paragraph mb-4 md:mb-6 [&amp;:only-of-type]:mb-0 md:[&amp;:only-of-type]:mb-0 [&amp;:last-of-type]:mb-0 md:[&amp;:last-of-type]:mb-0">
              Football-Club de Bussigny (FC Bussigny), association sportive – Case Postale 45, 1030 Bussigny, Suisse.
              Contact :{" "}
              <a className="fcb-link" href="mailto:info@fcbussigny.ch">
                info@fcbussigny.ch
              </a>
              .
            </p>
            <h3 className="typography-headline-3 mb-lg mt-2xl">Propriété intellectuelle</h3>
            <p className="typography-paragraph mb-4 md:mb-6 [&amp;:only-of-type]:mb-0 md:[&amp;:only-of-type]:mb-0 [&amp;:last-of-type]:mb-0 md:[&amp;:last-of-type]:mb-0">
              Le logo, les photographies et les contenus de ce site sont la propriété du FC Bussigny ou de leurs auteurs
              respectifs. Toute reproduction sans autorisation préalable est interdite. Les logos des partenaires
              restent la propriété de leurs détenteurs.
            </p>
            <h3 className="typography-headline-3 mb-lg mt-2xl">Données personnelles</h3>
            <p className="typography-paragraph mb-4 md:mb-6 [&amp;:only-of-type]:mb-0 md:[&amp;:only-of-type]:mb-0 [&amp;:last-of-type]:mb-0 md:[&amp;:last-of-type]:mb-0">
              Les formulaires de ce site ne stockent aucune donnée : ils préparent un e-mail dans votre messagerie, que
              vous restez libre d’envoyer. Les informations transmises au club sont utilisées uniquement pour répondre à
              votre demande et gérer les inscriptions, conformément à la loi fédérale sur la protection des données
              (LPD).
            </p>
            <h3 className="typography-headline-3 mb-lg mt-2xl">Cookies</h3>
            <p className="typography-paragraph mb-4 md:mb-6 [&amp;:only-of-type]:mb-0 md:[&amp;:only-of-type]:mb-0 [&amp;:last-of-type]:mb-0 md:[&amp;:last-of-type]:mb-0">
              Ce site n’utilise aucun cookie ni outil de mesure d’audience.
            </p>
          </div>{" "}
        </div>{" "}
      </main>
      <Footer />
    </>
  );
}
