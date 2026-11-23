import type { PublicationItem } from "../../../../model/siteModel";

export default function PublicationItemView({ item }: { item: PublicationItem }) {
  return (
    <article id={item.id} className="research-output-card" tabIndex={-1} aria-labelledby={`${item.id}-title`}>
      <div className="research-output-meta">
        <span>Publication · {item.year}</span>
        <span className={`output-status output-status--${item.status}`}>{item.status === "accepted" ? `Accepted${item.presentedAt ? " · Presented" : ""}` : "Published"}</span>
      </div>
      <h4 id={`${item.id}-title`}>{item.title}</h4>
      <p className="output-authors">{item.authors.map((author, index) => <span key={author}>
        {index > 0 && ", "}
        {author === "Sarker Safat Mahmud" || author === "S. S. Mahmud" ? <strong>{author}</strong> : author}
      </span>)}</p>
      <p className="output-venue">{item.venue}</p>
      <p>{item.desc}</p>
      {item.url && <a className="output-doi" href={item.url} target="_blank" rel="noopener noreferrer"
        aria-label={`Open DOI: ${item.title} (opens in a new tab)`}>{item.cta || "Open DOI"} ↗</a>}
      {item.presentedAt && <p className="output-presentation-date">Presented {item.presentedAt}</p>}
      {item.evidenceLinks?.length ? <ul className="output-evidence-links" aria-label={`Evidence links for ${item.title}`}>
        {item.evidenceLinks.map(link => <li key={`${link.label}-${link.url}`}>
          <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={`${link.label}: ${item.title} (opens in a new tab)`}>{link.label} ↗</a>
        </li>)}
      </ul> : null}
    </article>
  );
}
