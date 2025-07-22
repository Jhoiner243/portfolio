"use client";
import { ExternalLink } from "lucide-react";
import { Mona_Sans } from "next/font/google";
import { urlToGo } from "../lib/url-go";

const monaSans = Mona_Sans({
  subsets: ["latin"],
  weight: ["300", "500", "400", "700"],
});

export default function ConnectionsWithMe() {
  const conections = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/jhoiner-martinez-b2b1b1252/",
    },
    {
      name: "GitHub",
      url: "https://github.com/jhoinermartinez",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/jhoinermartinez/",
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/573178000000",
    },
  ];

  return (
    <div
      className={`flex flex-col items-center  ${monaSans.className} text-start flex-start gap-2 max-w-4xl`}
    >
      <h2 className="flex flex-col ">
        <span className="text-gray-500/80 ">CONEXIONES</span>
      </h2>
      <div className="w-full justify-center max-w-md space-y-3 mt-8">
        {conections.map((conection) => (
          <div key={conection.name} className="relative group">
            <div
              onClick={() => urlToGo(conection.url)}
              className="w-full flex items-center justify-between gap-3 cursor-pointer text-white"
            >
              <span className="flex-1 text-left">{conection.name}</span>
              <ExternalLink className="w-4 h-4 " />
            </div>

            {/* Separator animado */}
            <span className=" absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300 bg-gray-500/80" />
          </div>
        ))}
      </div>
    </div>
  );
}
