"use client";

import { gsap } from "gsap";
import { useRouter } from "next/navigation";
import { useRef } from "react";
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

      <main className="flex flex-col justify-center items-center py-16 px-4 md:my-36 lg:my-auto">
        <h1 className="font-bold text-center text-4xl leading-tight px-4 mb-16 md:text-6xl lg:text-7xl">
          <TypeAnimation
            sequence={["Hi, I'm Teguh.", 1500, "I'm a coder.", 2000]}
            wrapper="span"
            cursor={true}
            speed={50}
            deletionSpeed={70}
          />
        </h1>
        <button
          onClick={handleExploreClick}
          className="box-border bg-background text-foreground hover:bg-foreground hover:text-background border duration-300 font-semibold tracking-wider py-3 px-8 text-sm cursor-pointer"
        >
          Explore
        </button>
      </main>
    </>
  );
};

export default page;
