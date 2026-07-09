"use client";

import { useEffect, useState } from "react";
import { navLinks, profile } from "@/data/content";
import { IconDownload } from "@/components/Icons";
import { ThemeToggle } from "@/components/ThemeToggle";
import { withBasePath } from "@/lib/paths";

export function Header() {
  const [open, setOpen] = useState(false);
  const resumeHref = withBasePath(profile.resumePath);

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth >= 960) setOpen(false);
    };
    window.addEventListener("resize", closeOnResize);
    return () => window.removeEventListener("resize", closeOnResize);
  }, []);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#home" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">YB</span>
          <span className="brand-name">{profile.name}</span>
        </a>

        <nav className={`site-nav ${open ? "open" : ""}`} aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href={resumeHref} className="btn btn-resume" download onClick={() => setOpen(false)}>
            <IconDownload />
            Resume
          </a>
          <ThemeToggle />
        </nav>

        <button
          type="button"
          className="menu-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
