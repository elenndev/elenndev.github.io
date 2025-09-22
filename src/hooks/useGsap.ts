import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger"


export const useGsap = () => {
  const welcomeRef = useRef(null)
  const profileRef = useRef(null)
  const projectsRef = useRef(null)
  const h1Ref = useRef<HTMLHeadingElement>(null)

  gsap.registerPlugin(ScrollTrigger)


  useEffect(() => {
    function typewriterEffect() {
      const text = "Olá, eu sou a Elen! "
      const el = h1Ref.current
      if (!el) return

      el.textContent = "" // limpa
      let i = 0

      gsap.to({}, {
        duration: text.length * 0.01, // ajuste a velocidade
        repeat: text.length - 1,
        onRepeat: () => {
          if (el.textContent !== undefined) {
            el.textContent = text.slice(0, ++i)
          }
        },
      })
    }

    // Animação da seção "welcome"
    gsap.fromTo(
      welcomeRef.current,
      { autoAlpha: 0, y: 50 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: welcomeRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
          onEnter: typewriterEffect,
          onEnterBack: typewriterEffect,
        },
      }
    )

    // Animação da seção "profile"
    gsap.fromTo(
      profileRef.current,
      { autoAlpha: 0, y: 50 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: profileRef.current,
          start: "top 90%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
        },
      }
    )

    // Animação da seção "projects"
    gsap.fromTo(
      projectsRef.current,
      { autoAlpha: 0, y: 50 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top 90%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
        },
      }
    )


  }, [])

  gsap.registerPlugin(useGSAP);
  return { gsap, h1Ref, profileRef, welcomeRef, projectsRef };
}
