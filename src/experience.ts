export interface IExperience {
  organization: string;
  description: string;
  tags: string[];
  links: { name: string, href: string }[];
}

export const experiences: IExperience[] = [
  {
    organization: "Frontend Fusion",
    description: "Atuo como desenvolvedora fullstack e lider técnica em projetos voluntários para ONGs. Enquanto lider, oriento o planejamento, defino a direção técnica e reviso códigos. Como dev, atuo no desenvolvimento de interfaces modernas e responsivas.",
    tags: ["React", "NextJs", "Typescript", "Tailwind", "Node", "NestJS", "Jest + React Testing Library", "Github flow", "Git semântico", "SCRUM"],
    links: [{ name: "Github", href: "https://github.com/Projeto-FrontEnd-Fusion" }]
  },
  {
    organization: "Inova Tech",
    description: "Atuei como lider e desenvolvedora fullstack na construção do CRM para academia desenvolvido durante o Programa Impulse (Organizado pela FWK Global + CanPack). Liderando e documentando desde a etapa de identificação do problema, validação, prototipação até desenvolvimento e apresentação de Pitch do produto desenvolvido.",
    tags: ["React", "Tailwind", "Node", "Typescript", "express", "Git semântico", "kanban", "Gestão de time", "Gestão de produto"],
    links: [{ name: "Github", href: "https://github.com/FWK-inova-tech" }]
  },
]
