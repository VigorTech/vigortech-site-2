export function ServiceCard({tittle, description}) {
  return (
    <div id="ServiceCard" className="w-[20.5rem] h-[20.5rem] m-10 pl-12 pt-14 bg-[#1A2E35] rounded-md shadow-xl ">
      <img src="http://localhost:3000/icone.svg" className="w-16 "/>
      <div>
        <h1 className="text-left break-all text-sm leading-4 text-cardTitle py-5 uppercase tracking-[3.5px] w-[90%]">{tittle}</h1>
        <p className="text-left text-[#FFF]">{description}</p>
      </div>
    </div>
  )
}