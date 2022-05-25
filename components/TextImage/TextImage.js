import styles from "./TextImage.module.css";
import Image from "next/image";

export default function TextImage({ text, image }) {
  return (
    <div className={styles.textImageRow}>
      <p className={styles.cardText}>{text}</p>
      <div className={styles.imageWrapper}>
        <Image src={image} width={800} height={450} alt="" />
      </div>
    </div>
  );
}
