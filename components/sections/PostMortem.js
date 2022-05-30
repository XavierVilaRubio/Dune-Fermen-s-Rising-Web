export default function PostMortem({ t }) {
  return (
    <section id="post_mortem">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 mt-4">
        {t("post_mortem.title")}
      </h2>
      <h3 className="text-2xl underline font-bold">Game Objectives</h3>
    </section>
  );
}
