import TextImage from "components/TextImage";

export default function Production({ t }) {
  return (
    <section className="container mb-16" id="production">
      <h2 className="mt-4 mb-12 text-4xl font-bold md:text-5xl text-customOrange-500">
        {t("production.title")}
      </h2>
      <h3 className="mt-8 mb-4 text-3xl font-bold underline text-customOrange-600">
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
      <h3 className="mt-8 mb-4 text-3xl font-bold underline text-customOrange-600">
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
      <h3 className="mt-8 mb-4 text-3xl font-bold underline text-customOrange-600">
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
      <h3 className="mt-8 mb-4 text-3xl font-bold underline text-customOrange-600">
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
