"use client";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { SlOptionsVertical } from "react-icons/sl";

import { useState, useMemo } from "react";
import Lang from "../../locales";

interface HeaderProps {
  language: string;
  onChangeLanguage: (newLanguage: string) => void;
}

export function Header({ language, onChangeLanguage }: HeaderProps) {
  const [selectedKeys, setSelectedKeys] = useState(new Set(["PT"]));

  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  const handleLanguageChange = (keys: Selection) => {
    console.log(keys);
    setSelectedKeys(new Set(keys));
    onChangeLanguage(keys.currentKey); // Assuming only single selection is allowed
  };

  return (
    <nav className="flex items-center justify-around mt-6 absolute w-full ">
      <img
        src="http://localhost:3000/logo.svg"
        alt=""
        className="w-96 max-xl:w-52"
      />
      <div className="flex items-center mt-8 space-x-8 max-xl:hidden">
        <h1></h1>
        {[
          ["contact", "/home"],
          ["whoweare", "/quemsomos"],
          ["services", "/services"],
          ["tech", "/tec"],
          ["clients", "/client"],
          ["contact", "/contact"],
        ].map(([title, url, translate]) => (
          <a
            href={url}
            key={url}
            className="text-l  text-white cursor-pointer hover:text-emerald-500"
          >
            <Lang id={`header.${title}`} language={language}></Lang>
          </a>
        ))}
        <Dropdown>
          <DropdownTrigger>
            <a className="text-l relative text-white cursor-pointer hover:text-emerald-500">
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
            onSelectionChange={handleLanguageChange}
          >
            <DropdownItem key="PT">PT</DropdownItem>
            <DropdownItem key="EN">EN</DropdownItem>
            <DropdownItem key="ES">ES</DropdownItem>
          </DropdownMenu>
        </Dropdown>

        {selectedValue.includes("PT") && (
          <img src="http://localhost:3000/brasil.png" alt="" className="w-10" />
        )}
        {selectedValue.includes("EN") && (
          <img
            src="http://localhost:3000/estados-unidos.png"
            alt=""
            className="w-8"
          />
        )}
        {selectedValue.includes("ES") && (
          <img src="http://localhost:3000/espanha.png" alt="" className="w-8" />
        )}
      </div>
    </nav>
  );
}
