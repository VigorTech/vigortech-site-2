"use client";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";

import { NextIntlClientProvider } from "next-intl";
import { useState, useMemo } from "react";

export function Header() {
  const [selectedKeys, setSelectedKeys] = useState(new Set(["PT"]));

  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

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
        ].map(([title, url]) => (
          <a
            href={url}
            key={url}
            className="text-l  text-white cursor-pointer hover:text-emerald-500"
          >
            {title}
          </a>
        ))}
        <Dropdown>
          <DropdownTrigger>
            <a className="text-l  text-white cursor-pointer hover:text-emerald-500">
              {selectedValue}
            </a>
            {/* <a href="">{locale}</a> */}
          </DropdownTrigger>
          <DropdownMenu
            aria-label="select language"
            variant="flat"
            disallowEmptySelection
            selectionMode="single"
            selectedKeys={selectedKeys}
            onSelectionChange={(keys) => {
              const stringKeys = Array.from(keys).map((key) => String(key));
              setSelectedKeys(new Set(stringKeys));
            }}
          >
            <DropdownItem key="Português">PT</DropdownItem>
            <DropdownItem key="English">EN</DropdownItem>
            <DropdownItem key="Español">ES</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </nav>
  );
}
