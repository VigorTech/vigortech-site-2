import { Header } from "./Components/Header/page";

export default function Home() {
  return (
    <main className="">
      <section className="" id="home">
        <Header />
        <div
          id="smoke"
          className="bg-black w-1/3 h-64 absolute left-1/3 top-1/3 shadow-lg shadow-black drop-shadow-3xl rounded-lg "
        ></div>
        <img
          src="http://localhost:3000/background.png"
          alt=""
          className="h-screen w-screen"
        />
      </section>
    </main>
  );
}
