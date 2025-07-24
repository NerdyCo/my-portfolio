"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import Card from "@/components/Card";
import Footer from "@/components/Footer";

const page = () => {
  const curtainRef = useRef(null);

  useEffect(() => {
    gsap.to(curtainRef.current, {
      width: "0%",
      duration: 0.8,
      ease: "power2.inOut",
      delay: 0.2,
    });
  }, []);

  const projects = [
    {
      url: "/images/java.png",
      alt: "",
      category: "Java",
      title: "Desktop Archive Management for Cilandak District Office",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eaque placeat quia totam repellat atque, optio quidem quo sed quos illum dolores laudantium qui rem aspernatur accusantium quaerat ex omnis?",
    },
    {
      url: "/images/mobile.png",
      alt: "",
      category: "Wordpress | Flutterflow | Supabase",
      title: "Humanitarian App & Website for CNT IT Corporation",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eaque placeat quia totam repellat atque, optio quidem quo sed quos illum dolores laudantium qui rem aspernatur accusantium quaerat ex omnis?",
    },
  ];

  return (
    <>
      <div
        ref={curtainRef}
        className="fixed top-0 right-0 h-screen bg-black z-50"
        style={{ width: "100%" }}
      ></div>

      <main className="flex flex-col mt-4 mx-10 lg:mt-0 lg:mx-20">
        <section>
          <h4 className="text-gray-500 text-xs md:text-sm">
            What I've done as
          </h4>
          <h1 className="text-black font-bold text-3xl mt-2 md:text-4xl lg:text-5xl">
            Junior Developer
          </h1>
        </section>

        <section className="mt-8 flex flex-col justify-between gap-8 md:flex-row md:items-center md:mt-12 lg:gap-16">
          <div className="flex justify-center">
            <img
              src="/images/js.png"
              width="500"
              height="500"
              alt="Javascript Hoax Detection System Using Machine Learning"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="flex flex-col gap-4 lg:gap-7 lg:w-[520px]">
            <div className="flex flex-col gap-2">
              <p className="text-xs text-gray-500 uppercase tracking-wider">
                Javascript | NodeJs | LLM
              </p>
              <h2 className="text-2xl font-bold text-gray-800 lg:text-4xl">
                Hoax Detection System Using Machine Learning
              </h2>
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Created a Chromium extension to detect misinformation on
                Platform X, integrating GPT-based LLM for automated
                fact-checking.
              </p>
              <Link
                className="text-xs py-2 px-5 cursor-pointer self-start uppercase border tracking-wider bg-white text-black duration-200 hover:bg-black hover:text-white lg:text-sm lg:py-3 lg:px-7"
                href={"/portfolio/hoax-detection-system-using-machine-learning"}
              >
                VIEW DETAILS
              </Link>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 gap-10 mt-16 mb-8 md:grid-cols-2">
          {projects.map(({ url, alt, category, title, description }, index) => (
            <Card
              key={index}
              url={url}
              alt={alt}
              category={category}
              title={title}
              description={description}
            />
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default page;
