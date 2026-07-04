import { Github, Figma, ExternalLink } from "lucide-react";

export const linkIcons: Record<string, React.ReactNode> = {
  GitHub: <Github className="w-3.5 h-3.5" />,
  Figma: <Figma className="w-3.5 h-3.5" />,
  Deploy: <ExternalLink className="w-3.5 h-3.5" />,
};
