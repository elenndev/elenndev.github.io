import React, { useState } from "react";

interface NavItem {
  id: string;
  label: string;
  x: number; // posição horizontal em %
  y: number; // posição vertical em %
}

const VerticalNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("sobre");

  const navItems: NavItem[] = [
    { id: "sobre", label: "Sobre Mim", x: 85, y: 15 },
    { id: "experiencia", label: "Experiência", x: 70, y: 35 },
    { id: "projetos", label: "Projetos", x: 80, y: 75 },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // Função para calcular o caminho SVG entre os pontos
  const getPathData = () => {
    const points = navItems.map((item) => ({ x: item.x, y: item.y }));
    return points
      .map((point, index) => {
        if (index === 0) return `M ${point.x} ${point.y}`;
        return `L ${point.x} ${point.y}`;
      })
      .join(" ");
  };

  return (
    <div className="fixed top-1/2 -translate-y-1/2 w-96 h-[600px]">
      {/* SVG para as linhas conectando os pontos */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          d={getPathData()}
          stroke="#4B5563"
          strokeWidth="0.3"
          fill="none"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {/* Nodes e Labels */}
      {navItems.map((item) => {
        const isActive = activeSection === item.id;

        return (
          <div
            key={item.id}
            className="absolute"
            style={{
              left: `${item.x}%`,
              top: `${item.y}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            {/* Linha horizontal conectando ao label */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center">
              <div className="w-16 h-px bg-gray-600"></div>
            </div>

            {/* Círculo do node */}
            <button
              onClick={() => handleNavClick(item.id)}
              className={`relative w-4 h-4 rounded-full transition-all duration-300 ${
                isActive
                  ? "bg-white scale-125"
                  : "bg-gray-600 hover:bg-gray-400"
              }`}
              aria-label={item.label}
            >
              {isActive && (
                <>
                  <div className="absolute inset-0 rounded-full border-2 border-white animate-pulse"></div>
                  <div className="absolute -inset-2 rounded-full border border-gray-400"></div>
                  <div className="absolute -inset-4 rounded-full border border-gray-500"></div>
                </>
              )}
            </button>

            {/* Label */}
            <div className="absolute left-20 top-1/2 -translate-y-1/2 whitespace-nowrap">
              <button
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-mono transition-all duration-300 ${
                  isActive
                    ? "text-white font-bold"
                    : "text-gray-500 hover:text-gray-300"
                }`}
              >
                {item.label}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default VerticalNav;
