import { MdOpenInNew } from "react-icons/md";
import { IconContext } from "react-icons";
import type { IProject } from "../../projets";

interface projectCardProps {
  project: Pick<IProject, 'name' | 'shortDescription' | 'tags'>;
  open: () => void;
}

export const ProjectCard = ({ project, open }: projectCardProps) => {
  return (<>
    <div onClick={open} className="w-3/4 sm:w-2/5 flex flex-col border-1 border-border-default shadow-solid hover:cursor-pointer">
      <div className="card-header bg-red-theme w-full items-center flex flex-row justify-between px-3 py-1 border-b-1 border-b-border-default">
        <p className="text-white">{project.name}</p>
        <IconContext.Provider value={{ style: { color: 'white' }, size: '1.5rem', className: 'hover:cursor-pointer' }}>
          <MdOpenInNew />
        </IconContext.Provider>

      </div>
      <div className="flex px-2">
        <p>{project.shortDescription}</p>
      </div>
      <div className="flex flex-row flex-wrap gap-2 mb-3 mt-2 px-2 w-full">
        {project.tags.map((tag, i) =>
          <p className="bg-red-theme text-white px-4 rounded-3xl font-mono text-sm border-1 border-white" key={i}>{tag}</p>
        )}
      </div>
    </div>
  </>)
}
