import type { PublicationsModel, ResearchPresentationsModel } from "../../../../model/siteModel";
import SectionTitleView from "../../ui/SectionTitle/SectionTitleView";
import PublicationItemView from "./PublicationItemView";
import "./publication.css";

type Props = { publication: PublicationsModel; presentations: ResearchPresentationsModel };

export default function PublicationView({ publication, presentations }: Props) {
  return (
    <section id="publications" className="section fade-in academic-experience research-outputs">
      <SectionTitleView title={publication.title} subtitle={publication.intro} />
      <h3>Publications</h3>
      <div className="research-output-list">
        {publication.items.map(item => <PublicationItemView key={item.id} item={item} />)}
      </div>
      <div className="research-presentations">
        <h3>{presentations.title}</h3>
        {/* <p>Conference papers and presentations are listed separately from the main publication collection.</p> */}
        {presentations.items.map(item => <article id={item.id} className="research-output-card" key={item.id} tabIndex={-1} aria-labelledby={`${item.id}-title`}>
          <div className="research-output-meta"><span>{item.type === "conferencePaper" ? "Conference Paper" : "Research Presentation"} · {item.month && `${item.month} `}{item.year}</span><span className="output-status">Presented</span></div>
          <h4 id={`${item.id}-title`}>{item.title}</h4>
          <p className="output-authors">{item.authorVerificationPending ? "Authors: see the linked full-text record." : item.authors.join(", ")}</p>
          <p className="output-venue">{item.venue} · {item.location}</p>
          {item.fullTextUrl && <a className="output-doi" href={item.fullTextUrl} target="_blank" rel="noopener noreferrer"
            aria-label={`Full Text · ResearchGate: ${item.title} (opens in a new tab)`}>Full Text · ResearchGate ↗</a>}
        </article>)}
      </div>
    </section>
  );
}
