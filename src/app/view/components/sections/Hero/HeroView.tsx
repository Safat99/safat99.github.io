import { useEffect, useRef, useState } from "react";
import type { HeroModel } from "../../../../model/siteModel";
import Icon from "../../ui/Icon/Icon";
import "./academic-identity.css";

const heroPhoto = `${import.meta.env.BASE_URL}assets/travel/pro_pic.jpg`;
type Props = { hero: HeroModel };

export default function HeroView({ hero }: Props) {
  const [copyStatus, setCopyStatus] = useState("");
  const copyTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  useEffect(() => () => clearTimeout(copyTimer.current), []);

  const copyEmail = async () => {
    clearTimeout(copyTimer.current);
    try {
      await navigator.clipboard.writeText(hero.cta.email);
      setCopyStatus("Email copied.");
    } catch {
      setCopyStatus("Could not copy. Select the email address or use the email link.");
    }
    copyTimer.current = setTimeout(() => setCopyStatus(""), 4000);
  };

  return (
    <section className="hero academic-hero fade-in" aria-labelledby="academic-headline">
      <div className="hero-grid">
        <div className="hero-content">
          <p className="hero-kicker">{hero.kicker}</p>
          <h1 id="academic-headline">{hero.headline}</h1>
          <p className="sub">{hero.subline}</p>

          <div className="hero-cta">
            <a className="hero-resume-btn" href={`${import.meta.env.BASE_URL}cv/Sarker_Safat_Mahmud_Academic_CV.pdf`}
              target="_blank" rel="noopener noreferrer" aria-label="Academic CV (opens in a new tab)">
              Academic CV <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="hero-email-group">
            <a className="hero-email-btn" href={`mailto:${hero.cta.email}`}>
              <span className="hero-email-text">{hero.cta.email}</span>
            </a>
            <button className="hero-copy-btn" type="button" onClick={copyEmail} aria-label="Copy email address">Copy</button>
          </div>
          <p className="copy-status" role="status">{copyStatus}</p>

          <div className="academic-directions">
            <h2>Research Directions</h2>
            <ul className="pill-row">
              {hero.pills.map((text) => <li key={text} className="pill">{text}</li>)}
            </ul>
          </div>
          <p className="note">{hero.note}</p>
        </div>

        <div className="hero-media">
          <figure className="hero-portrait">
            <img className="hero-photo" src={heroPhoto} alt="Sarker Safat Mahmud" width={2048} height={1536} fetchPriority="high" decoding="async" />
            <figcaption className="hero-caption">{hero.location}</figcaption>
          </figure>
          <div className="hero-links" role="group" aria-label="Academic and project profiles">
            {hero.cta.links.map((link) => (
              <a key={link.url} className="academic-profile-link" href={link.url}
                target="_blank" rel="noopener noreferrer"
                aria-label={`${link.label} (opens in a new tab)`} title={link.label}>
                <span aria-hidden="true"><Icon name={link.icon} /></span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
