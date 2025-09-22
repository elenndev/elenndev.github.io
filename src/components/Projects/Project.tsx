import { IconContext } from "react-icons";
import type { IProject } from "../../projets";
import { LiaWindowClose } from "react-icons/lia";
import { Link } from "../ui/Link";
import { FaFigma, FaGithub } from "react-icons/fa";
import { RiGlobalLine } from "react-icons/ri";

interface projectProps {
  project: IProject;
  close: () => void;
}

export const Project = ({ project, close }: projectProps) => {

  const linkIcon = (iconTo: 'GitHub' | 'Figma' | 'Deploy') => {
    switch (iconTo) {
      case "GitHub":
        return <FaGithub />;

      case "Figma":
        return <FaFigma />;

      case "Deploy":
        return <RiGlobalLine />;
    }
  }

  return (<>
    <div className="w-[95%] flex flex-col border-1 border-border-default shadow-solid">
      <div className="window-header w-full items-center flex flex-row justify-center relative text-xl sm:text-2xl px-3 py-1 border-b-1 border-b-border-default bg-red-theme text-white">
        {project.name}
        <IconContext.Provider value={{ style: { color: 'white' }, size: '3rem', className: 'hover:cursor-pointer absolute right-0' }}>
          <LiaWindowClose onClick={close} />
        </IconContext.Provider>

      </div>
      <div className="window-content w-full px-2 flex flex-col gap-3 py-3 items-center">
        {project.image &&
          <div className="project-image bg-[#e9e3dc] w-[150px] sm:w-[200px] md:w-[50%] h-auto">
            <div className="w-full flex flex-row justify-start py-2 gap-1 pl-2 bg-red-theme">
              <span className="w-[13px] h-[13px] rounded-full bg-[#e9e3dc]"></span>
              <span className="w-[13px] h-[13px] rounded-full bg-[#e9e3dc]"></span>
            </div>
            <img src={project.image} className="object-contain w-full" />
          </div>
        }



        {/* Description */}
        <div className=" w-[95%] flex flex-col px-3">
          <p className="text-wrap">
            {project.description}
          </p>
          <ul className="list-disc pl-5 w-full">
            {project.featuresAndDetails.map((item, i) =>
              <li className="text-wrap" key={i}>{item}</li>
            )}
          </ul>
        </div>

        {/* Project Links */}
        <div className="w-full gap-1 px-3 flex flex-row flex-wrap items-center justify-start">
          <p className="mr-2">Acessar projeto em:</p>
          {project.links.map((link, i) =>
            <Link rel="noopener noreferrer" target="_blank" key={i} href={link.href} variant="project" className="items-center gap-2 py-1 px-4"><>
              <IconContext.Provider value={{ style: { color: 'black)' }, size: '2rem' }}>
                {linkIcon(link.name)}
              </IconContext.Provider>

              {link.name}
            </></Link>
          )}
        </div>


      </div>
    </div>
  </>)
}
