import DownloadButton from "components/DownloadButton";
import SectionSubtitle from "components/text/SectionSubtitle";
import SectionTitle from "components/text/SectionTitle";
import Image from "next/image";

export default function Game({ t }) {
  return (
    <>
      <section className="container mt-24" id="game">
        <h3 className="w-full text-3xl font-bold text-customOrange-500">
          {t("home.headline")}
        </h3>
        <div className="flex flex-row w-full mt-8">
          <div className="w-1/2"></div>
          <div className="w-1/2 text-customOrange-400">
            {t("game.text")}
            <DownloadButton t={t} />
          </div>
        </div>
        <hr />
        <div className="mt-8 text-center">
          <SectionSubtitle>Gameplay</SectionSubtitle>
          <div className="grid grid-cols-3 gap-3 mt-4">
            {[
              "https://picsum.photos/1600/900",
              "https://picsum.photos/1600/900",
              "https://picsum.photos/1600/900",
              "https://picsum.photos/1600/900",
              "https://picsum.photos/1600/900",
              "https://picsum.photos/1600/900",
            ].map((url, index) => (
              <Image
                key={index}
                src={url}
                width={1600}
                height={900}
                layout="raw"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
