import Image from "next/image";

export default function PostMortem({ t }) {
  return (
    <section className="container mt-24" id="post_mortem">
      <h2 className="mt-4 text-4xl font-bold text-orange-500 md:text-5xl">
        {t("post_mortem.title")}
      </h2>
      <Image
        className="max-w-5xl mt-8"
        src={"https://picsum.photos/1600/900"}
        width="1600"
        height={"900"}
        layout={"raw"}
      />
      <h3 className="mt-8 mb-4 text-3xl font-bold text-orange-600 underline">
        {t("post_mortem.subtitle1")}
      </h3>
      <p className="text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus omnis,
        eos nam perspiciatis reiciendis, dolorem atque quidem quam illum minima
        nostrum itaque odit labore inventore voluptas iusto culpa vitae
        voluptate et aspernatur, cum accusamus quis veniam! Aliquid dolor
        cupiditate odit!
      </p>
      <h3 className="mt-8 mb-4 text-3xl font-bold text-orange-600 underline">
        {t("post_mortem.subtitle1")}
      </h3>
      <p className="text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus omnis,
        eos nam perspiciatis reiciendis, dolorem atque quidem quam illum minima
        nostrum itaque odit labore inventore voluptas iusto culpa vitae
        voluptate et aspernatur, cum accusamus quis veniam! Aliquid dolor
        cupiditate odit!
      </p>
      <h3 className="mt-8 mb-4 text-3xl font-bold text-orange-600 underline">
        {t("post_mortem.subtitle1")}
      </h3>
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
