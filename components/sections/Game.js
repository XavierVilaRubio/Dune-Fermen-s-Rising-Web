import DownloadButton from "components/DownloadButton";
import SectionSubtitle from "components/text/SectionSubtitle";
import Image from "next/image";

export default function Game({ t }) {
  return (
    <>
      <section className="container mt-24" id="game">
        <h3 className="w-full text-3xl font-bold text-customOrange-500">
          {t("home.headline")}
        </h3>
        <div className="flex flex-row w-full gap-4 mt-8">
          <div className="w-1/2">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/watch?v=Qi9ypqdbYCM"
              title="YouTube video player"
              className="w-full"
              frameBorder={"0"}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="flex flex-col w-1/2 text-lg justify-evenly text-customOrange-400">
            {t("game.text")}
            <DownloadButton t={t} />
          </div>
        </div>
        <hr />
        <div className="mt-8 text-center">
          <SectionSubtitle>Gameplay</SectionSubtitle>
          <div className="grid grid-cols-3 gap-6 mt-4">
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
                style={{
                  "box-shadow":
                    "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
                }}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
