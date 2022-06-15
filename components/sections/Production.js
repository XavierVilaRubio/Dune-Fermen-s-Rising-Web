import SectionSubtitle from "components/text/SectionSubtitle";
import SectionTitle from "components/text/SectionTitle";
import TextImage from "components/TextImage";
import agile from "public/agile.png";
import tasks from "public/tasks.PNG";
import casting from "public/casting.PNG";

export default function Production({ t }) {
  return (
    <section className="container mt-24" id="production">
      <SectionTitle>{t("production.title")}</SectionTitle>
      <SectionSubtitle>{t("production.subtitle1")}</SectionSubtitle>
      <TextImage
        text={t("production.card1.text")}
        image={agile}
      />
      <SectionSubtitle>{t("production.subtitle2")}</SectionSubtitle>
      <TextImage
        text={t("production.card2.text")}
        image={tasks}
      />
      <SectionSubtitle>{t("production.subtitle3")}</SectionSubtitle>
      <TextImage
        text={t("production.card3.text")}
        image={casting}
      />
    </section>
  );
}
