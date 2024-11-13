import Image from "next/image";
import Link from "next/link";

export default function Home() {
  
  const imageCategories = [
    {
      title: "Portraits",
      cover: "/images/image.webp",
      path: "",
    },
    {
      title: "Events",
      cover: "/images/image.webp",
      path: "",
    },
    {
      title: "Headshots",
      cover: "/images/image.webp",
      path: "",
    },
    {
      title: "Conferences",
      cover: "/images/image.webp",
      path: "",
    },
    {
      title: "lifestyle",
      cover: "/images/image.webp",
      path: "",
    },
    {
      title: "Weddings",
      cover: "/images/image.webp",
      path: "",
    },
  ];
  return (
    <main className="container mx-auto">
      <header className="flex flex-col gap-y-2 items-center justify-center py-14 pb-24">
        <h1 className="uppercase font-vogue text-6xl md:text-7xl xl:text-9xl font-black">
          oba nathan
        </h1>
        <div className="flex items-center gap-x-4">
          <Link
            href="https://x.com/Oba__Nathan?t=GblSQE7bfeLs3f3i9mrLPQ&s=09"
            target="_blank"
          >
            <Image
              src="/images/x.png"
              alt="x-icon"
              width={32}
              height={32}
              className="grayscale-0"
            />
          </Link>
          <Link href="https://www.facebook.com/reno.jnr.008?mibextid=ZbWKwL">
            <Image
              src="/images/facebook.png"
              alt="facebook-icon"
              width={32}
              height={32}
              className="grayscale-0"
            />
          </Link>
          <Link
            href="https://www.instagram.com/oba_nathan?igsh=MTVsNms3Ync0MTcw"
            target="_blank"
          >
            <Image
              src="/images/instagram.png"
              alt="instagram-icon"
              width={32}
              height={32}
              className="grayscale-0"
            />
          </Link>
          <Link
            href="https://www.instagram.com/oba_nathan?igsh=MTVsNms3Ync0MTcw"
            target="_blank"
          >
            <Image
              src="/images/behance.png"
              alt="behance-icon"
              width={32}
              height={32}
              className="grayscale-0"
            />
          </Link>
        </div>
      </header>
      {/* Big screen version */}
      <section className="hidden md:flex xl:flex flex-col gap-y-2 pb-24">
        <div className="flex gap-2">
          <Link href="" className="md:basis-[60%] xl:basis-[65%]">
            <div className="w-full flex items-center justify-center drop-shadow-md bg-[url('/images/image.webp')] bg-cover bg-center bg-no-repeat object-fill md:h-[450px] xl:h-[650px] grayscale hover:grayscale-0 transition duration-300 ease-in-out">
              <p className="font-vogue uppercase text-xl font-semibold tracking-widest">
                Lifestyle
              </p>
            </div>
          </Link>
          <Link href="" className="md:basis-[40%] xl:basis-[35%]">
            <div className="w-full flex items-center justify-center drop-shadow-md bg-[url('/images/image.webp')] bg-cover bg-center bg-no-repeat object-fill md:h-[450px] xl:h-[650px] grayscale hover:grayscale-0 transition duration-300 ease-in-out">
              <p className="font-vogue uppercase text-xl font-semibold tracking-widest">
                Lifestyle
              </p>
            </div>
          </Link>
        </div>
        <div className="flex gap-2">
          <Link href="" className="md:basis-[40%] basis-[35%]">
            <div className="w-full flex items-center justify-center drop-shadow-md bg-[url('/images/image.webp')] bg-cover bg-center bg-no-repeat object-fill md:h-[450px] h-[650px] grayscale hover:grayscale-0 transition duration-300 ease-in-out">
              <p className="font-vogue uppercase text-xl font-semibold tracking-widest">
                Lifestyle
              </p>
            </div>
          </Link>
          <Link href="" className="md:basis-[60%] basis-[65%]">
            <div className="w-full flex items-center justify-center drop-shadow-md bg-[url('/images/image.webp')] bg-cover bg-center bg-no-repeat object-fill md:h-[450px] h-[650px] grayscale hover:grayscale-0 transition duration-300 ease-in-out">
              <p className="font-vogue uppercase text-xl font-semibold tracking-widest">
                Lifestyle
              </p>
            </div>
          </Link>
        </div>
        <div className="flex gap-2">
          <Link href="" className="md:basis-[60%] basis-[65%]">
            <div className="w-full flex items-center justify-center drop-shadow-md bg-[url('/images/image.webp')] bg-cover bg-center bg-no-repeat object-fill md:h-[450px] h-[650px] grayscale hover:grayscale-0 transition duration-300 ease-in-out">
              <p className="font-vogue uppercase text-xl font-semibold tracking-widest">
                Lifestyle
              </p>
            </div>
          </Link>
          <Link href="" className="md:basis-[40%] basis-[35%]">
            <div className="w-full flex items-center justify-center drop-shadow-md bg-[url('/images/image.webp')] bg-cover bg-center bg-no-repeat object-fill md:h-[450px] h-[650px] grayscale hover:grayscale-0 transition duration-300 ease-in-out">
              <p className="font-vogue uppercase text-xl font-semibold tracking-widest">
                Lifestyle
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* Small screen version */}
      <section className="flex flex-col gap-y-2 md:hidden lg:hidden xl:hidden w-full px-2 pb-24">
        {imageCategories.map((category) => (
          <Link href={category.path}>
            <div
              className={`flex items-center justify-center drop-shadow-md grayscale bg-cover bg-center bg-no-repeat object-fill h-[250px] w-full hover:grayscale-0 transition duration-300 ease-in-out`}
              style={{ backgroundImage: `url(${category.cover})` }}
            >
              <p className="font-vogue uppercase text-xl font-semibold tracking-widest">
                {category.title}
              </p>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
