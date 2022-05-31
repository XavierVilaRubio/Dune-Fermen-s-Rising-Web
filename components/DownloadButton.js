export default function DownloadButton({ t }) {
  return (
    <>
      <div className="my-16 cursor-pointer">
        <a className="downloadButton font-medium rounded-lg capitalize text-2xl md:text-3xl">
          {t("home.downloadText")}
        </a>
      </div>
      <style jsx>{`
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
