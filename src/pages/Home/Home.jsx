import "./Home.css";

import Hero from "../../components/HomeSections/Hero/Hero";
import Stats from "../../components/HomeSections/Stats/Stats";
import Expertise from "../../components/HomeSections/Expertise/Expertise";
import SkillsShowcase from "../../components/HomeSections/SkillsShowcase/SkillsShowcase";
import FeaturedProjects from "../../components/HomeSections/FeaturedProjects/FeaturedProjects";
import ActivityTimeline from "../../components/HomeSections/ActivityTimeline/ActivityTimeline";
import CTASection from "../../components/HomeSections/CTASection/CTASection";

function Home() {
  return (
    <div className="home-page">

      <Hero />

      <Stats />

      <Expertise />

      <SkillsShowcase />

      <FeaturedProjects />

      <ActivityTimeline />

      <CTASection />

    </div>
  );
}

export default Home;