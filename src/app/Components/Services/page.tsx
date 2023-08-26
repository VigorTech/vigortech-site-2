import { ServiceCard } from "./ServiceCard/page";

export function Services() {
    return (
        <div className="w-5/6 justify-center mx-auto mt-16">
            <div>
                <h1
                    id="title"
                    className="mx-auto w-full text-center text-title text-5xl "
                >
                    SERVIÇOS
                </h1>
                <h2
                    className="text-title text-1xl text-center"
                >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
                    exercitationem impedit expedita cum, atque inventore, assumenda,
                    eaque mmodi officiis quod amet dolorem fugit.
                </h2>
            </div>
            <div className="inline-flex content-center justify-center max-xl:flex-col w-full">
                <ServiceCard tittle={"SERVIÇO descrito aqui SERVIÇO descrito aqui"} description={"teste teste teste teste teste teste teste teste teste"}/>
                <ServiceCard tittle={"SERVIÇO descrito aqui SERVIÇO descrito aqui"} description={"teste teste teste teste teste teste teste teste teste"}/>
                <ServiceCard tittle={"SERVIÇO descrito aqui SERVIÇO descrito aqui"} description={"teste teste teste teste teste teste teste teste teste"}/>
                <ServiceCard tittle={"SERVIÇO descrito aqui SERVIÇO descrito aqui"} description={"teste teste teste teste teste teste teste teste teste"}/>
            </div>
        </div>
    )
}