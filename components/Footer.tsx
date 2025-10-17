import { Send } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="bg-gray-900 rounded-2xl p-8 flex flex-col md:flex-row md:p-12 items-center justify-between relative overflow-hidden">
        <div className="flex flex-col gap-4 w-full md:w-3/6 md:text-left">
          <h2 className="text-white text-2xl md:text-3xl font-semibold leading-tight">
            Wanna team up?
          </h2>
          <p className="text-gray-300 text-sm">
            Curious who&apos;s behind the code? Glimpse my journey through
            <span className="ml-1">
              <Link
                href="./pdf/CV_KautsarTeguh.pdf"
                className="underline hover:text-gray-200"
                download={true}
              >
                my Resume.
              </Link>
            </span>
          </p>
        </div>
        <div className="mt-8 md:mt-0 flex flex-col gap-2 items-center w-full md:w-auto">
          <form action="#" className="flex flex-col lg:flex-row gap-3 w-full">
            <input
              type="email"
              placeholder="Your Email Here"
              className="p-3 bg-gray-700/50 text-xs md:text-sm text-white rounded-xl border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 placeholder-gray-400 w-full"
            />
            <button className="flex flex-row justify-center items-center gap-2 whitespace-nowrap text-xs bg-white hover:bg-gray-100 text-gray-900 font-semibold py-3 px-4 rounded-xl transition duration-300 ease-in-out">
              Let&apos;s Talk{" "}
              <span>
                <Send strokeWidth={1} height={16} width={16} />
              </span>
            </button>
          </form>
        </div>
      </div>
      <div className="mt-10 border-t border-gray-300 pt-6 text-center text-xs text-gray-500">
        &copy; 2025 All rights reserved. Crafted with passion.
      </div>
    </footer>
  );
};

export default Footer;
