import img1 from "@/assets/img1.jpg";
import img2 from "@/assets/img2.jpg";
import img3 from "@/assets/img3.jpg";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="py-10">
      <section className="container grid gap-12">
        <div className="mx-auto max-w-[500px]">
          <h1 className="text-center text-4xl">
            Your <span className="italic">dream</span> home awaits - make it a
            reality with <span className="italic">Skyink</span>
          </h1>
        </div>
        <div className="grid h-[400px] grid-cols-3 gap-5">
          <Image
            src={img1}
            width={img1.width}
            height={img1.height}
            blurDataURL={img1.blurDataURL}
            alt="Image 1"
            className="h-[400px] object-cover"
          />
          <Image
            src={img2}
            width={img2.width}
            height={img2.height}
            blurDataURL={img2.blurDataURL}
            alt="Image 2"
            className="h-[400px] object-cover"
          />
          <Image
            src={img3}
            width={img3.width}
            height={img3.height}
            blurDataURL={img3.blurDataURL}
            alt="Image 3"
            className="h-[400px] object-cover"
          />
        </div>
        <div className="mx-auto max-w-[400px] text-center text-sm font-medium">
          <p>
            Welcome to Skyink, where style meets comfort! Discover a world of
            timeless elegance and modern design as we invite you to explore our
            exquisite collection of furniture
          </p>
        </div>
        <Link
          href={"/shop"}
          className="mx-auto flex h-12 w-fit items-center rounded-full border border-black px-6 text-lg"
        >
          Shop all
        </Link>
      </section>
    </main>
  );
}
