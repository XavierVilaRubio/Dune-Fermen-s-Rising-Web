import DownloadButton from "components/DownloadButton";
import SectionTitle from "components/text/SectionTitle";
import TextImage from "components/TextImage";
import Image from "next/image";

export default function Engine({ t }) {
  return (
    <section className="container mt-24" id="engine">
      <SectionTitle>{t("engine.title")}</SectionTitle>
      <div className="flex flex-row mt-8 text-customOrange-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, in!
      </div>
      <hr />
      <div className="grid grid-cols-3 gap-3 mt-8">
        {[
          [
            "https://picsum.photos/1600/900",
            t("engine.features.1.title"),
            t("engine.features.1.subtitle"),
          ],
          [
            "https://picsum.photos/1600/900",
            t("engine.features.2.title"),
            t("engine.features.2.subtitle"),
          ],
          [
            "https://picsum.photos/1600/900",
            t("engine.features.3.title"),
            t("engine.features.3.subtitle"),
          ],
          [
            "https://picsum.photos/1600/900",
            t("engine.features.4.title"),
            t("engine.features.4.subtitle"),
          ],
          [
            "https://picsum.photos/1600/900",
            t("engine.features.5.title"),
            t("engine.features.5.subtitle"),
          ],
          [
            "https://picsum.photos/1600/900",
            t("engine.features.6.title"),
            t("engine.features.6.subtitle"),
          ],
        ].map(([url, title, text], index) => (
          <div key={index} className="p-4 rounded-md bg-customOrange-300 ">
            <Image
              className="rounded-sm"
              src={url}
              width={1600}
              height={900}
              layout="raw"
            />
            <p className="mt-4 text-lg font-semibold text-center text-customOrange-500">
              {title}
            </p>
            <p className="text-customOrange-600">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
