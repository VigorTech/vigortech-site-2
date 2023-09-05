import Image from "next/image";
import Carousel from "../Carousel/Carousel";

export function Techs() {
  const images = [
    "http://localhost:3000/logo-branca.png",
    "http://localhost:3000/logo-branca.png",
    "http://localhost:3000/logo-branca.png",
    "http://localhost:3000/logo-branca.png",
    "http://localhost:3000/logo-branca.png",
    "http://localhost:3000/logo-branca.png",
  ];
  return (
    <div
      id="costumer-container"
      className="bg-bgCostumers bg-contain h-[30%] flex justify-center max-sm:h-[52rem] "
    >
      <div id="text-container" className="flex flex-col items-center pt-9">
        <h1 className="text-white text-5xl letter text-md text-poppins-bold pt-9">
          TECNOLOGIAS
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
            {images.map((src, i) => {
              return (
                <div
                  className="relative h-16 my-12 flex-[0_0_25%] max-xl:flex-[0_0_50%] max-[1350px]:flex-[0_0_35%] max-lg:flex-[0_0_100%]"
                  key={i}
                >
                  <Image
                    src={src}
                    fill
                    className="object-contain px-4"
                    alt="alt"
                  />
                </div>
              );
            })}
          </Carousel>
        </div>
        <video className="w-full h-[33rem] object-fill mt-9" muted autoPlay>
          <source src="http://localhost:3000/template.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
