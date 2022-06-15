import * as React from "react";

// import TeamCard from "components/TeamCard";
import dynamic from "next/dynamic";
import SectionTitle from "components/text/SectionTitle";
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
      image: "/logo.png",
    },
    {
      name: "Alejandro Moreno",
      slug: "alejandro",
      twitter: "https://twitter.com",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      cat: "LEADS",
      image: "/people/Alejandro/profile.png",
    },
    {
      name: "Ismael Tejada",
      slug: "ismael",
      twitter: "https://twitter.com/Isma_thinks?t=PTVjdcMyqaYpja4E5Mbh3Q&s=09",
      github: "https://github.com/IsmaUPC",
      linkedin: "https://www.linkedin.com/in/ismatc/",
      cat: "LEADS",
      image: "/people/Ismael/profile.png",
    },
    {
      name: "Carles Garriga",
      slug: "carles",
      twitter: "https://twitter.com/FireAlfaGaming",
      github: "https://github.com/FireAlfa",
      linkedin: "https://www.linkedin.com/in/carles-garriga-de-la-mota-511540146/",
      image: "/people/Carles/profile.jpeg",
      cat: "LEADS",
    },
    {
      name: "Arnau Bonada",
      slug: "arnaub",
      twitter: "#",
      github: "https://github.com/arnaubonada",
      linkedin: "https://www.linkedin.com/in/arnau-bonada-b66575239/",
      cat: "PROGRAMMING",
      image: "/people/ArnauBonada/profile.jpg",
    },
    {
      name: "Carlos Megia",
      slug: "carlos",
      twitter: "#",
      github: "https://github.com/Chuchocoronel",
      linkedin: "https://www.linkedin.com/in/carlos-megia-zubillaga-b64bb31b7/",
      image: "/people/Carlos/profile.jpeg",
      cat: "PROGRAMMING",
    },
    {
      name: "David Gonzalez",
      slug: "davidg",
      twitter: "https://twitter.com/dvvdbluray",
      github: "https://github.com/MagiX7",
      linkedin: "https://www.linkedin.com/in/david-jes%C3%BAs-gonz%C3%A1lez-l%C3%B3pez-03a2041b1/",
      image: "/people/DavidGonzalez/profile.jpg",
      cat: "PROGRAMMING",
    },
    {
      name: "Himar Bravo",
      slug: "himar",
      twitter: "https://sketchfab.com/himarsus",
      github: "https://github.com/himar33",
      linkedin: "https://www.linkedin.com/in/himar-bravo-gonz%C3%A1lez-bb7a8b1ab/",
      image: "/people/Himar/profile.jpg",
      cat: "PROGRAMMING",
    },
    {
      name: "Ignasi Pardo",
      slug: "ignasi",
      twitter: "https://twitter.com/KuronoaScarlet",
      github: "https://github.com/KuronoaScarlet",
      linkedin: "https://www.linkedin.com/in/ignasi-pardo-carbó-8693a9216/",
      image: "/people/Ignasi/profile.jpg",
      cat: "PROGRAMMING",
    },
    {
      name: "Isaac Digón",
      slug: "isaacd",
      twitter: "#",
      github: "#",
      linkedin: "#",
      image: "/people/IsaacDigon/profile.jpg",
      cat: "PROGRAMMING",
    },
    {
      name: "Lucas Pérez",
      slug: "lucas",
      twitter: "#",
      github: "https://github.com/LucasPG14",
      linkedin: "https://www.linkedin.com/in/lucas-p%C3%A9rez-garc%C3%ADa-4473631b9/",
      image: "/people/Lucas/profile.png",
      cat: "PROGRAMMING",
    },
    {
      name: "Magdalena Ostrowska",
      slug: "magdalena",
      twitter: "#",
      github: "#",
      linkedin: "#",
      image: "/people/Magda/profile.jpeg",
      cat: "PROGRAMMING",
    },
    {
      name: "Mario Hernandez",
      slug: "mario",
      twitter: "https://twitter.com/Mario_HFez",
      github: "https://github.com/MHF13",
      linkedin: "https://www.linkedin.com/in/mario-hernandez-fernandez-333441153/",
      image: "/people/Mario/profile.jpg",
      cat: "PROGRAMMING",
    },
    {
      name: "Oriol Bernal",
      slug: "oriolb",
      twitter: "https://mobile.twitter.com/ThatWasUri",
      github: "https://github.com/UriKurae",
      linkedin: "https://www.linkedin.com/in/oriol-bernal-martinez-54b093176/",
      image: "/people/OriolBernal/profile.jpg",
      cat: "PROGRAMMING",
    },
    {
      name: "Oriol Valverde",
      slug: "oriolv",
      twitter: "https://twitter.com/MakinillaChan",
      github: "https://github.com/Makinilla-maker",
      linkedin: "https://www.linkedin.com/in/oriol-valverde-agramunt-b73a41206/",
      image: "/people/OriolValverde/profile.jpeg",
      cat: "PROGRAMMING",
    },
    {
      name: "Òscar Canales",
      slug: "oscarc",
      twitter: "#",
      github: "#",
      linkedin: "#",
      image: "/people/OscarCanales/profile.jpg",
      cat: "PROGRAMMING",
    },
    {
      name: "Raul Cano",
      slug: "raul",
      twitter: "#",
      github: "https://github.com/ercanon",
      linkedin: "#",
      image: "/people/Raul/profile.jpeg",
      cat: "PROGRAMMING",
    },
    {
      name: "Unai Diaz",
      slug: "unai",
      twitter: "#",
      github: "#",
      linkedin: "#",
      image: "/people/Unai/profile.jpg",
      cat: "PROGRAMMING",
    },
    {
      name: "Adrian Aroca",
      slug: "adrian",
      twitter: "#",
      github: "https://github.com/adrianam4",
      linkedin: "https://www.linkedin.com/in/adri%C3%A1n-aroca-mascaraque-216a86154/",
      cat: "DESIGN",
      image: "/people/Adrian/profile.jpg",
    },
    {
      name: "Albert Pou",
      slug: "albert",
      twitter: "#",
      github: "https://github.com/Hydeon-git",
      linkedin: "https://www.linkedin.com/in/poualbert/",
      image: "/people/Albert/profile.jpg",
      cat: "DESIGN",
    },
    {
      name: "Arnau Ustrell",
      slug: "arnauu",
      twitter: "#",
      github: "https://github.com/ArnauUstrell",
      linkedin: "https://www.linkedin.com/in/arnauustrellvacas/",
      image: "/people/ArnauUstrell/profile.jpeg",
      cat: "DESIGN",
    },
    {
      name: "Enric Morales",
      slug: "enric",
      twitter: "https://twitter.com/TheSlowRunner_",
      github: "https://github.com/enricmc19",
      linkedin: "https://www.linkedin.com/in/enric-morales-calero-aa39601b1/",
      image: "/people/Enric/profile.jpg",
      cat: "DESIGN",
    },
    {
      name: "Isaac Colomer",
      slug: "isaacc",
      twitter: "https://twitter.com/IsaacColomerC1",
      github: "#",
      linkedin: "https://www.linkedin.com/in/isaac-colomer-casas-4a8a41206/",
      image: "/people/IsaacColomer/profile.JPG",
      cat: "DESIGN",
    },
    {
      name: "Marc Pavón",
      slug: "marcp",
      twitter: "#",
      github: "https://github.com/Marckitus",
      linkedin: "https://www.linkedin.com/in/marc-pavon-980bbb241/",
      image: "/people/MarcPavon/profile.jpg",
      cat: "DESIGN",
    },
    {
      name: "Marc Ruiz",
      slug: "marcru",
      twitter: "#",
      github: "https://github.com/Ruizo",
      linkedin: "https://www.linkedin.com/in/marc-ruiz-pastor-576577145/",
      image: "/people/MarcRuiz/profile.jpg",
      cat: "DESIGN",
    },
    {
      name: "Max Llovera",
      slug: "max",
      twitter: "https://twitter.com/Nothanhere",
      github: "https://github.com/MaxLlovera",
      linkedin: "https://www.linkedin.com/in/max-llovera-mart%C3%AD-273929241/",
      image: "/people/MaxLlovera/profile.jpeg",
      cat: "DESIGN",
    },
    {
      name: "Pau Motta",
      slug: "pau",
      twitter: "https://twitter.com/Pau_mottar",
      github: "#",
      linkedin: "http://www.linkedin.com/in/pau-motta-ab6b1a203",
      image: "/people/Pau/profile.jpeg",
      cat: "DESIGN",
    },
    {
      name: "Pol Vázquez",
      slug: "polv",
      twitter: "https://twitter.com/_Amade128_",
      github: "https://github.com/AMADE128",
      linkedin: "https://www.linkedin.com/in/pol-v%C3%A1zquez-porcar-74b435202/",
      image: "/people/PolVazquez/profile.PNG",
      cat: "DESIGN",
    },
    {
      name: "Alex Gesti",
      slug: "alex",
      twitter: "https://twitter.com/mrluigi001",
      github: "https://github.com/alexgesti",
      linkedin: "https://www.linkedin.com/in/alex-gest%C3%AD-fern%C3%A1ndez-197696178/",
      image: "/people/Alex/profile.jpg",
      cat: "ART",
    },
    {
      name: "David Lira",
      slug: "davidl",
      twitter: "#",
      github: "https://github.com/davidlira19",
      linkedin: "https://www.linkedin.com/in/david-lira-mart%C3%AD-b30a2b241/",
      image: "/people/DavidLira/profile.png",
      cat: "ART",
    },
    {
      name: "Marc Ramos",
      slug: "marcra",
      twitter: "#",
      github: "https://github.com/Ramsubito",
      linkedin: "https://www.linkedin.com/in/marc-ramos-gomez-414872217/",
      artstation: "https://www.artstation.com/ramsubo",
      image: "/people/MarcRamos/profile.jpg",
      cat: "ART",
    },
    {
      name: "Maria Garrigoles",
      slug: "maria",
      twitter: "https://twitter.com/garrigolasmaria?s=21&t=UvFnMDiA_aqzFYjoaEnBmg",
      github: "https://github.com/Meeeri08",
      linkedin: "https://www.linkedin.com/in/maria-garrigolas-0407831b4",
      image: "/people/Maria/Profile/profile.JPG",
      cat: "ART",
    },
    {
      name: "Òscar Royo",
      slug: "oscarr",
      twitter: "#",
      github: "#",
      linkedin: "#",
      image: "/people/OscarRoyo/profile.png",
      cat: "ART",
    },
    {
      name: "Pol Pallarés",
      slug: "polp",
      twitter: "#",
      github: "#",
      linkedin: "https://www.linkedin.com/in/pol-pallares-mur-4a5729226/",
      cat: "ART",
      image: "/people/PolPallares/profile.png",
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
        <SectionTitle>{t("team.title")}</SectionTitle>
        <div className="flex flex-wrap justify-center gap-4 mt-8 mb-6 md:gap-8 decoration-2">
          <button
            ref={allButton}
            className="underline text-customOrange-400"
            onClick={() => filterTeamMembers("ALL")}
          >
            ALL
          </button>
          {[
            [leadsButton, "LEADS"],
            [programmingButton, "PROGRAMMING"],
            [designButton, "DESIGN"],
            [artButton, "ART"],
          ].map(([button, cat]) => (
            <button
              key={cat}
              ref={button}
              className="text-customOrange-400"
              onClick={() => filterTeamMembers(cat)}
            >
              {cat}
            </button>
          ))}
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
