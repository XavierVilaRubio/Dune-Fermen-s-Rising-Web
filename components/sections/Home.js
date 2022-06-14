import logo from "public/logo.png";
import Image from "next/image";
import TextImage from "components/TextImage";
import DownloadButton from "components/DownloadButton";

export default function HomeSection({ t }) {
  return (
    <>
      <section id="home">
        <div className="video"></div>
        <div className="container">
          <div className="w-40 max-w-sm mx-auto md:w-52">
            <Image src={logo} alt={"Dune: Fermen's Rising Logo"} />
          </div>
          <h1 className="mb-4 text-4xl font-bold text-center text-customOrange-500 md:text-5xl">
            {t("home.headline")}
          </h1>
          <p className="mb-8 text-center text-customOrange-400 md:text-xl">
            {t("home.catchphrase")}
          </p>

          <TextImage
            text={t("home.card1.text")}
            image={"https://picsum.photos/400/200"}
          />
          <TextImage
            text={t("home.card2.text")}
            image={"https://picsum.photos/400/200"}
          />
          <TextImage
            text={t("home.card3.text")}
            image={"https://picsum.photos/400/200"}
          />
          <div className="mx-auto mt-20 w-fit">
            <DownloadButton t={t} />
          </div>
        </div>
      </section>
      <style jsx>{`
        .video {
          background-image: url("background_video.webp");
          background-repeat: no-repeat;
          background-size: cover;
          width: 100%;
          aspect-ratio: 16 /9;
        }
      `}</style>
    </>
  );
}
