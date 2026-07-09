"use client";

import Image from "next/image";
import { useState } from "react";
import { profile, stats, techStack } from "@/data/content";
import { FadeIn } from "@/components/FadeIn";
import { IconGlobe, IconMapPin } from "@/components/Icons";
import { withBasePath } from "@/lib/paths";

const statIcons: Record<string, string> = {
  experience: "💼",
  projects: "🚀",
  tech: "⚡",
  passion: "❤️",
};

export function Hero() {
  const resumeHref = withBasePath(profile.resumePath);
  const photoSrc = withBasePath(profile.photoPath);
  const [photoError, setPhotoError] = useState(false);

  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <FadeIn className="hero-copy">
          <div className="availability-badge">
            <span className="pulse-dot" aria-hidden="true" />
            Available for opportunities
          </div>

          <h1>
            Hi, I&apos;m{" "}
            <span className="gradient-text">{profile.name}</span>
          </h1>
          <p className="hero-title">{profile.title}</p>
          <p className="hero-intro">{profile.intro}</p>

          <div className="hero-actions">
            <a href="#projects" className="btn">
              View Projects
            </a>
            <a href={resumeHref} className="btn btn-ghost" download>
              Download Resume
            </a>
            <a href="#contact" className="btn btn-ghost btn-contact">
              Contact Me
            </a>
          </div>
        </FadeIn>

        <FadeIn className="hero-visual" delay={100}>
          <div className="hero-photo-wrap">
            <div className="hero-photo-bg" aria-hidden="true" />
            {photoError ? (
              <div className="hero-photo-fallback" aria-label={profile.name}>
                <span>YB</span>
              </div>
            ) : (
              <Image
                src={photoSrc}
                alt={profile.name}
                width={420}
                height={520}
                className="hero-photo"
                priority
                onError={() => setPhotoError(true)}
              />
            )}
            <div className="hero-location-card">
              <div className="location-row">
                <IconMapPin className="location-icon" />
                <div>
                  <strong>{profile.location}</strong>
                  <span>Based in India</span>
                </div>
              </div>
              <div className="location-row">
                <IconGlobe className="location-icon" />
                <div>
                  <strong>Remote friendly</strong>
                  <span>{profile.locationNote}</span>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      <div className="container hero-bottom">
        <FadeIn delay={150}>
          <div className="stats-grid">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <span className="stat-icon" aria-hidden="true">
                  {statIcons[stat.icon]}
                </span>
                <div>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="tech-stack-row">
            <span className="tech-stack-label">Tech I work with:</span>
            <div className="tech-stack-pills">
              {techStack.map((tech) => (
                <span
                  key={tech.name}
                  className="tech-pill"
                  style={{ "--pill-color": tech.color } as React.CSSProperties}
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
