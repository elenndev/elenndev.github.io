import Navbar from "./Navbar";
import ThemeToggle from "./ThemeToggle"

export default function Header() {
  return (
    <header className="relative w-[98%] md:w-[90%] bg-body flex items-center justify-between px-6 py-4 shadow-md border-1 border-default">
      <h1 className="text-xl font-bold uppercase">Elenndev</h1>
      <span className="flex flex-row gap-8 md: px-2">
        <ThemeToggle />
        <Navbar />
      </span>
    </header>
  );
}

