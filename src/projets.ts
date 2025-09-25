import chatNowNowImg from "./projectsMidia/chat-nownow.jpeg"
import musicArchiveImg from "./projectsMidia/blog.webp"

export interface IProject {
  name: string;
  tags: string[];
  links: { name: 'GitHub' | 'Figma' | 'Deploy', href: string }[];
  shortDescription: string;
  image?: string;
  description: string;
  featuresAndDetails: string[];
}
export const projects: IProject[] = [
  {
    name: "Chat NowNow",
    shortDescription: "Chat que permite que usuários façam login, criem salas de bate-papo e se comuniquem em tempo real.",
    tags: ["Fullstack", "Express", "React", "Web Socket", "Typescript"],
    image: chatNowNowImg,
    description: "Uma aplicação de chat construído com WebSocket com a biblioteca Socket.IO e um backend desenvolvido com Express, o app permite que os usuários se conectem em tempo real, se registrem com um username, enviem mensagens, criem e participem de salas de chat.",
    links: [{ name: 'GitHub', href: "https://github.com/elenndev/chat-nownow" }],
    featuresAndDetails: ["Registro de username", "Criar uma sala", "Permitir/Negar a entrada de outros usuários na sua sala", "Solicitar entrar em outras Salas", "Chat em tempo Real"],
  },

  {
    name: "2fa",
    tags: ["Backend", "NestJs", "TypeORM", "Nodemailer"],
    links: [{ name: "GitHub", href: "https://github.com/elenndev/2fa-backend" }],
    shortDescription: "Uma aplicação backend que registra usuários e implementa um login 2FA usando o e-mail do usuário.",
    description: "Uma API NestJS com endpoints para registro de usuários e autenticação de dois fatores. O sistema gera códigos PIN enviados por e-mail usando o nodemailer, verifica a validade dos códigos e gerencia a autenticação de usuários com tempo de expiração.",
    featuresAndDetails: [
      "Registro de usuários com nome de usuário, e-mail e senha",
      "Sistema de login que gera e envia códigos PIN por e-mail",
      "Validação de códigos PIN com verificação de tempo de expiração",
      "Integração com serviço de e-mail usando Nodemailer",
      "Confirmação de identidade do usuário através de autenticação de dois fatores"
    ]
  },
  {
    "name": "React + MUI + Jest Playground",
    "tags": [
      "React",
      "TypeScript",
      "MUI",
      "Jest"
    ],
    "links": [
      {
        "name": "GitHub",
        "href": "https://github.com/elenndev/react-mui-jest-playground"
      }
    ],
    "shortDescription": "Um ambiente de estudo para praticar o desenvolvimento com React, TypeScript, MUI e Jest.",
    "description": "Um ambiente de estudo para criar testes unitários e de integração para componentes React, construir interfaces modernas com MUI e aplicar boas práticas de desenvolvimento com React e TypeScript.",
    "featuresAndDetails": [
      "Criação de testes unitários e de integração com Jest e React Testing Library",
      "Construção de interfaces com MUI (Material UI)",
      "Desenvolvimento de componentes tipados com React e TypeScript"
    ]
  },

  {
    name: "Blog Music Archive",
    tags: ["Fullstack", "React", "Styled Components", "Figma"],
    image: musicArchiveImg,
    links: [
      { name: "GitHub", href: "https://github.com/elenndev/music-archive.git" },
      { name: "Figma", href: "https://www.figma.com/proto/FXxvhiExi428LAnp4M1P0y/Music-Archive?node-id=376-1264&t=nOmXK7G21oHyfbrD-1" },
      { name: "Deploy", href: "https://music-archive-blog.vercel.app/" }
    ],
    shortDescription: "Blog desenvolvido utilizando React e com um backend python.",
    description: "Blog desenvolvido utilizando React e com um backend desenvolvido em python, o design seguido para chegar ao produto final está disponível para visualização no figma. Essa aplicação web permite ao leitor responsividade e preferência de tema de cor, e ao usuário administrador, segurança e possibilidade de começar a escrever suas publicações e continuar em outro momento, com a funcionalidade dos rascunhos.",
    featuresAndDetails: [
      "Sistema de login e middleware para a proteção de rotas",
      "Responsividade",
      "Modo dark/light theme",
      "Interação com a API do Spotify",
      "Requisições a API que permite CRUD para gerenciamento e acesso de publicações, rascunhos e demais informações do blog guardados no banco de dados NoSql[MongoDB]",
      "Criar e editar rascunhos de publicações"
    ]
  },
]
