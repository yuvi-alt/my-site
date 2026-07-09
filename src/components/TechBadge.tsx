type TechBadgeProps = {
  label: string;
  interactive?: boolean;
};

export function TechBadge({ label, interactive = true }: TechBadgeProps) {
  return (
    <span className={interactive ? "tech-badge" : "tech-badge tech-badge-static"}>
      {label}
    </span>
  );
}
