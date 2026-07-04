import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import CircleRing from "./components/CircleRing";
import SectionContent from "./components/ui/SectionContent";
import GraphNav from "./components/GraphNav";

const sections = ["sobre", "experiencia", "projetos"];

export const App = () => {
  const [activeSection, setActiveSection] = useState("sobre");
  const cooldownRef = useRef(false);

  const changeSection = useCallback(
    (direction: 1 | -1) => {
      if (cooldownRef.current) return;
      const currentIndex = sections.indexOf(activeSection);
      const nextIndex = currentIndex + direction;
      if (nextIndex < 0 || nextIndex >= sections.length) return;
      cooldownRef.current = true;
      setActiveSection(sections[nextIndex]);
      // Scroll back to top when changing section
      window.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(() => {
        cooldownRef.current = false;
      }, 800);
    },
    [activeSection],
  );

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const el = document.documentElement;
      const atTop = window.scrollY <= 0;
      const atBottom =
        window.scrollY + window.innerHeight >= el.scrollHeight - 2;

      if (atTop && e.deltaY < 0) {
        e.preventDefault();
        changeSection(-1);
      } else if (atBottom && e.deltaY > 0) {
        e.preventDefault();
        changeSection(1);
      }
    };

    // Touch handling for mobile
    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };
    const handleTouchEnd = (e: TouchEvent) => {
      const deltaY = touchStartY - e.changedTouches[0].clientY;
      const el = document.documentElement;
      const atTop = window.scrollY <= 0;
      const atBottom =
        window.scrollY + window.innerHeight >= el.scrollHeight - 2;

      if (atTop && deltaY < -50) {
        changeSection(-1);
      } else if (atBottom && deltaY > 50) {
        changeSection(1);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [changeSection]);
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <div className="flex-1 flex flex-col md:flex-row items-start justify-between max-w-6xl mx-auto w-full px-6 py-10 lg:px-8 lg:py-16 gap-8 lg:gap-12 relative md:pt-32 lg:pt-20">
        {/* Graph navigation - top on mobile, right on desktop */}
        <div className="flex flex-col items-center gap-0 self-center md:self-start w-full md:w-auto order-first md:order-last">
          <GraphNav
            activeSection={activeSection}
            onSectionChange={setActiveSection}
            avatarSlot={<CircleRing />}
          />
        </div>

        {/* Left content */}
        <div className="flex-1 flex flex-col gap-6 lg:gap-8 w-full order-last md:order-first">
          <div className="flex items-center gap-6">
            <div className="md:hidden shrink-0">
              <CircleRing />
            </div>
            <span>
              <h1 className="font-displayb font-styled text-4xlb text-[4.5rem] lg:text-6xlb text-foreground tracking-tight">
                Elenndev
              </h1>
              <h2 className="font-displayb font-styled text-4xlb text-[1.5rem] lg:text-6xlb text-foreground tracking-tight">
                Desenvolvedora FullStack Júnior
              </h2>
            </span>
          </div>

          <SectionContent activeSection={activeSection} />
        </div>
      </div>

      {/* Bottom arrow indicator */}
      <button
        onClick={() => {
          const isLast = activeSection === sections[sections.length - 1];
          changeSection(isLast ? -1 : 1);
        }}
        className="pb-6 pt-2 flex justify-center w-full text-muted-foreground hover:text-[#E63360] transition-colors cursor-pointer"
      >
        {activeSection === sections[sections.length - 1] ? (
          <ChevronUp className="w-6 h-6 animate-bounce" />
        ) : (
          <ChevronDown className="w-6 h-6 animate-bounce" />
        )}
      </button>
    </main>
  );
};

