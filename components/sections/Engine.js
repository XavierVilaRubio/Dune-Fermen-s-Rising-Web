import DownloadButton from "components/DownloadButton";
import TextImage from "components/TextImage";

export default function Engine({ t }) {
  return (
    <section className="container mt-16" id="engine">
      <h2 className="mt-4 mb-8 text-4xl font-bold text-orange-500 md:text-5xl">
        {t("engine.title")}
      </h2>
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
      <DownloadButton t={t} />
    </section>
  );
}
