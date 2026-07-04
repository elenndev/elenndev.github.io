import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { ISectionOptionId } from "../components/useSections";

export const useGsap = (activeSectionId: ISectionOptionId) => {
  const aboutMeRef = useRef(null);
  const projectsRef = useRef(null);
  const experiencesRef = useRef(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);

  gsap.registerPlugin(ScrollTrigger);

  function animateSectionEnter(ref: React.RefObject<HTMLElement | null>) {
    if (!ref.current) return;

    gsap.set(ref.current, {
      transformPerspective: 1200,
      transformOrigin: "center center",
    });

    const tl = gsap.timeline();

    tl.fromTo(
      ref.current,
      {
        autoAlpha: 0,
        y: 80,
        scale: 0.96,
        filter: "blur(8px)",
      },
      {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        duration: 1.1,
        ease: "expo.out",
      },
    );

    // anima elementos internos se existirem
    tl.fromTo(
      ref.current.querySelectorAll("[data-animate]"),
      {
        autoAlpha: 0,
        y: 24,
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "power3.out",
      },
      "-=0.5", // overlap moderno
    );
  }

  useEffect(() => {
    switch (activeSectionId) {
      case "sobre":
        animateSectionEnter(aboutMeRef);
        break;

      case "projetos":
        animateSectionEnter(projectsRef);
        break;

      case "experiencia":
        animateSectionEnter(experiencesRef);
        break;
    }
  }, [activeSectionId]);

  gsap.registerPlugin(useGSAP);
  return { gsap, h1Ref, aboutMeRef, projectsRef, experiencesRef };
};
