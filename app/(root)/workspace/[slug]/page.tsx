"use client";

import Image from "next/image";
import PortableTextRenderer from "@/components/PortableTextRenderer";
import WideCard from "@/components/WideCard";

const page = () => {
  const hardcodedProjectData = {
    _id: "example-project",
    title: "Humanitarian App & Website For CNT IT Corporation",
    slug: "humanitarian-app-website-for-cnt-it-corporation",
    startDate: "2023-08-01",
    endDate: "2023-10-31",
    tags: ["Flutterflow", "Supabase", "WordPress", "Figma", "Canva"],
    companyName: "CNT IT Corporation",
    jobPosition: "Junior Developer",
    imageBanner: {
      asset: {
        _ref: "image-placeholder-12345",
      },
    },
    content: [
      {
        _key: "block-1",
        _type: "block",
        style: "h2",
        children: [
          {
            _key: "span-1",
            _type: "span",
            text: "My Internship Journey At CNT IT Corporation: From Schemas To Humanitarian Apps",
          },
        ],
      },
      {
        _key: "block-2",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "span-2",
            _type: "span",
            text: "In August 2023, I had The Opportunity To Intern as a Junior Developer at CNT IT Corporation in Bandung, Indonesia. As a Computer Science Student Deeply Passionate about Backend Development And Real-World Impact, This Internship Was More Than Just A Learning Experience - It Has A Chance To Contribute Meaningfully To Something Bigger.",
          },
        ],
      },
      {
        _key: "block-3",
        _type: "block",
        style: "h2",
        children: [
          {
            _key: "span-3",
            _type: "span",
            text: "Building Tech With Purpose: A Humanitarian Mobile App",
          },
        ],
      },
      {
        _key: "block-4",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "span-4",
            _type: "span",
            text: "One Of My Main Responsibilities Was To Help Develop A Mobile Application For Humanitarian Services. This Wasn't Just Another CRUD App, The Real Aim Is To Create A Platform That Connects People In Need With The Right Help. I Used Flutterflow, A Visual App Builder Based On Flutter, To Build And Prototype The Android App Efficiently. It Was My First Time Using Flutterflow, But Thanks To Its Intuitive Interface And Component System, I Quickly Got The Hang of It. Just Shout Out To Me For My Knowledge About Test Driven Development, So Here I Am.",
          },
        ],
      },
    ],
  };

  const {
    title,
    startDate,
    endDate,
    tags,
    companyName,
    jobPosition,
    imageBanner,
    content,
  } = hardcodedProjectData;

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
          {tags.map((tag) => (
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
              {companyName} <span className="font-bold">AS</span> {jobPosition}
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
          </div>
        </section>
      </div>
    </main>
  );
};

export default page;
