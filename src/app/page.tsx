"use client";
import { Posts } from "@/Components/Posts/page";
import { Header } from "@/Components/Header/page";
import { Spacer } from "@/Components/Spacer/page";
import { WhoWeAre } from "@/Components/WhoWeAre/page";
import { Footer } from "@/Components/Footer/page";
import { Services } from "@/Components/Services/page";

import { useState } from "react";
import { Contact } from "@/Components/Contact/page";

export default function Home() {
  const [language, setLanguage] = useState("PT");
  return (
    <main className="">
      <section className="" id="home">
        <Header language={language} onChangeLanguage={setLanguage} />
        {/* <div
          id="smoke"
          className="bg-black w-1/3 h-64 absolute left-1/3 top-1/3 shadow-lg shadow-black drop-shadow-3xl rounded-lg "
        ></div> */}
        <img
          src="http://localhost:3000/background.png"
          alt=""
          className="h-screen w-screen"
        />
      </section>
      <Spacer />
      <WhoWeAre language={language} />
      <Spacer />
      <Services />
      <Spacer />
      <Posts />
      <Contact />
      <Footer language={language} />
    </main>
  );
}
