import TextImage from "components/TextImage/TextImage";

export default function Team({ t }) {
  return (
    <section id="team">
      <h2>{t("team.title")}</h2>
      <div className="container">
        <TextImage text={t("team.card1.text")} image={t("team.card1.image")} />
        <TextImage text={t("team.card2.text")} image={t("team.card2.image")} />
        <TextImage text={t("team.card3.text")} image={t("team.card3.image")} />
      </div>
    </section>
  );
}
