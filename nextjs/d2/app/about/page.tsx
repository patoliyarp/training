import Image from "next/image";
export default function About() {
  return (
    <>
      <div className="min-h-screen  text-slate-200 font-sans">
        <main className="max-w-6xl mx-auto ">
          <div>
            <Image
              src="https://img.freepik.com/free-vector/wave-dark-gradient-background-desogn_343694-4095.jpg?semt=ais_rp_progressive&w=740&q=80"
              width="500"
              alt="about page image"
              height="200"
              loading="eager"
              className="opacity-90"
              style={{ width: "auto", height: "auto" }}
            />
          </div>
          <p className="px-6 pt-20 pb-24 md:pt-32">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim
            officiis quasi animi aut dolore rerum optio quia illum placeat
            facilis repellat, velit repellendus commodi consectetur dignissimos
            cumque ullam reprehenderit. Consequatur?
          </p>
        </main>
      </div>
    </>
  );
}
