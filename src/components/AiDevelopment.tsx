import { aiFeatures } from "@/data/content";
import { FadeIn } from "@/components/FadeIn";
import { IconSparkles } from "@/components/Icons";

const featureIcons: Record<string, string> = {
  prototype: "⚡",
  debug: "🔍",
  quality: "✅",
  learning: "📚",
};

export function AiDevelopment() {
  return (
    <section id="ai-development" className="section ai-banner-section">
      <div className="container">
        <FadeIn>
          <div className="ai-banner">
            <div className="ai-banner-visual" aria-hidden="true">
              <div className="ai-float ai-float-1">
                <IconSparkles />
              </div>
              <div className="ai-float ai-float-2">{"</>"}</div>
              <div className="ai-float ai-float-3">AI</div>
            </div>
            <div className="ai-banner-copy">
              <h2>I use AI to build better software</h2>
              <p>
                I use Cursor and ChatGPT to accelerate prototyping, explore implementation
                options, debug faster, and improve UI flows — always reviewing, testing,
                and validating generated code before it ships.
              </p>
              <div className="ai-features-grid">
                {aiFeatures.map((feature) => (
                  <div key={feature.title} className="ai-feature-item">
                    <span className="ai-feature-icon" aria-hidden="true">
                      {featureIcons[feature.icon]}
                    </span>
                    <div>
                      <strong>{feature.title}</strong>
                      <span>{feature.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
