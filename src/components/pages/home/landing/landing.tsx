import img1 from "@/assets/img1.jpg";
import img2 from "@/assets/img2.jpg";
import img3 from "@/assets/img3.jpg";
import Image from "next/image";
import Link from "next/link";

const Landing = () => {
  return (
    <section className="container grid gap-6 md:gap-12">
      <div className="mx-auto max-w-[500px]">
        <h1 className="font-tight text-center text-4xl">
          Your <span className="italic">dream</span> home awaits - make it a
          reality with <span className="italic">Skyink</span>
        </h1>
      </div>
      <div className="grid h-[250px] md:h-[350px] gap-5 md:grid-cols-3">
        <Image
          placeholder="blur"
          src={img1}
          width={img1.width}
          height={img1.height}
          priority={true}
          loading="eager"
          blurDataURL={img1.blurDataURL}
          alt="Image 1"
          className="h-[250px] md:h-[350px] object-cover"
        />
        <Image
          placeholder="blur"
          src={img2}
          priority={true}
          loading="eager"
          width={img2.width}
          height={img2.height}
          blurDataURL={img2.blurDataURL}
          alt="Image 2"
          className="hidden h-[350px] object-cover md:block"
        />
        <Image
          placeholder="blur"
          src={img3}
          width={img3.width}
          height={img3.height}
          priority={true}
          loading="eager"
          blurDataURL={img3.blurDataURL}
          alt="Image 3"
          className="hidden h-[350px] object-cover md:block"
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
        className="mx-auto text-sm flex h-10 min-w-[150px] items-center justify-center rounded-full border border-black px-6  uppercase duration-300 hover:bg-black hover:text-white"
      >
        Shop all
      </Link>
    </section>
  );
};

export default Landing;
