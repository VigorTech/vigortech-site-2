"use client";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { SlOptionsVertical } from "react-icons/sl";
import { Selection } from "@react-types/shared";

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

  const handleLanguageChange = (keys: Selection | string) => {
    if (typeof keys === "string") {
      // Handle the case when a string is directly passed
      const newSelectedKeys = new Set<string>([keys]);
      setSelectedKeys(newSelectedKeys);
      onChangeLanguage(keys);
    } else {
      // Handle the case when Selection is passed
      const keyArray = Array.from(keys);
      const selectedKey = keyArray[0] as string; // Assuming first key is desired
      const newSelectedKeys = new Set<string>([selectedKey]);
      setSelectedKeys(newSelectedKeys);
      onChangeLanguage(selectedKey);
    }
  };

  return (
    <nav className="flex items-center justify-around mt-6 absolute w-full ">
      <img src="/logo.svg" alt="" className="w-96 max-xl:w-52" />
      <div className="flex items-center mt-8 space-x-8 max-xl:hidden">
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
            className="text-lg text-lato text-white cursor-pointer hover:text-emerald-500"
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
            <DropdownItem key="PT">PTS</DropdownItem>
            <DropdownItem key="EN">EN</DropdownItem>
            <DropdownItem key="ES">ES</DropdownItem>
          </DropdownMenu>
        </Dropdown>

        {selectedValue.includes("PT") && (
          <img src="/brasil.png" alt="" className="w-10" />
        )}
        {selectedValue.includes("EN") && (
          <img src="/estados-unidos.png" alt="" className="w-8" />
        )}
        {selectedValue.includes("ES") && (
          <img src="/espanha.png" alt="" className="w-8" />
        )}
      </div>
    </nav>
  );
}
