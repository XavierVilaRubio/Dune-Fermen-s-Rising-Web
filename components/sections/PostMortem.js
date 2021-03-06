import SectionSubtitle from "components/text/SectionSubtitle";
import SectionTitle from "components/text/SectionTitle";
import Image from "next/image";
import prod from "public/prod.jpeg";

export default function PostMortem({ t }) {
  const JSONsections = t(`post_mortem.sections`);
  var sections = Object.values(JSONsections);

  return (
    <section className="container mt-24" id="post_mortem">
      <SectionTitle>{t("post_mortem.title")}</SectionTitle>
      <div className="w-min">
        <Image
          className="max-w-5xl mt-8"
          src={prod}
          width="1600"
          height={"900"}
          layout={"raw"}
        />
        <p className="mt-4 text-lg text-center text-customOrange-500">
          Little retrospective on the project.
        </p>
      </div>
      {sections.map(({ title, description }, index) => (
        <>
          <SectionSubtitle>{title}</SectionSubtitle>
          <p className="text-justify text-customOrange-400">{description}</p>
        </>
      ))}
    </section>
  );
}
