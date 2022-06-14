export default function DownloadButton({ t }) {
  return (
    <>
      <div className="mt-4 w-fit">
        <a href="https://github.com/Denisdrk6/Dune-Fremen-s-Rising/releases/download/V_0.7/Dune_Fremens_Rising_Alpha3.rar" className="active:mt-1 active:shadow-none hover:mt-0.5 inline-block px-12 py-3 text-2xl font-medium capitalize border-b-4 rounded-lg active:border-0 hover:border-b-2 downloadButton md:text-3xl bg-orange-500 border-orangishBrown-500">
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
