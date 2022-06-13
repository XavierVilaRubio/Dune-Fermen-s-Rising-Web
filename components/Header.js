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
      <div className="sticky top-0 z-10 flex flex-col w-full px-4 align-middle headerWrapper">
        <header className="container flex flex-col justify-between align-top md:max-w-full md:flex-row">
          <div className="flex flex-row justify-between py-5 align-middle">
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
          <div className="flex flex-col clear-both w-full gap-4 overflow-hidden text-center md:contents mobileNavItems">
            <nav className="flex items-center justify-center">
              <ul className="flex flex-col gap-4 pr-0 my-0 list-none md:flex-row md:gap-8">
                {[
                  { href: "/#home", text: t("nav.home"), id: "homeNav" },
                  { href: "/#team", text: t("nav.team"), id: "teamNav" },
                  {
                    href: "/#production",
                    text: t("nav.production"),
                    id: "productionNav",
                  },
                  {
                    href: "/#engine",
                    text: t("nav.engine"),
                    id: "engineNav",
                  },
                  {
                    href: "/#post_mortem",
                    text: t("nav.post_mortem"),
                    id: "post_mortemNav",
                  },
                ].map(({ href, text, id }) => (
                  <li key={href}>
                    <a
                      href={href}
                      id={id}
                      className="font-medium transition-colors link text-brown-500 hover:text-orange-500"
                    >
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex flex-col items-center justify-center gap-4 mb-4 md:flex-row md:mb-0">
              <a
                href="#download"
                className="px-10 py-2.5 font-medium text-white transition-colors border-2 rounded-lg downloadButton bg-brown-500 border-brown-500 hover:bg-orange-500"
              >
                {t("nav.download")}
              </a>

              <p className="text-sm font-semibold">
                {query?.lang === "en" ? (
                  <LanguageSwitcher lang="es">ES</LanguageSwitcher>
                ) : (
                  <LanguageSwitcher lang="en">EN</LanguageSwitcher>
                )}
              </p>
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

        @media (min-width: 768px) {
          .mobileNavItems {
            height: auto;
          }

          #homeNav {
            color: ${scrollPosition < 1822 ? "#fb923c" : ""};
          }
          #teamNav {
            color: ${scrollPosition > 1822 && scrollPosition < 2392
              ? "#fb923c"
              : ""};
          }
          #productionNav {
            color: ${scrollPosition > 2392 && scrollPosition < 5060
              ? "#fb923c"
              : ""};
          }
          #engineNav {
            color: ${scrollPosition > 5060 && scrollPosition < 6141
              ? "#fb923c"
              : ""};
          }
          #post_mortemNav {
            color: ${scrollPosition > 6141 ? "#fb923c" : ""};
          }
        }
      `}</style>
    </>
  );
}
