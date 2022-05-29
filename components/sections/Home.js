import styles from "styles/Home.module.css";
import logo from "public/logo.png";
import Image from "next/image";
import TextImage from "components/TextImage";

export default function HomeSection({ t }) {
  return (
    <section id="home" className={styles.section}>
      <div className={styles.video}></div>
      <div className="container">
        <div className="w-40 md:w-52 max-w-sm mx-auto">
          <Image src={logo} alt={"Dune: Fermen's Rising Logo"} />
        </div>
        <h1 className="text-3xl md:text-4xl font-semibold md:font-bold text-center mb-4">
          {t("home.headline")}
        </h1>
        <p className="md:text-xl text-center">{t("home.catchphrase")}</p>
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
      <div className="my-16 cursor-pointer">
        <a className={`${styles.downloadButton} text-2xl md:text-3xl`}>
          {t("home.downloadText")}
        </a>
      </div>
    </section>
  );
}
