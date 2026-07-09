import { skillGroups } from "@/data/content";
import { FadeIn } from "@/components/FadeIn";
import { IconBulb } from "@/components/Icons";
import { TechBadge } from "@/components/TechBadge";

const iconMap = {
  frontend: "🎨",
  backend: "⚙️",
  cloud: "☁️",
  database: "🗄️",
  tools: "🛠️",
  ai: "✨",
};

const colorMap = {
  frontend: "skill-icon-blue",
  backend: "skill-icon-green",
  cloud: "skill-icon-sky",
  database: "skill-icon-purple",
  tools: "skill-icon-amber",
  ai: "skill-icon-violet",
};

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <FadeIn>
          <div className="section-title-row">
            <div className="section-title-with-icon">
              <span className="section-icon section-icon-amber">
                <IconBulb />
              </span>
              <h2>Skills</h2>
            </div>
          </div>
        </FadeIn>

        <div className="skills-showcase">
          {skillGroups.map((group, index) => (
            <FadeIn key={group.title} delay={index * 50}>
              <article className="skill-showcase-card">
                <div className={`skill-icon-wrap ${colorMap[group.icon]}`}>
                  <span aria-hidden="true">{iconMap[group.icon]}</span>
                </div>
                <h3>{group.title}</h3>
                <div className="badge-row">
                  {group.skills.map((skill) => (
                    <TechBadge key={skill} label={skill} />
                  ))}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
