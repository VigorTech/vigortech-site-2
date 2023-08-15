import { Lato } from "next/font/google";

export function Header() {
  return (
    <div className="flex items-center justify-around mt-4 absolute w-full">
      <img src="http://localhost:3000/logo.png" alt="" className="w-96 " />
      <ul className="flex items-center mt-8 space-x-8 ">
        <li>
          <a
            href=""
            className="text-l text-white cursor-pointer hover:text-emerald-500"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href=""
            className="text-lg text-white cursor-pointer hover:text-emerald-500"
          >
            Quem somos
          </a>
        </li>
        <li>
          <a
            href=""
            className="text-lg text-white cursor-pointer hover:text-emerald-500"
          >
            Serviços
          </a>
        </li>
        <li>
          <a
            href=""
            className="text-lg text-white cursor-pointer hover:text-emerald-500"
          >
            Tecnologias
          </a>
        </li>
        <li>
          <a
            href=""
            className="text-lg text-white cursor-pointer hover:text-emerald-500"
          >
            Clientes
          </a>
        </li>
        <li>
          <a
            href=""
            className="text-lg text-white cursor-pointer hover:text-emerald-500"
          >
            Contatos
          </a>
        </li>
        <li>
          <a
            href=""
            className="text-lg text-white cursor-pointer hover:text-emerald-500"
          >
            PT
          </a>
        </li>
      </ul>
    </div>
  );
}
