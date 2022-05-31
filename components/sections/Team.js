import * as React from "react";

import TeamCard from "components/TeamCard";

export default function Team({ t }) {
  const teamMembers = [
    {
      name: "Alejandro Moreno",
      rol: t("team.cardAlejandro.rol"),
      twitter: "#",
      github: "#",
      linkedin: "#",
      text: t("team.cardAlejandro.text"),
      cat: "LEADS",
    },
    {
      name: "Prova",
      rol: t("team.cardAlejandro.rol"),
      twitter: "#",
      github: "#",
      linkedin: "#",
      text: t("team.cardAlejandro.text"),
      cat: "PROGRAMMING",
    },
    {
      name: "Prova1",
      rol: t("team.cardAlejandro.rol"),
      twitter: "#",
      github: "#",
      linkedin: "#",
      text: t("team.cardAlejandro.text"),
      cat: "DESIGN",
    },
    {
      name: "Prova2",
      rol: t("team.cardAlejandro.rol"),
      twitter: "#",
      github: "#",
      linkedin: "#",
      text: t("team.cardAlejandro.text"),
      cat: "ART",
    },
  ];
  const [filteredMembers, setFilteredMembers] = React.useState(teamMembers);

  function filterTeamMembers(cat) {
    if (cat === "ALL") {
      setFilteredMembers(teamMembers);
    } else {
      setFilteredMembers(
        teamMembers.filter((member) => {
          return member.cat === cat;
        })
      );
    }
    allButton.current.classList.remove("underline");
    leadsButton.current.classList.remove("underline");
    programmingButton.current.classList.remove("underline");
    designButton.current.classList.remove("underline");
    artButton.current.classList.remove("underline");
    switch (cat) {
      case "ALL":
        allButton.current.classList.add("underline");
        return;
      case "LEADS":
        leadsButton.current.classList.add("underline");
        return;
      case "PROGRAMMING":
        programmingButton.current.classList.add("underline");
        return;
      case "DESIGN":
        designButton.current.classList.add("underline");
        return;
      case "ART":
        artButton.current.classList.add("underline");
        return;
    }
  }

  const allButton = React.createRef();
  const leadsButton = React.createRef();
  const programmingButton = React.createRef();
  const designButton = React.createRef();
  const artButton = React.createRef();

  return (
    <>
      <section className="container mb-8" id="team">
        <h2 className="mt-4 mb-12 text-4xl font-bold md:text-5xl text-customOrange-500">
          {t("team.title")}
        </h2>
        <div className="flex gap-8 mb-6">
          <button
            ref={allButton}
            className="underline"
            onClick={() => filterTeamMembers("ALL")}
          >
            ALL
          </button>
          <button ref={leadsButton} onClick={() => filterTeamMembers("LEADS")}>
            LEADS
          </button>
          <button
            ref={programmingButton}
            onClick={() => filterTeamMembers("PROGRAMMING")}
          >
            PROGRAMING
          </button>
          <button
            ref={designButton}
            onClick={() => filterTeamMembers("DESIGN")}
          >
            DESIGN
          </button>
          <button ref={artButton} onClick={() => filterTeamMembers("ART")}>
            ART
          </button>
        </div>
        <div className="container grid items-center justify-center grid-cols-1 gap-4 px-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:px-1">
          {filteredMembers.map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
        </div>
      </section>
    </>
  );
}
