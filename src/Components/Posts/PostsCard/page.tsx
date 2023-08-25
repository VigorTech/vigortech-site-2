export function PostCard() {
  return (
    <div id="containers" className="">
      <img
        src="http://localhost:3000/background.png"
        alt=""
        className="w-[100%] h-[18rem] rounded-md drop-shadow-[5px_5px_15px_rgba(0,0,0,0.25)]"
      />
      <h1
        id="categoy"
        className="text-[#7BB4D3] letter tracking-[3.5px] pt-6 text-md text-poppins-bold "
      >
        CATEGORY
      </h1>
      <h1 id="title" className="py-4 text-2xl text-poppins-bold ">
        The Guide To Living Creatively
      </h1>
    </div>
  );
}
