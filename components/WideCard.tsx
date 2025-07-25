import Image from "next/image";
import Link from "next/link";

const WideCard = ({ url, alt, category, title, description }: any) => {
  return (
    <div className="flex flex-col mb-5">
      <div>
        <Image
          src={url}
          width={550}
          height={500}
          alt={alt}
          className="block object-cover max-w-full h-auto rounded-lg shadow-lg"
        />
      </div>
      <div className="mt-4">
        <div className="flex flex-col gap-2">
          <p className="text-gray-500 text-xs uppercase">{category}</p>
          <h3 className="font-bold text-xl lg:text-2xl">{title}</h3>
        </div>
        <div className="mt-5 flex flex-col gap-4">
          <p className="text-sm/relaxed">{description}</p>
          <Link href={"#"} className="text-sm underline">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WideCard;
