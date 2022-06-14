import { useTranslation, useLanguageQuery } from "next-export-i18n";
import Head from "next/head";
import Header from "components/Header";
import HomeSection from "components/sections/Home";
import Team from "components/sections/Team";
import Production from "components/sections/Production";
import Game from "components/sections/Game";
import Engine from "components/sections/Engine";
import PostMortem from "components/sections/PostMortem";
import Contact from "components/sections/Contact";
import Footer from "components/Footer";

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

      <Header t={t} home />
      <HomeSection t={t} />
      <Team t={t} />
      <Production t={t} />
      <Game t={t} />
      <Engine t={t} />
      <PostMortem t={t} />
      <Contact t={t} />
      <Footer t={t} />
    </>
  );
}
