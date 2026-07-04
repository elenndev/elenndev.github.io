import { type ReactNode } from "react";
import { cn } from "../utils/cn";
import cv from "../assets/Elen Santos CV - Desenvolvedora FullStack.pdf";

interface GraphNavProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  avatarSlot?: ReactNode;
}

const sections = [
  { id: "sobre", label: "Sobre Mim" },
  { id: "experiencia", label: "Experiência" },
  { id: "projetos", label: "Projetos" },
  { id: "cv", label: "Download CV" },
];

const GraphNav = ({
  activeSection,
  onSectionChange,
  avatarSlot,
}: GraphNavProps) => {
  const sectionCv = sections.find((s) => s.id === "cv");
  return (
    <nav className="flex flex-col items-center relative font-styled">
      {/* Horizontal line from avatar (tablet/desktop) */}

      {/* Tablet/Desktop: vertical layout */}
      <div className="hidden md:flex relative flex-col items-center overflow-visible lg:mt-[40px]">
        {/* Avatar + connecting line - absolute, aligned to vertical line */}
        {avatarSlot && (
          <div
            className="absolute top-[44px] lg:top-[72px] flex items-center -translate-y-full"
            style={{ right: "calc(50% - 0.5px)" }}
          >
            {avatarSlot}
            <div className="w-16 lg:w-24 h-px graph-line" />
          </div>
        )}
        {sections.map((section, index) => (
          <div key={section.id} className="flex flex-col items-center">
            {index === 0 && <div className="w-px h-6 lg:h-8 graph-line" />}
            <div className="flex items-center">
              {section.id !== "cv" && (
                <>
                  <div className="w-6 lg:w-8 h-px graph-line" />
                  <button
                    onClick={() => onSectionChange(section.id)}
                    className={cn(
                      "graph-node px-2 lg:px-3 py-1 text-[1.2rem] lg:text-[1.2rem]  whitespace-nowrap",
                      activeSection === section.id && "graph-node-active",
                    )}
                  >
                    {section.label}
                  </button>
                </>
              )}
              {section.id == "cv" && (
                <a
                  href={cv}
                  download
                  className={cn(
                    "graph-node px-2 lg:px-3 py-1 text-[1.2rem] lg:text-[1.2rem] whitespace-nowrap flex items-center",
                    activeSection === section.id && "graph-node-active",
                  )}
                >
                  {section.label}
                </a>
              )}
            </div>
            {index < sections.length - 1 && (
              <div className="w-px h-10 lg:h-16 graph-line" />
            )}
          </div>
        ))}
        <div className="w-px h-10 lg:h-16 graph-line" />
        <svg
          width="20"
          height="16"
          viewBox="0 0 20 16"
          className="text-muted-foreground"
        >
          <path
            d="M10 16L0 0h20z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      {/* Mobile: horizontal layout */}
      <div className="md:hidden flex">
        {sectionCv && (
          <a
            href={cv}
            download
            className="graph-node px-2 lg:px-3 py-1 text-[1.2rem] lg:text-[1.2rem] whitespace-nowrap flex items-center mb-2"
          >
            {sectionCv.label}
          </a>
        )}
      </div>

      <div className="flex md:hidden items-center">
        {sections.map((section, index) => (
          <>
            {section.id != "cv" && (
              <>
                <div key={section.id} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <button
                      onClick={() => onSectionChange(section.id)}
                      className={cn(
                        "graph-node px-2 py-1 text-[1.2rem]  whitespace-nowrap",
                        activeSection === section.id && "graph-node-active",
                      )}
                    >
                      {section.label}
                    </button>
                  </div>
                  {index < sections.length - 2 && (
                    <div className="h-px w-8 graph-line" />
                  )}
                </div>
              </>
            )}
          </>
        ))}
      </div>
      {/* Removed mobile bottom line */}
    </nav>
  );
};

export default GraphNav;
