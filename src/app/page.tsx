import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto">
      <div className="flex flex-col gap-y-2 items-center justify-center py-14 pb-24">
        <h1 className="uppercase font-vogue text-6xl xl:text-9xl font-black">oba nathan</h1>
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
      </div>
      <div className="px-8">
        image section
      </div>
    </main>
  );
}
