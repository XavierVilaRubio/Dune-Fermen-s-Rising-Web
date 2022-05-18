import styles from "./TextImage.module.css";
import Image from "next/image";

export default function TextImage({ data }) {
  return (
    <div className={styles.textImageRow}>
      <p className={styles.cardText}>{data.text}</p>
      <div className={styles.imageWrapper}>
        <Image src={data.image} width={800} height={450} alt="" />
      </div>
    </div>
  );
}
