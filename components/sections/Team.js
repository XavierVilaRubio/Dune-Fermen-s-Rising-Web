import TeamCard from "components/TeamCard/TeamCard";

export default function Team({ t }) {
  return (
    <section id="team">
      <h2 className="mb-12">{t("team.title")}</h2>
      <div className=" container items-center justify-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-12 sm:px-1">
        <TeamCard
          name={"Alejandro Moreno"}
          rol={t("team.cardAlejandro.rol")}
          twitter={"#"}
          github={"#"}
          linkedin={"#"}
          text={t("team.cardAlejandro.text")}
        />
        <TeamCard
          name={"Prova"}
          rol={t("team.cardAlejandro.rol")}
          twitter={"#"}
          github={"#"}
          linkedin={"#"}
          text={t("team.cardAlejandro.text")}
        />
      </div>
    </section>
  );
}
