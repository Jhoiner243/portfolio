"use client";

import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { Open_Sans } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import {
  containerVariants,
  fadeInVariants,
  itemVariants,
  textContainerVariants,
  wordVariants,
} from "../lib/motion";
import { urlToGo } from "../lib/url-go";
import { HoverCardDemo } from "./card-information";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export default function PortfolioSection() {
  const [isHovered, setIsHovered] = useState({
    status: false,
    name: "",
  });

  const connections = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/jhoiner-martinez-b2b1b1252/",
    },
    {
      name: "GitHub",
      url: "https://github.com/jhoiner243",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/jhoinermartinez/",
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/573136715937",
    },
  ];

  const URL_IMAGE = "/perfil.jpeg";

  // Variantes de animación corregidas con tipos apropiados

  // Función para dividir texto en palabras
  const splitTextIntoWords = (text: string) => {
    return text.split(" ").map((word, index) => (
      <motion.span
        key={index}
        variants={wordVariants}
        className="inline-block mr-2"
      >
        {word}
      </motion.span>
    ));
  };

  const nameText = "Jhoiner Martinez";
  const descriptionText =
    "es un desarrollador web Full Stack de Montería, Colombia.";

  return (
    <section
      className={`min-h-screen  text-white flex items-center ${openSans.className} `}
    >
      <div className="lg:px-12 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-30 items-center">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="space-y-30"
          >
            <motion.div
              variants={itemVariants}
              className="text-2xl lg:text-3xl font-light tracking-wider"
            >
              J—M
            </motion.div>

            {/* Text Content con animación palabra por palabra */}
            <motion.div variants={itemVariants} className="space-y-8 pt-10">
              <h1 className="text-3xl lg:text-4xl leading-tight">
                <motion.span
                  className="text-white block"
                  variants={textContainerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {splitTextIntoWords(nameText)}
                </motion.span>
                <motion.span
                  className="text-gray-400 block mt-2"
                  variants={textContainerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {splitTextIntoWords(descriptionText)}
                </motion.span>
              </h1>

              <motion.p
                className="text-gray-400 text-lg"
                variants={textContainerVariants}
                initial="hidden"
                animate="visible"
              >
                Fundador de
                <HoverCardDemo />, una empresa en progreso.
              </motion.p>
            </motion.div>

            {/* Connect Section */}
            <motion.div variants={itemVariants} className="space-y-8 md:pt-20">
              <motion.h3
                variants={itemVariants}
                className="text-gray-500 text-sm font-medium tracking-wider uppercase"
              >
                Connect
              </motion.h3>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col gap-6 text-white"
              >
                {connections.map((connection, index) => (
                  <motion.div
                    key={connection.name}
                    variants={itemVariants}
                    className="relative group"
                    onMouseEnter={() =>
                      setIsHovered({ status: true, name: connection.name })
                    }
                    onMouseLeave={() =>
                      setIsHovered({ status: false, name: "" })
                    }
                  >
                    <motion.div
                      onClick={() => urlToGo(connection.url)}
                      className="flex items-center justify-between gap-3 cursor-pointer text-white border-b border-white/10 pb-2 hover:border-white/80 transition-all duration-300"
                      transition={{ duration: 0.2 }}
                    >
                      <span className="flex-1 text-left font-semibold">
                        {connection.name}
                      </span>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                          opacity:
                            isHovered.status &&
                            isHovered.name === connection.name
                              ? 1
                              : 0,
                          scale:
                            isHovered.status &&
                            isHovered.name === connection.name
                              ? 1
                              : 0.8,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.div>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
            className="relative w-full max-w-[845px] h-[866px] mx-auto"
          >
            <div className="relative flex justify-end lg:justify-end w-full h-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="w-full h-full"
              >
                <Image
                  src={URL_IMAGE || "/placeholder.svg"}
                  width={845}
                  height={866}
                  alt="Portrait of Jhoiner Martinez"
                  className="object-cover grayscale w-full h-full"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
