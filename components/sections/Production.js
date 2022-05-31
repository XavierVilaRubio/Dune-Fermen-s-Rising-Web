import TextImage from "components/TextImage";

export default function Production({ t }) {
  return (
    <section className="container" id="production">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 mt-4">
        {t("production.title")}
      </h2>
      <h3 className="text-3xl font-bold mt-8 underline">
        {t("production.subtitle1")}
      </h3>
      <TextImage
        text={t("production.card1.text")}
        image={"https://picsum.photos/400/200"}
      />
      <TextImage
        text={t("production.card2.text")}
        image={"https://picsum.photos/400/200"}
      />
      <h3 className="text-3xl font-bold mt-8 underline">
        {t("production.subtitle2")}
      </h3>
      <TextImage
        text={t("production.card3.text")}
        image={"https://picsum.photos/400/200"}
      />
      <TextImage
        text={t("production.card1.text")}
        image={"https://picsum.photos/400/200"}
      />
      <h3 className="text-3xl font-bold mt-8 underline">
        {t("production.subtitle3")}
      </h3>
      <TextImage
        text={t("production.card2.text")}
        image={"https://picsum.photos/400/200"}
      />
      <TextImage
        text={t("production.card3.text")}
        image={"https://picsum.photos/400/200"}
      />
      <h3 className="text-3xl font-bold mt-8 underline">
        {t("production.subtitle4")}
      </h3>
      <TextImage
        text={t("production.card1.text")}
        image={"https://picsum.photos/400/200"}
      />
      <TextImage
        text={t("production.card2.text")}
        image={"https://picsum.photos/400/200"}
      />
    </section>
  );
}
