import { ServiceCard } from "./ServiceCard/page";

export function Services() {
  return (
    <div className="w-5/6 relative justify-center mx-auto my-16">
      <img
        src="http://localhost:3000/elipse_2.svg"
        alt=""
        className="w-12 absolute left-[-5%] top-[50%] max-xl:w-0"
      />
      <div>
        <h1
          id="title"
          className="mx-auto w-full text-center text-title text-5xl py-9"
        >
          SERVIÇOS
        </h1>
        <h2 className="text-title text-1xl text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
          exercitationem impedit expedita cum, atque inventore, assumenda, eaque
          mmodi officiis quod amet dolorem fugit.
        </h2>
      </div>
      <div className="grid grid-cols-4 gap-8 max-sm:grid-cols-1 max-xl:grid-cols-2 w-full">
        <ServiceCard
          title={"SERVIÇO descrito aqui SERVIÇO descrito aqui"}
          description={"teste teste teste teste teste teste teste teste teste"}
        />
        <ServiceCard
          title={"SERVIÇO descrito aqui SERVIÇO descrito aqui"}
          description={"teste teste teste teste teste teste teste teste teste"}
        />
        <ServiceCard
          title={"SERVIÇO descrito aqui SERVIÇO descrito aqui"}
          description={"teste teste teste teste teste teste teste teste teste"}
        />
        <ServiceCard
          title={"SERVIÇO descrito aqui SERVIÇO descrito aqui"}
          description={"teste teste teste teste teste teste teste teste teste"}
        />
        <img
          src="http://localhost:3000/elipse_3.svg"
          alt=""
          className="w-6 absolute right-[35%] bottom-[-19%] max-xl:bottom-[-10%] max-sm:-bottom-[5.5%]"
        />
      </div>
    </div>
  );
}
