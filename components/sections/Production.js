import TextImage from "components/TextImage";

export default function Production({ t }) {
  return (
    <section id="production">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 mt-4">
        {t("production.title")}
      </h2>
      <div className="container">
        <TextImage
          text={t("production.card1.text")}
          image={"https://picsum.photos/400/200"}
        />
        <TextImage
          text={t("production.card2.text")}
          image={"https://picsum.photos/400/200"}
        />
        <TextImage
          text={t("production.card3.text")}
          image={"https://picsum.photos/400/200"}
        />
      </div>
    </section>
  );
}
