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
        <div className="ml-20 w-[100vw]">
          <Carousel
            visibleButtonControl={false}
            loop={true}
            align={"end"}
            visibleDots={true}
          >
            {images.map((src, i) => {
              return (
                // 👇 style each individual slide.wq2
                // flex[0_0_100%]
                //   - shorthand for flex-grow:0; flex-shrink:0; flex-basis:100%
                //   - we want this slide to not be able to grow or shrink and take up 100% width of the viewport.
                <div
                  className="relative h-16 my-14 flex-[0_0_25%] max-xl:flex-[0_0_50%] max-[1350px]:flex-[0_0_35%] max-lg:flex-[0_0_100%]"
                  key={i}
                >
                  {/* use object-cover + fill since we don't know the height and width of the parent */}
                  <img
                    src={src}
                    key={i}
                    className="object-contain px-4"
                    alt={src}
                  />
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
