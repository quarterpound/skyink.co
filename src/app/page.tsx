import Image from "next/image";

export default function Home() {
  return (
    <main className="py-6">
      <div className="container max-w-[800px] grid gap-5">
        <h1 className="text-5xl text-center font-semibold mx-auto">
          From Sun-Kissed Threads to Soulful Sculpts: Every Treasure Blooms in
          Your Haven
        </h1>
        <button className="px-4 py-2 border-black w-fit mx-auto h-[40px] border rounded-full">
          Explore Now
        </button>
      </div>
    </main>
  );
}
