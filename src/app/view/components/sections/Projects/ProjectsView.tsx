import RelatedOutputsView from "../../ui/RelatedOutputsView";
import type { ProjectsModel } from "../../../../model/siteModel";
import SectionTitleView from "../../ui/SectionTitle/SectionTitleView";
import CardView from "../../ui/Card/CardView";
import "../Experience/academic-experience.css";
import "./projects.css";

type Props = { projects: ProjectsModel };

export default function ProjectsView({ projects }: Props) {
  const selected = projects.items.filter(project => project.selection === "primary");
  return (
    <section id="projects" className="section fade-in academic-experience academic-projects">
      <SectionTitleView title={projects.title} subtitle={projects.intro} />
      <div className="selected-project-grid">
        {selected.map(project => (
          <CardView key={project.title} title={project.title} subtitle={project.subtitle} className="selected-project-card">
            <ul className="project-tags" aria-label="Project categories">
              {project.tags.map(tag => <li key={tag}>{tag}</li>)}
            </ul>
            {project.status && <p className="project-status">{project.status}</p>}
            <p>{project.desc}</p>
            {project.contribution && <p className="project-contribution"><strong>Contribution:</strong> {project.contribution}</p>}
            {project.technologies && <p className="project-technologies"><strong>Methods & tools:</strong> {project.technologies.join(" · ")}</p>}
            {project.evidenceLinks && <div className="project-evidence" aria-label={`Evidence for ${project.title}`}>
              {project.evidenceLinks.map(link => <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer"
                aria-label={`${link.label}: ${project.title} (opens in a new tab)`}>{link.label} <span aria-hidden="true">↗</span></a>)}
            </div>}
            <RelatedOutputsView outputs={project.relatedOutputs} />
            {project.detailSlug && <p className="project-detail-link"><a href={`#/detail/${project.detailSlug}`} aria-label={`Explore project details: ${project.title}`}>Explore project <span aria-hidden="true">→</span></a></p>}
          </CardView>
        ))}
      </div>
    </section>
  );
}
