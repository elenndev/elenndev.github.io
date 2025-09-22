import { useRef, useState } from "react";
import { Link } from "./ui/Link";
import { useGsap } from "../hooks/useGsap";


export default function Navbar() {
  const { gsap } = useGsap();
  const [isOpen, setIsOpen] = useState(false);
  const menuLinks = [
    {
      href: "#profile",
      text: 'Sobre'
    }, {
      href: "#projects",
      text: 'Projetos'
    }, {
      href: "mailto:elenndev@gmail.com",
      text: 'Contato'
    }]

  const toggleNavButtonBarsClasses = 'bg-body border-[3px] border-secondary shadow-[3px_4px_0_var(--shadowColor)] w-[40px] sm:w-[50px] h-[10px] rounded-[25px] transition-all duration-300'

  const navRef = useRef<HTMLUListElement>(null);

  const handleToggleMenu = () => {
    if (!isOpen && navRef.current) {
      // open
      gsap.fromTo(
        navRef.current,
        { x: "100%", opacity: 0, display: "none" },
        { x: "0%", opacity: 1, duration: 0.5, ease: "power3.out", display: "flex" }
      );
    } else if (isOpen && navRef.current) {
      // close
      gsap.to(navRef.current, {
        x: "100%",
        duration: 0.6,
        ease: "power3.in",
        onComplete: () => {
          if (navRef.current) {
            gsap.set(navRef.current, { clearProps: "all" });
          }
        },
      });
    }

    setIsOpen(!isOpen);
  };



  return (
    <div>
      <button
        onClick={handleToggleMenu}
        className={`md:hidden right-4 ${isOpen && 'absolute top-10 w-[100px]'}  h-fit z-80 flex flex-col justify-center gap-[10px] `}
      >
        <span
          className={`${toggleNavButtonBarsClasses} ${isOpen ? "fixed rotate-45" : ""
            }`}
        />
        <span
          className={`${toggleNavButtonBarsClasses} ${isOpen ? "fixed -rotate-45" : ""
            }`}
        />
        <span
          className={`${toggleNavButtonBarsClasses} ${isOpen && "hidden"}`}
        />
      </button>

      <nav ref={navRef}
        className={`${isOpen ? "flex" : "hidden md:flex"
          } fixed flex-col h-screen w-full sm:w-1/2 right-0 top-0 shadow-[0_10px_30px_40px_rgba(0,0,0,0.377)] pt-[130px] pr-[5%]
        md:flex md:flex-row md:w-fit gap-2 items-center md:relative md:shadow-none md:h-full z-60 md:pt-0 md:pr-0 bg-body`}
      >
        {menuLinks.map((item, i) => <Link
          variant="primary" size="custom"
          key={i}
          className="w-4/5 sm:w-1/2 md:w-fit"
          href={item.href}
          children={item.text} />)}
      </nav>

    </div>
  );
}

