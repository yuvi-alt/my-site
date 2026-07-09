import { experience } from "@/data/content";
import { FadeIn } from "@/components/FadeIn";
import { IconBriefcase } from "@/components/Icons";
import { TechBadge } from "@/components/TechBadge";

export function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <FadeIn>
          <div className="section-title-row">
            <div className="section-title-with-icon">
              <span className="section-icon section-icon-blue">
                <IconBriefcase />
              </span>
              <h2>Experience</h2>
            </div>
            <a href="#experience" className="section-link">
              View Full Experience
            </a>
          </div>
        </FadeIn>

        <div className="timeline">
          {experience.map((entry, index) => (
            <FadeIn key={entry.company} delay={index * 80}>
              <article className="timeline-card">
                <div className="timeline-dot" aria-hidden="true" />
                <div className="timeline-content">
                  <div className="timeline-header">
                    <div>
                      <h3>{entry.role}</h3>
                      <p className="timeline-company">{entry.company}</p>
                    </div>
                    <span className="timeline-dates">{entry.dates}</span>
                  </div>
                  <ul className="timeline-bullets">
                    {entry.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                  <div className="badge-row">
                    {entry.technologies.map((tech) => (
                      <TechBadge key={tech} label={tech} />
                    ))}
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
