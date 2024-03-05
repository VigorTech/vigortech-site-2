type PostCardFullProps = {
  title: string;
  subtitle: string;
  description: string;
};

export function PostCardFull({
  title,
  subtitle,
  description,
}: PostCardFullProps) {
  return (
    <div>
      <div id="container" className="w-full cursor-pointer">
        <img
          src="/background.png"
          alt=""
          className="w-[95%] h-[28rem] max-lg:w-[100%] max-lg:h-[30rem] max-sm:h-[18rem] object-fill rounded-md drop-shadow-[5px_5px_15px_rgba(0,0,0,0.25)]"
        />
        <h1
          id="categoy"
          className="text-[#7BB4D3] letter tracking-[3.5px] pt-6 text-lg text-poppins-bold "
        >
          {title}
        </h1>
        <h1 id="title" className="py-4 text-4xl text-poppins-bold ">
          {subtitle}
        </h1>
        <p
          id="description"
          className="text-xl w-[90%] py-6 text-poppins leading-8"
        >
          {description}
        </p>
      </div>
    </div>
  );
}
