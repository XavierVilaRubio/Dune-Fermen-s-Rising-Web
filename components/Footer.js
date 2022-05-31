import Image from "next/image";
import logo from "public/logo.png";

export default function Footer({ t }) {
  return (
    <footer className="w-full py-4 bg-customOrange-500">
      <div className="container flex justify-between">
        <div>
          <Image
            src={logo}
            width={54}
            height={54}
            alt="Dune: Fermen's Rising logo"
          />
        </div>
        <div className="flex items-center gap-4 font-medium">
          <p>Follow us:</p>
          <ul className="contents">
            <li>
              <a href="">Twitter</a>
            </li>
            <li>
              <a href="">Tik Tok</a>
            </li>
            <li>
              <a href="">Discord</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
