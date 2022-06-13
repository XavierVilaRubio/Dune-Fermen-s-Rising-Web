import DownloadButton from "components/DownloadButton";
import Image from "next/image";

export default function Game({ t }) {
  return (
    <section className="container mt-24" id="game">
      <h2 className="mt-4 mb-8 text-4xl font-bold text-orange-500 md:text-5xl">
        {t("game.title")}
      </h2>
      <div className="flex flex-row">
        <div className="w-1/2"></div>
        <div className="w-1/2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quaerat et at exercitationem sequi perspiciatis, fuga vitae amet. Quo,
          neque.
          <DownloadButton t={t} />
        </div>
      </div>
      <hr />
      <div className="mt-8">
        <h3 className="text-2xl text-center">Gameplay</h3>
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
  );
}
