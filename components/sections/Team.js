import * as React from "react";

import TeamCard from "components/TeamCard";
import { useState } from "react";

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
  }

  return (
    <section id="team">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 mt-4">
        {t("team.title")}
      </h2>
      <div className="flex gap-8 mb-6">
        <button onClick={() => filterTeamMembers("ALL")}>ALL</button>
        <button onClick={() => filterTeamMembers("LEADS")}>LEADS</button>
        <button onClick={() => filterTeamMembers("PROGRAMMING")}>
          PROGRAMING
        </button>
        <button onClick={() => filterTeamMembers("DESIGN")}>DESIGN</button>
        <button onClick={() => filterTeamMembers("ART")}>ART</button>
      </div>
      <div className="container items-center justify-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-12 sm:px-1">
        {filteredMembers.map((member, index) => (
          <TeamCard key={index} {...member} />
        ))}
      </div>
    </section>
  );
}
