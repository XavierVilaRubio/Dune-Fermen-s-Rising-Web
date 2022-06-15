import SectionTitle from "components/text/SectionTitle";
import Image from "next/image";
import en1 from "public/en1.png";
import en2 from "public/en2.png";
import en3 from "public/en3.png";
import en4 from "public/en4.png";
import en5 from "public/en5.png";
import en6 from "public/en6.png";

export default function Engine({ t }) {
  return (
    <section className="container mt-24" id="engine">
      <SectionTitle>{t("engine.title")}</SectionTitle>
      <div className="flex flex-row mt-8 text-customOrange-400">
        {t("engine.subtitle")}
      </div>
      <hr />
      <div className="grid grid-cols-3 gap-6 mt-8">
        {[
          [
            en1,
            t("engine.features.1.title"),
            t("engine.features.1.subtitle"),
          ],
          [
            en2,
            t("engine.features.2.title"),
            t("engine.features.2.subtitle"),
          ],
          [
            en3,
            t("engine.features.3.title"),
            t("engine.features.3.subtitle"),
          ],
          [
            en4,
            t("engine.features.4.title"),
            t("engine.features.4.subtitle"),
          ],
          [
            en5,
            t("engine.features.5.title"),
            t("engine.features.5.subtitle"),
          ],
          [
            en6,
            t("engine.features.6.title"),
            t("engine.features.6.subtitle"),
          ],
        ].map(([url, title, text], index) => (
          <div
            key={index}
            className="p-4 text-center bg-orange-300 rounded-md"
            style={{
              "box-shadow":
                "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
            }}
          >
            <Image
              className="rounded-sm"
              src={url}
              width={1600}
              height={900}
              layout="raw"
            />
            <p className="mt-4 text-lg font-semibold text-customOrange-500 ">
              {title}
            </p>
            <p className="text-customOrange-600">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
