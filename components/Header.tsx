"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

  const handleHomeClick = () => {
    router.push("/");
  };

  return (
    <header className="flex flex-row justify-between py-8 md:py-12">
      <div>
        <Link href="/">
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/material-outlined/24/pixel-cat.png"
            alt="pixel-cat"
          />
        </Link>
      </div>
      <nav>
        <ul className="flex text-sm gap-4">
          <li>
            <Link href="/about">ABOUT</Link>
          </li>
          <li>
            <Link href="/project">PROJECTS</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
