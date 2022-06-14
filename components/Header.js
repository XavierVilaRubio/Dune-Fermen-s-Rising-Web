import { useState, useEffect } from "react";

import HamburguerIcon from "./Icons/Hamburger";
import CloseIcon from "./Icons/Close";
import Image from "next/image";
import logo from "public/logo.png";
import { useLanguageQuery, LanguageSwitcher } from "next-export-i18n";
import Link from "next/link";

export default function Header({ t, home }) {
  const [query] = useLanguageQuery();

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
            <Link href={"/"} passHref>
              <Image
                src={logo}
                width={54}
                height={54}
                className="cursor-pointer"
                alt="Dune: Fermen's Rising logo"
              />
            </Link>
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
                  {
                    href: `${home ? "" : "/"}#home`,
                    text: t("nav.home"),
                    id: "homeNav",
                  },
                  {
                    href: `${home ? "" : "/"}#team`,
                    text: t("nav.team"),
                    id: "teamNav",
                  },
                  {
                    href: `${home ? "" : "/"}#production`,
                    text: t("nav.production"),
                    id: "productionNav",
                  },
                  {
                    href: `${home ? "" : "/"}#game`,
                    text: t("nav.game"),
                    id: "gameNav",
                  },
                  {
                    href: `${home ? "" : "/"}#engine`,
                    text: t("nav.engine"),
                    id: "engineNav",
                  },
                  {
                    href: `${home ? "" : "/"}#post_mortem`,
                    text: t("nav.post_mortem"),
                    id: "post_mortemNav",
                  },
                  {
                    href: `${home ? "" : "/"}#contact`,
                    text: t("nav.contact"),
                    id: "contactNav",
                  },
                ].map(({ href, text, id }) => (
                  <li key={href}>
                    {home ? (
                      <a
                        href={href}
                        id={id}
                        className="font-medium transition-colors link text-brown-500 hover:text-orange-500"
                      >
                        {text}
                      </a>
                    ) : (
                      <Link href={href}>
                        <a className="font-medium transition-colors link text-brown-500 hover:text-orange-500">
                          {text}
                        </a>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex flex-col items-center justify-center gap-4 mb-4 md:flex-row md:mb-0">
              <a
                href="https://github.com/Denisdrk6/Dune-Fremen-s-Rising/releases/download/V_1.0/DuneFremensRising-Gold.zip"
                className="px-10 py-2.5 font-medium text-white transition-colors border-2 rounded-lg downloadButton bg-brown-500 border-brown-500 hover:bg-orange-500"
              >
                {t("nav.download")}
              </a>

              {home ? (
                <p className="text-sm font-semibold">
                  {query?.lang === "en" ? (
                    <LanguageSwitcher lang="es">ES</LanguageSwitcher>
                  ) : (
                    <LanguageSwitcher lang="en">EN</LanguageSwitcher>
                  )}
                </p>
              ) : (
                <></>
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

        @media (min-width: 768px) {
          .mobileNavItems {
            height: auto;
          }

          #homeNav {
            color: ${scrollPosition < 2120 ? "#fb923c" : ""};
          }
          #teamNav {
            color: ${scrollPosition > 2120 && scrollPosition < 6568
              ? "#fb923c"
              : ""};
          }
          #productionNav {
            color: ${scrollPosition > 6568 && scrollPosition < 9212
              ? "#fb923c"
              : ""};
          }
          #gameNav {
            color: ${scrollPosition > 9212 && scrollPosition < 10252
              ? "#fb923c"
              : ""};
          }
          #engineNav {
            color: ${scrollPosition > 10252 && scrollPosition < 11220
              ? "#fb923c"
              : ""};
          }
          #post_mortemNav {
            color: ${scrollPosition > 11220 && scrollPosition < 11884
              ? "#fb923c"
              : ""};
          }
          #contactNav {
            color: ${scrollPosition > 11884 ? "#fb923c" : ""};
          }
        }
      `}</style>
    </>
  );
}
