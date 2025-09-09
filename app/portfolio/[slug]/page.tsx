import Image from "next/image";
import React from "react";
import SuggestionCard from "@/components/SuggestionCard";
import PortableTextRenderer from "@/components/PortableTextRenderer";

const page = () => {
  const mySanityContent = [
    {
      _key: "abc1",
      _type: "block",
      style: "h1",
      children: [
        {
          _key: "1",
          _type: "span",
          text: "Artificial Intelligence (AI) has come a long way",
        },
      ],
    },
    {
      _key: "abc2",
      _type: "block",
      style: "normal",
      children: [
        {
          _key: "2",
          _type: "span",
          text: "— but now, it's not just about smart speakers or chess bots. In 2025, ",
        },
        {
          _key: "3",
          _type: "span",
          text: "AI Agents",
          marks: ["strong"],
        },
        {
          _key: "4",
          _type: "span",
          text: " are making waves by becoming everyday assistants inside our favorite apps. From chat apps to shopping platforms, these tiny virtual brains are transforming how we interact with software. Let’s dive into how this works and why it’s such a big deal.",
        },
      ],
    },
  ];

  return (
    <main className="px-8 my-10 flex flex-col gap-8">
      <div>
        <section className="flex flex-col gap-8">
          <Image
            height={500}
            width={500}
            src={"/images/js.png"}
            alt="Banner"
            className="rounded-3xl object-cover object-center responsive-image"
          />
          <h1 className="text-2xl md:text-5xl font-bold text-black/80">
            Hoax Detection System Using Machine Learning
          </h1>
        </section>
        <section>
          <div className="my-7 md:mb-16 px-1 flex flex-row items-center justify-between md:justify-start md:gap-6">
            <div className="flex flex-row gap-3 mt-1">
              <Image
                height={48}
                width={48}
                src={"/images/avatar.jpg"}
                alt="Profile Picture"
                className="rounded-full object-cover object-center"
              />
              <div className="flex flex-col gap-0.5 justify-center">
                <h6 className="text-sm md:text-base font-semibold text-black/55">
                  Thesis
                </h6>
                <p className="text-xs md:text-sm font-semibold text-black/40">
                  Junior Dev
                </p>
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold text-black/40">
                Feb - Mar, 2019
              </p>
            </div>
          </div>
          <div className="my-7">
            {/* Mengganti MarkDownRenderer dengan komponen baru */}
            <PortableTextRenderer content={mySanityContent} />
          </div>
        </section>
      </div>
      <div className="bg-gray-300/30 p-4 rounded-lg">
        <h3 className="text-xl md:text-3xl font-bold mt-1 mb-8">
          Other Projects
        </h3>
        <div className="flex flex-col gap-5">
          <SuggestionCard />
          <SuggestionCard />
        </div>
      </div>
    </main>
  );
};

export default page;
