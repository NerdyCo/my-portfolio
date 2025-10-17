"use client";

import WideCard from "@/components/WideCard";
import Footer from "@/components/Footer";
import FeaturedProject from "@/components/FeaturedProject";
import { useProjects } from "@/hooks/useProjects";
import { urlFor } from "@/sanity/lib/image";
import { SanityProject } from "@/types";

const ProjectPage = () => {
  const { projects, loading }: { projects: SanityProject[]; loading: boolean } =
    useProjects();
  const featuredProject = projects[0];
  const otherProjects = projects.slice(1);

  if (loading) return <div>Loading...</div>;

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
      <main className="mx-auto flex w-full max-w-7xl flex-col mb-10 lg:mb-16">
        <section className="mb-6 lg:mb-12">
          <h4 className="text-gray-500 text-xs md:text-sm lg:text-base font-semibold mb-2">
            What I&apos;ve done as
          </h4>
          <h1 className="text-black text-3xl font-semibold uppercase md:text-4xl lg:text-5xl">
            Junior Developer
          </h1>
        </section>

        <section className="flex flex-col gap-8 md:flex-row md:items-center lg:gap-12 mb-16 lg:mb-24">
          <FeaturedProject
            imageUrl={urlFor(featuredProject.imageBanner).url()}
            imageAlt={featuredProject.imageBanner.alt || featuredProject.title}
            projectType={featuredProject.projectType}
            title={featuredProject.title}
            shortDescription={featuredProject.shortDescription}
            detailUrl={`/workspace/${featuredProject.slug}`}
          />
        </section>

        <section className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {otherProjects.length > 0 ? (
            otherProjects.map((project: any) => (
              <WideCard
                key={project._id}
                url={urlFor(project.imageBanner).url()}
                alt={project.imageBanner?.alt || project.title}
                projectType={project.projectType}
                title={project.title}
                description={project.shortDescription}
                detailUrl={`/workspace/${project.slug}`}
              />
            ))
          ) : (
            <p className="text-gray-500 text-center col-span-full">
              There are no other projects to display.
            </p>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ProjectPage;
