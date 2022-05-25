import TextImage from "components/TextImage/TextImage";

export default function Team({ t }) {
  return (
    <section id="team">
      <h2>{t("team.title")}</h2>
      <div className="container">
        <TextImage
          text={t("team.card1.text")}
          image={"https://picsum.photos/400/200"}
        />
        <TextImage
          text={t("team.card2.text")}
          image={"https://picsum.photos/400/200"}
        />
        <TextImage
          text={t("team.card3.text")}
          image={"https://picsum.photos/400/200"}
        />
      </div>
    </section>
  );
}
