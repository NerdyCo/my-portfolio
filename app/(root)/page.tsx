"use client";

import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();

  const handleExploreClick = () => {
    router.push("/workspace");
  };

  return (
    <>
      <main className="flex flex-1 flex-col items-center justify-center">
        <h1 className="text-center text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
          Hi, I'm Teguh. I'm a coder
        </h1>

        <button
          onClick={handleExploreClick}
          className="mt-16 border border-foreground py-2 px-9 text-sm font-medium uppercase tracking-widest transition-colors duration-300 hover:bg-foreground hover:text-background md:mt-24 hover:cursor-pointer"
        >
          Explore
        </button>
      </main>
    </>
  );
};

export default page;
