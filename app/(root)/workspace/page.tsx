"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import WideCard from "@/components/WideCard";
import Footer from "@/components/Footer";
import Image from "next/image";

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
      projectType: "Freelance",
      title: "Desktop Archive Management for Cilandak District Office",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eaque placeat quia totam repellat atque, optio quidem quo sed quos illum dolores laudantium qui rem aspernatur accusantium quaerat ex omnis?",
    },
    {
      url: "/images/mobile.png",
      alt: "",
      projectType: "Freelance",
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

      <main className="mx-auto flex w-full max-w-7xl flex-col mb-10 lg:mb-16">
        <section className="mb-6 lg:mb-12">
          <h4 className="text-gray-500 text-xs md:text-sm lg:text-base font-semibold mb-2">
            What I've done as
          </h4>
          <h1 className="text-black text-3xl font-bold uppercase md:text-4xl lg:text-5xl">
            Junior Developer
          </h1>
        </section>

        <section className="flex flex-col gap-8 md:flex-row md:items-center lg:gap-12 mb-16 lg:mb-24">
          <div className="flex justify-center md:w-1/2">
            <Image
              src="/images/js.png"
              alt="Javascript Hoax Detection System Using Machine Learning"
              width={600}
              height={400}
              className="w-full rounded-lg object-contain shadow-lg"
            />
          </div>
          <div className="flex flex-col gap-4 md:w-1/2 lg:gap-7">
            <div className="flex flex-col gap-2">
              <p className="text-xs uppercase tracking-wider text-gray-500">
                freelance
              </p>
              <h2 className="text-2xl font-bold text-gray-800 lg:text-4xl">
                Hoax Detection System Using Machine Learning
              </h2>
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-sm leading-relaxed text-gray-500 md:text-base">
                Created a Chromium extension to detect misinformation on
                Platform X, integrating GPT-based LLM for automated
                fact-checking.
              </p>
              <Link
                className="self-start border bg-white px-5 py-2 text-xs font-medium uppercase tracking-wider text-black transition-colors duration-200 hover:bg-black hover:text-white lg:px-7 lg:py-3 lg:text-sm"
                href={"/workspace/hoax-detection-system-using-machine-learning"}
              >
                VIEW DETAILS
              </Link>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map(
            ({ url, alt, projectType, title, description }, index) => (
              <WideCard
                key={index}
                url={url}
                alt={alt}
                projectType={projectType}
                title={title}
                description={description}
              />
            )
          )}
        </section>
      </main>

      <Footer />
    </>
  );
};

export default page;
