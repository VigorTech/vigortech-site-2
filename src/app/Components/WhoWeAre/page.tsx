import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

export function WhoWeAre() {
  return (
    <div id="WhoWeAre" className="w-5/6 justify-center mx-auto mt-16">
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
      </div>
    </div>
  );
}
