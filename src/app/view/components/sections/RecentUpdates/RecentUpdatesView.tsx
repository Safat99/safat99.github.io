import type { RecentUpdate } from "../../../../../content/recentUpdates";
import SectionTitleView from "../../ui/SectionTitle/SectionTitleView";
import "./recent-updates.css";

function formatDate(date: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return date;
  return new Intl.DateTimeFormat("en", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" }).format(new Date(`${date}T00:00:00Z`));
}

function UpdateLink({ label, url }: { label: string; url: string }) {
  return <a href={url} target="_blank" rel="noopener noreferrer" aria-label={`${label} (opens in a new tab)`}>{label}<span aria-hidden="true"> ↗</span></a>;
}

export default function RecentUpdatesView({ updates }: { updates: RecentUpdate[] }) {
  return (
    <section id="updates" className="section recent-updates-section" aria-labelledby="recent-updates-heading">
      <SectionTitleView id="recent-updates-heading" title="Recent Updates" subtitle="A short, manually curated record of recent research and academic activity." />
      <ol className="recent-updates-list">
        {updates.map((update) => {
          const dateTime = /^\d{4}-\d{2}-\d{2}$/.test(update.date) ? update.date : undefined;
          const links = [
            ...(update.sourceLabel && update.sourceUrl ? [{ label: update.sourceLabel, url: update.sourceUrl }] : []),
            ...(update.secondaryLinks ?? [])
          ];

          return (
            <li className={`recent-update${update.featured ? " recent-update--featured" : ""}`} key={`${update.date}-${update.title}`}>
              <article>
                <div className="recent-update-meta">
                  <time dateTime={dateTime}>{update.dateDisplayLabel ?? formatDate(update.date)}</time>
                  <span>{update.category}</span>
                </div>
                <h3>{update.title}</h3>
                <p>{update.summary}</p>
                {links.length > 0 && <ul className="recent-update-links" aria-label={`${update.title} links`}>
                  {links.map((link) => <li key={`${link.label}-${link.url}`}><UpdateLink {...link} /></li>)}
                </ul>}
              </article>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
