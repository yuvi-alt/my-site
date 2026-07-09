"use client";

import Image from "next/image";
import { useState } from "react";
import { projects } from "@/data/content";
import { FadeIn } from "@/components/FadeIn";
import { IconExternal, IconFolder } from "@/components/Icons";
import { TechBadge } from "@/components/TechBadge";
import { withBasePath } from "@/lib/paths";

const PREVIEW_COUNT = 3;

export function Projects() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="projects" className="section section-soft">
      <div className="container">
        <FadeIn>
          <header className="section-header">
            <p className="section-eyebrow">Selected work</p>
            <div className="section-title-with-icon">
              <span className="section-icon section-icon-purple">
                <IconFolder />
              </span>
              <h2>Projects</h2>
            </div>
            <p className="section-lead">
              Production apps I designed and built end to end — from APIs and data
              pipelines to customer-facing interfaces.
            </p>
          </header>
        </FadeIn>

        <div className="projects-stack">
          {projects.map((project, index) => {
            const expanded = expandedId === project.id;
            const previewSrc = withBasePath(project.logo ?? project.image);
            const isLogo = Boolean(project.logo);
            const previewItems = project.whatIBuilt.slice(0, PREVIEW_COUNT);
            const hiddenCount = project.whatIBuilt.length - PREVIEW_COUNT;

            return (
              <FadeIn key={project.id} delay={index * 80}>
                <article className="project-card">
                  <div
                    className="project-card-media"
                    style={
                      project.logoBg
                        ? ({ background: project.logoBg } as React.CSSProperties)
                        : undefined
                    }
                  >
                    <Image
                      src={previewSrc}
                      alt={project.imageAlt}
                      width={isLogo ? 200 : 320}
                      height={isLogo ? 140 : 200}
                      className={isLogo ? "project-card-logo" : "project-card-image"}
                    />
                  </div>

                  <div className="project-card-main">
                    <div className="project-card-top">
                      <div>
                        <p className="project-card-role">{project.role}</p>
                        <h3>{project.title}</h3>
                      </div>
                      <div className="project-card-actions">
                        {project.liveUrl ? (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-action-btn"
                          >
                            Live demo
                            <IconExternal />
                          </a>
                        ) : null}
                        {project.githubUrl ? (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-action-btn ghost"
                          >
                            Code
                          </a>
                        ) : null}
                      </div>
                    </div>

                    <p className="project-card-summary">{project.summary}</p>

                    <div className="badge-row project-card-tech">
                      {project.technologies.map((tech) => (
                        <TechBadge key={tech} label={tech} />
                      ))}
                    </div>

                    <ul className="project-highlights">
                      {(expanded ? project.whatIBuilt : previewItems).map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>

                    {hiddenCount > 0 || project.technicalDetail.length > 0 ? (
                      <button
                        type="button"
                        className="project-expand-btn"
                        aria-expanded={expanded}
                        onClick={() =>
                          setExpandedId((current) =>
                            current === project.id ? null : project.id,
                          )
                        }
                      >
                        {expanded
                          ? "Show less"
                          : `Show ${hiddenCount} more highlights + technical detail`}
                      </button>
                    ) : null}

                    {expanded ? (
                      <div className="project-detail-panel">
                        <p className="project-detail-label">Technical detail</p>
                        <ul>
                          {project.technicalDetail.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
