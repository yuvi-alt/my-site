import { contactItems, profile } from "@/data/content";
import { FadeIn } from "@/components/FadeIn";
import {
  IconChat,
  IconGitHub,
  IconGlobe,
  IconLinkedIn,
  IconMail,
  IconMapPin,
} from "@/components/Icons";

const contactIcons = {
  email: IconMail,
  linkedin: IconLinkedIn,
  github: IconGitHub,
  location: IconMapPin,
};

export function Contact() {
  const mailto = `mailto:${profile.email}?subject=${encodeURIComponent("Opportunity — Yuvraj Bhavsar")}`;

  return (
    <section id="contact" className="section section-soft">
      <div className="container">
        <FadeIn>
          <div className="contact-header">
            <div className="section-title-with-icon">
              <span className="section-icon section-icon-green">
                <IconChat />
              </span>
              <div>
                <h2>Let&apos;s connect</h2>
                <p className="contact-subtitle">
                  Interested in software engineering opportunities? I&apos;d love to hear from you.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={80}>
          <div className="contact-cards">
            {contactItems.map((item) => {
              const Icon = contactIcons[item.icon];
              const content = (
                <>
                  <span className="contact-card-icon">
                    <Icon />
                  </span>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </>
              );

              return item.href ? (
                <a
                  key={item.label}
                  href={item.label === "Email" ? mailto : item.href}
                  className="contact-card"
                  target={item.icon === "email" ? undefined : "_blank"}
                  rel={item.icon === "email" ? undefined : "noopener noreferrer"}
                >
                  {content}
                </a>
              ) : (
                <div key={item.label} className="contact-card">
                  {content}
                  {item.icon === "location" ? (
                    <span className="contact-card-note">
                      <IconGlobe className="inline-icon" /> {profile.locationNote}
                    </span>
                  ) : null}
                </div>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
