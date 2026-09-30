// Converti depuis fcbussigny-nouveau/contact/index.html (structure identique) par build_bussigny_next.py
import type { Metadata } from "next";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import Sponsors from "@/components/Sponsors";
import Socials from "@/components/Socials";

export const metadata: Metadata = {
  title: { absolute: "Contact | FC Bussigny" },
  description: "Inscription joueur et demande d’informations au FC Bussigny.",
  openGraph: {
    title: "Contact | FC Bussigny",
    description: "Inscription joueur et demande d’informations au FC Bussigny.",
    type: "website",
  },
};

const PATH = "/contact/";

export default function ContactPage() {
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
                Contact
              </div>
            </div>
          </h1>{" "}
          <div className="grid grid-cols-12 gap-y-2xl md:gap-2xl">
            {" "}
            <div className="col-span-12 lg:col-span-8" data-tabs="">
              {" "}
              <div className="py-xl md:pb-2xl gap-xl flex overflow-x-auto fcb-tabs" role="tablist">
                {" "}
                <button
                  className="typography-overline-1 flex shrink-0 cursor-pointer items-center justify-start transition-colors duration-200 hover:text-content-primary h-8 flex-col text-content-secondary"
                  role="tab"
                  type="button"
                  aria-selected="true"
                  aria-controls="p-inscription"
                  id="inscription"
                  data-hash="inscription"
                >
                  Inscription joueur
                </button>{" "}
                <button
                  className="typography-overline-1 flex shrink-0 cursor-pointer items-center justify-start transition-colors duration-200 hover:text-content-primary h-8 flex-col text-content-secondary"
                  role="tab"
                  type="button"
                  aria-selected="false"
                  aria-controls="p-informations"
                  id="informations"
                  data-hash="informations"
                >
                  Demande d’informations
                </button>{" "}
              </div>{" "}
              <div id="p-inscription" role="tabpanel" aria-labelledby="inscription">
                {" "}
                <p className="typography-paragraph text-content-secondary mb-2xl">
                  Pour rejoindre une de nos équipes, remplissez uniquement le formulaire « Inscription joueur ».
                </p>{" "}
                <form
                  className="fcb-form"
                  data-mailto="info@fcbussigny.ch"
                  data-subject="Inscription joueur – site FC Bussigny"
                >
                  <div className="fcb-field">
                    <label className="typography-overline-1" htmlFor="i-prenom">
                      Prénom *
                    </label>
                    <input id="i-prenom" name="i-prenom" type="text" required autoComplete="given-name" />
                  </div>
                  <div className="fcb-field">
                    <label className="typography-overline-1" htmlFor="i-nom">
                      Nom de famille *
                    </label>
                    <input id="i-nom" name="i-nom" type="text" required autoComplete="family-name" />
                  </div>
                  <div className="fcb-field">
                    <label className="typography-overline-1" htmlFor="i-email">
                      E-mail *
                    </label>
                    <input id="i-email" name="i-email" type="email" required autoComplete="email" />
                  </div>
                  <div className="fcb-field">
                    <label className="typography-overline-1" htmlFor="i-tel">
                      Téléphone portable *
                    </label>
                    <input id="i-tel" name="i-tel" type="tel" required autoComplete="tel" />
                  </div>
                  <div className="fcb-field full">
                    <label className="typography-overline-1" htmlFor="i-adresse">
                      Adresse *
                    </label>
                    <input id="i-adresse" name="i-adresse" type="text" required autoComplete="street-address" />
                  </div>
                  <div className="fcb-field">
                    <label className="typography-overline-1" htmlFor="i-naissance">
                      Date de naissance *
                    </label>
                    <input id="i-naissance" name="i-naissance" type="date" required autoComplete="bday" />
                  </div>
                  <div className="fcb-field">
                    <label className="typography-overline-1" htmlFor="i-profil">
                      Je suis *
                    </label>
                    <select id="i-profil" name="i-profil" required>
                      <option value="">Choisissez une option</option>
                      <option>Joueur</option>
                      <option>Joueuse</option>
                      <option>Parent d’un joueur / d’une joueuse</option>
                      <option>Entraîneur</option>
                      <option>Bénévole</option>
                    </select>
                  </div>
                  <div className="fcb-field full">
                    <label className="typography-overline-1" htmlFor="i-message">
                      Message
                    </label>
                    <textarea id="i-message" name="i-message"></textarea>
                  </div>
                  <div className="full flex flex-wrap items-center gap-lg">
                    <button
                      className="flex items-center justify-center duration-150 ease-in-out cursor-pointer bg-background-brand-jaune hover:bg-background-brand-jaune-hover typography-button-1 h-12 px-xl gap-sm fcb-btn"
                      type="submit"
                    >
                      Envoyer
                      <svg aria-hidden="true" className="inline h-6 w-6">
                        <use href="/assets/icons.svg#chevron-right"></use>
                      </svg>
                    </button>
                    <span className="fcb-form-note">
                      Votre logiciel de messagerie s’ouvrira avec votre demande pré-remplie.
                    </span>
                  </div>
                  <p className="full typography-body-4-semibold" data-ok="" hidden>
                    Merci ! Il ne vous reste plus qu’à envoyer l’e-mail préparé.
                  </p>
                </form>{" "}
              </div>{" "}
              <div id="p-informations" role="tabpanel" aria-labelledby="informations" hidden>
                {" "}
                <p className="typography-paragraph text-content-secondary mb-2xl">
                  Pour toutes questions et informations supplémentaires, n’hésitez pas à nous faire parvenir votre
                  demande. Nous vous répondrons dans les meilleurs délais.
                </p>{" "}
                <form
                  className="fcb-form"
                  data-mailto="info@fcbussigny.ch"
                  data-subject="Demande d’informations – site FC Bussigny"
                >
                  <div className="fcb-field">
                    <label className="typography-overline-1" htmlFor="n-prenom">
                      Prénom *
                    </label>
                    <input id="n-prenom" name="n-prenom" type="text" required autoComplete="given-name" />
                  </div>
                  <div className="fcb-field">
                    <label className="typography-overline-1" htmlFor="n-nom">
                      Nom de famille *
                    </label>
                    <input id="n-nom" name="n-nom" type="text" required autoComplete="family-name" />
                  </div>
                  <div className="fcb-field">
                    <label className="typography-overline-1" htmlFor="n-email">
                      E-mail *
                    </label>
                    <input id="n-email" name="n-email" type="email" required autoComplete="email" />
                  </div>
                  <div className="fcb-field">
                    <label className="typography-overline-1" htmlFor="n-tel">
                      Téléphone portable *
                    </label>
                    <input id="n-tel" name="n-tel" type="tel" required autoComplete="tel" />
                  </div>
                  <div className="fcb-field full">
                    <label className="typography-overline-1" htmlFor="n-adresse">
                      Adresse
                    </label>
                    <input id="n-adresse" name="n-adresse" type="text" autoComplete="street-address" />
                  </div>
                  <div className="fcb-field full">
                    <label className="typography-overline-1" htmlFor="n-message">
                      Message *
                    </label>
                    <textarea id="n-message" name="n-message" required></textarea>
                  </div>
                  <div className="full flex flex-wrap items-center gap-lg">
                    <button
                      className="flex items-center justify-center duration-150 ease-in-out cursor-pointer bg-background-brand-jaune hover:bg-background-brand-jaune-hover typography-button-1 h-12 px-xl gap-sm fcb-btn"
                      type="submit"
                    >
                      Envoyer
                      <svg aria-hidden="true" className="inline h-6 w-6">
                        <use href="/assets/icons.svg#chevron-right"></use>
                      </svg>
                    </button>
                    <span className="fcb-form-note">
                      Votre logiciel de messagerie s’ouvrira avec votre demande pré-remplie.
                    </span>
                  </div>
                  <p className="full typography-body-4-semibold" data-ok="" hidden>
                    Merci ! Il ne vous reste plus qu’à envoyer l’e-mail préparé.
                  </p>
                </form>{" "}
              </div>{" "}
            </div>{" "}
            <div className="col-span-12 lg:col-span-4">
              {" "}
              <div className="clip-corner fcb-contact-card md:sticky" style={{ top: "90px" }}>
                {" "}
                <img
                  alt=""
                  className="fcb-wm2"
                  src="/assets/brand/ecusson-480.png"
                  width="385"
                  height="480"
                  loading="lazy"
                />{" "}
                <h2 className="typography-title-3 mb-lg">FC Bussigny</h2>{" "}
                <p className="typography-body-4 mb-xl" style={{ color: "#ffffffcc" }}>
                  Case Postale 45
                  <br />
                  1030 Bussigny
                  <br />
                  Suisse
                </p>{" "}
                <a className="typography-button-2 fcb-kicker" href="mailto:info@fcbussigny.ch">
                  info@fcbussigny.ch
                </a>{" "}
                <ul className="fcb-socials">
                  <li>
                    <a
                      href="https://www.facebook.com/100064193824961"
                      target="_blank"
                      rel="noopener"
                      aria-label="FC Bussigny sur Facebook"
                      title="Facebook"
                    >
                      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                        <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.52 1.49-3.91 3.78-3.91 1.1 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.44 2.91h-2.34V22c4.78-.79 8.43-4.94 8.43-9.94Z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/fc_bussigny/"
                      target="_blank"
                      rel="noopener"
                      aria-label="FC Bussigny sur Instagram"
                      title="Instagram"
                    >
                      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                        <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16ZM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.72-2.13 1.38A5.88 5.88 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.79.72 1.46 1.38 2.13a5.88 5.88 0 0 0 2.13 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.88 5.88 0 0 0 2.13-1.38 5.88 5.88 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.88 5.88 0 0 0-1.38-2.13A5.88 5.88 0 0 0 19.86.63C19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0Zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.4-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88Z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.tiktok.com/@fcbussigny"
                      target="_blank"
                      rel="noopener"
                      aria-label="FC Bussigny sur TikTok"
                      title="TikTok"
                    >
                      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                        <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5 2.6 2.6 0 0 1-2.59-2.6 2.6 2.6 0 0 1 3.36-2.49V9.66a5.68 5.68 0 0 0-.77-.05A5.7 5.7 0 0 0 4.17 15.3 5.7 5.7 0 0 0 9.86 21a5.7 5.7 0 0 0 5.69-5.7V9.01a7.35 7.35 0 0 0 4.28 1.37V7.3s-1.88.09-3.23-1.48Z" />
                      </svg>
                    </a>
                  </li>
                </ul>{" "}
                <hr className="my-xl" style={{ borderColor: "#ffffff1a" }} />{" "}
                <p className="typography-body-5" style={{ color: "#ffffffb3" }}>
                  Terrain des Isles &amp; complexe des Rueyres, Bussigny
                </p>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <Sponsors />
        <Socials />{" "}
      </main>
      <Footer />
    </>
  );
}
