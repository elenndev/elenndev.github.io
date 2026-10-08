import chatNowNowImg from "../projectsMidia/chat-nownow.jpeg";
import violetaElizImg from "../projectsMidia/violeta-eliz.png";
import amevisImg from "../projectsMidia/amevis.png";

export interface IExperience {
  name: string;
  badge?: string;
  date: string;
  role: string;
  description: string;
  tags?: string[];
  links?: { name: string; href: string }[];
}

export const experiences: IExperience[] = [
  {
    name: "FWK Global",
    date: "2026 – Atual",
    role: "Desenvolvedora Full Stack (Trainee)",
    description:
      "Atuação no desenvolvimento e evolução da plataforma Orfeu e da freireAI. Desenvolvi o módulo de matchmaking (conectando desafios corporativos a startups), pela implementação de otimizações de performance backend (refatoração para Singleton no MongoDB Atlas reduzindo picos de conexões de 65 para 5) e pela resolução de problemas de concorrência e isolamento de contexto (req.user) para prevenção de falhas de auditoria.",
    tags: [
      "Node.js",
      "TypeScript",
      "React",
      "MongoDB",
      "Postgres",
      "Firestore",
      "Arquitetura de Software",
    ],
  },
  {
    name: "Programa Impulse (FWK Global & CanPack)",
    date: "2025 – 2026",
    badge: "Programa de Inovação",
    role: "Monitora Técnica & Aluna Destaque",
    description:
      "Iniciei como aluna e líder do projeto 'Inova Tech' (CRM para academias), conduzindo desde a prototipação até o Pitch do produto. Devido ao alto desempenho técnico e de liderança, fui convidada a retornar como Monitora Técnica do programa, orientando e acompanhando squads na concepção, arquitetura e entrega de projetos de inovação tecnológica.",
    tags: [
      "Mentoria Técnica",
      "Liderança de Squads",
      "Gestão de Produto",
      "Desenvolvimento web"
    ],
  },
  {
    name: "Comunidade Frontend Fusion",
    date: "2025",
    badge: "Trabalho Voluntário",
    role: "Desenvolvedora Full Stack",
    description:
      "Atuação voluntária no desenvolvimento de sistemas web para ONGs, como a Associação Cultural e Educacional Violeta Eliz. Colaborei no planejamento técnico, revisão de código e formação de squads dentro da comunidade, focando em boas práticas, acessibilidade e interfaces responsivas.",
    tags: [
      "React",
      'Next.js',
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Code Review",
      "Trabalho Voluntário",
    ],
    links: [
      { name: "GitHub", href: "https://github.com/Projeto-FrontEnd-Fusion" },
    ],
  },
];

export interface IProject {
  name: string;
  tags: string[];
  links: { name: "GitHub" | "Figma" | "Deploy"; href: string }[];
  shortDescription: string;
  image?: string;
  description: string;
  featuresAndDetails: string[];
}

export const projects: IProject[] = [
  {
    name: "Associação Violeta Eliz",
    tags: [
      "Fullstack",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "PostgreSQL",
      "Docker",
      "Bulletproof React",
    ],
    image: violetaElizImg,
    links: [
      {
        name: "GitHub",
        href: "https://github.com/Projeto-FrontEnd-Fusion/Aceve-website-development",
      },
      { name: "Deploy", href: "https://violetaeliz.org.br/" },
    ],
    shortDescription:
      "Plataforma institucional para a ONG Violeta Eliz com gestão de doações via PayPal, Pix e transparência de projetos sociais.",
    description:
      "Website institucional desenvolvido para fortalecer a presença digital e a credibilidade da Associação Violeta Eliz. A solução simplifica o fluxo de doações via integração com a API do PayPal e geração automatizada de QR Code para Pix, além de oferecer um painel de prestação de contas com galeria das ações sociais viabilizadas por meio das doações. Construído seguindo a arquitetura Bulletproof React e containerizado com Docker.",
    featuresAndDetails: [
      "Integração com a API do PayPal e checkout facilitado com QR Code dinâmico para Pix",
      "Galeria de prestação de contas e transparência das ações sociais",
      "Arquitetura baseada no padrão Bulletproof React (módulos isolados por feature)",
      "Gerenciamento de estado global reativo com Zustand e validação de formulários com Zod",
      "Ambiente containerizado para desenvolvimento e deploy com Docker e PostgreSQL",
    ],
  },
  {
    name: "Amevis Perfumes — Catálogo digital",
    tags: [
      "Fullstack",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "E-commerce",
      "UX/UI",
    ],
    image: amevisImg,
    links: [
      { name: "Deploy", href: "https://amevis.com.br/" },
    ],
    shortDescription:
      "Catálogo digital e para perfumaria importada com carrinho e checkout automatizado via WhatsApp.",
    description:
      "Catálogo digital desenvolvido para a Amevis focado na otimização da jornada de compra e redução do tempo de atendimento. O sistema substitui o envio manual de catálogos e tabelas de preços por uma vitrine interativa com carrinho de compras integrado, gerando uma mensagem estruturada no WhatsApp com os itens selecionados para a finalização imediata do pedido.",
    featuresAndDetails: [
      "Catálogo interativo com detalhes do produto e preços visíveis",
      "Gestão de carrinho de compras reativo no frontend",
      "Checkout direcionado para o WhatsApp com resumo estruturado do pedido",
      "Otimização do fluxo de atendimento ao cliente (redução do tempo de negociação no chat)",
      "Interface responsiva focada em navegação mobile-first",
    ],
  },
  {
    name: "2FA Authentication Service",
    tags: ["Backend", "NestJS", "TypeScript", "TypeORM", "Nodemailer", "Jest"],
    links: [
      { name: "GitHub", href: "https://github.com/elenndev/2fa-backend" },
    ],
    shortDescription:
      "Microserviço de autenticação segura e verificação de dois fatores (2FA) via e-mail.",
    description:
      "API desenvolvida em NestJS estruturada sob padrões de Clean Architecture para gestão de identidades e autenticação de dois fatores. Implementa geração, envio e validação temporal de PINs de segurança, garantindo controle estrito de expiração e revogação de tokens.",
    featuresAndDetails: [
      "Fluxo seguro de autenticação com múltiplos fatores (2FA)",
      "Geração e validação de PIN temporal com controle de expiração",
      "Integração automatizada com serviço de e-mail (Nodemailer)",
      "Arquitetura escalável utilizando NestJS e TypeORM",
      "Validação robusta de payloads e tratamento global de erros",
    ],
  },
  {
    name: "Chat NowNow (Real-time Engine)",
    shortDescription:
      "Plataforma de comunicação concorrente em tempo real utilizando WebSockets.",
    tags: ["Fullstack", "Node.js", "Express", "Socket.IO", "React", "TypeScript"],
    image: chatNowNowImg,
    description:
      "Aplicação de mensageria instantânea com comunicação bidirecional via WebSockets. Permite gestão dinâmica de salas de bate-papo, controle de acesso concorrente por moderadores e tráfego direto de mensagens em tempo real.",
    featuresAndDetails: [
      "Comunicação bidirecional de baixa latência via Socket.IO",
      "Sistema de modulação de acesso (aprovação/rejeição de novos membros na sala)",
      "Gestão de presença e eventos concorrentes no servidor",
      "Interface reativa construída com React e TypeScript",
    ],
    links: [
      { name: "GitHub", href: "https://github.com/elenndev/chat-nownow" },
    ],
  },
  {
    name: "React & Testing Playground",
    tags: ["React", "TypeScript", "MUI", "Jest", "RTL"],
    links: [
      {
        name: "GitHub",
        href: "https://github.com/elenndev/react-mui-jest-playground",
      },
    ],
    shortDescription:
      "Repositório focado em testes unitários, de integração e boas práticas com React Testing Library e MUI.",
    description:
      "Ambiente de engenharia dedicado ao estudo e implementação de suítes de testes automatizados para aplicações frontend. Explora padrões de componentização fortemente tipados, testes de comportamento visual com Material UI e cobertura com Jest.",
    featuresAndDetails: [
      "Testes unitários e de integração com Jest e React Testing Library",
      "Design System e acessibilidade utilizando Material UI (MUI)",
      "Padrões avançados de tipagem de propriedades e estados com TypeScript",
    ],
  },
];
