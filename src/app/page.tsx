import Image from "next/image";
import Link from "next/link";
import Footer from "./components/Footer";


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
          <Link
            href="https://www.facebook.com/reno.jnr.008?mibextid=ZbWKwL"
            target="_blank"
          >
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
              <div className="absolute inset-0 bg-black/30"></div>
              <p className="font-vogue uppercase text-xl font-semibold tracking-widest text-white">
                Events
              </p>
            </div>
          </Link>
          <Link href="" className="md:basis-[40%] xl:basis-[35%]">
            <div className="w-full flex items-center justify-center drop-shadow-md bg-[url('/images/image.webp')] bg-cover bg-center bg-no-repeat object-fill md:h-[450px] xl:h-[650px] grayscale hover:grayscale-0 transition duration-300 ease-in-out">
              <div className="absolute inset-0 bg-black/30"></div>
              <p className="font-vogue uppercase text-xl font-semibold tracking-widest text-white">
                Portraits
              </p>
            </div>
          </Link>
        </div>
        <div className="flex gap-2">
          <Link href="" className="md:basis-[40%] basis-[35%]">
            <div className="w-full flex items-center justify-center drop-shadow-md bg-[url('/images/image.webp')] bg-cover bg-center bg-no-repeat object-fill md:h-[450px] h-[650px] grayscale hover:grayscale-0 transition duration-300 ease-in-out">
              <div className="absolute inset-0 bg-black/30"></div>
              <p className="font-vogue uppercase text-xl font-semibold tracking-widest text-white">
                Headshots
              </p>
            </div>
          </Link>
          <Link href="" className="md:basis-[60%] basis-[65%]">
            <div className="w-full flex items-center justify-center drop-shadow-md bg-[url('/images/image.webp')] bg-cover bg-center bg-no-repeat object-fill md:h-[450px] h-[650px] grayscale hover:grayscale-0 transition duration-300 ease-in-out">
              <div className="absolute inset-0 bg-black/30"></div>
              <p className="font-vogue uppercase text-xl font-semibold tracking-widest text-white">
                Conferences
              </p>
            </div>
          </Link>
        </div>
        <div className="flex gap-2">
          <Link href="" className="md:basis-[60%] basis-[65%]">
            <div className="w-full flex items-center justify-center drop-shadow-md bg-[url('/images/image.webp')] bg-cover bg-center bg-no-repeat object-fill md:h-[450px] h-[650px] grayscale hover:grayscale-0 transition duration-300 ease-in-out">
              <div className="absolute inset-0 bg-black/30"></div>
              <p className="font-vogue uppercase text-xl font-semibold tracking-widest text-white">
                Lifestyle
              </p>
            </div>
          </Link>
          <Link href="" className="md:basis-[40%] basis-[35%]">
            <div className="w-full flex items-center justify-center drop-shadow-md bg-[url('/images/image.webp')] bg-cover bg-center bg-no-repeat object-fill md:h-[450px] h-[650px] grayscale hover:grayscale-0 transition duration-300 ease-in-out">
              <div className="absolute inset-0 bg-black/30"></div>
              <p className="font-vogue uppercase text-xl font-semibold tracking-widest text-white">
                Weddings
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* Small screen version */}
      <section className="flex flex-col gap-y-2 md:hidden lg:hidden xl:hidden w-full px-2 pb-24">
        {imageCategories.map((category, index) => (
          <Link href={category.path} key={index}>
            <div
              className={`flex items-center justify-center drop-shadow-md grayscale bg-cover bg-center bg-no-repeat object-fill h-[250px] w-full hover:grayscale-0 transition duration-300 ease-in-out`}
              style={{ backgroundImage: `url(${category.cover})` }}
            >
              <div className="absolute inset-0 bg-black/30"></div>
              <p className="font-vogue uppercase text-white text-xl font-semibold tracking-widest">
                {category.title}
              </p>
            </div>
          </Link>
        ))}
      </section>

      {/* About Me */}
      <section className="flex flex-col md:flex-row xl:flex-row items-center gap-y-14 md:gap-x-8 xl:gap-x-8 pb-24 w-full md:11/12 xl:w-4/5 mx-auto">
        <div className="basis-[50%]">
          <Image
            src="/images/me.webp"
            alt="me"
            width={850}
            height={1000}
            className="object-contain aspect-[850/1000] grayscale hover:grayscale-0 transition duration-300 ease-in-out"
          />
        </div>
        <div className="basis-[50%] flex flex-col gap-y-4 text-center">
          <p className="font-[calligraffitti] font-bold text-4xl">
            Hey there! I&apos;m Nathan
          </p>

          <h5 className="font-vogue text-base">YOUR FAV PHOTOGRAPHER</h5>
          <p className="font-[sorts] text-base p-3">
            Capturing life&apos;s moments, one frame at a time. Let me tell your
            story through the lens, turning the ordinary into the extraordinary.
            Ready to create something unforgettable? Let&apos;s connect and make
            magic happen!
          </p>

          <Link href="tel:+2349091748665">
            <button className="border-2 font-[sorts] mt-5 border-black w-fit mx-auto text-center py-3 px-5 text-xs hover:bg-black hover:text-white  transition duration-300 ease-in-out tracking-wider">
              GET IN TOUCH
            </button>
          </Link>
        </div>
      </section>
      <Footer/>
    </main>
  );
}
