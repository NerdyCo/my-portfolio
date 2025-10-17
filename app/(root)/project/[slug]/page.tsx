import Image from "next/image";
import PortableTextRenderer from "@/components/PortableTextRenderer";
import WideCard from "@/components/WideCard";
import { client } from "@/sanity/lib/client";
import { fullProjectQuery, glimpseProjectQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

const SpecificProjectPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const project = await client.fetch(fullProjectQuery, { slug });
  const allProjects = await client.fetch(glimpseProjectQuery);
  const otherProjects = allProjects.filter(
    (other: { slug: string }) => other.slug !== slug
  );

  if (!project) {
    return <div>Project not found</div>;
  }

  const {
    title,
    startDate,
    endDate,
    tags,
    companyName,
    jobPosition,
    imageBanner,
    content,
  } = project;

  const formatDate = (dateString: string): string => {
    if (!dateString) return "";
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      month: "short",
      year: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  };

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
    <main>
      <section className="mb-5">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-black font-medium text-center">
          {title}
        </h1>
        <div className="flex flex-wrap gap-2 my-10 justify-center items-center">
          {tags.map((tag: string) => (
            <span
              key={tag}
              className="py-1 px-3 bg-black text-sm text-white rounded-xl text-center"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="h-[220px] md:h-[300px] lg:h-[500px] xl:h-[600px] w-full relative">
          <Image
            src="/images/mobile.png"
            alt="Banner"
            fill
            className="rounded-xl object-cover"
          />
        </div>
      </section>

      <section className="lg:flex lg:flex-row lg:gap-12 mb-12 lg:mt-12">
        <div className="flex flex-row lg:flex-col max-lg:justify-between gap-5 mb-10">
          <div>
            <h4 className="text-gray-500 text-sm mb-2">Company</h4>
            <p className="text-black text-sm md:text-base">
              {companyName && jobPosition ? (
                <>
                  {companyName} <span className="font-bold">AS</span>{" "}
                  {jobPosition}
                </>
              ) : (
                "Personal Project"
              )}
            </p>
          </div>
          <div>
            <h4 className="text-gray-500 text-sm mb-2">Duration Job</h4>
            <p className="text-black text-sm md:text-base">
              {formatDate(startDate)} - {formatDate(endDate)}
            </p>
          </div>
        </div>
        <div className="prose md:prose-lg">
          <PortableTextRenderer content={content} />
        </div>
      </section>

      <div className="bg-gray-200/50 -mx-8 sm:-mx-12 md:-mx-16 lg:-mx-20 xl:-mx-32 py-8">
        <section className="px-8 sm:px-12 md:px-16 lg:px-20">
          <h3 className="text-black text-3xl font-bold mb-10">
            Other Projects
          </h3>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {otherProjects.length > 0 ? (
              otherProjects
                .slice(0, 3)
                .map((project: any) => (
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
                No other projects to display.
              </p>
            )}
          </div>
        </section>
      </div>
    </main>
  );
};

export default SpecificProjectPage;
