import Link from "next/link";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

export default function Home() {
  const menuItem = [
    {
      title: "about",
      path: "/",
    },
    {
      title: "about",
      path: "/",
    },
    {
      title: "about",
      path: "/",
    },
    {
      title: "about",
      path: "/",
    },
  ];
  return (
    <main className="container mx-auto">
      <header className="bg-[url('/images/Hero.webp')] bg-no-repeat bg-cover bg-center bg-fixed h-screen filter grayscale transition ease-in-out hover:grayscale-0">
        <div className="flex flex-col gap-y-5 items-center justify-center pt-[100px]">
          <h1 className="font-calligraffitti text-5xl xl:text-8xl font-black">
            Oba Nathan
          </h1>
          <nav className="font-sorts">
            <ul className="flex items-center gap-x-8">
              {menuItem.map((item, index) => (
                <Link href={item.path} key={index}>
                  <li className="uppercase text-xs font-black">{item.title}</li>
                </Link>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-x-5 mt-2">
            <Link href="">
              <FaFacebookF className="text-sm" />
            </Link>
            <Link href="">
              <RiInstagramFill className="text-sm" />
            </Link>
            <Link href="">
              <FaTwitter className="text-sm" />
            </Link>
          </div>
        </div>
      </header>
      <section className="px-4 xl:px-0">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae iure
        praesentium nihil expedita harum unde consequatur molestias libero,
        minima est, beatae, accusantium doloribus. Culpa similique alias saepe
        cumque explicabo fugit, temporibus ipsam, facilis ducimus expedita
        excepturi commodi ullam dolores velit. Veritatis maiores ad suscipit
        facilis minus culpa atque exercitationem fugit eius porro quis, fuga rem
        officiis cupiditate quasi quos explicabo commodi enim. Quas quaerat
        itaque rem magni qui ut aliquid quos nemo delectus, similique, ad
        pariatur, fugiat sint. Magni, nam deleniti qui sequi quo repudiandae
        eligendi atque harum porro accusamus sit! Voluptatem expedita
        accusantium, odio est, cupiditate eius quod debitis, nostrum commodi ut
        doloremque quis minus repudiandae sequi! Doloremque aut optio esse
        mollitia, quibusdam ipsam ea incidunt numquam officiis animi porro.
        Cupiditate culpa quasi iure quae totam nisi unde delectus, adipisci
        voluptatibus eligendi quibusdam error voluptatem itaque quod, cum
        laborum sint magni ab impedit temporibus. Optio corrupti omnis iste
        magni molestiae rerum, repellat, officiis delectus vero odit libero. Ut
        voluptas accusantium repudiandae perspiciatis nobis eligendi provident
        vero voluptatum. Corporis soluta eligendi, laudantium aperiam dolore
        iusto modi rerum laborum tempore quasi nihil quas recusandae pariatur
        magnam obcaecati tempora voluptatibus sequi necessitatibus quisquam.
        Error, veritatis esse similique praesentium nesciunt impedit non libero.
      </section>
    </main>
  );
}
