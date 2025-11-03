import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import AnimatedButton from "../components/AnimatedButton";
import RevampPic from "../assets/images/RevampPic.png";
import GameDev from "../assets/images/GameDev.png";
import ResetPasHelply from "../assets/images/ResetPasswordHelply.jpg";
import AstraLogin from "../assets/images/AstraLogIn.jpg";
import MuseoSystem from "../assets/images/MuseoSystem.webp";
import MyPortFolio from "../assets/images/LandingPage.png";
const projects = [
    {
        name: "Project One",
        description: "Webpage Revamp: Check out my redesigned version of the webpage here.The original webpage, for reference, is available at marcimetzger.com.",
        link: "https://real-estate-form-beryl.vercel.app/",
        image: RevampPic,
        type: "web",
    },
    {
        name: "Project Two",
        description: "3D game in Unity, Download the ZIP, extract the files, and jump into Survival: Gods and Goddesses! Your hack-and-slash adventure awaits.",
        link: "https://drive.google.com/drive/folders/1TXnbEBSlP6yuQ2KNXztmAwGDR4C3WN7L?usp=drive_link",
        image: GameDev,
        type: "download",
    },
    {
        name: "Project Three",
        description: "Helply Web – Monad Solutions: As the Frontend Developer, I translated UI/UX designs into responsive and interactive web pages using React.js and Tailwind CSS.",
        image: ResetPasHelply,
        type: "other",
    },
    {
        name: "Other Project 1",
        description: "Astra Industries Ltd. Corp: Developing the company profile website and an integrated payroll system (work in progress).",
        image: AstraLogin,
        type: "other",
    },
    {
        name: "Other Project 2",
        description: "Museo De San Pedro System: Digitized all paperwork and payment processes into a streamlined system.",
        image: MuseoSystem,
        type: "other",
    },
    {
        name: "Other Project 3",
        description: "Portfolio Website: Showcases my projects, skills, and experience as a frontend developer, built with React.js, Tailwind CSS, and other languages, frameworks, and systems I work with. ",
        image: MyPortFolio,
        type: "other",
    },
];
export default function ProjectsSection() {
    return (_jsxs("section", { id: "projects", className: "min-h-screen bg-gray-900 text-white p-10", children: [_jsx("h2", { className: "text-4xl font-bold text-center mb-12", children: "Projects" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: projects.map((project, index) => (_jsxs(motion.div, { initial: { opacity: 0, y: 50 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5, delay: index * 0.2 }, className: "bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer hover:scale-105 transform transition", children: [_jsx("img", { src: project.image, alt: project.name, className: "w-full h-48 object-cover" }), _jsxs("div", { className: "p-6", children: [_jsx("h3", { className: "text-2xl font-bold mb-2", children: project.name }), _jsx("p", { className: "text-gray-300 mb-4", children: project.description }), project.link && (_jsx(AnimatedButton, { href: project.link, target: project.type === "web" ? "_blank" : "_self", download: project.type === "download" ? true : undefined, children: project.type === "download" ? "Download Game" : "View Project" }))] })] }, index))) })] }));
}
