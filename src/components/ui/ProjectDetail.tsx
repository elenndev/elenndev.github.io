import { ArrowLeft } from "lucide-react";
import type { IProject } from "../../data";
import { linkIcons } from "./LinksIcons";

interface ProjectDetailProps {
  project: IProject;
  onBack: () => void;
}

const ProjectDetail = ({ project, onBack }: ProjectDetailProps) => {
  const image = project.image;

  return (
    <div className="animate-fade-in flex flex-col gap-6 w-full font-styled text-[1.05rem]">
      {/* Back button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-muted-foreground hover:translate-x-1 hover:text-[#E63360] duration-200 transition-all w-fit text-[1.2rem] cursor-pointer"
      >
        <ArrowLeft className="w-4.5 h-4.5" />
        Voltar
      </button>

      {/* Project header */}
      <h2 className="text-foreground text-[1.5rem]">{project.name}</h2>

      {/* Image */}
      {image && (
        <div className="border border-border overflow-hidden w-full max-w-lg">
          <img
            src={image}
            alt={project.name}
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </div>
      )}

      {/* Description */}
      <p className="text-muted-foreground text-[1.2rem] leading-5 max-w-lg">
        {project.description}
      </p>

      {/* Features */}
      <div className="flex flex-col gap-1.5">
        <span className="text-foreground text-[1.2rem]">Detalhes:</span>
        <ul className="flex flex-col gap-1">
          {project.featuresAndDetails.map((feature) => (
            <li
              key={feature}
              className="text-muted-foreground flex items-center gap-2"
            >
              <span className="w-1 h-1 bg-primary inline-block" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Tags */}
      <div className="flex gap-2 flex-wrap">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-[1rem]  text-foreground border border-border px-2 py-0.5 flex items-center gap-1"
          >
            <span className="w-1 h-1 bg-white inline-block" />
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-3 flex-wrap">
        {project.links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link flex items-center gap-1.5 text-[1rem] border border-border px-3 py-1.5"
          >
            {linkIcons[link.name]}
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectDetail;
