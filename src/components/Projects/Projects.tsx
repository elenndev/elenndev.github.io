import { useState } from "react"
import { ProjectCard } from "./ProjectCard"
import { Section } from "../ui/Section"
import { projects, type IProject } from "../../projets"
import { Project } from "./Project"

interface projectsProps {
  ref: React.RefObject<null>;
}
export const Projects = ({ ref }: projectsProps) => {
  const [openProject, setOpenProject] = useState<false | IProject>(false)

  return (<>

    <Section id="projects" title="Projects" ref={ref}>
      <div className="section-content w-full px-3 py-4 flex flex-row flex-wrap justify-center gap-3 md:gap-4">
        {openProject && <Project project={openProject} close={() => setOpenProject(false)} />}
        {!openProject &&
          <>
            {projects.map((project, i) => <ProjectCard key={i} project={project} open={() => setOpenProject((project))} />)}
          </>
        }
      </div>
    </Section>

  </>)
}
