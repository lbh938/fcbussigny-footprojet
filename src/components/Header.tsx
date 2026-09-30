import { isActive } from "@/lib/active";

/** En-tête (variante « accueil » transparente et variante standard), balisage identique au site statique. */
export default function Header({ path, home = false }: { path: string; home?: boolean }) {
  if (home) {
    return (
      <>
        <a className="fcb-skip typography-button-2" href="#contenu">
          Aller au contenu
        </a>
        <header className="bg-background-primary text-content-primary h-header h-0 overflow-hidden">
          {" "}
          <div className="h-header fixed top-0 z-50 w-full fcb-header is-top" data-home="">
            {" "}
            <div className="fcb-bar">
              {" "}
              <div className="flex h-full w-full">
                {" "}
                <div className="pl-lg gap-2xl flex h-full w-full flex-row items-center justify-between md:justify-normal md:pl-0">
                  {" "}
                  <div className="order-last ml-auto flex h-full md:order-first md:ml-0 md:justify-normal">
                    {" "}
                    <button
                      aria-controls="fcb-menu"
                      aria-expanded="false"
                      aria-label="Ouvrir le menu"
                      data-menu-open=""
                      className="typography-burger flex h-14 w-14 cursor-pointer flex-col items-center justify-center md:z-10 md:h-18 md:w-18 fcb-burger"
                      type="button"
                    >
                      {" "}
                      <svg aria-hidden="true" className="inline h-6 w-6">
                        <use href="/assets/icons.svg#burger"></use>
                      </svg>
                      <span className="mt-xs hidden md:inline-block">menu</span>{" "}
                    </button>{" "}
                  </div>{" "}
                  <a aria-label="FC Bussigny – accueil" className="fcb-logo" href="/">
                    {" "}
                    <img alt="" src="/assets/brand/ecusson-96.png" width="77" height="96" />{" "}
                    <span className="fcb-wordmark">
                      FC Bussigny<small>Depuis 1945</small>
                    </span>{" "}
                  </a>{" "}
                  <ul className="typography-navigation gap-2xl relative hidden h-full bg-inherit text-inherit lg:flex fcb-nav">
                    <li>
                      <a
                        className="flex h-full items-center transition-opacity hover:opacity-60"
                        href="/actualite/"
                        aria-current={isActive(path, "/actualite/")}
                      >
                        Actualités
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex h-full items-center transition-opacity hover:opacity-60"
                        href="/equipes/"
                        aria-current={isActive(path, "/equipes/")}
                      >
                        Équipes
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex h-full items-center transition-opacity hover:opacity-60"
                        href="/evenements/"
                        aria-current={isActive(path, "/evenements/")}
                      >
                        Événements
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex h-full items-center transition-opacity hover:opacity-60"
                        href="/le-club/"
                        aria-current={isActive(path, "/le-club/")}
                      >
                        Le Club
                      </a>
                    </li>
                  </ul>{" "}
                </div>{" "}
                <div className="md:pr-2xl hidden flex-1 items-center md:flex fcb-right">
                  {" "}
                  <a
                    className="typography-button-2 px-md flex h-8 items-center justify-center transition-opacity hover:opacity-60"
                    href="/partenaires/"
                  >
                    Sponsoring
                  </a>{" "}
                  <a
                    className="typography-button-2 px-md flex h-8 items-center justify-center transition-opacity hover:opacity-60"
                    href="/contact/"
                  >
                    Contact
                  </a>{" "}
                  <a className="typography-button-2 fcb-cta" href="/contact/#inscription">
                    Inscription
                  </a>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </header>
      </>
    );
  }
  return (
    <>
      <a className="fcb-skip typography-button-2" href="#contenu">
        Aller au contenu
      </a>
      <header className="bg-background-primary text-content-primary h-header">
        {" "}
        <div className="h-header fixed top-0 z-50 w-full fcb-header">
          {" "}
          <div className="fcb-bar">
            {" "}
            <div className="flex h-full w-full">
              {" "}
              <div className="pl-lg gap-2xl flex h-full w-full flex-row items-center justify-between md:justify-normal md:pl-0">
                {" "}
                <div className="order-last ml-auto flex h-full md:order-first md:ml-0 md:justify-normal">
                  {" "}
                  <button
                    aria-controls="fcb-menu"
                    aria-expanded="false"
                    aria-label="Ouvrir le menu"
                    data-menu-open=""
                    className="typography-burger flex h-14 w-14 cursor-pointer flex-col items-center justify-center md:z-10 md:h-18 md:w-18 fcb-burger"
                    type="button"
                  >
                    {" "}
                    <svg aria-hidden="true" className="inline h-6 w-6">
                      <use href="/assets/icons.svg#burger"></use>
                    </svg>
                    <span className="mt-xs hidden md:inline-block">menu</span>{" "}
                  </button>{" "}
                </div>{" "}
                <a aria-label="FC Bussigny – accueil" className="fcb-logo" href="/">
                  {" "}
                  <img alt="" src="/assets/brand/ecusson-96.png" width="77" height="96" />{" "}
                  <span className="fcb-wordmark">
                    FC Bussigny<small>Depuis 1945</small>
                  </span>{" "}
                </a>{" "}
                <ul className="typography-navigation gap-2xl relative hidden h-full bg-inherit text-inherit lg:flex fcb-nav">
                  <li>
                    <a
                      className="flex h-full items-center transition-opacity hover:opacity-60"
                      href="/actualite/"
                      aria-current={isActive(path, "/actualite/")}
                    >
                      Actualités
                    </a>
                  </li>
                  <li>
                    <a
                      className="flex h-full items-center transition-opacity hover:opacity-60"
                      href="/equipes/"
                      aria-current={isActive(path, "/equipes/")}
                    >
                      Équipes
                    </a>
                  </li>
                  <li>
                    <a
                      className="flex h-full items-center transition-opacity hover:opacity-60"
                      href="/evenements/"
                      aria-current={isActive(path, "/evenements/")}
                    >
                      Événements
                    </a>
                  </li>
                  <li>
                    <a
                      className="flex h-full items-center transition-opacity hover:opacity-60"
                      href="/le-club/"
                      aria-current={isActive(path, "/le-club/")}
                    >
                      Le Club
                    </a>
                  </li>
                </ul>{" "}
              </div>{" "}
              <div className="md:pr-2xl hidden flex-1 items-center md:flex fcb-right">
                {" "}
                <a
                  className="typography-button-2 px-md flex h-8 items-center justify-center transition-opacity hover:opacity-60"
                  href="/partenaires/"
                >
                  Sponsoring
                </a>{" "}
                <a
                  className="typography-button-2 px-md flex h-8 items-center justify-center transition-opacity hover:opacity-60"
                  href="/contact/"
                >
                  Contact
                </a>{" "}
                <a className="typography-button-2 fcb-cta" href="/contact/#inscription">
                  Inscription
                </a>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </header>
    </>
  );
}
