import { experiences } from "../../experience";
import { Section } from "../ui/Section"
import { ExperienceCard } from "./ExperienceCard";

interface experienceProps {
  ref: React.RefObject<null>;
}

export const Experiences = ({ ref }: experienceProps) => {
  const justifyValue = (i: number) => i % 2 === 0 ? 'start' : 'end'
  return (
    <Section title="Experience" id="profile" ref={ref}>
      <div className="section-content w-full px-3 py-4 bg-red grid grid-cols-1 justify-items-center md:justify-items-stretch gap-3">
        {experiences.map((experience, i) =>
          <ExperienceCard key={i} experience={experience} justifyValue={justifyValue(i)} />
        )}
      </div>
    </Section>

  )
}
