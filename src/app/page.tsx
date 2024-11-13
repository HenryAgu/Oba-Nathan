import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto">
      <header className="flex flex-col gap-y-2 items-center justify-center py-14 pb-24">
        <h1 className="uppercase font-vogue text-6xl xl:text-9xl font-black">
          oba nathan
        </h1>
        <div className="flex items-center gap-x-4">
          <Link href="">
            <Image
              src="/images/x.png"
              alt="instagram-icon"
              width={32}
              height={32}
              className="grayscale hover:grayscale-0 transition duration-300 ease-in-out"
            />
          </Link>
          <Link href="">
            <Image
              src="/images/facebook.png"
              alt="instagram-icon"
              width={32}
              height={32}
              className="grayscale hover:grayscale-0 transition duration-300 ease-in-out"
            />
          </Link>
          <Link href="">
            <Image
              src="/images/instagram.png"
              alt="instagram-icon"
              width={32}
              height={32}
              className="grayscale hover:grayscale-0 transition duration-300 ease-in-out"
            />
          </Link>
        </div>
      </header>
      {/* Big screen version */}
      <section className="hidden xl:flex flex-col gap-y-2 pb-24">
        <div className="flex gap-2">
          <div className="basis-[65%] flex items-center justify-center drop-shadow-md bg-[url('/images/image.webp')] bg-cover bg-center bg-no-repeat object-fill h-[650px] grayscale hover:grayscale-0 transition duration-300 ease-in-out">
            <p className="font-vogue uppercase text-xl font-semibold tracking-widest">
              Lifestyle
            </p>
          </div>
          <div className="basis-[35%] flex items-center justify-center drop-shadow-md bg-[url('/images/image.webp')] bg-cover bg-center bg-no-repeat object-fill h-[650px] grayscale hover:grayscale-0 transition duration-300 ease-in-out">
            <p className="font-vogue uppercase text-xl font-semibold tracking-widest">
              Lifestyle
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="basis-[35%] flex items-center justify-center drop-shadow-md bg-[url('/images/image.webp')] bg-cover bg-center bg-no-repeat object-fill h-[650px] grayscale hover:grayscale-0 transition duration-300 ease-in-out">
            <p className="font-vogue uppercase text-xl font-semibold tracking-widest">
              Lifestyle
            </p>
          </div>
          <div className="basis-[65%] flex items-center justify-center drop-shadow-md bg-[url('/images/image.webp')] bg-cover bg-center bg-no-repeat object-fill h-[650px] grayscale hover:grayscale-0 transition duration-300 ease-in-out">
            <p className="font-vogue uppercase text-xl font-semibold tracking-widest">
              Lifestyle
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="basis-[65%] flex items-center justify-center drop-shadow-md bg-[url('/images/image.webp')] bg-cover bg-center bg-no-repeat object-fill h-[650px] grayscale hover:grayscale-0 transition duration-300 ease-in-out">
            <p className="font-vogue uppercase text-xl font-semibold tracking-widest">
              Lifestyle
            </p>
          </div>
          <div className="basis-[35%] flex items-center justify-center drop-shadow-md bg-[url('/images/image.webp')] bg-cover bg-center bg-no-repeat object-fill h-[650px] grayscale hover:grayscale-0 transition duration-300 ease-in-out">
            <p className="font-vogue uppercase text-xl font-semibold tracking-widest">
              Lifestyle
            </p>
          </div>
        </div>
      </section>

      {/* Small screen version */}
      <section className="flex flex-col gap-y-2  xl:hidden w-full pb-24">
        <div className="flex items-center justify-center drop-shadow-md grayscale bg-[url('/images/image.webp')] bg-cover bg-center bg-no-repeat object-fill h-[250px] w-full hover:grayscale-0 transition duration-300 ease-in-out">
          <p className="font-vogue uppercase text-xl font-semibold tracking-widest">
            Lifestyle
          </p>
        </div>
        <div className="flex items-center justify-center drop-shadow-md grayscale bg-[url('/images/image.webp')] bg-cover bg-center bg-no-repeat object-fill h-[250px] w-full hover:grayscale-0 transition duration-300 ease-in-out">
          <p className="font-vogue uppercase text-xl font-semibold tracking-widest">
            Lifestyle
          </p>
        </div>
        <div className="flex items-center justify-center drop-shadow-md grayscale bg-[url('/images/image.webp')] bg-cover bg-center bg-no-repeat object-fill h-[250px] w-full hover:grayscale-0 transition duration-300 ease-in-out">
          <p className="font-vogue uppercase text-xl font-semibold tracking-widest">
            Lifestyle
          </p>
        </div>
        <div className="flex items-center justify-center drop-shadow-md grayscale bg-[url('/images/image.webp')] bg-cover bg-center bg-no-repeat object-fill h-[250px] w-full hover:grayscale-0 transition duration-300 ease-in-out">
          <p className="font-vogue uppercase text-xl font-semibold tracking-widest">
            Lifestyle
          </p>
        </div>
        <div className="flex items-center justify-center drop-shadow-md grayscale bg-[url('/images/image.webp')] bg-cover bg-center bg-no-repeat object-fill h-[250px] w-full hover:grayscale-0 transition duration-300 ease-in-out">
          <p className="font-vogue uppercase text-xl font-semibold tracking-widest">
            Lifestyle
          </p>
        </div>
        <div className="flex items-center justify-center drop-shadow-md grayscale bg-[url('/images/image.webp')] bg-cover bg-center bg-no-repeat object-fill h-[250px] w-full hover:grayscale-0 transition duration-300 ease-in-out">
          <p className="font-vogue uppercase text-xl font-semibold tracking-widest">
            Lifestyle
          </p>
        </div>
      </section>
    </main>
  );
}
