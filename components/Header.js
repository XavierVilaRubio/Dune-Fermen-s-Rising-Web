import { useState, useEffect } from "react";

import styles from "styles/Header.module.css";
import HamburguerIcon from "./Icons/Hamburger";
import CloseIcon from "./Icons/Close";
import Image from "next/image";
import logo from "public/logo.png";
import { useLanguageQuery, LanguageSwitcher } from "next-export-i18n";

export default function Header({ t }) {
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
      <div className={`${styles.headerWrapper} headerWrapper`}>
        <header className={`${styles.header} header`}>
          <div className={styles.navTop}>
            <Image
              src={logo}
              width={54}
              height={54}
              alt="Dune: Fermen's Rising logo"
            />
            {/* <h1>Dune</h1> */}
            <button
              className={styles.hamburgerButton}
              onClick={() => setOpen(!open)}
            >
              {open ? <CloseIcon /> : <HamburguerIcon />}
            </button>
          </div>
          <div className={`${styles.navItems} mobileNavItems`}>
            <nav>
              <ul className={styles.navLinks}>
                <li>
                  <a href="#home">{t("nav.home")}</a>
                </li>
                <li>
                  <a href="#team">{t("nav.team")}</a>
                </li>
                <li>
                  <a href="#production">{t("nav.production")}</a>
                </li>
                <li>
                  <a href="#engine">{t("nav.engine")}</a>
                </li>
                <li>
                  <a href="#post-mortem">{t("nav.post_mortem")}</a>
                </li>
              </ul>
            </nav>
            <div className={styles.leftButtons}>
              <a href="#download" className={styles.downloadButton}>
                {t("nav.download")}
              </a>
              <LanguageSwitcher lang="es" className="esp">
                es
              </LanguageSwitcher>
              |
              <LanguageSwitcher lang="en" className="eng">
                en
              </LanguageSwitcher>
            </div>
          </div>
        </header>
      </div>
      <style jsx>{`
        .headerWrapper {
          box-shadow: ${scrollPosition === 0
            ? "0"
            : "0 10px 10px rgba(0, 0, 0, .05)"};
        }

        .mobileNavItems {
          height: ${open ? "280px" : "0"};
        }

        @media (min-width: 768px) {
          .mobileNavItems {
            height: auto;
          }
        }
      `}</style>
      {/* .eng {
          display: ${locale === "en" ? "none" : "flex"};
          font-weight: ${locale === "en" ? "800" : "600"};
        }

        .esp {
          display: ${locale === "es" ? "none" : "flex"};
          font-weight: ${locale === "es" ? "800" : "600"};
        } */}
    </>
  );
}
