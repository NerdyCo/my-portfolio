export default function Home() {
  return (
    <>
      <header className="flex flex-row justify-between p-8 md:p-10 lg:p-12">
        <div>
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/material-outlined/24/pixel-cat.png"
            alt="pixel-cat"
          />
        </div>
        <div>
          <ul className="flex text-sm gap-2">
            <li>
              <a href="#">INA</a>
            </li>
            <span>/</span>
            <li>
              <a href="#">ENG</a>
            </li>
          </ul>
        </div>
      </header>

      <main className="flex flex-col justify-center items-center py-16 px-4 md:my-36 lg:my-auto">
        <h1 className="font-bold text-center text-4xl leading-tight px-4 mb-16 md:text-6xl lg:text-7xl">
          Hi, I'm Teguh. I'm a coder.
        </h1>
        <button className="box-border bg-background text-foreground hover:bg-foreground hover:text-background border duration-300 font-semibold tracking-wider py-3 px-8 text-sm cursor-pointer">
          Explore
        </button>
      </main>
    </>
  );
}
