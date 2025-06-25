import React from "react";
import Image from "next/image";
import { SkillData } from "@/Constants";

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(/bg-2.jpg)" }}
      className="h-screen w-screen flex items-center justify-center bg-cover bg-center"
    >
      <div className="flex flex-col gap-20 max-w-[80%] text-center items-center">
        <div className="flex flex-col items-center gap-4">
          <h1 className="font-semibold text-white text-[50px]">
            Skills{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              &{" "}
            </span>
            Technologies
          </h1>
          <p className="text-gray-400 text-[20px]">
        These are the skills I am proficient in : 
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-40">
          {SkillData.map((skill) => (
            <Image
              key={skill.name}
              src={skill.Image}
              alt={skill.name}
              width={skill.width}
              height={skill.height}
              className="transition-transform duration-300 hover:scale-110"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
