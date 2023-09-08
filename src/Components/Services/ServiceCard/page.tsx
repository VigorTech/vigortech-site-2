type ServiceCardProps = {
  title: string;
  description: string;
};

export function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <div
      id="ServiceCard"
      className="w-[100%] h-[20.5rem] my-7  pl-12 pr-2 pt-14 bg-[#1A2E35] rounded-md shadow-xl "
    >
      <img src="http://localhost:3000/icone.svg" className="w-16 " />
      <div>
        <h1 className="text-left break-all text-sm leading-4 text-cardTitle py-5 uppercase tracking-[3.5px] w-[90%]">
          {title}
        </h1>
        <p className="text-left text-[#FFF]">{description}</p>
      </div>
    </div>
  );
}
