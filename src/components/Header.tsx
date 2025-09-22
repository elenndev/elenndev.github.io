import Navbar from "./Navbar";
import ThemeToggle from "./ThemeToggle"

export default function Header() {
  return (
    <header className="z-10 w-[98%] md:w-[90%] mt-2 bg-body flex sm:flex-row items-center justify-between px-3 sm:px-6 py-4 shadow-md border-1 border-border-default fixed">
      <p className="text-2xl md:text-4xl
        font-extrabold uppercase">Elenndev</p>
      <span className="flex flex-row w-fit justify-center sm:justify-end gap-2 sm:gap-8 px-0 sm:px-2">
        <ThemeToggle />
        <Navbar />
      </span>
    </header>
  );
}

