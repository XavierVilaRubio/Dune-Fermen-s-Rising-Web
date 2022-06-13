import DownloadButton from "components/DownloadButton";
import TextImage from "components/TextImage";
import Image from "next/image";

export default function Engine({ t }) {
  return (
    <section className="container mt-24" id="engine">
      <h2 className="mt-4 mb-8 text-4xl font-bold text-orange-500 md:text-5xl">
        {t("engine.title")}
      </h2>
      <div className="flex flex-row">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, in!
      </div>
      <hr />
      <div className="grid grid-cols-3 gap-3 mt-4 mt-8">
        {[
          [
            "https://picsum.photos/1600/900",
            "Graphics",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          ],
          [
            "https://picsum.photos/1600/900",
            "Graphics",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          ],
          [
            "https://picsum.photos/1600/900",
            "Graphics",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          ],
          [
            "https://picsum.photos/1600/900",
            "Graphics",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          ],
          [
            "https://picsum.photos/1600/900",
            "Graphics",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          ],
          [
            "https://picsum.photos/1600/900",
            "Graphics",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          ],
        ].map(([url, title, text], index) => (
          <div key={index} className="p-4 bg-orange-300">
            <Image src={url} width={1600} height={900} layout="raw" />
            <p className="mt-4 text-lg text-center">{title}</p>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
