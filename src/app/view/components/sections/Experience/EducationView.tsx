import type { EducationModel } from "../../../../model/siteModel";
import SectionTitleView from "../../ui/SectionTitle/SectionTitleView";
import "./academic-experience.css";

export default function EducationView({ education }: { education: EducationModel }) {
  return (
    <section id="education" className="section fade-in academic-experience">
      <SectionTitleView title={education.title} />
      <div className="academic-education-grid">
        {education.items.map(item => <article className="academic-education-card" key={item.institution}>
          <h3>{item.degree}</h3>
          <p>{item.institution}</p>
          <p className="academic-meta">{item.when}</p>
          <p className="academic-meta">{item.location}</p>
          <p className="academic-meta">GPA: {item.gpa}</p>
        </article>)}
      </div>
    </section>
  );
}
