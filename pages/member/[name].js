import Header from "components/Header";
import SocialIcons from "components/SocialIcons";
import { useTranslation } from "next-export-i18n";
import Image from "next/image";
import { useRouter } from "next/router";

const Member = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const { name, slug, cat, github, linkedin, twitter } = router.query;

  console.log(router.query);
  console.log(t(`team.${slug}`));

  return (
    <>
      <Header t={t} />
      <div className="container mt-4">
        <div>
          <h1 className="mt-4 text-4xl font-semibold ">{name}</h1>
          <div className="flex justify-between gap-4">
            <div className="w-2/3">
              <hr className="mt-2 border-orange-500" />
              <p className="mt-2">{t(`team.${slug}.overview`)}</p>
              <div className="flex gap-2 mt-4">
                <SocialIcons
                  github={github}
                  twitter={twitter}
                  linkedin={linkedin}
                  color="#000"
                  size={6}
                />
              </div>
            </div>
            <div className="w-1/3 max-w-sm">
              <Image
                className="rounded-full"
                src="https://picsum.photos/100/100"
                width={100}
                height={100}
                layout={"responsive"}
                alt="Mountain"
              />
              <h2 className="mt-2 text-lg text-center">
                {t(`team.${slug}.rol`)}
              </h2>
            </div>
          </div>
        </div>
        <h3 className="mt-8 text-2xl text-center">My Contribution</h3>
      </div>
    </>
  );
};

export default Member;
