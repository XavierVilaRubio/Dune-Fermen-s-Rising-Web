import SectionSubtitle from "components/text/SectionSubtitle";
import SectionTitle from "components/text/SectionTitle";
import Image from "next/image";

export default function PostMortem({ t }) {
  const JSONsections = t(`post_mortem.sections`);
  var sections = Object.values(JSONsections);

  return (
    <section className="container mt-24" id="post_mortem">
      <SectionTitle>{t("post_mortem.title")}</SectionTitle>
      <Image
        className="max-w-5xl mt-8"
        src={"https://picsum.photos/1600/900"}
        width="1600"
        height={"900"}
        layout={"raw"}
      />
      {sections.map(({ title, description }, index) => (
        <>
          <SectionSubtitle>{title}</SectionSubtitle>
          <p className="text-justify text-customOrange-400">{description}</p>
        </>
      ))}
    </section>
  );
}
