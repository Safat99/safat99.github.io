import { useState } from "react";
import type { ExperienceModel } from "../../../../model/siteModel";
import SectionTitleView from "../../ui/SectionTitle/SectionTitleView";
import ExperienceItemView from "./ExperienceItemView";
import "./experience.css";
import "./academic-experience.css";

type Props = { id: string; experience: ExperienceModel };

/** Each rendered section owns its own expansion state. */
export default function ExperienceView({ id, experience }: Props) {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <section id={id} className="section fade-in academic-experience">
      <SectionTitleView title={experience.title} />
      <div className="exp-list">
        {experience.items.map((item, index) => (
          <ExperienceItemView
            key={`${item.title}-${item.when}`}
            item={item}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(current => current === index ? -1 : index)}
          />
        ))}
      </div>
    </section>
  );
}
