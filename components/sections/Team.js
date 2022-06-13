import * as React from "react";

// import TeamCard from "components/TeamCard";
import dynamic from "next/dynamic";
const TeamCard = dynamic(() => import("components/TeamCard"), { ssr: false });

export default function Team({ t }) {
  const teamMembers = [
    {
      name: "Denis Deconinck",
      slug: "denis",
      twitter: "#",
      github: "#",
      linkedin: "#",
      cat: "LEADS",
    },
    {
      name: "Alejandro Moreno",
      slug: "alejandro",
      twitter: "https://twitter.com",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      cat: "LEADS",
    },
    {
      name: "Ismael Tejada",
      slug: "ismael",
      twitter: "#",
      github: "#",
      linkedin: "#",
      cat: "LEADS",
    },
    {
      name: "Carles Garriga",
      slug: "carles",
      twitter: "#",
      github: "#",
      linkedin: "#",
      cat: "LEADS",
    },
    {
      name: "Arnau Bonada",
      slug: "arnaub",
      twitter: "#",
      github: "#",
      linkedin: "#",
      cat: "PROGRAMMING",
    },
    {
      name: "Carlos Megia",
      slug: "carlos",
      twitter: "#",
      github: "#",
      linkedin: "#",
      cat: "PROGRAMMING",
    },
    {
      name: "David Gonzalez",
      slug: "davidg",
      twitter: "#",
      github: "#",
      linkedin: "#",
      cat: "PROGRAMMING",
    },
    {
      name: "Himar Bravo",
      slug: "himar",
      twitter: "#",
      github: "#",
      linkedin: "#",
      cat: "PROGRAMMING",
    },
    {
      name: "Ignasi Pardo",
      slug: "ignasi",
      twitter: "#",
      github: "#",
      linkedin: "#",
      cat: "PROGRAMMING",
    },
    {
      name: "Isaac Digón",
      slug: "isaacd",
      twitter: "#",
      github: "#",
      linkedin: "#",
      cat: "PROGRAMMING",
    },
    {
      name: "Lucas Pérez",
      slug: "lucas",
      twitter: "#",
      github: "#",
      linkedin: "#",
      cat: "PROGRAMMING",
    },
    {
      name: "Magdalena Ostrowska",
      slug: "magdalena",
      twitter: "#",
      github: "#",
      linkedin: "#",
      cat: "PROGRAMMING",
    },
    {
      name: "Mario Hernandez",
      slug: "mario",
      twitter: "#",
      github: "#",
      linkedin: "#",
      cat: "PROGRAMMING",
    },
    {
      name: "Oriol Bernal",
      slug: "oriolb",
      twitter: "#",
      github: "#",
      linkedin: "#",
      cat: "PROGRAMMING",
    },
    {
      name: "Oriol Valverde",
      slug: "oriolv",
      twitter: "#",
      github: "#",
      linkedin: "#",
      cat: "PROGRAMMING",
    },
    {
      name: "Òscar Canales",
      slug: "oscarc",
      twitter: "#",
      github: "#",
      linkedin: "#",
      cat: "PROGRAMMING",
    },
    {
      name: "Raul Cano",
      slug: "raul",
      twitter: "#",
      github: "#",
      linkedin: "#",
      cat: "PROGRAMMING",
    },
    {
      name: "Unai Diaz",
      slug: "unai",
      twitter: "#",
      github: "#",
      linkedin: "#",
      cat: "PROGRAMMING",
    },
    {
      name: "Alex Gesti",
      slug: "alex",
      twitter: "#",
      github: "#",
      linkedin: "#",
      cat: "ART",
    },
    {
      name: "David Lira",
      slug: "davidl",
      twitter: "#",
      github: "#",
      linkedin: "#",
      cat: "ART",
    },
    {
      name: "Marc Ramos",
      slug: "marcra",
      twitter: "#",
      github: "#",
      linkedin: "#",
      cat: "ART",
    },
    {
      name: "Maria Garrigoles",
      slug: "maria",
      twitter: "#",
      github: "#",
      linkedin: "#",
      cat: "ART",
    },
    {
      name: "Òscar Royo",
      slug: "oscarr",
      twitter: "#",
      github: "#",
      linkedin: "#",
      cat: "ART",
    },
    {
      name: "Pol Pallarés",
      slug: "polp",
      twitter: "#",
      github: "#",
      linkedin: "#",
      cat: "ART",
    },
    {
      name: "Adrian Aroca",
      slug: "adrian",
      twitter: "#",
      github: "#",
      linkedin: "#",
      cat: "DESIGN",
    },
    {
      name: "Albert Pou",
      slug: "albert",
      twitter: "#",
      github: "#",
      linkedin: "#",
      cat: "DESIGN",
    },
    {
      name: "Arnau Ustrell",
      slug: "arnauu",
      twitter: "#",
      github: "#",
      linkedin: "#",
      cat: "DESIGN",
    },
    {
      name: "Enric Morales",
      slug: "enric",
      twitter: "#",
      github: "#",
      linkedin: "#",
      cat: "DESIGN",
    },
    {
      name: "Isaacc",
      slug: "alejandro",
      twitter: "#",
      github: "#",
      linkedin: "#",
      cat: "DESIGN",
    },
    {
      name: "Marc Pavón",
      slug: "marcp",
      twitter: "#",
      github: "#",
      linkedin: "#",
      cat: "DESIGN",
    },
    {
      name: "Marc Ruiz",
      slug: "marcru",
      twitter: "#",
      github: "#",
      linkedin: "#",
      cat: "DESIGN",
    },
    {
      name: "Max Llovera",
      slug: "max",
      twitter: "#",
      github: "#",
      linkedin: "#",
      cat: "DESIGN",
    },
    {
      name: "Pau Motta",
      slug: "pau",
      twitter: "#",
      github: "#",
      linkedin: "#",
      cat: "DESIGN",
    },
    {
      name: "Pol Vázquez",
      slug: "polv",
      twitter: "#",
      github: "#",
      linkedin: "#",
      cat: "DESIGN",
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
      <section className="container mt-16" id="team">
        <h2 className="mt-4 text-4xl font-bold text-orange-500 md:text-5xl">
          {t("team.title")}
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mt-12 mb-6 md:gap-8">
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
        <div className="container grid items-center justify-center grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredMembers.map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </div>
      </section>
    </>
  );
}
