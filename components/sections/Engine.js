import DownloadButton from "components/DownloadButton";
import TextImage from "components/TextImage";

export default function Engine({ t }) {
  return (
    <section id="engine">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 mt-4">
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
