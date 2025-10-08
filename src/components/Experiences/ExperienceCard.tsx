import type { IExperience } from "../../experience";
import clsx from "clsx"
import { Link } from "../ui/Link";

interface experienceCardProps {
  experience: IExperience;
  justifyValue: string
}

export const ExperienceCard = ({ experience, justifyValue }: experienceCardProps) => {
  const cardClasses = clsx(
    "w-full md:w-5/6 flex flex-col border-1 border-border-default shadow-solid",
    {
      "justify-self-start": justifyValue === "start",
      "justify-self-end": justifyValue === "end",
    }
  )

  const cardTitleClasses = clsx({
    "text-start": justifyValue === "start",
    "text-end": justifyValue === "end",
  }
  )

  const tagsContainerClasses = clsx(
    "flex flex-row flex-wrap gap-2 mb-3 mt-2 px-2 w-full",
    {
      "justify-start": justifyValue === "start",
      "justify-end": justifyValue === "end",
    }
  )

  const linksContainerClasses = clsx(
    "flex flex-row flex-wrap gap-2 mb-3 mt-2 px-2 w-full",
    {
      "justify-start": justifyValue === "start",
      "justify-end": justifyValue === "end",
    }
  )

  return (<>
    <div className={cardClasses}>
      <div className={`card-header bg-red-theme w-full px-3 py-1 border-b-1 border-b-border-default`}>
        <p className={`text-white text-${justifyValue}`}>{experience.organization}</p>
      </div>
      <div className="flex px-2 py-2">
        <p className={cardTitleClasses}>{experience.description}</p>
      </div>
      <div className={linksContainerClasses}>
        {experience.links.map((link, i) =>
          <Link rel="noopener noreferrer" target="_blank" key={i} href={link.href} className="hover:cursor-pointer">{<>{link.name}</>}</Link>
        )}
      </div>
      <div className={tagsContainerClasses}>
        {experience.tags.map((tag, i) =>
          <p className="bg-red-theme text-white px-4 rounded-3xl font-mono text-sm border-1 border-white" key={i}>{tag}</p>
        )}
      </div>
    </div>
  </>)
}
