import type { PublicationItem } from "../../../../model/siteModel";

export default function PublicationItemView({ item }: { item: PublicationItem }) {
  const evidenceUrl = (url: string) => url.startsWith("assets/")
    ? `${import.meta.env.BASE_URL}${url}`
    : url;
  const isExternalUrl = (url: string) => /^https?:\/\//.test(url);

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
        <p>{item.desc}</p>
        {item.presentedAt && <p className="output-presentation-date">Presented {item.presentedAt}</p>}
      </div>
      <aside className="output-evidence" aria-label={`Evidence for ${item.title}`}>
        {item.visual && <figure className="output-visual">
          <img src={`${import.meta.env.BASE_URL}${item.visual.src}`} alt={item.visual.alt}
            width={item.visual.width} height={item.visual.height} loading="lazy" decoding="async" />
          <figcaption>{item.visual.caption}</figcaption>
        </figure>}
        {item.url && <a className="output-doi" href={item.url} target="_blank" rel="noopener noreferrer"
          aria-label={`Open DOI: ${item.title} (opens in a new tab)`}>{item.cta || "Open DOI"} ↗</a>}
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
