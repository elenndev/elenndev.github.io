const CircleRing = () => {
  return (
    <div className="relative w-22 h-22 lg:w-36 lg:h-36">
      {/* Outer ring */}
      <div className="absolute inset-0 rounded-full border-2 border-muted-foreground" />
      {/* Middle ring */}
      <div className="absolute inset-2 rounded-full border border-muted-foreground" />
      {/* Inner circle */}
      <div className="absolute inset-4 rounded-full border-2 border-white" />
      {/* Center dot */}
      <div className="absolute inset-[38%] rounded-full bg-[hsl(var(--foreground)/0.2)]" />
    </div>
  );
};

export default CircleRing;
