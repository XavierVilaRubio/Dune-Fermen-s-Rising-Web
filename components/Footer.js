import styles from "styles/Footer.module.css";

import Image from "next/image";
import logo from "public/logo.png";

export default function Footer({ lang }) {
  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.footerContent}>
        <div className={styles.logo}>
          <Image
            src={logo}
            width={54}
            height={54}
            alt="Dune: Fermen's Rising logo"
          />
        </div>
        <div className={styles.social}>
          <p>Follow us:</p>
          <ul className={styles.socialItems}>
            <li>
              <a href="">Twitter</a>
            </li>
            <li>
              <a href="">Tik Tok</a>
            </li>
            <li>
              <a href="">Discord</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
