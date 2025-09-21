import { useEffect, useRef } from "react"
import Header from "./components/Header"
import { Section } from "./components/ui/Section"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGsap } from "./hooks/useGsap"


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
      const text = "Olá, eu sou a elen !"
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
          <Section ref={sectionRef} title="Portfólio" variant="welcome" id="welcome"><>
            <h1 ref={h1Ref} className="typewriter">Olá, eu sou a elen !</h1>
          </></Section>

        </main>

      </div>
    </>
  )
}

export default App
