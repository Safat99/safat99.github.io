import type { ExperienceModel } from "../../../../model/siteModel";
import ExperienceView from "./ExperienceView";

export default function TeachingMentoringView({ teaching }: { teaching: ExperienceModel }) {
  return <ExperienceView id="teaching" experience={teaching} />;
}
