export function Header() {
  return (
    <nav className="flex items-center justify-around mt-6 absolute w-full ">
      <img
        src="http://localhost:3000/logo.svg"
        alt=""
        className="w-96 max-xl:w-52"
      />
      <div className="flex items-center mt-8 space-x-8 max-xl:hidden">
        {[
          ["Home", "/home"],
          ["Quem somos", "/quemsomos"],
          ["Serviços", "/services"],
          ["Tecnologias", "/tec"],
          ["Clientes", "/client"],
          ["Contatos", "/contact"],
          ["Pt", "/pt"],
        ].map(([title, url]) => (
          <a
            href={url}
            className="text-l  text-white cursor-pointer hover:text-emerald-500"
          >
            {title}
          </a>
        ))}
      </div>
    </nav>
  );
}
