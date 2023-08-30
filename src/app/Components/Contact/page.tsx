import { ServiceCard } from "../Services/ServiceCard/page";

export function Contact() {
    return (
        <div className="w-5/6 justify-center mx-auto mt-16" >
            <div>
                <h1
                    id="title"
                    className="mx-auto w-full text-center text-title text-5xl "
                >
                    CONTATO
                </h1>
                <h2
                    className="text-title text-1xl text-center"
                >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
                    exercitationem impedit expedita cum, atque inventore, assumenda,
                    eaque mmodi officiis quod amet dolorem fugit.
                </h2>
            </div>
            <div> 
                <form action="">
                    <div className="grid grid-cols-2">
                    <div className="col-span-2"><label htmlFor="txtName">Nome Completo</label><input type="text" className="bg-[#E8E8E8] w-[46.6875rem] h-16 rounded-md" name="" id="" /></div>
                    <div><label htmlFor="txtPhone">Telefone</label><input type="text" className="bg-[#E8E8E8] w-[22.5rem] h-16 rounded-md" name="" id="" /></div>
                    <div><label htmlFor="txtMail">e-mail</label><input type="text" className="bg-[#E8E8E8] w-[22.5rem] h-16 rounded-md" name="" id="" /></div>
                    <div className="col-span-2"><label htmlFor="txtMensage">Mensagem</label><input type="text" className="bg-[#E8E8E8] w-[46.6875rem] h-36 rounded-md" name="" id="" /></div>
                    </div>
                </form>
            </div>
        </div>
    )
}