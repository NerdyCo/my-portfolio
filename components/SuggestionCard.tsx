import Image from "next/image";
import Link from "next/link";
import React from "react";

const SuggestionCard = () => {
  return (
    <div className="bg-white rounded-xl p-3 md:p-7 flex flex-row gap-4 items-center">
      <div>
        <Image
          alt="thumbnail"
          src="/images/java.png"
          width={200}
          height={200}
          className="rounded-xl object-cover object-center"
        />
      </div>
      <div className="flex flex-col gap-3">
        <Link
          href={"#"}
          className="text-sm md:text-xl font-bold hover:underline"
        >
          Desktop Archive Management for Cilandak District Office
        </Link>
        <p className="text-xs md:text-sm text-black/40 font-bold">Java</p>
      </div>
    </div>
  );
};

export default SuggestionCard;
