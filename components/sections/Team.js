import TextImage from "components/TextImage/TextImage";

export default function Team({ lang, data }) {
  return (
    <section id="team">
      <h2>{lang.team}</h2>
      <div className="container">
        {data.map((sec) => (
          <TextImage data={sec} key={sec} />
        ))}
      </div>
    </section>
  );
}
