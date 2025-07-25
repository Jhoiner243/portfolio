"use client";

import type React from "react";

import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { useMediaQuery } from "../hooks/use-media-query";
import { itemVariants } from "../lib/motion";
import { urlToGo } from "../lib/url-go";
import TailwindCSS, {
  Expressjs as ExpressIcon,
  PrismaIcons,
  React as ReactIcon,
  TypeScriptIcon,
} from "./icons/icons";
import { Badge } from "./ui/badge";

type Project = {
  id: string;
  type: string;
  title?: string;
  subtitle?: string;
  description?: {
    contenido: string;
    tecnologias: string[];
    iconsTecnologias?: {
      [key: string]: React.FC<{ width: number; height: number }>;
    };
  };
  size: "small" | "medium" | "large";
  background: string;
  content: string;
  url?: string;
};

export default function InteractiveCardsDemo() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const projects: Project[] = [
    {
      id: "1",
      type: "logo",
      title: "FillStep",
      subtitle: "Logotipo de FillStep",
      description: {
        contenido:
          "Este es un proyecto mas allá de lo personal, busco crear una estructura de proyectos que tengan un mismo fin que es ayudar. Todo partiria desde este proyecto llamado FillStep software enterprise",
        tecnologias: [],
      },
      size: "medium",
      background: "bg-black",
      content: "logo",
      url: "https://fillstep.site/",
    },
    {
      id: "2",
      type: "award",
      title: "Sistema de Inventario",
      subtitle: "PROYECTO PERSONAL",
      size: "large",
      description: {
        contenido:
          "Este es un proyecto del que tanto mis papás como yo lo necesitamos, ya que surge de que no teníamos un buen mecanismo de inventario para los productos del negocio entonces me vi en la necesidad de solucionar ese problema con este proyecto, que aunque nos sirve a nosotros también le puede servir a muchas personas ya que tiene tecnología Multitenant con varios usuario por empresa. Con inteligencia artificial integrada para la busqueda o preguntas relevantes sobre la empresa como: ¿Cuanto stock hay dispnible?",
        tecnologias: [
          "React",
          "Prisma",
          "Express",
          "TypeScript",
          "Tailwind",
          "Postgres",
        ],
        iconsTecnologias: {
          react: ReactIcon,
          typescript: TypeScriptIcon,
          tailwind: TailwindCSS,
          express: ExpressIcon,
        },
      },
      background: "bg-gray-800",
      content: "award",
      url: "https://fillstep.site/login",
    },
    {
      id: "3",
      type: "proyecto 2",
      title: "FillStep Notes",
      subtitle: "FillStep",
      description: {
        contenido:
          "Este es un proyecto que esta enfocado en agilizar la escritura de las notas de enfermería.",
        tecnologias: [],
      },
      size: "large",
      background: "bg-black",
      content: "proyecto 2",
      url: "",
    },
    {
      id: "4",
      type: "proyecto 3",
      title: "",
      subtitle: "",
      description: {
        contenido: "",
        tecnologias: [],
      },
      size: "small",
      background: "bg-black",
      content: "",
      url: "",
    },
  ];

  const getCardContent = (project: Project) => {
    switch (project.content) {
      case "logo":
        return (
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20" />
            <div className="relative">
              <div
                className={`${
                  isMobile ? "text-[60px]" : "text-[120px]"
                } font-bold text-white opacity-90 select-none`}
              >
                FS
              </div>
              <div
                className={`absolute -top-4 -left-4 ${
                  isMobile ? "w-16 h-16" : "w-32 h-32"
                }  `}
              />
              <div
                className={`absolute -bottom-8 -right-8 ${
                  isMobile ? "w-12 h-12" : "w-24 h-24"
                } `}
              />
              <div
                className={`absolute top-1/2 left-1/2 ${
                  isMobile ? "w-32" : "w-64"
                } h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -translate-x-1/2 -translate-y-1/2 rotate-45`}
              />
            </div>
          </div>
        );
      case "award":
        return (
          <div className="relative w-full h-full">
            <Image
              className="absolute inset-0 bg-cover bg-center h-full w-full object-cover"
              src={"/project-1.png"}
              alt="proyecto de inventario"
              fill
              sizes={isMobile ? "100vw" : "400px"}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
            {/* Content */}
            <div
              className={`absolute bottom-6 ${
                isMobile ? "left-4 right-4" : "left-6 right-6"
              }`}
            >
              <h3
                className={`${
                  isMobile ? "text-lg" : "text-xl"
                } font-bold text-white leading-tight mb-2`}
              >
                Sistema de Inventario
              </h3>
              <p
                className={`text-white/80 ${
                  isMobile ? "text-xs" : "text-sm"
                } mb-3 line-clamp-3`}
              >
                Solución multitenant para gestión de inventario empresarial
              </p>
              <div className="flex gap-2">
                <ReactIcon
                  width={isMobile ? 14 : 16}
                  height={isMobile ? 14 : 16}
                />
                <TypeScriptIcon
                  width={isMobile ? 14 : 16}
                  height={isMobile ? 14 : 16}
                />
                <TailwindCSS
                  width={isMobile ? 14 : 16}
                  height={isMobile ? 14 : 16}
                />
                <ExpressIcon
                  width={isMobile ? 14 : 16}
                  height={isMobile ? 14 : 16}
                />
                <PrismaIcons
                  width={isMobile ? 14 : 16}
                  height={isMobile ? 14 : 16}
                />
              </div>
            </div>
          </div>
        );
      case "proyecto 2":
        return (
          <div className="relative w-full h-full">
            {!isMobile ? (
              <iframe
                src="https://app.spline.design/file/5dd13e94-12d8-476b-a510-62d8f663736d?view=preview"
                width={800}
                height={400}
                className="absolute inset-0"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-purple-900/40 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-4xl mb-2">🎨</div>
                  <div className="text-sm">3D Preview</div>
                </div>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
            <Badge
              className={`absolute ${
                isMobile ? "top-2 left-2" : "top-2 ml-2"
              } bg-black text-white text-xs`}
            >
              En desarrollo
            </Badge>
            <div
              className={`absolute bottom-6 ${
                isMobile ? "left-4 right-4" : "left-6 right-6"
              }`}
            >
              <h3
                className={`${
                  isMobile ? "text-lg" : "text-xl"
                } font-bold text-white leading-tight mb-2`}
              >
                FS notes
              </h3>
              <p
                className={`text-white/80 ${
                  isMobile ? "text-xs" : "text-sm"
                } mb-3 line-clamp-3`}
              >
                Autocompletado con inteligencia artificial para notas de
                enfermería
              </p>
              {/* Tech Icons */}
              <div className="flex gap-2">
                <ReactIcon
                  width={isMobile ? 14 : 16}
                  height={isMobile ? 14 : 16}
                />
                <TypeScriptIcon
                  width={isMobile ? 14 : 16}
                  height={isMobile ? 14 : 16}
                />
                <TailwindCSS
                  width={isMobile ? 14 : 16}
                  height={isMobile ? 14 : 16}
                />
                <PrismaIcons
                  width={isMobile ? 14 : 16}
                  height={isMobile ? 14 : 16}
                />
              </div>
            </div>
          </div>
        );
      default:
        return <div className="w-full h-full bg-gray-800" />;
    }
  };

  const getSizeClasses = (size: string) => {
    if (isMobile) {
      return "col-span-1 h-64";
    }

    switch (size) {
      case "large":
        return "col-span-2 row-span-2 h-80";
      case "medium":
        return "col-span-1 row-span-2 h-80";
      case "small":
        return "col-span-1 row-span-1 h-36";
      default:
        return "col-span-1 row-span-1 h-36";
    }
  };

  return (
    <div
      className={`min-h-screen ${
        isMobile ? "p-4" : "p-6"
      } content-end-safe mx-auto`}
    >
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-gray-400 text-sm font-medium tracking-wider uppercase">
            PROYECTOS
          </h1>
        </header>
        <div
          className={`grid ${
            isMobile
              ? "grid-cols-1 gap-6"
              : "grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8"
          } auto-rows-min content-evenly mx-auto`}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className={`
                relative
                ${getSizeClasses(project.size)}
                ${project.background}
                overflow-hidden
                cursor-pointer
                transition-all duration-300 ease-in-out
                bg-gradient-to-t bg-white
                ${
                  hoveredCard === project.id
                    ? "ring-2 ring-white/10 scale-[1.02]"
                    : ""
                }
                ${isMobile ? "shadow-lg" : ""}
              `}
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => urlToGo(project.url ? project.url : "")}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              {getCardContent(project)}
              {hoveredCard === project.id && project.description && (
                <motion.div
                  className={`absolute inset-0 backdrop-blur-sm ${
                    isMobile ? "p-4" : "p-6"
                  } flex flex-col justify-between transition-all duration-300 bg-black/80 rounded-lg`}
                  variants={itemVariants}
                >
                  <div className="flex justify-between items-start">
                    <h3
                      className={`text-white font-bold ${
                        isMobile ? "text-base" : "text-lg"
                      } mb-3`}
                    >
                      {project.title}
                    </h3>
                    {project.url && (
                      <ExternalLink
                        className={`${
                          isMobile ? "w-4 h-4" : "w-5 h-5"
                        } relative mb-3`}
                      />
                    )}
                  </div>
                  <p
                    className={`text-gray-300 ${
                      isMobile ? "text-xs" : "text-sm"
                    } leading-relaxed mb-4 flex-1`}
                  >
                    {project.description.contenido}
                  </p>
                  <div>
                    {project.description.tecnologias.length > 0 && (
                      <div>
                        <h4
                          className={`text-white font-semibold ${
                            isMobile ? "text-xs" : "text-sm"
                          } mb-2`}
                        >
                          Tecnologías:
                        </h4>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {project.description.tecnologias.map(
                            (tech, index) => (
                              <span
                                key={index}
                                className={`bg-blue-600/20 text-blue-300 px-2 py-1 ${
                                  isMobile ? "text-xs" : "text-xs"
                                } rounded`}
                              >
                                {tech}
                              </span>
                            )
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
