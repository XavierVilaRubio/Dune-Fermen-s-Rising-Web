import styles from "styles/Home.module.css";
import logo from "public/logo.png";
import Image from "next/image";
import TextImage from "components/TextImage/TextImage";

export default function HomeSection({ t }) {
  return (
    <section id="home" className={styles.section}>
      <div className={styles.video}></div>
      <div className="container">
        <div className={styles.logoWrapper}>
          <Image src={logo} alt={"Dune: Fermen's Rising Logo"} />
        </div>
        <h1 className={styles.title}>{t("home.headline")}</h1>
        <p className={styles.catchphrase}>{t("home.catchphrase")}</p>
      </div>
      <div className="container">
        <TextImage
          text={t("home.card1.text")}
          image={"https://picsum.photos/400/200"}
        />
        <TextImage
          text={t("home.card2.text")}
          image={"https://picsum.photos/400/200"}
        />
        <TextImage
          text={t("home.card3.text")}
          image={"https://picsum.photos/400/200"}
        />
      </div>
      <div className={styles.downloadWrapper}>
        <a className={styles.downloadButton}>{t("home.downloadText")}</a>
      </div>
    </section>
  );
}
