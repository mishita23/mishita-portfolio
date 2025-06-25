import { Socials } from "@/Constants";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20">
      <div className="flex-col md:flex-row hidden md:flex gap-5">
        <Link
          href="/my-skills"
          className="rounded-[10px] group relative hover:bg-blue-400 px-2 py-3 text-lg text-white max-w-[200px]"
        >
          Learn more
        </Link>
        <Link
          href="/my-projects"
          className="rounded-[10px] group relative hover:bg-blue-400 px-2 py-3 text-lg text-white max-w-[200px]"
        >
          <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hver:opacity-20" />
          My projects
        </Link>
        <Link
          href="/contact-me"
          className="rounded-[10px] group relative hover:bg-blue-400 px-2 py-3 text-lg text-white max-w-[200px]"
        >
          <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hver:opacity-20" />
          Contact me
        </Link>
      </div>

      <div className="absolute flex bottom-10 z-[20] right-5 flex-col md:hidden gap-5">
        <Link
          href="/my-skills"
          className="rounded-[20px] group bg-blue-500 px-5 py-3 text-lg text-white max-w-[200px]"
        >
          Learn more
        </Link>

        <Link
          href="/my-projects"
          className="rounded-[20px] group bg-trasparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
        >
          My projects
        </Link>
        <Link
          href="/contact-me"
          className="rounded-[20px] group bg-trasparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
        >
          Contact me
        </Link>
      </div>
      <div className="flex flex-row gap-5 mb-2">
        {Socials.map((social) => {
          const Icon = social.icon;

          return (
            <Link
              key={social.name}
              href={social.link}
              target={social.name === "Email" ? "_self" : "_blank"}
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-200 text-white"
            >
              <Icon size={28} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
