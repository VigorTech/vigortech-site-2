"use client";
import Carousel from "../Carousel/Carousel";
import Image from "next/image";

export function WhoWeAre() {
  const images = [
    "http://localhost:3000/background.png",
    "http://localhost:3000/background.png",
    "http://localhost:3000/background.png",
    "http://localhost:3000/background.png",
    "http://localhost:3000/background.png",
    "http://localhost:3000/background.png",
  ];

  return (
    <div id="WhoWeAre" className="w-5/6 justify-center mx-auto mt-16 relative">
      <img
        src={"http://localhost:3000/elipse_1.svg"}
        className="absolute left-[-10%] w-20 select-none"
      />
      <img
        src={"http://localhost:3000/elipse_2.svg"}
        className="absolute left-[-7.5%] w-12 top-[30%] select-none"
      />
      <h1
        id="title"
        className="mx-auto w-full text-center text-title text-5xl "
      >
        QUEM SOMOS
      </h1>
      <div
        id="texts-container"
        className="justify-center flex max-xl:flex-col items-center text-text mt-11 space-x-10 py-8 max-xl:space-x-0"
      >
        <div id="text-section-1" className="text-text w-3/4 max-xl:w-full">
          <h2 className="text-title text-5xl">
            Somos uma casa de software focada em suprir as necessidades do
            mercado com as tecnologias mais atuais.
          </h2>
          <p className="tex-text text-xl mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
            exercitationem impedit expedita cum, atque inventore, assumenda,
            eaque mmodi officiis quod amet dolorem fugit. Delectus, ullam
            facilis quod similique qui molestias? Lorem ipsum dolor sit amet.
            Lorem ipsum dolor sit amet Lorem ipsum dolor s dolor sit amet.
          </p>
        </div>
        <div
          id="text-section-2"
          className="w-4/5 text-text text-xl max-xl:mt-5 max-xl:w-full"
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
            quibusdam voluptatum! Cumque expedita temporibus maxime possimus
            magni dolores laudantium repudiandae deserunt inventore quis
            laboriosam consectetur deleniti, officia o magni dolores laudantium
            repudiandae deserunt inventore.
          </p>
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
            exercitationem impedit expedita cum, atque inventore, assumenda,
            eaque mmodi officiis quod amet dolorem fugit. Delectus, ullam
            facilis quod similique qui molestias Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Incidunt, quisquam Lorem ipsum dolor
            exercitationem impedit expedita cum, atque inventore, assumenda,
            eaque mmodi officiis quod amuisquam Lorem ipsum dolor sit amet
            consectetur adipisicing met consectetur adipisicing elit.
          </p>
        </div>
        <img
          src={"http://localhost:3000/elipse_2.svg"}
          className="absolute left-[100%] w-12 top-[97%] select-none"
        />
      </div>
      <Carousel loop={true} align={"end"}>
        {images.map((src, i) => {
          return (
            // 👇 style each individual slide.
            // relative - needed since we use the fill prop from next/image component
            // h-64 - arbitrary height
            // flex[0_0_100%]
            //   - shorthand for flex-grow:0; flex-shrink:0; flex-basis:100%
            //   - we want this slide to not be able to grow or shrink and take up 100% width of the viewport.
            <div
              className="relative h-56 my-12 flex-[0_0_25%] max-xl:flex-[0_0_50%] max-[1350px]:flex-[0_0_35%] max-lg:flex-[0_0_100%]"
              key={i}
            >
              {/* use object-cover + fill since we don't know the height and width of the parent */}
              <Image
                src={src}
                fill
                className="object-contain px-4 "
                alt="alt"
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
