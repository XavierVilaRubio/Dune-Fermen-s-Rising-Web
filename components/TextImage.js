import Image from "next/image";

export default function TextImage({ text, image }) {
  return (
    <div className="flex flex-col-reverse items-center justify-center max-w-4xl mx-auto mt-4 text-center md:flex-row md:gap-4 md:even:flex-row-reverse md:text-left md:odd:text-right">
      <p className="my-auto text-center text-customOrange-400 h-fit md:w-1/2 md:text-lg">
        {text}
      </p>
      <div className="aspect-video md:w-1/2">
        <Image
          src={image}
          width={800}
          height={450}
          alt=""
          className="rounded-xl"
          layout="raw"
          style={{
            "box-shadow":
              "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
          }}
        />
      </div>
    </div>
  );
}
