import { useState } from "react";

export type ISectionOption = {
  id: ISectionOptionId;
  label: string;
};

export type ISectionOptionId = "sobre" | "experiencia" | "projetos";

export const useSections = () => {
  const sectionsOptions: Record<string, ISectionOption> = {
    sobre: { id: "sobre", label: "Sobre Mim" },
    experiencia: { id: "experiencia", label: "Experiência" },
    projetos: { id: "projetos", label: "Projetos" },
  };

  const [activeOption, setActiveOption] = useState<ISectionOption>(
    sectionsOptions["sobre"],
  );

  const changeSection = (option: ISectionOptionId) =>
    setActiveOption(sectionsOptions[option]);

  return {
    activeOption,
    sectionsOptions,
    changeSection,
  };
};
