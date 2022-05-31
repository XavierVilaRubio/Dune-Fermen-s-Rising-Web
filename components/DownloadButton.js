export default function DownloadButton({ t }) {
  return (
    <>
      <div className="self-center mx-auto mt-8 w-fit">
        <a className="active:mt-1 active:shadow-none hover:mt-0.5 inline-block px-12 py-3 text-2xl font-medium capitalize border-b-4 rounded-lg active:border-0 hover:border-b-2 downloadButton md:text-3xl bg-customOrange-500 border-orangishBrown-500">
          {t("home.downloadText")}
        </a>
      </div>
      <style jsx>{`
        .downloadButton {
          color: #fcfbe7;
          text-shadow: 1px 2px var(--color-orangish-brown);
        }
      `}</style>
    </>
  );
}
