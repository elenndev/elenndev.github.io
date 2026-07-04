import type { IExperience } from "../../data";
import { linkIcons } from "./LinksIcons";

interface ExperienceCardProps {
  experience: IExperience;
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  return (
    <div className="w-full max-w-sm font-styled">
      {/* Header - lighter bg */}
      <div className="py-2 pl-3 bg-[#D6D4D1]">
        <span className="text-black text-[1.2rem]">
          {experience.name} - {experience.date}
        </span>
        <div className="flex items-center gap-1 mt-1 ml-4">
          <span className="w-1.25 h-1.25 bg-black inline-block opacity-80" />
          <span className="text-black text-[1.2rem]">{experience.role}</span>
        </div>
      </div>
      {/* Body - darker bg */}
      <div className="px-6 py-3 bg-background border border-border">
        {(experience?.links || experience?.badge) && (
          <div className="flex gap-2 flex-wrap mb-1">
            {experience?.badge && (
              <span className="tag text-[1rem] color-muted-foreground border border-border px-2 py-0.5 flex items-center gap-1">
                <span className="tag square w-1.5 h-1.5 bg-muted-foreground inline-block text-[18rem]" />
                {experience.badge}
              </span>
            )}
            {experience.links && (
              <div className="flex gap-3 flex-wrap">
                {experience.links.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link flex items-center color-muted-foreground gap-1.5 text-[1rem] border border-border px-3 py-1.5"
                  >
                    {linkIcons[link.name]}
                    {link.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        )}

        <p className="text-muted-foreground text-[1.2rem] leading-5">
          {experience.description}
        </p>
      </div>
    </div>
  );
};

export default ExperienceCard;
