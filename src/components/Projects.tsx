"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { projectCategories, projects } from "@/data/content";
import type { ProjectCategory } from "@/lib/types";
import { FadeIn } from "@/components/FadeIn";
import { IconExternal, IconFolder } from "@/components/Icons";
import { TechBadge } from "@/components/TechBadge";
import { withBasePath } from "@/lib/paths";

const filters: Array<ProjectCategory | "All"> = ["All", ...projectCategories];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | "All">("All");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.categories.includes(activeFilter));
  }, [activeFilter]);

  return (
    <section id="projects" className="section section-soft">
      <div className="container">
        <FadeIn>
          <div className="section-title-row">
            <div className="section-title-with-icon">
              <span className="section-icon section-icon-purple">
                <IconFolder />
              </span>
              <h2>Projects</h2>
            </div>
            <a href="#projects" className="section-link">
              View All Projects
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={50}>
          <div className="filter-bar" role="tablist" aria-label="Filter projects">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                role="tab"
                aria-selected={activeFilter === filter}
                className={`filter-btn ${activeFilter === filter ? "active" : ""}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </FadeIn>

        <div className="projects-showcase">
          {filteredProjects.map((project, index) => {
            const expanded = expandedId === project.id;
            const previewSrc = withBasePath(project.logo ?? project.image);
            const isLogo = Boolean(project.logo);

            return (
              <FadeIn key={project.id} delay={index * 70}>
                <article className="project-showcase-card">
                  <div
                    className="project-preview"
                    style={
                      project.logoBg
                        ? ({ background: project.logoBg } as React.CSSProperties)
                        : undefined
                    }
                  >
                    {project.featured ? (
                      <span className="featured-badge">Featured</span>
                    ) : null}
                    <Image
                      src={previewSrc}
                      alt={project.imageAlt}
                      width={isLogo ? 240 : 640}
                      height={isLogo ? 180 : 360}
                      className={isLogo ? "project-preview-logo" : "project-preview-image"}
                    />
                  </div>

                  <div className="project-body">
                    <div className="project-title-row">
                      <h3>{project.title}</h3>
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-title-link"
                          aria-label={`Open ${project.title}`}
                        >
                          <IconExternal />
                        </a>
                      ) : null}
                    </div>

                    <p className="project-description">{project.description}</p>

                    <div className="badge-row">
                      {project.technologies.map((tech) => (
                        <TechBadge key={tech} label={tech} />
                      ))}
                    </div>

                    <div className="project-footer">
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-footer-link"
                        >
                          Live Demo
                        </a>
                      ) : null}
                      {project.githubUrl ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-footer-link muted"
                        >
                          View Code
                        </a>
                      ) : null}
                      <button
                        type="button"
                        className="project-footer-link expand-link"
                        aria-expanded={expanded}
                        onClick={() =>
                          setExpandedId((current) =>
                            current === project.id ? null : project.id,
                          )
                        }
                      >
                        {expanded ? "Less detail" : "More detail"}
                      </button>
                    </div>

                    {expanded ? (
                      <div className="architecture-panel">
                        <ul>
                          {project.architecture.map((item) => (
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
