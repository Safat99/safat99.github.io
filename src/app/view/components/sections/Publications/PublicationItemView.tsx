import type { PublicationItem } from "../../../../model/siteModel";
import ExpandableFigure from "../../ui/ExpandableFigure/ExpandableFigure";

export default function PublicationItemView({ item }: { item: PublicationItem }) {
  const evidenceUrl = (url: string) => url.startsWith("assets/")
    ? `${import.meta.env.BASE_URL}${url}`
    : url;
  const isExternalUrl = (url: string) => /^https?:\/\//.test(url);
  const isInternalUrl = (url: string) => url.startsWith("#");

  return (
    <article id={item.id} className={`research-output-card research-output-card--${item.featured ? "featured" : "additional"}`} tabIndex={-1} aria-labelledby={`${item.id}-title`}>
      <div className="output-primary">
        <div className="research-output-meta">
          <span>Publication · {item.year}</span>
          <span className={`output-status output-status--${item.status}`}>{item.status === "accepted" ? `Accepted${item.presentedAt ? " · Presented" : ""}` : "Published"}</span>
        </div>
        <h5 id={`${item.id}-title`}>{item.title}</h5>
        <p className="output-authors">{item.authors.map((author, index) => <span key={author}>
          {index > 0 && ", "}
          {author === "Sarker Safat Mahmud" || author === "S. S. Mahmud" ? <strong>{author}</strong> : author}
        </span>)}</p>
        <p className="output-venue">{item.venue}</p>
        {item.problem && <dl className="output-research-snapshot">
          <div><dt>Problem</dt><dd>{item.problem}</dd></div>
          {item.approach && <div><dt>Approach</dt><dd>{item.approach}</dd></div>}
          {item.studyContribution && <div><dt>Scientific finding</dt><dd>{item.studyContribution}</dd></div>}
          {item.personalRole && <div><dt>My role</dt><dd>{item.personalRole}</dd></div>}
        </dl>}
        {item.presentedAt && <p className="output-presentation-date">Presented {item.presentedAt}</p>}
      </div>
      <aside className="output-evidence" aria-label={`Evidence for ${item.title}`}>
        {item.quantitativeHighlights?.length ? <ul className="output-metrics" aria-label="Key research evidence">
          {item.quantitativeHighlights.map(metric => <li key={metric}>{metric}</li>)}
        </ul> : null}
        {item.visual && <ExpandableFigure
          className="output-visual"
          src={`${import.meta.env.BASE_URL}${item.visual.src}`}
          alt={item.visual.alt}
          caption={item.visual.caption}
          width={item.visual.width}
          height={item.visual.height}
        />}
        {item.url && <a className="output-doi" href={item.url} target="_blank" rel="noopener noreferrer"
          aria-label={`Open DOI: ${item.title} (opens in a new tab)`}>{item.cta || "Open DOI"} ↗</a>}
        {item.relatedLink && (isInternalUrl(item.relatedLink.url) ? (
          <a className="output-related-link" href={item.relatedLink.url} aria-label={`${item.relatedLink.label}: ${item.title}`}>{item.relatedLink.label} →</a>
        ) : (
          <a className="output-related-link" href={item.relatedLink.url} target="_blank" rel="noopener noreferrer"
            aria-label={`${item.relatedLink.label}: ${item.title} (opens in a new tab)`}>{item.relatedLink.label} ↗</a>
        ))}
        {item.evidenceLinks?.length ? <ul className="output-evidence-links">
          {item.evidenceLinks.map(link => <li key={`${link.label}-${link.url}`}>
            {isExternalUrl(link.url) ? (
              <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={`${link.label}: ${item.title} (opens in a new tab)`}>{link.label} ↗</a>
            ) : (
              <a href={evidenceUrl(link.url)} target="_blank" rel="noopener noreferrer" aria-label={`${link.label}: ${item.title} (opens in a new tab)`}>{link.label} ↗</a>
            )}
          </li>)}
        </ul> : null}
      </aside>
    </article>
  );
}
