import {
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiGreensock,
  SiPostgresql,
  SiNestjs,
  SiDocker,
} from "react-icons/si";
import type { IconType } from "react-icons";

const iconMap: Record<string, IconType> = {
  React: SiReact,
  "Node.js": SiNodedotjs,
  PostgreSQL: SiPostgresql,
  TypeScript: SiTypescript,
  Nest: SiNestjs,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  Docker: SiDocker,
  GSAP: SiGreensock,
};

interface SkillCardProps {
  name: string;
}

const SkillCard = ({ name }: SkillCardProps) => {
  const Icon = iconMap[name];

  return (
    <div className="border border-border flex flex-col items-center gap-2 w-20 md:w-28 hover:border-primary transition-colors duration-300">
      <span className="text-[1.05rem] font-styled text-black bg-[#D6D4D1] w-full text-center">
        {name}
      </span>
      <span className="p-3 flex flex-col items-center">
        {Icon && (
          <Icon className="w-8 h-8 md:w-10 md:h-10 text-muted-foreground" />
        )}
      </span>
    </div>
  );
};

export default SkillCard;
