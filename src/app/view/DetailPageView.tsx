import type { DetailPage } from "../model/siteModel";
import ThemeToggle from "./components/ui/ThemeToggle/ThemeToggle";
import "./detail-page.css";

const homeUrl = (section: string) => `${import.meta.env.BASE_URL}#${section}`;

export default function DetailPageView({ page }: { page: DetailPage }) {
  const returnSection = page.slug === "rma-undergraduate-robotics" ? "leadership" : "projects";
  const assetUrl = (path: string) => `${import.meta.env.BASE_URL}${path}`;

  return (
    <>
      <header className="detail-topbar">
        <a href={homeUrl(returnSection)} className="detail-back">← Back to {returnSection === "projects" ? "Selected Projects" : "Leadership"}</a>
        <a href={homeUrl("top")} className="detail-home">Sarker Safat Mahmud</a>
      </header>
      <main className="detail-page container">
        <article>
          <header className="detail-intro">
            <p className="detail-eyebrow">{page.eyebrow}</p>
            <h1>{page.title}</h1>
            <p className="detail-summary">{page.summary}</p>
            {page.context && <p>{page.context}</p>}
            {page.contribution && <p><strong>Contribution:</strong> {page.contribution}</p>}
          </header>

          <div className="detail-content">
            {page.interactiveDemo && <section className="detail-panel detail-demo-panel">
              <h2>{page.interactiveDemo.title}</h2>
              <p>{page.interactiveDemo.description}</p>
              <div className="detail-embed-frame detail-webapp-frame">
                <iframe src={page.interactiveDemo.url} title={page.interactiveDemo.title} loading="lazy" allow="fullscreen" referrerPolicy="strict-origin-when-cross-origin" />
              </div>
              <p><a href={page.interactiveDemo.url} target="_blank" rel="noopener noreferrer">Open the web app in a separate tab <span aria-hidden="true">↗</span></a></p>
            </section>}

            {page.videos?.map(video => <section className="detail-panel detail-video-panel" key={video.youtubeId}>
              <h2>Video demonstration</h2>
              <div className="detail-embed-frame detail-video-frame">
                <iframe src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?controls=1&rel=0`} title={video.title} loading="lazy" allow="encrypted-media; picture-in-picture" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" />
              </div>
              <p className="detail-media-caption">{video.title} · YouTube player controls are available in the frame. <a href={`https://www.youtube.com/watch?v=${video.youtubeId}`} target="_blank" rel="noopener noreferrer">Open on YouTube <span aria-hidden="true">↗</span></a></p>
            </section>)}

            {page.media && <section className="detail-panel detail-media-panel">
              <h2>Figures &amp; project evidence</h2>
              <div className="detail-media-grid">{page.media.map(media => <figure className="detail-figure" key={media.src}>
                <a href={assetUrl(media.src)} target="_blank" rel="noopener noreferrer" aria-label={`Open full-size image: ${media.caption}`}>
                  <img src={assetUrl(media.src)} alt={media.alt} width={media.width} height={media.height} loading="lazy" />
                </a>
                <figcaption>{media.caption}</figcaption>
              </figure>)}</div>
            </section>}

            {page.technologies && <section className="detail-panel">
              <h2>Methods &amp; tools</h2>
              <ul className="detail-chip-list">{page.technologies.map(item => <li key={item}>{item}</li>)}</ul>
            </section>}

            {page.sections.map(section => <section className="detail-panel" key={section.title}>
              <h2>{section.title}</h2>
              {section.paragraphs?.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
              {section.bullets && <ul>{section.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul>}
            </section>)}

            {page.relatedOutputs && <section className="detail-panel">
              <h2>Related research output</h2>
              <ul>{page.relatedOutputs.map(output => <li key={output.label}>
                {output.url ? <a href={output.url} target="_blank" rel="noopener noreferrer">{output.label} <span aria-hidden="true">↗</span></a> : output.targetId ? <a href={homeUrl(output.targetId)}>{output.label}</a> : output.label}
              </li>)}</ul>
            </section>}

            {page.links && <nav className="detail-panel detail-links" aria-label="Project evidence">
              <h2>Project evidence</h2>
              <ul>{page.links.filter(link => !page.videos?.some(video => link.url.includes(video.youtubeId)) && link.url !== page.interactiveDemo?.url).map(link => <li key={link.url}><a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={`${link.label} (opens in a new tab)`}>{link.label} <span aria-hidden="true">↗</span></a></li>)}</ul>
            </nav>}
          </div>
          <p className="detail-return"><a href={homeUrl(returnSection)}>Return to {returnSection === "projects" ? "Selected Projects" : "Leadership"}</a></p>
        </article>
      </main>
      <ThemeToggle />
    </>
  );
}
