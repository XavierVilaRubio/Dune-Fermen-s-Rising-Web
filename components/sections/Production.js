import TextImage from "components/TextImage/TextImage";

export default function Production({ t }) {
  return (
    <section id="production">
      <h2>{t("production.title")}</h2>
      <div className="container">
        <TextImage
          text={t("production.card1.text")}
          image={t("production.card1.image")}
        />
        <TextImage
          text={t("production.card2.text")}
          image={t("production.card2.image")}
        />
        <TextImage
          text={t("production.card3.text")}
          image={t("production.card3.image")}
        />
      </div>
    </section>
  );
}
