import Image from "next/image";
import Carousel from "../Carousel/Carousel";

export function Costumers() {
  const images = [
    "/logo-branca.png",
    "/logo-branca.png",
    "/logo-branca.png",
    "/logo-branca.png",
    "/logo-branca.png",
    "/logo-branca.png",
  ];

  const imageSlides = images.map((src, i) => (
    <div
      className="relative h-16 my-12 flex-[0_0_25%] max-xl:flex-[0_0_50%] max-[1350px]:flex-[0_0_35%] max-lg:flex-[0_0_100%]"
      key={i}
    >
      <Image src={src} key={i} fill className="object-contain px-4" alt={src} />
    </div>
  ));

  return (
    <div
      id="costumer-container"
      className="bg-bgCostumers bg-contain h-[30rem] flex justify-center py-8 max-sm:h-[32rem]"
    >
      <div id="text-container" className="flex flex-col items-center pt-9">
        <h1 className="text-white text-5xl letter text-md text-poppins-bold ">
          CLIENTES
        </h1>
        <p className="text-lg text-white w-[50%] text-center py-6 text-poppins leading-8">
          At half-past eight the door opened, the policeman appeared, and,
          requesting them to follow him, led the way to an adjoining hall.
        </p>
        <div className="w-[100vw]">
          <Carousel
            visibleButtonControl={false}
            loop={true}
            align={"end"}
            visibleDots={true}
          >
            {imageSlides}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
