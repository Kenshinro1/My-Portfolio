import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import HeaderComponent from "../components/HeaderComponent";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import Gallery from "../components/Gallery";
import Certification from "../components/Certifications";
export default function Home() {
    return (_jsxs("div", { children: [_jsx(HeaderComponent, { title: "Hi, I'm Clarence Kenneth Acedillo", subtitle: "Frontend Developer/Backend Developer | React + Tailwind + TypeScript + Java + VB.Net + Html + Css + C# + PHP + Python" }), _jsx(AboutSection, {}), _jsx(ProjectsSection, {}), _jsx(Gallery, {}), _jsx(Certification, {}), _jsx(ContactSection, {})] }));
}
