import TextImage from "components/TextImage/TextImage";

export default function Production({ lang, data }) {
  return (
    <section id="production">
      <h2>{lang.production}</h2>
      <div className="container">
        {data.map((sec) => (
          <TextImage data={sec} key={sec} />
        ))}
      </div>
    </section>
  );
}
