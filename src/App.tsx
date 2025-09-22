import Header from "./components/Header"
import { Section } from "./components/ui/Section"
import { useGsap } from "./hooks/useGsap"
import meIcon from "./assets/icon.webp"
import { SiTailwindcss, SiJavascript, SiTypescript, SiNextdotjs, SiNestjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { IconContext } from "react-icons";
import { Link } from "./components/ui/Link";
import { Projects } from "./components/Projects/Projects";


function App() {
  const { welcomeRef, h1Ref, profileRef, projectsRef } = useGsap();

  const socialLinks = [
    {
      name: "Email",
      to: "mailto:elenndev@gmail.com"
    },
    {
      name: "GitHub",
      to: "https://github.com/elenndev"
    },
    {
      name: "Linkedin",
      to: "https://linkedin.com/in/elen-damares"
    },


  ]

  return (
    <>
      <div className="flex items-center relative flex-col pb-10">
        <Header />
        <main className="min-w-screen z-[1] relative flex gap-15 flex-col items-center mt-24">
          <Section ref={welcomeRef} title="Portfólio" variant="welcome" id="welcome">
            <div className="section-content flex flex-col items-center py-8 sm:px-0 px-3 gap-4">
              <span className="w-full flex justify-center">
                <h1 ref={h1Ref} className="h-[9rem] text-center md:h-12 min-h-fit typewriter text-5xl font-mono font-bold text-text">Olá, eu sou a elen! </h1>
              </span>

              <h2 className="text-2xl text-center pt-1 font-mono font-bold flex flex-row px-2 w-fit h-fit bg-link text-black border-2 border-link-border shadow-solid rounded-sm">
                Desenvolvedora Fullstack
              </h2>
              <div className="me-icon shadow-solid border-1 border-border-default bg-[#e9e3dc] w-[150px] sm:w-[200px] ms:w-[250px] h-auto">
                <div className="border-b-1 border-b-border-default bg-red-theme">
                  <p className="text-white font-light text-center pb-1">{'./icon.png'}</p>
                </div>
                <img src={meIcon} className="object-cover" />
              </div>
            </div>
          </Section>

          <Section ref={profileRef} title="Profile" id="profile">
            <div className="section-content flex flex-col items-center py-8 px-4 gap-4">
              <h2 className="text-3xl text-center font-extrabold uppercase">Sobre mim</h2>
              <div>
                <p className="text-2xl">Desenvolvedora FullStack Júnior com experiência em HTML, CSS, Javascript, TypeScript, Next.JS,React.js, Node.js,
                  Responsividade, GSAP, Tailwind CSS, Styled Components, e consumo de
                  APIs.<br /> Aplico minhas habilidades em projetos pessoais e também atuando em projetos voluntários na
                  <a className="text-text-link" href="https://www.linkedin.com/company/comunidade-frontend-fusion/"
                    target="_blank"> comunidade Frontend Fusion</a></p>
              </div>
              <div className='w-full flex flex-row gap-3 justify-center flex-wrap'>
                <IconContext.Provider
                  value={{ style: { color: 'var(--color-secondary)' }, size: '3rem' }}>
                  <SiTypescript />
                  <SiJavascript />
                  <FaReact />
                  <SiNextdotjs />
                  <SiTailwindcss />
                  <SiNestjs />
                </IconContext.Provider>
              </div>
              <div className="w-full flex flex-col items-center gap-2">
                <div className="w-full flex flex-row gap-3 justify-center flex-wrap">
                  {socialLinks.map((link, i) =>
                    <Link rel="noopener noreferrer" target="_blank" key={i} href={link.to}><>{link.name}</></Link>)}
                </div>
                <span className="w-full flex flex-row justify-center">
                  <Link download="Elen Santos CV - Desenvolvedora FullStack" href="assets/Elen Santos CV - Desenvolvedora FullStack.pdf">Download CV</Link>
                </span>
              </div>
            </div>
          </Section>

          <Projects ref={projectsRef} />
        </main>
        <span className="w-screen overflow-hidden h-full flex flex-col absolute z-[0]">
          <span className='fig1 w-screen h-screen'></span>
          <span className='fig2 w-screen h-screen'></span>

        </span>


      </div>
    </>
  )
}

export default App
