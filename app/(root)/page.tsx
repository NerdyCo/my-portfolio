"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";
import { TypeAnimation } from "react-type-animation";

const page = () => {
  const router = useRouter();
  const curtainRef = useRef(null);

  const animateCurtain = (onComplete: () => void) => {
    gsap.to(curtainRef.current, {
      width: "100%",
      duration: 0.8,
      ease: "power2.inOut",
      onComplete: onComplete,
    });
  };

  const handleExploreClick = () => {
    animateCurtain(() => {
      router.push("/portfolio");
    });
  };

  return (
    <>
      <div
        ref={curtainRef}
        className="fixed top-0 left-0 h-screen bg-black z-50"
        style={{ width: "0%" }}
      ></div>

      <main className="flex flex-1 flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
          Hi, I'm Teguh. I'm a coder
        </h1>

        <button
          onClick={handleExploreClick}
          className="mt-16 border border-foreground py-2 px-9 text-sm font-medium uppercase tracking-widest transition-colors duration-300 hover:bg-foreground hover:text-background md:mt-24"
        >
          Explore
        </button>
      </main>
    </>
  );
};

export default page;
