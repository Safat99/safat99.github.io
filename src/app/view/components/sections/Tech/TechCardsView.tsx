import type { TechModel } from "../../../../model/siteModel";
import "./TechCards.css";

type Props = { tech: TechModel };

export default function TechCardsView({ tech }: Props) {
  return (
    <div className="tech-cards-wrap">
      <div className="tech-cards-grid">
        {tech.faces.map((f) => (
          <article key={f.title} className="tech-card">
            <div className="tech-card-inner">
              <header className="tech-card-head">
                <h3 className="tech-card-title">{f.title}</h3>
              </header>

              <ul className="tech-card-items" aria-label={f.title}>
                {f.items.map((it) => (
                  <li key={it} className="tech-card-chip">
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

