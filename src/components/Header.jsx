import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/devs-and-pixels-logo.svg";

const Header = () => {
  const menuItems = [
    ["gallery", "gallery"],
    ["submit-artwork", "submit artwork"],
    ["about", "about"],
    ["blog", "blog"],
    ["contact", "contact"],
  ];

  return (
    <header className="p-3 flex justify-between">
      <div>
        <Link href="/">
          <Image
            src={Logo}
            alt={"Devs and Pixels Logo"}
            width={200}
            height={100}
          />
        </Link>
      </div>

      <ul className="text-gray-300 items-center flex gap-10 font-semibold capitalize">
        {menuItems.map((page, index) => (
          <Link href={page[0]} key={index}>
            <li className="hover:text-gray-100">{page[1]}</li>
          </Link>
        ))}
        <Link href={"/"} className="text-cyan-500 hover:text-cyan-400">
          <li>Sign In</li>
        </Link>
        <Link href={"/"}>
          <li className="hover:border-violet-400 hover:bg-violet-400 bg-transparent border-2 px-3 py-2 font-bold rounded bg-violet-500 border-violet-500 text-lightish-black transition-colors duration-200">
            Get Started
          </li>
        </Link>
      </ul>
    </header>
  );
};

export default Header;
