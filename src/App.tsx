import { useEffect, useRef } from "react"
import Header from "./components/Header"
import { Section } from "./components/ui/Section"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGsap } from "./hooks/useGsap"
import meIcon from "./assets/icon.webp"


function App() {
  const gsap = useGsap();
  gsap.registerPlugin(ScrollTrigger)

  const h1Ref = useRef<HTMLHeadingElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !h1Ref.current) return

    // Animação de entrada/saída da section
    gsap.fromTo(
      sectionRef.current,
      { autoAlpha: 0, y: 50 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
          onEnter: () => typewriterEffect(),
          onEnterBack: () => typewriterEffect(),
        },
      }
    )
    function typewriterEffect() {
      const text = "Olá, eu sou a elen!"
      const el = h1Ref.current
      if (!el) return

      el.textContent = "" // limpa
      let i = 0

      gsap.to({}, {
        duration: text.length * 0.01,
        repeat: text.length - 1,
        onRepeat: () => {
          if (el.textContent !== undefined) {
            el.textContent = text.slice(0, ++i)
          }
        },
      })
    }

    typewriterEffect()
  }, [])

  return (
    <>
      <div className="flex items-center flex-col">
        <Header />
        <main className="min-w-screen flex flex-col items-center mt-2">
          <Section ref={sectionRef} title="Portfólio" variant="welcome" id="welcome">
            <div className="section-content flex flex-col items-center py-8 sm:px-0 px-3 gap-4">
              <span className="w-full flex justify-center">
                <h1 ref={h1Ref} className="typewriter text-5xl text-center font-mono font-bold text-text">Olá, eu sou a elen!</h1>
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

        </main>

      </div>
    </>
  )
}

export default App
