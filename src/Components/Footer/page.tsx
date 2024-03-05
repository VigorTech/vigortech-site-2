import Lang from "@/locales";
import { AiOutlineRight } from "react-icons/ai";

interface FooterProps {
  language: string;
}

export function Footer({ language }: FooterProps) {
  return (
    <footer className="w-full flex">
      <div
        id="logo-container"
        className="bg-[#1A2E35] w-1/3 h-52 flex justify-center py-7 max-xl:hidden relative"
      >
        <img
          src="/elipse_3.svg"
          alt=""
          className="w-6 absolute right-8 top-14"
        />
        <img
          src="/logo-2.svg"
          alt=""
          className="w-48 pb-7"
        />
      </div>
      <div id="nav-container" className="bg-[#16272D] w-full">
        <nav className="flex justify-center items-center text-center pt-11 space-x-8 max-lg:flex-col max-lg:space-x-0 max-lg:space-y-2">
          {[
            ["home", "/home"],
            ["whoweare", "/quemsomos"],
            ["services", "/services"],
            ["tech", "/tec"],
            ["clients", "/client"],
            ["contact", "/contact"],
          ].map(([title, url]) => (
            <a
              href={url}
              key={url}
              className="text-lato text-lg text-white cursor-pointer hover:text-emerald-500"
            >
              <Lang id={`header.${title}`} language={language}></Lang>
            </a>
          ))}
          <div
            id="links"
            className="flex pl-24 space-x-5 max-lg:pl-0 max-lg:pt-4 items-center"
          >
            {[
              ["/icon-facebook.svg", "#"],
              ["/icon-instagram.svg", "#"],
              ["/icon-linkedln.svg", "#"],
              ["/icon-youtube.svg", "#"],
            ].map(([src, link]) => (
              <a href={link} key={link}>
                <img src={src} alt="" />
              </a>
            ))}
          </div>
        </nav>
        <div
          id="newsletter"
          className="flex pl-[25%] justify-center items-center w-full pt-11 pb-5 tracking-[3.5px] max-lg:pl-0 "
        >
          <p className="text-lato-bold text-white">NEWSLETTER</p>
          <div id="input" className="pl-9 flex items-center">
            <input
              type="text"
              placeholder="E-mail"
              className="bg-[#16272D] w-[20rem] border-[#00CBA8] border-small rounded-l-lg p-2 placeholder:text-white placeholder:text-lato placeholder:pl-3 placeholder:text-lg outline-none text-white pl-3 max-md:w-[15rem]"
            />
            <button className="w-14 h-[2.62rem] bg-[#00CBA8] p-[0.8rem] rounded-r-md flex justify-center items-center">
              <AiOutlineRight size={22} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
