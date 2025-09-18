import Navbar from "./Navbar";
import ThemeToggle from "./ThemeToggle"

export default function Header() {
  return (
    <header className="w-[98%] md:w-[90%] mt-2 bg-body flex items-center justify-between px-6 py-4 shadow-md border-1 border-default sticky">
      <p className="text-4xl
        font-extrabold uppercase">Elenndev</p>
      <span className="flex flex-row gap-8 md: px-2">
        <ThemeToggle />
        <Navbar />
      </span>
    </header>
  );
}

