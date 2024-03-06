import EmailForm from "./EmailForm/page.";

export function Contact() {
  return (
    <>
      <div
        id="container"
        className="bg-bgContact bg-contain h-[55rem] max-xl:h-[70rem]"
      >
        <div
          id="form"
          className="flex flex-col items-center  w-full pt-20 h-[100vh]  "
        >
          <h1 className="text-[#1A2E35] text-6xl tracking-[3.5px] pt-6 text-md text-lato-bold">
            CONTATO
          </h1>
          <p className="text-xl w-[35%] text-center py-6 text-poppins leading-8">
            At half-past eight the door opened, the policeman appeared, and,
            requesting them to follow him, led the way to an adjoining hall. It
            was evidently a court-room.
          </p>
          <EmailForm />
        </div>
      </div>
    </>
  );
}
