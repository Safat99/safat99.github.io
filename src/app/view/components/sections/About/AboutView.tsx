import type { AboutModel } from "../../../../model/siteModel";
import SectionTitleView from "../../ui/SectionTitle/SectionTitleView";
import "../Hero/academic-identity.css";

type Props = { about: AboutModel };

export default function AboutView({ about }: Props) {
  return (
    <section id="about" className="section academic-about fade-in">
      <SectionTitleView title={about.title} />
      <div className="academic-background">
        {about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>
      <div className="academic-applications">
        <h3>Applied Research Interests</h3>
        <ul className="pill-row">
          {about.focusAreas.map((area) => <li className="pill" key={area}>{area}</li>)}
        </ul>
      </div>
    </section>
  );
}
