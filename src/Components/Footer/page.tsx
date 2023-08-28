import Lang from "@/locales";

interface FooterProps {
  language: string;
}

export function Footer({ language }: FooterProps) {
  return (
    <footer className="w-full flex">
      <div
        id="logo-container"
        className="bg-[#1A2E35] w-1/3 h-52 flex justify-center py-7"
      >
        <img
          src="http://localhost:3000/logo-2.svg"
          alt=""
          className="w-48 pb-7"
        />
      </div>
      <div id="nav-container" className="bg-[#16272D] w-full">
        <nav className="flex justify-center pt-11 space-x-8">
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
          <div id="links" className="flex pl-24 space-x-5 items-center">
            {[
              ["http://localhost:3000/icon-facebook.svg", "#"],
              ["http://localhost:3000/icon-instagram.svg", "#"],
              ["http://localhost:3000/icon-linkedln.svg", "#"],
              ["http://localhost:3000/icon-youtube.svg", "#"],
            ].map(([src, link]) => (
              <a href={link}>
                <img src={src} alt="" />
              </a>
            ))}
          </div>
        </nav>
      </div>
    </footer>
  );
}
