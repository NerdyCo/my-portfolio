// "use client";

// import { useRef, useEffect } from "react";
// import { gsap } from "gsap";
import WideCard from "@/components/WideCard";
import Footer from "@/components/Footer";
import FeaturedProject from "@/components/FeaturedProject";
import { client } from "@/sanity/lib/client";
import { glimpseProjectQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

const page = async () => {
  // const curtainRef = useRef(null);
  const projects = await client.fetch(glimpseProjectQuery);
  const featuredProject = projects[0];
  const otherProjects = projects.slice(1);

  // useEffect(() => {
  //   gsap.to(curtainRef.current, {
  //     width: "0%",
  //     duration: 0.8,
  //     ease: "power2.inOut",
  //     delay: 0.2,
  //   });
  // }, []);

  // const projects = [
  //   {
  //     url: "/images/java.png",
  //     alt: "",
  //     projectType: "Freelance",
  //     title: "Desktop Archive Management for Cilandak District Office",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eaque placeat quia totam repellat atque, optio quidem quo sed quos illum dolores laudantium qui rem aspernatur accusantium quaerat ex omnis?",
  //   },
  //   {
  //     url: "/images/mobile.png",
  //     alt: "",
  //     projectType: "Freelance",
  //     title: "Humanitarian App & Website for CNT IT Corporation",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eaque placeat quia totam repellat atque, optio quidem quo sed quos illum dolores laudantium qui rem aspernatur accusantium quaerat ex omnis?",
  //   },
  // ];

  return (
    <>
      {/* <div
        ref={curtainRef}
        className="fixed top-0 right-0 h-screen bg-black z-50"
        style={{ width: "100%" }}
      ></div> */}

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
          <FeaturedProject
            imageUrl={urlFor(featuredProject.imageBanner).url()}
            imageAlt={featuredProject.imageBanner.alt}
            projectType={featuredProject.projectType}
            title={featuredProject.title}
            shortDescription={featuredProject.shortDescription}
            detailUrl={`/workspace/${featuredProject.slug}`}
          />
        </section>

        {/* <section className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((project: any) => (
            <WideCard
              key={project._id}
              url={project.imageBanner || "/images/avatar.jpg"}
              alt={project.title}
              projectType={project.projectType}
              title={project.title}
              description={project.shortDescription}
            />
          ))}
        </section> */}
      </main>

      <Footer />
    </>
  );
};

export default page;
