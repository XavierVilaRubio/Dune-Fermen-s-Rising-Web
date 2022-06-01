import TextImage from "components/TextImage";

export default function Production({ t }) {
  return (
    <section className="container mt-16" id="production">
      <h2 className="mt-4 text-4xl font-bold text-orange-500 md:text-5xl">
        {t("production.title")}
      </h2>
      <h3 className="mt-10 mb-2 text-3xl font-bold text-orange-600 underline">
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
      <h3 className="mt-10 mb-2 text-3xl font-bold text-orange-600 underline">
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
      <h3 className="mt-10 mb-2 text-3xl font-bold text-orange-600 underline">
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
      <h3 className="mt-10 mb-2 text-3xl font-bold text-orange-600 underline">
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
