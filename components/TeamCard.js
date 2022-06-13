import { useTranslation } from "next-export-i18n";
import Image from "next/image";
import { useRouter } from "next/router";
import SocialIcons from "./SocialIcons";

export default function TeamCard({ member }) {
  const { t } = useTranslation();
  const router = useRouter();

  const { name, slug, twitter, github, linkedin } = member;

  console.log(member);

  return (
    <>
      <div
        className="relative flex justify-center bg-black aspect-3/4 group"
        onClick={() => {
          router.push({
            pathname: "/member/[name]",
            query: {
              ...member,
            },
          });
        }}
      >
        <Image
          className="absolute inset-0 z-0 object-cover w-full h-full transition-opacity opacity-50 md:opacity-90 group-hover:opacity-50"
          src="https://picsum.photos/200/100"
          width={100}
          height={100}
          layout={"raw"}
          alt="Mountain"
        />
        <div className="z-10 my-auto text-center text-white md:opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
          <p className="text-2xl font-bold ">{name}</p>
          <p className="mt-2 text-sm tracking-widest uppercase">
            {t(`team.${slug}.rol`)}
          </p>
          <div className="flex justify-center gap-2 mt-4">
            <SocialIcons
              github={github}
              twitter={twitter}
              linkedin={linkedin}
            />
          </div>
        </div>
      </div>
    </>
  );
}
