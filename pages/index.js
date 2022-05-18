import Engine from "components/sections/Engine";
import Footer from "components/Footer";
import Header from "components/Header";
import HomeSection from "components/sections/Home";
import PostMortem from "components/sections/PostMortem";
import Production from "components/sections/Production";
import Team from "components/sections/Team";
import enLocale from "i18n/en";
import esLocale from "i18n/es";
import Head from "next/head";
import { useRouter } from "next/router";

function Home(props) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? enLocale : esLocale;

  return (
    <>
      <Head>
        <title>Dune: Fermen&rsquo;s Rising</title>
        <meta name="description" content="Dune: Fermen's Rising Webpage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header lang={t} />
      <HomeSection lang={t} data={props.homeContent} />
      <Team lang={t} data={props.teamContent} />
      <Production lang={t} data={props.productionContent} />
      <Engine lang={t} />
      <PostMortem lang={t} />
      <Footer lang={t} />
    </>
  );
}

export async function getStaticProps() {
  const homeRes = await fetch("http://localhost:3000/api/home");
  const homeContent = await homeRes.json();
  const teamRes = await fetch("http://localhost:3000/api/team");
  const teamContent = await teamRes.json();
  const productionRes = await fetch("http://localhost:3000/api/production");
  const productionContent = await productionRes.json();
  return {
    props: {
      homeContent: homeContent,
      teamContent: teamContent,
      productionContent: productionContent,
    },
  };
}

export default Home;
