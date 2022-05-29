import Image from "next/image";

export default function TextImage({ text, image }) {
  return (
    <div className="flex flex-col-reverse items-center justify-center md:flex-row md:gap-4 md:even:flex-row-reverse text-center md:text-left md:odd:text-right mt-8 mx-auto max-w-4xl">
      <p className="h-fit my-auto md:w-1/2 md:text-lg">{text}</p>
      <div className="aspect-video md:w-1/2">
        <Image
          src={image}
          width={800}
          height={450}
          alt=""
          className="rounded-xl"
        />
      </div>
    </div>
  );
}
