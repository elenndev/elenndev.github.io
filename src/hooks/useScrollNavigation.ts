import { useEffect, useRef } from "react";
import type { ISectionOptionId } from "../components/useSections";

export function useScrollNavigation(
  activeId: ISectionOptionId,
  changeSection: (id: ISectionOptionId) => void,
) {
  const isThrottled = useRef(false);
  const sectionOrder: ISectionOptionId[] = ["sobre", "experiencia", "projetos"];

  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (isThrottled.current) return;

      const currentIndex = sectionOrder.indexOf(activeId);
      if (currentIndex === -1) return;

      if (e.deltaY > 0 && currentIndex < sectionOrder.length - 1) {
        changeSection(sectionOrder[currentIndex + 1]);
      }

      if (e.deltaY < 0 && currentIndex > 0) {
        changeSection(sectionOrder[currentIndex - 1]);
      }

      isThrottled.current = true;
      setTimeout(() => {
        isThrottled.current = false;
      }, 700); // tempo da animação
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    return () => window.removeEventListener("wheel", onWheel);
  }, [activeId, changeSection]);
}
