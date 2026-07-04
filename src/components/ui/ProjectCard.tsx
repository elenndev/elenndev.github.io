import type { IProject } from "../../data";

interface ProjectCardProps {
  project: IProject;
  onClick?: () => void;
}

const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  return (
    <div
      onClick={onClick}
      id="project-card"
      className="border border-border bg-card w-full max-w-xs cursor-pointer transition-colors duration-300 font-styled text-[1.05rem]"
    >
      <div className="px-3 py-2 border-b border-border text-center bg-[#D6D4D1]">
        <span className="text-black">{project.name}</span>
      </div>
      <div className="px-3 py-3 flex flex-col gap-3 text-[1.2rem]">
        <p className="text-muted-foreground leading-5">
          {project.shortDescription}
        </p>
        <div className="flex gap-2 flex-wrap">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="tag text-[1rem]  text-foreground border border-border px-2 py-0.5 flex items-center gap-1"
            >
              <span className="tag square w-1.5 h-1.5 bg-white inline-block text-[18rem]" />
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
