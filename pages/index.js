import Engine from "components/sections/Engine";
import Footer from "components/Footer";
import Header from "components/Header";
import HomeSection from "components/sections/Home";
import PostMortem from "components/sections/PostMortem";
import Production from "components/sections/Production";
import Team from "components/sections/Team";
import Head from "next/head";
import { useTranslation, useLanguageQuery } from "next-export-i18n";
import Game from "components/sections/Game";

export default function Home(props) {
  const { t } = useTranslation();
  const [query] = useLanguageQuery();

  return (
    <>
      <Head>
        <title>Dune: Fermen&rsquo;s Rising</title>
        <meta name="description" content="Dune: Fermen's Rising Webpage" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header t={t} />
      <HomeSection t={t} />
      <Team t={t} />
      <Production t={t} />
      <Game t={t} />
      <Engine t={t} />
      <PostMortem t={t} />
      <Footer t={t} />
    </>
  );
}
