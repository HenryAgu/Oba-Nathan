export default function Home() {
  return (
    <div className="bg-[url('/images/Hero.webp')] bg-no-repeat bg-cover bg-center bg-fixed h-screen">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-4 items-center justify-center pt-[100px]">
          <h1 className="font-calligraffitti text-5xl font-black">Oba Nathan</h1>
          <nav className="font-sorts">
            <ul className="flex items-center gap-x-8 uppercase text-xs font-bold">
              <li>about</li>
              <li>about</li>
              <li>about</li>
              <li>about</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
