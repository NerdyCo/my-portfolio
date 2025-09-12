import Image from "next/image";
import Link from "next/link";

interface FeaturedProjectProps {
  imageUrl: string;
  imageAlt: string;
  projectType: string;
  title: string;
  shortDescription: string;
  detailUrl: string;
}

const FeaturedProject = ({
  imageUrl,
  imageAlt,
  projectType,
  title,
  shortDescription,
  detailUrl,
}: FeaturedProjectProps) => {
  return (
    <>
      <div className="flex justify-center md:w-1/2">
        <Image
          src={imageUrl}
          alt={imageAlt}
          width={600}
          height={400}
          className="w-full rounded-lg object-contain shadow-lg"
        />
      </div>
      <div className="flex flex-col gap-4 md:w-1/2 lg:gap-7">
        <div className="flex flex-col gap-2">
          <p className="text-xs uppercase tracking-wider text-gray-500">
            {projectType}
          </p>
          <h2 className="text-2xl font-bold text-gray-800 lg:text-4xl">
            {title}
          </h2>
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-sm leading-relaxed text-gray-500 md:text-base">
            {shortDescription}
          </p>
          <Link
            className="self-start border bg-white px-5 py-2 text-xs font-medium uppercase tracking-wider text-black transition-colors duration-200 hover:bg-black hover:text-white lg:px-7 lg:py-3 lg:text-sm"
            href={detailUrl}
          >
            VIEW DETAILS
          </Link>
        </div>
      </div>
    </>
  );
};

export default FeaturedProject;
