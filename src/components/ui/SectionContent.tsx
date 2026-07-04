import { useState } from "react";
import SkillCard from "././SkillCard";
import ExperienceCard from "././ExperienceCard";
import ProjectCard from "././ProjectCard";
import ProjectDetail from "././ProjectDetail";
import { experiences, type IProject, projects } from "../../data";

interface SectionContentProps {
  activeSection: string;
}

const stacks = [
  "TypeScript",
  "Node.js",
  "React",
  "PostgreSQL",
  "Docker",
  "Nest",
  "Next.js",
];

const content: Record<string, { title: string; text: string }> = {
  sobre: {
    title: "Sobre Mim",
    text: "Dev FullStack com experiência em construção e evolução de produtos digitais, atuando desde a identificação de problemas até a entrega de soluções funcionais. Tenho prática em colaborar em decisões arquiteturais, documentação técnica e organização de processos de desenvolvimento, além de experiência com liderança de projetos e trabalho em equipe. Já participei tanto de iniciativas profissionais quanto de projetos voluntários, contribuindo com planejamento técnico, revisão de código e desenvolvimento de aplicações escaláveis e bem estruturadas. Busco constantemente aprimorar minhas habilidades, mantendo foco em qualidade de código, clareza de comunicação e entrega de soluções que gerem valor real para usuários e equipes.",
  },
  experiencia: {
    title: "Experiência",
    text: "Atuo no desenvolvimento e evolução de aplicações web com React, NextJs, Node.js e TypeScript, participando da implementação de funcionalidades, manutenção de sistemas, decisões técnicas e colaboração em projetos de produto e iniciativas voluntárias.",
  },
  projetos: {
    title: "Projetos",
    text: "Desenvolvimento de portfólios interativos, dashboards administrativos, landing pages responsivas, e-commerce com integração de pagamento, e aplicações full-stack com autenticação e banco de dados.",
  },
};

const SectionContent = ({ activeSection }: SectionContentProps) => {
  const section = content[activeSection];
  const [selectedProject, setSelectedProject] = useState<IProject | null>(null);

  // Reset selected project when changing sections
  if (activeSection !== "projetos" && selectedProject) {
    setSelectedProject(null);
  }

  // Show project detail view
  if (activeSection === "projetos" && selectedProject) {
    return (
      <ProjectDetail
        project={selectedProject}
        onBack={() => setSelectedProject(null)}
      />
    );
  }

  return (
    <div key={activeSection} className="animate-fade-in flex flex-col gap-6">
      <p className="text-[1.25rem] leading-relaxed text-muted-foreground font-styled max-w-[44rem]">
        {section.text}
      </p>

      <div className="flex gap-3 flex-wrap justify-center md:justify-start">
        {activeSection === "sobre" &&
          stacks.map((stack) => <SkillCard key={stack} name={stack} />)}

        {activeSection === "experiencia" &&
          experiences.map((exp) => (
            <ExperienceCard key={exp.name} experience={exp} />
          ))}

        {activeSection === "projetos" &&
          projects.map((project) => (
            <ProjectCard
              key={project.name}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
      </div>
    </div>
  );
};

export default SectionContent;
