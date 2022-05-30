import { useState, useEffect } from "react";

import HamburguerIcon from "./Icons/Hamburger";
import CloseIcon from "./Icons/Close";
import Image from "next/image";
import logo from "public/logo.png";
import { useLanguageQuery, LanguageSwitcher } from "next-export-i18n";

export default function Header({ t }) {
  const [query] = useLanguageQuery();
  // console.log(query);
  // console.log(t);

  const [open, setOpen] = useState(false);

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="flex flex-col align-middle sticky top-0 w-full px-4 z-10 headerWrapper">
        <header className="container md:max-w-full flex flex-col md:flex-row justify-between align-top">
          <div className="flex flex-row justify-between align-middle py-5">
            <Image
              src={logo}
              width={54}
              height={54}
              alt="Dune: Fermen's Rising logo"
            />
            {/* <h1>Dune</h1> */}
            <button
              className="items-center md:hidden"
              onClick={() => setOpen(!open)}
            >
              {open ? <CloseIcon /> : <HamburguerIcon />}
            </button>
          </div>
          <div className="flex flex-col md:contents text-center gap-4 clear-both w-full overflow-hidden mobileNavItems">
            <nav className="flex items-center justify-center">
              <ul className="flex flex-col md:flex-row md:gap-8 list-none my-0 pr-0 gap-4">
                {[
                  { href: "#home", text: t("nav.home") },
                  { href: "#team", text: t("nav.team") },
                  { href: "#production", text: t("nav.production") },
                  { href: "#engine", text: t("nav.engine") },
                  { href: "#post_mortem", text: t("nav.post_mortem") },
                ].map(({ href, text }) => (
                  <li key={href}>
                    <a href={href} className="link font-medium">
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex flex-col items-center justify-center gap-4 md:flex-row mb-4 md:mb-0">
              <a
                href="#download"
                className="downloadButton font-medium rounded-lg text-white"
              >
                {t("nav.download")}
              </a>
              {query?.lang === "en" ? (
                <LanguageSwitcher lang="es" className="esp">
                  🇪🇸
                </LanguageSwitcher>
              ) : (
                <LanguageSwitcher lang="en" className="eng">
                  🇺🇸
                </LanguageSwitcher>
              )}
            </div>
          </div>
        </header>
      </div>
      <style jsx>{`
        .headerWrapper {
          box-shadow: ${scrollPosition === 0
            ? "0"
            : "0 10px 10px rgba(0, 0, 0, .05)"};
          background-color: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(4px);
        }

        .mobileNavItems {
          height: ${open ? "auto" : "0"};
          transition: height 0.4s ease-in-out;
        }

        .link {
          color: var(--color-brown);
        }

        .link:hover {
          color: var(--color-secondary);
        }

        .downloadButton {
          padding: 0.75rem 3rem;
          background-color: var(--color-brown);
        }

        @media (min-width: 768px) {
          .mobileNavItems {
            height: auto;
          }
        }
      `}</style>
    </>
  );
}
