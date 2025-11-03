// @ts-ignore: no declaration file for HeaderComponent
import HeaderComponent from "../components/HeaderComponent";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import Gallery from "../components/Gallery";
import Certification from "../components/Certifications";
import type { JSX } from "react";
export default function Home(): JSX.Element {
  return (
    <div>
      <HeaderComponent
        title="Hi, I'm Clarence Kenneth Acedillo"
        subtitle="Frontend Developer/Backend Developer | React + Tailwind + TypeScript + Java + VB.Net + Html + Css + C# + PHP + Python"
      />
      <AboutSection />
      <ProjectsSection />
      <Gallery />
      <Certification />
      <ContactSection />
    </div>
  );
}
