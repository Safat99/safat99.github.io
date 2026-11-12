import { getSiteModel } from "../controller/siteController";
import { useFadeInOnScroll } from "./hooks/useFadeInOnScroll";
import { useActiveSection } from "./hooks/useActiveSection";

import TopBarView from "./components/sections/TopBar/TopBarView";
import HeroView from "./components/sections/Hero/HeroView";
import AboutView from "./components/sections/About/AboutView";
import TechView from "./components/sections/Tech/TechView";
import ExperienceView from "./components/sections/Experience/ExperienceView";
import EducationView from "./components/sections/Experience/EducationView";
import TeachingMentoringView from "./components/sections/Experience/TeachingMentoringView";
import PublicationView from "./components/sections/Publications/PublicationView";
import ProjectsView from "./components/sections/Projects/ProjectsView";
import CreatorView from "./components/sections/Creator/CreatorView";
import TravelView from "./components/sections/Travel/TravelView";
// import ContactView from "./components/sections/Contact/ContactView";
import RecommendationsView from "./components/sections/Recommendations/RecommendationsView";
import FooterView from "./components/sections/Footer/FooterView";

import ThemeToggle from "./components/ui/ThemeToggle/ThemeToggle";

import BackToTopView from "./components/ui/BackToTop/BackToTopView";

export default function HomeView() {
  useFadeInOnScroll(); // activate fade logic
  useActiveSection(); //  activate fade logic

  const model = getSiteModel();

  return (
    <>
      <canvas id="three-canvas" aria-hidden="true"></canvas>

      <TopBarView
        brandName={model.brand.name}
        brandHref={model.brand.href}
        nav={model.nav}
      />

      <main id="top" className="container">
        <HeroView hero={model.hero} />
        <AboutView about={model.about} />
        <ExperienceView id="research" experience={model.researchExperience} />
        <PublicationView publication={model.publications} presentations={model.researchPresentations} />
        <EducationView education={model.education} />
        <TeachingMentoringView teaching={model.teachingAndMentoring} />
        <ExperienceView id="experience" experience={model.experience} />
        <TechView tech={model.tech} />
        <ExperienceView id="leadership" experience={model.leadershipExperience} />

        <ProjectsView projects={model.projects} />


        <CreatorView creator={model.creator} />

        <TravelView travel={model.travel} />

        <RecommendationsView recommendations={model.recommendations} />
        {/* <ContactView contact={model.contact} /> */}
        <FooterView contact={model.contact} brand={model.brand} />
      </main>
      
      
       <BackToTopView />
       <ThemeToggle />
    </>
  );
}
