"use client";

import Image from "next/image";
import PortableTextRenderer from "@/components/PortableTextRenderer";
import SuggestionCard from "@/components/SuggestionCard";

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

  return (
    <main>
      <section>
        <h1 className="text-4xl font-semibold text-center">{title}</h1>
        <div className="flex flex-wrap gap-2 my-8 justify-center items-center">
          {tags.map((tag) => (
            <span
              key={tag}
              className="py-1 px-3 bg-black text-sm text-white rounded-xl text-center"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="">
          <Image
            src="/images/mobile.png"
            alt="Banner"
            width={400}
            height={400}
            className="rounded-xl h-[220px] w-full cover object-cover"
          />
        </div>
      </section>

      <section>
        <div className="">
          <div className="">
            <p className="">Company</p>
            <h6 className="">{companyName}</h6>
          </div>
          <div className="">
            <p className="">Duration</p>
            <p className="">
              {formatDate(startDate)} - {formatDate(endDate)}
            </p>
          </div>
          <div className="">
            <p className="">Job Position</p>
            <p className="">{jobPosition}</p>
          </div>
        </div>
        <div className="">
          <PortableTextRenderer content={content} />
        </div>
      </section>

      <section className="">
        <div className="">
          <h3 className="">Other Projects</h3>
          <div className="">
            <SuggestionCard />
            <SuggestionCard />
            <SuggestionCard />
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
