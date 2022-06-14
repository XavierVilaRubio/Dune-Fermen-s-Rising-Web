import SectionSubtitle from "components/text/SectionSubtitle";
import SectionTitle from "components/text/SectionTitle";
import Image from "next/image";

export default function PostMortem({ t }) {
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
      <SectionSubtitle>{t("post_mortem.subtitle1")}</SectionSubtitle>
      <p className="text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus omnis,
        eos nam perspiciatis reiciendis, dolorem atque quidem quam illum minima
        nostrum itaque odit labore inventore voluptas iusto culpa vitae
        voluptate et aspernatur, cum accusamus quis veniam! Aliquid dolor
        cupiditate odit!
      </p>
      <SectionSubtitle>{t("post_mortem.subtitle1")}</SectionSubtitle>
      <p className="text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus omnis,
        eos nam perspiciatis reiciendis, dolorem atque quidem quam illum minima
        nostrum itaque odit labore inventore voluptas iusto culpa vitae
        voluptate et aspernatur, cum accusamus quis veniam! Aliquid dolor
        cupiditate odit!
      </p>
      <SectionSubtitle>{t("post_mortem.subtitle1")}</SectionSubtitle>
      <p className="text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus omnis,
        eos nam perspiciatis reiciendis, dolorem atque quidem quam illum minima
        nostrum itaque odit labore inventore voluptas iusto culpa vitae
        voluptate et aspernatur, cum accusamus quis veniam! Aliquid dolor
        cupiditate odit!
      </p>
    </section>
  );
}
