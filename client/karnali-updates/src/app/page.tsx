import LoginPage from "./login/page";
import KarnaliUpdatesNavbar from "@/components/layout/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main>

      <KarnaliUpdatesNavbar/>

      <section className="grid lg:grid-cols-2 gap-6 py-8">
        <div className="relative h-[500px] rounded-3xl overflow-hidden group cursor-pointer">
          <Image
            src="/news.jpg"
            alt="news"
            fill
            className="object-cover group-hover:scale-110 transition duration-500"
          />

          <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-8">
            <span className="bg-red-600 w-fit px-3 py-1 rounded-full text-sm">
              Breaking News
            </span>

            <h1 className="text-4xl font-bold mt-4 leading-tight">
              Nepal launches new technology innovation program
            </h1>

            <p className="text-gray-300 mt-3">
              Government announces major digital transformation initiative.
            </p>
          </div>
        </div>

        <div className="grid gap-4">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-slate-900 rounded-2xl p-5 hover:bg-slate-800 transition"
            >
              <span className="text-red-500 text-sm">Technology</span>
              <h2 className="text-xl font-semibold mt-2">
                AI startups are growing rapidly in South Asia
              </h2>
            </div>
          ))}
        </div>
      </section>

      {/* <section>
        <LoginPage></LoginPage>
      </section> */}
    </main>
  );
}


