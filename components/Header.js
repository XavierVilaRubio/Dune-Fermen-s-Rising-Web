import { useState, useEffect } from "react";

import styles from "styles/Header.module.css";
import HamburguerIcon from "./Icons/Hamburger";
import CloseIcon from "./Icons/Close";
import Image from "next/image";
import { useRouter } from "next/router";
import logo from "public/logo.png";

export default function Header({ lang }) {
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

  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push("/", "/", { locale });
  };

  const router = useRouter();
  const { locale } = router;

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
                  <a href="#home">{lang.home}</a>
                </li>
                <li>
                  <a href="#team">{lang.team}</a>
                </li>
                <li>
                  <a href="#production">{lang.production}</a>
                </li>
                <li>
                  <a href="#engine">{lang.engine}</a>
                </li>
                <li>
                  <a href="#post-mortem">{lang.post_mortem}</a>
                </li>
              </ul>
            </nav>
            <div className={styles.leftButtons}>
              <a href="#download" className={styles.downloadButton}>
                {lang.download}
              </a>
              <button value="en" className="eng" onClick={changeLanguage}>
                ENG
              </button>
              <button value="es" className="esp" onClick={changeLanguage}>
                ESP
              </button>
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

        .eng {
          display: ${locale === "en" ? "none" : "flex"};
          font-weight: ${locale === "en" ? "800" : "600"};
        }

        .esp {
          display: ${locale === "es" ? "none" : "flex"};
          font-weight: ${locale === "es" ? "800" : "600"};
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
    </>
  );
}
