export function PostCardFull() {
  return (
    <div>
      <div id="container" className="w-full">
        <img
          src="http://localhost:3000/background.png"
          alt=""
          className="w-[95%] h-[28rem] max-xl:w-[100%] rounded-md drop-shadow-[5px_5px_15px_rgba(0,0,0,0.25)]"
        />
        <h1
          id="categoy"
          className="text-[#7BB4D3] letter tracking-[3.5px] pt-6 text-lg text-poppins-bold "
        >
          CATEGORY
        </h1>
        <h1 id="title" className="py-4 text-4xl text-poppins-bold ">
          The Guide To Living Creatively
        </h1>
        <p
          id="description"
          className="text-xl w-[90%] py-6 text-poppins leading-8"
        >
          At half-past eight the door opened, the policeman appeared, and,
          requesting them to follow him, led the way to an adjoining hall. It
          was evidently a court-room, and a crowd of Europeans and natives
          already occupied the rear of the apartment.
        </p>
      </div>
    </div>
  );
}
