import styles from "styles/Home.module.css";
import logo from "public/logo.png";
import Image from "next/image";
import TextImage from "components/TextImage/TextImage";

export default function HomeSection({ lang, data }) {
  return (
    <section id="home" className={styles.section}>
      <div className={styles.video}></div>
      <div className="container">
        <div className={styles.logoWrapper}>
          <Image src={logo} alt={"Dune: Fermen's Rising Logo"} />
        </div>
        <h1 className={styles.title}>Dune: Fermen&rsquo;s Rising</h1>
        <p className={styles.catchphrase}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          deserunt aliquid quod repudiandae quo ipsa omnis ab, a illum
          voluptate?
        </p>
      </div>
      <div className="container">
        {data.map((sec) => (
          <TextImage data={sec} key={sec} />
        ))}
      </div>
      <div className={styles.downloadWrapper}>
        <a className={styles.downloadButton}>Download the game</a>
      </div>
    </section>
  );
}
