import type { ScholarshipsAndAwardsModel } from "../../../../model/siteModel";
import SectionTitleView from "../../ui/SectionTitle/SectionTitleView";
import "../Experience/academic-experience.css";
import "./scholarships-awards.css";

export default function ScholarshipsAwardsView({ awards }: { awards: ScholarshipsAndAwardsModel }) {
  const renderAward = (award: ScholarshipsAndAwardsModel["awards"][number]) => (
    <article className="recognition-card" key={award.title}>
      <div className="recognition-meta">
        {award.year && <span>{award.year}</span>}
        {award.recognition === "chapter/team" && <span>Chapter/team recognition</span>}
      </div>
      <h4>{award.title}</h4>
      {award.organization && <p className="award-organization">{award.organization}</p>}
      <p>{award.description}</p>
    </article>
  );

  return (
    <section id="awards" className="section fade-in academic-experience academic-awards">
      <SectionTitleView title={awards.title} subtitle={awards.intro} />

      <div className="scholarship-grid">
        {awards.scholarships.map((scholarship) => (
          <article className="scholarship-card" key={scholarship.year}>
            <p className="award-year">{scholarship.year}</p>
            <h3>{scholarship.title}</h3>
            <p className="award-organization">{scholarship.organization}</p>
            <p><strong>Research focus:</strong> {scholarship.researchFocus}</p>
            {scholarship.evidenceLink && (
              <div className="award-evidence">
                <a href={scholarship.evidenceLink.url} target="_blank" rel="noopener noreferrer"
                  aria-label={`${scholarship.evidenceLink.label} (opens in a new tab)`}>
                  {scholarship.evidenceLink.label} <span aria-hidden="true">↗</span>
                </a>
                <p>{scholarship.evidenceLink.scope}</p>
              </div>
            )}
          </article>
        ))}
      </div>

      <h3 className="recognition-heading">Other Academic & Engineering Recognition</h3>
      <div className="recognition-grid">
        {awards.awards.filter(award => award.year === 2017).map(renderAward)}

        <article className="recognition-card competition-card">
          <h4>Robotics Competition Placements</h4>
          <p>Practical engineering and robotics experience through competition participation.</p>
          <ul>
            {awards.competitions.map((competition) => (
              <li key={`${competition.year}-${competition.title}`}>
                <strong>{competition.year} | {competition.title}</strong>
                <span>{competition.organization}</span>
              </li>
            ))}
          </ul>
        </article>

        {awards.awards.filter(award => award.year !== 2017).map(renderAward)}
      </div>
    </section>
  );
}
