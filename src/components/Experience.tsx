"use client";

import { useState } from "react";
import { experience } from "@/data/content";
import { FadeIn } from "@/components/FadeIn";
import { IconBriefcase } from "@/components/Icons";
import { TechBadge } from "@/components/TechBadge";

export function Experience() {
  const entry = experience[0];
  const [activeArea, setActiveArea] = useState(0);

  return (
    <section id="experience" className="section">
      <div className="container">
        <FadeIn>
          <header className="section-header">
            <p className="section-eyebrow">Career</p>
            <div className="section-title-with-icon">
              <span className="section-icon section-icon-blue">
                <IconBriefcase />
              </span>
              <h2>Experience</h2>
            </div>
            <p className="section-lead">
              Enterprise engineering across APIs, data pipelines, and cloud analytics.
            </p>
          </header>
        </FadeIn>

        <FadeIn delay={60}>
          <article className="experience-card">
            <div className="experience-card-header">
              <div>
                <h3>{entry.role}</h3>
                <p className="experience-company">{entry.company}</p>
              </div>
              <span className="experience-dates">{entry.dates}</span>
            </div>

            <p className="experience-summary">{entry.summary}</p>

            <div
              className="experience-tabs"
              role="tablist"
              aria-label="Experience focus areas"
            >
              {entry.areas.map((area, index) => (
                <button
                  key={area.title}
                  type="button"
                  role="tab"
                  aria-selected={activeArea === index}
                  className={`experience-tab ${activeArea === index ? "active" : ""}`}
                  onClick={() => setActiveArea(index)}
                >
                  {area.title}
                </button>
              ))}
            </div>

            <div
              className="experience-panel"
              role="tabpanel"
              aria-label={entry.areas[activeArea].title}
            >
              <ul className="experience-list">
                {entry.areas[activeArea].bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>

            <div className="experience-tech">
              <span className="experience-tech-label">Stack</span>
              <div className="badge-row">
                {entry.technologies.map((tech) => (
                  <TechBadge key={tech} label={tech} />
                ))}
              </div>
            </div>
          </article>
        </FadeIn>
      </div>
    </section>
  );
}
