import { useId } from "react";
import RelatedOutputsView from "../../ui/RelatedOutputsView";
import type { ExperienceItem } from "../../../../model/siteModel";

type Props = { item: ExperienceItem; isOpen: boolean; onToggle: () => void };

export default function ExperienceItemView({ item, isOpen, onToggle }: Props) {
  const panelId = useId();
  const buttonId = `${panelId}-button`;
  const hasDetails = Boolean(item.bullets.length || item.courses?.length || item.technologies?.length || item.contextLink);
  return (
    <article className={`exp-item ${isOpen ? "is-open" : ""}`}>
      <div className="academic-entry-header">
        <h3>{item.title}</h3>
        {item.when && <p className="academic-meta">{item.when}</p>}
        {item.topic && <p className="academic-topic">{item.topic}</p>}
        {item.advisor && <p className="academic-meta">
          {item.advisor.includes("Principal Investigator") ? "PI" : "Advisor"}: {item.advisorUrl ? (
            <a href={item.advisorUrl} target="_blank" rel="noopener noreferrer"
              aria-label={`${item.advisor}: research profile (opens in a new tab)`}
              title="Research profile (opens in a new tab)">{item.advisor}</a>
          ) : item.advisor}
        </p>}
        {item.summary && <p>{item.summary}</p>}
        <RelatedOutputsView outputs={item.relatedOutputs} />
        {item.detailSlug && <p className="academic-detail-link"><a href={`#/detail/${item.detailSlug}`} aria-label={`Explore details: ${item.title}`}>Explore RMA history <span aria-hidden="true">→</span></a></p>}
      </div>
      {hasDetails && <>
        <button id={buttonId} type="button" className="academic-details-button"
          onClick={onToggle} aria-expanded={isOpen} aria-controls={panelId}
          aria-label={`${isOpen ? "Hide" : "Show"} details: ${item.title}`}>
          {isOpen ? "Hide details" : "Show details"}<span aria-hidden="true">{isOpen ? " −" : " +"}</span>
        </button>
        <div id={panelId} className="exp-panel" role="region" aria-labelledby={buttonId} hidden={!isOpen}>
          <div className="exp-panel-inner">
            {item.bullets.length > 0 && <ul className="exp-bullets">{item.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul>}
            {item.courses && <div className="academic-courses">{item.courses.map(course => (
              <section key={course.title} className="academic-course">
                <h4>{course.courseUrl ? <a href={course.courseUrl} target="_blank" rel="noopener noreferrer" aria-label={`${course.title}: official course catalog (opens in a new tab)`} title="Official course catalog (opens in a new tab)">{course.title}</a> : course.title}</h4>
                {course.when && <p className="academic-meta">{course.when}</p>}
                <p className="academic-meta">Instructor: {course.instructorUrl ? <a href={course.instructorUrl} target="_blank" rel="noopener noreferrer" aria-label={`${course.instructor}: official MSU page (opens in a new tab)`} title="Official MSU page (opens in a new tab)">{course.instructor}</a> : course.instructor}</p>
                <p>{course.description}</p>
                {course.media && <figure className="academic-course-media">
                  <img src={`${import.meta.env.BASE_URL}${course.media.src}`} alt={course.media.alt} width={course.media.width} height={course.media.height} loading="lazy" decoding="async" />
                  <figcaption>{course.media.caption}</figcaption>
                </figure>}
              </section>
            ))}</div>}
            {item.technologies && <p className="academic-technologies"><strong>Tools:</strong> {item.technologies.join(" · ")}</p>}
            {item.contextLink && <p className="academic-context"><a href={item.contextLink.url} target="_blank" rel="noopener noreferrer">{item.contextLink.label} (opens in a new tab)</a><br />{item.contextLink.note}</p>}
          </div>
        </div>
      </>}
    </article>
  );
}
