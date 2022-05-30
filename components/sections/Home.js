import logo from "public/logo.png";
import Image from "next/image";
import TextImage from "components/TextImage";

export default function HomeSection({ t }) {
  return (
    <>
      <section id="home">
        <div className="video"></div>
        <div className="container">
          <div className="w-40 md:w-52 max-w-sm mx-auto">
            <Image src={logo} alt={"Dune: Fermen's Rising Logo"} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            {t("home.headline")}
          </h1>
          <p className=" md:text-xl text-center">{t("home.catchphrase")}</p>
        </div>
        <div className="container">
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
        </div>
        <div className="my-16 cursor-pointer">
          <a className="downloadButton font-medium rounded-lg capitalize text-2xl md:text-3xl">
            {t("home.downloadText")}
          </a>
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

        .downloadButton {
          display: inline-block;
          padding: 12px 45px;
          color: #fcfbe7;

          border-bottom: 4px solid var(--color-orangish-brown);
          background-color: var(--color-orange);
          text-shadow: 1px 2px var(--color-orangish-brown);
        }

        .downloadButton:hover {
          margin-top: 2px;
          border-bottom: 2px solid var(--color-orangish-brown);
        }

        .downloadButton:active {
          margin-top: 4px;
          border: none;
          box-shadow: none;
        }
      `}</style>
    </>
  );
}
