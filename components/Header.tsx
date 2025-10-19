"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="flex flex-row justify-between py-8 md:py-12">
      <div>
        <Link href="/">
          <Image
            width="24"
            height="24"
            src="https://img.icons8.com/material-outlined/24/pixel-cat.png"
            alt="pixel-cat"
          />
        </Link>
      </div>
      <nav>
        <ul className="flex text-sm gap-6">
          <li>{/* <Link href="/about">ABOUT</Link> */}</li>
          <li>
            <Link
              href="/project"
              className={pathname === "/project" ? "font-bold" : ""}
            >
              PROJECTS
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
